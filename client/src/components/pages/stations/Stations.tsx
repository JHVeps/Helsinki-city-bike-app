import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { getAllJourneys } from "services/journey.services";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AppBar from "components/appbar/AppBar";

import "./Stations.css";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllJourneys());
  }, [dispatch]);

  const { stations } = useAppSelector((state: RootState) => state);

  console.log("stations state: ", stations);
  return (
    <div className="station">
      <h1>Stations</h1>
      <Button>
        <Link style={{ textDecoration: "none", color: "#FFF" }} to={`/`}>
          BACK
        </Link>
      </Button>
      <AppBar title={"Stations List"} />
    </div>
  );
};

export default Home;
