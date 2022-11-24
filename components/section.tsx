import type { NextPage } from "next";
//react
import { useEffect } from "react";

// components
import { useMediaQuery } from "./useMediaQuery.js";
// external
import { Grid, Text } from "@nextui-org/react";
import Aos from "aos";
import "aos/dist/aos.css";

const Section: NextPage = () => {
  const isMd = useMediaQuery(960);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      {!isMd ? (
        <Grid.Container
          justify="center"
          xl
          css={{
            height: "600px",
            backgroundImage: "url(bg1.png)",
            backgroundRepeat: "no-repeat",
            marginTop: "-8%",
            padding: 0,
          }}
        >
          <Text
            data-aos="fade"
            size={35}
            css={{
              color: "#fff",
              padding: "10% 30% 0 10%",
              lineHeight: "45px",
            }}
          >
            Exceptional Quality, Exceeding expectations, felivering value by
            fesign for those who seek an exceptional home and life, there is
            Lasa Devlopment.
          </Text>
          <Text
            data-aos="fade"
            size={20}
            css={{
              color: "#fff",
              padding: "2% 2% 0 10%",
            }}
          >
            Where you live is everything, which is why we are committed to
            creating new home environments that elevate your quality of life.
          </Text>
        </Grid.Container>
      ) : (
        <Grid.Container
          justify="center"
          xl
          css={{
            height: "400px",
            backgroundImage: "url(bg1.png)",
            backgroundRepeat: "no-repeat",
            marginTop: "-8%",
            padding: 0,
          }}
        >
          <Text
            data-aos="fade"
            size={25}
            css={{
              color: "#fff",
              padding: "4%",
            }}
          >
            Exceptional Quality, Exceeding expectations, felivering value by
            fesign for those who seek an exceptional home and life, there is
            Lasa Devlopment.
          </Text>
          <Text
            data-aos="fade"
            size={16}
            css={{
              color: "#fff",
              padding: "4%",
              marginTop: "-20%",
            }}
          >
            Where you live is everything, which is why we are committed to
            creating new home environments that elevate your quality of life.
          </Text>
        </Grid.Container>
      )}
    </>
  );
};

export default Section;
