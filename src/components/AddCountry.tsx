import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { TransformedData } from "../../shared/countryData.interface";
import AddCountryState from "./AddCountryState";
import Saved from "./Saved";

const AddCountry: React.FC<{ content: TransformedData[] }> = (props) => {
  const regions: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const content = regions.map((x) => (
    <AddCountryState key={x} query={x} regionsObj={props.content.filter((y) => {return y.region === x})} />
  ));

  return (
    <Container maxWidth="xl">
      <Grid container columnSpacing={1}>
        {content}
        <Saved />
      </Grid>
    </Container>
  );
};

export default AddCountry;
