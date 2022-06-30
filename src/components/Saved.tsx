import { Button, Grid, Stack } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import SavedCard from "./SavedCard";

const Saved: React.FC = () => {
  const list = useSelector((state: RootState) => state.list);
  const [displayBtn, setDisplayBtn] = useState(false);
  const buttonHandler = () => {
    setDisplayBtn((prevState) => {
      return !prevState;
    });
  };

  const content = list.map((x) => {
    return <SavedCard key={x.flag} name={x.name} src={x.flag} />;
  });

  return (
    <Grid item xs={2}>
      <Button onClick={buttonHandler} variant="outlined" size="large" fullWidth>
        Saved
      </Button>
      {displayBtn && <Stack spacing={2}>{content}</Stack>}
    </Grid>
  );
};

export default Saved;
