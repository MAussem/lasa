import type { NextPage } from "next";
// components
import { useMediaQuery } from "./useMediaQuery.js";
// external
import { Grid } from "@nextui-org/react";
import "animate.css";
const Jumbotron: NextPage = () => {
  const isMd = useMediaQuery(960);

  return (
    <div className="animate__animated animate__fadeIn animate__slower">
      {!isMd ? (
        <Grid.Container
          justify="center"
          xl
          css={{
            height: "1280px",
            backgroundImage: "url(house.png)",
            margin: 0,
            padding: 0,
          }}
        ></Grid.Container>
      ) : (
        <Grid.Container
          css={{
            height: "500px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: "url(house.png)",
            margin: 0,
            padding: 0,
          }}
        ></Grid.Container>
      )}
    </div>
  );
};

export default Jumbotron;
