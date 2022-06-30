import { Button, Grid, Stack } from "@mui/material";
import { useContext, useState } from "react";
import { AddCountryStateProps } from "../../shared/countryData.interface";
import SearchVal from "../context/search-context";
import CountryCard from "./CountryCard";

const AddCountryState: React.FC<AddCountryStateProps> = (
  props: AddCountryStateProps
) => {
  const [displayBtn, setDisplayBtn] = useState(false);

  const buttonHandler = () => {
    setDisplayBtn((prevState) => {
      return !prevState;
    });
  };

  const searchContext = useContext(SearchVal);

  const filteredRegion = props.regionsObj
    .filter(
      (x) =>
        searchContext.searchString === "" ||
        x.name === searchContext.searchString
    )
    .map((x) => (
      <CountryCard
        name={x.name}
        region={x.region}
        capital={x.capital}
        currencies={x.currencies}
        population={x.population}
        languages={x.languages}
        flag={x.flag}
        key={x.flag}
      />
    ));

  return (
    <Grid item xs={2}>
      <Button onClick={buttonHandler} variant="outlined" size="large" fullWidth>
        {props.query}
      </Button>
      <div>{displayBtn && <Stack spacing={2}>{filteredRegion}</Stack>}</div>
    </Grid>
  );
};

export default AddCountryState;
