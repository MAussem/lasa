import type { NextPage } from "next";
//react
import { useEffect } from "react";
// components
import { useMediaQuery } from "./useMediaQuery.js";
// external
import { Container, Row, Text, Col, Button } from "@nextui-org/react";
import Aos from "aos";
import "aos/dist/aos.css";

const Statement: NextPage = () => {
  const isMd = useMediaQuery(960);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container
      data-aos="fade-left"
      xl
      css={{ marginTop: "2%", maxWidth: "100%", padding: 0, margin: 0 }}
    >
      {!isMd ? (
        <Row>
          <Col>
            <img width="50%" src="sunset.jpg" />
          </Col>
          <Col
            css={{
              background: "#16bfbf",
              marginTop: "15%",
              marginLeft: "-52%",
              width: "50%",
            }}
          >
            <Text
              data-aos="fade-left"
              size={35}
              css={{ margin: "10% 10% 2% 10%", color: "#000" }}
            >
              Lasa Development Inc.
            </Text>
            <Text
              data-aos="fade-up"
              size={20}
              css={{
                margin: "0 10% 5% 10%",
                color: "#000",
                background: "#16bfbf",
              }}
            >
              With over 30 years experience creating beautiful home renovations,
              kitchen renovations and home additions and more. The team at Lasa
              Development looks forward to assisting you make your dreams become
              reality.
            </Text>
            <Button
              size="xl"
              bordered
              flat
              css={{
                color: "#fff",
                margin: "0 0 10% 10%",
                borderColor: "#fff",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.162)",
                },
              }}
            >
              Find Out More
            </Button>
          </Col>
        </Row>
      ) : (
        <Container fluid xl css={{ padding: 0, margin: 0 }}>
          <img src="sunset.jpg" />
          <Col
            css={{
              background: "#16bfbf",
              maxWidth: "100%",
              marginTop: "-1.5%",
            }}
          >
            <Text
              data-aos="fade-left"
              size={35}
              css={{ margin: "5% 5% 2% 5%", color: "#000" }}
            >
              Lasa Development Inc.
            </Text>
            <Text
              data-aos="fade-up"
              size={20}
              css={{
                margin: "0 5% 5% 5%",
                color: "#000",
                background: "#16bfbf",
              }}
            >
              With over 30 years experience creating beautiful home renovations,
              kitchen renovations and home additions and more. The team at Lasa
              Development looks forward to assisting you make your dreams become
              reality.
            </Text>
            <Button
              size="xl"
              bordered
              flat
              css={{
                color: "#fff",
                margin: "2% 0 5% 5%",
                borderColor: "#fff",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.162)",
                },
              }}
            >
              Find Out More
            </Button>
          </Col>
        </Container>
      )}
    </Container>
  );
};

export default Statement;
