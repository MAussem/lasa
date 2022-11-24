import type { NextPage } from "next";
// components
import { useMediaQuery } from "./useMediaQuery.js";
// external
import { Button, Grid, Text } from "@nextui-org/react";
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
        >
          <Text
            size={55}
            css={{
              color: "#fff",
              paddingTop: "20%",
              marginLeft: "4%",
            }}
          >
            Building houses with Integrity, trust, Quality <br /> workmanship &
            Exceptional Standards
          </Text>
          <Text
            size={25}
            css={{
              color: "#fff",
              paddingTop: "1%",
              marginLeft: "4%",
            }}
          >
            Building houses with Integrity, trust, Quality workmanship &
            Exceptional Standards
          </Text>
          <Button
            size="xl"
            flat
            css={{
              color: "#fff",
              background: "#16BFBFB3",
              marginTop: "2%",
              marginLeft: "4%",
            }}
          >
            Find Out More
          </Button>
        </Grid.Container>
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
        >
          <Text
            size={25}
            css={{
              color: "#fff",
              marginTop: "40%",
              lineHeight: "30px",
              marginLeft: "2.2%",
            }}
          >
            Building houses with Integrity, trust, Quality workmanship &
            Exceptional Standards
          </Text>
          <Text
            size={15}
            css={{
              color: "#fff",
              marginLeft: "2.2%",
            }}
          >
            Building houses with Integrity, trust, Quality workmanship &
            Exceptional Standards
          </Text>
          <Button
            size="xl"
            flat
            css={{
              color: "#fff",
              background: "#16BFBFB3",
              marginBottom: "10%",
              marginLeft: "2%",
            }}
          >
            Find Out More
          </Button>
        </Grid.Container>
      )}
    </div>
  );
};

export default Jumbotron;
