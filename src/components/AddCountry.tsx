import { Grid, Button, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useState } from "react";
import { TransformedData } from "../../shared/countryData.interface";
import SearchVal from "../context/search-context";
import CountryCard from "./CountryCard";
import Saved from "./Saved";

const AddCountry: React.FC<{ content: TransformedData[] }> = (props) => {
  const [displayBtn1, setDisplayBtn1] = useState(false);
  const [displayBtn2, setDisplayBtn2] = useState(false);
  const [displayBtn3, setDisplayBtn3] = useState(false);
  const [displayBtn4, setDisplayBtn4] = useState(false);
  const [displayBtn5, setDisplayBtn5] = useState(false);
  const [displayBtn6, setDisplayBtn6] = useState(false);

  const searchContext = useContext(SearchVal);

  const searchAndFilter = (query: string) => {
    if (searchContext.searchString !== "") {
      return props.content
        .filter((x) => x.name === searchContext.searchString && x.region === query)
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
    }
    return props.content
      .filter((x) => x.region === query)
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
  };

  const button1Handler = () => {
    setDisplayBtn1((prevState) => {
      return !prevState;
    });
  };
  const button2Handler = () => {
    setDisplayBtn2((prevState) => {
      return !prevState;
    });
  };
  const button3Handler = () => {
    setDisplayBtn3((prevState) => {
      return !prevState;
    });
  };
  const button4Handler = () => {
    setDisplayBtn4((prevState) => {
      return !prevState;
    });
  };
  const button5Handler = () => {
    setDisplayBtn5((prevState) => {
      return !prevState;
    });
  };
  const button6Handler = () => {
    setDisplayBtn6((prevState) => {
      return !prevState;
    });
  };

  return (
    <Container maxWidth="xl">
      <Grid container columnSpacing={1}>
        <Grid item xs={2}>
          <Button
            onClick={button1Handler}
            variant="outlined"
            size="large"
            fullWidth
          >
            Europe
          </Button>
          <div>
            {displayBtn1 && (
              <Stack spacing={2}>{searchAndFilter("Europe")}</Stack>
            )}
          </div>
        </Grid>

        <Grid item xs={2}>
          <Button
            onClick={button2Handler}
            variant="outlined"
            size="large"
            fullWidth
          >
            America
          </Button>
          <div>
            {displayBtn2 && (
              <Stack spacing={2}>{searchAndFilter("Americas")}</Stack>
            )}
          </div>
        </Grid>

        <Grid item xs={2}>
          <Button
            onClick={button3Handler}
            variant="outlined"
            size="large"
            fullWidth
          >
            Africa
          </Button>

          <div>
            {displayBtn3 && (
              <Stack spacing={2}>{searchAndFilter("Africa")}</Stack>
            )}
          </div>
        </Grid>

        <Grid item xs={2}>
          <Button
            onClick={button4Handler}
            variant="outlined"
            size="large"
            fullWidth
          >
            Oceania
          </Button>
          <div>
            {displayBtn4 && (
              <Stack spacing={2}>{searchAndFilter("Oceania")}</Stack>
            )}
          </div>
        </Grid>

        <Grid item xs={2}>
          <Button
            onClick={button5Handler}
            variant="outlined"
            size="large"
            fullWidth
          >
            Asia
          </Button>
          <div>
            {displayBtn5 && (
              <Stack spacing={2}>{searchAndFilter("Asia")}</Stack>
            )}
          </div>
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={button6Handler}
            variant="outlined"
            size="large"
            fullWidth
          >
            Saved
          </Button>
          {displayBtn6 && (
            <Stack spacing={2}>
              <Saved />
            </Stack>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddCountry;
