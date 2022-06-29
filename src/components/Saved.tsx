import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import SavedCard from "./SavedCard";

const Saved: React.FC = () => {
  const list = useSelector((state: RootState) => state.list);

  return (
    <>
      {list.map((x) => {
        return <SavedCard key={x.flag} name={x.name} src={x.flag} />;
      })}
    </>
  );
};

export default Saved;
