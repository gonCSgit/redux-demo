import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TransformedData } from "../../shared/countryData.interface";
import { addItem } from "../redux/listSlice";

const CountryCard: React.FC<TransformedData> = (props) => {
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);

  const showMoreHandler = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: 250 }}>
      <Typography variant="h6" align="center">
        {props.name}
      </Typography>
      <CardMedia
        component="img"
        image={props.flag}
        alt={`${props.name} flag`}
      />
      {showMore && (
        <CardContent>
          <Typography variant="body1" fontSize={13}>
            Capital: {props.capital} <br />
            Population: {props.population} citizens <br />
            Idioms:{" "}
            {props.languages.length < 2
              ? props.languages
              : props.languages.join(", ")}
            <br />
            Currencies:{" "}
            {props.currencies.length < 2
              ? props.currencies
              : props.currencies.join(", ")}
          </Typography>
        </CardContent>
      )}
      <CardActions>
        <Button
          onClick={() =>
            dispatch(
              addItem({
                name: props.name,
                flag: props.flag,
              })
            )
          }
        >
          Save
        </Button>
        <Button onClick={showMoreHandler}>info</Button>
      </CardActions>
    </Card>
  );
};

export default CountryCard;
