import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material/";
import { useDispatch } from "react-redux";
import { delItem } from "../redux/listSlice";

const SavedCard: React.FC<{ name: string; src: string }> = (props) => {
  const dispatch = useDispatch();
  return (
    <Card variant="outlined" sx={{ maxWidth: 250 }}>
      <Typography variant="h6" align="center">
        {props.name}
      </Typography>
      <CardMedia component="img" image={props.src} alt={`${props.name} flag`} />
      <CardActions>
        <Button
          onClick={() =>
            dispatch(
              delItem({
                name: props.name,
                flag: props.src,
              })
            )
          }
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};
export default SavedCard;
