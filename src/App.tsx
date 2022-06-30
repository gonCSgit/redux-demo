import { Box, Button, Input } from "@mui/material";
import { useState, useEffect, useCallback, KeyboardEvent } from "react";
import { CountryData, TransformedData } from "../shared/countryData.interface";
import AddCountry from "./components/AddCountry";
import SearchVal from "./context/search-context";

const App = () => {
  const [content, setContent] = useState<TransformedData[]>();
  const [fetchError, setFetchError] = useState(false);
  const [queryState, setQueryState] = useState("");
  const [fieldDisable, setFieldDisable] = useState(false);

  const fetchCountriesHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v2/all?fields=name,capital,currencies,languages,region,population,flags"
      );
      if (!response.ok) {
        throw new Error();
      }
      const data: CountryData[] = await response.json();

      const transformedData = data.map((countryData): TransformedData => {
        return {
          region: countryData.region,
          name: countryData.name,
          capital: countryData.capital,
          population: countryData.population,
          languages: countryData.languages?.map((languages) => {
            return languages.name;
          }),
          currencies: countryData.currencies?.map((currencies) => {
            return currencies.name;
          }),
          flag: countryData.flags.png,
          key: countryData.flags.png,
        };
      });
      setContent(transformedData);
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      setFetchError(true);
      console.log(message);
      // Will throw an error if something goes bad with the fetch API or the REST API itself
    }
  }, []);

  useEffect(() => {
    fetchCountriesHandler();
  }, [fetchCountriesHandler]);

  const searchFieldHandler = (
    event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      setQueryState(event.currentTarget.value);
      setFieldDisable(true);
    }
  };

  const clearFieldHandler = () => {
    setQueryState("");
    setFieldDisable(false);
  };

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <form onReset={clearFieldHandler}>
          <Input
            type="text"
            disabled={fieldDisable}
            placeholder="Search..."
            onKeyDown={(event) => {
              searchFieldHandler(event);
            }}
          />

          {queryState !== "" && <Button type="reset">Clear</Button>}
        </form>
      </Box>

      <br />
      {!fetchError && content !== undefined && (
        <SearchVal.Provider
          value={{
            searchString: queryState,
          }}
        >
          <AddCountry content={content!} />
        </SearchVal.Provider>
      )}
    </div>
  );
};

export default App;
