import type { NextPage } from "next";
// react
import { useEffect } from "react";
// components
import { useMediaQuery } from "./useMediaQuery.js";
// external
import { Col, Container, Grid, Text } from "@nextui-org/react";
import Aos from "aos";
import "aos/dist/aos.css";
//icons
import { IconContext } from "react-icons";
import { FaHammer } from "react-icons/fa";

const Services: NextPage = () => {
  const isMd = useMediaQuery(960);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container lg css={{ marginTop: "2%" }}>
      <Text
        data-aos="fade"
        size={35}
        css={{ textAlign: "center", color: "#000", marginBottom: "2%" }}
      >
        Lasa offers a full range of services to meet your needs.
      </Text>
      {!isMd ? (
        <Grid.Container gap={10} justify="center" alignItems="center">
          <IconContext.Provider value={{ color: "#023047" }}>
            <Grid
              xs={4}
              justify="center"
              alignItems="center"
              data-aos="fade-left"
            >
              <Col
                css={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaHammer size={70} />
                <Text
                  data-aos="fade"
                  size={20}
                  css={{
                    textAlign: "center",
                    color: "#000",
                    marginBottom: "2%",
                  }}
                >
                  Lasa offers a full range of services to meet your needs.
                </Text>
              </Col>
            </Grid>
            <Grid xs={4} justify="center" data-aos="fade-up">
              <Col
                css={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaHammer size={70} />
                <Text
                  data-aos="fade"
                  size={20}
                  css={{
                    textAlign: "center",
                    color: "#000",
                    marginBottom: "2%",
                  }}
                >
                  Lasa offers a full range of services to meet your needs.
                </Text>
              </Col>
            </Grid>
            <Grid xs={4} justify="center" data-aos="fade-down">
              <Col
                css={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaHammer size={70} />
                <Text
                  data-aos="fade"
                  size={20}
                  css={{
                    textAlign: "center",
                    color: "#000",
                    marginBottom: "2%",
                  }}
                >
                  Lasa offers a full range of services to meet your needs.
                </Text>
              </Col>
            </Grid>
            <Grid xs={4} justify="center" data-aos="fade-right">
              <Col
                css={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaHammer size={70} />
                <Text
                  data-aos="fade"
                  size={20}
                  css={{
                    textAlign: "center",
                    color: "#000",
                    marginBottom: "2%",
                  }}
                >
                  Lasa offers a full range of services to meet your needs.
                </Text>
              </Col>
            </Grid>
            <Grid xs={4} justify="center" data-aos="fade-up-left">
              <Col
                css={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaHammer
                  size={70}
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                <Text
                  data-aos="fade"
                  size={20}
                  css={{
                    textAlign: "center",
                    color: "#000",
                    marginBottom: "2%",
                  }}
                >
                  Lasa offers a full range of services to meet your needs.
                </Text>
              </Col>
            </Grid>
            <Grid xs={4} justify="center" data-aos="fade-down-right">
              <Col
                css={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaHammer size={70} />
                <Text
                  data-aos="fade"
                  size={20}
                  css={{
                    textAlign: "center",
                    color: "#000",
                    marginBottom: "2%",
                  }}
                >
                  Lasa offers a full range of services to meet your needs.
                </Text>
              </Col>
            </Grid>
          </IconContext.Provider>
        </Grid.Container>
      ) : (
        <Grid.Container gap={10} justify="center" alignItems="center">
          <IconContext.Provider value={{ color: "#023047" }}>
            <Grid
              xs={12}
              justify="center"
              alignItems="center"
              data-aos="fade-left"
            >
              <Col
                css={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaHammer size={70} />
                <Text
                  data-aos="fade"
                  size={20}
                  css={{
                    textAlign: "center",
                    color: "#000",
                    marginBottom: "2%",
                  }}
                >
                  Lasa offers a full range of services to meet your needs.
                </Text>
              </Col>
            </Grid>
            <Grid xs={12} justify="center" data-aos="fade-up">
              <Col
                css={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaHammer size={70} />
                <Text
                  data-aos="fade"
                  size={20}
                  css={{
                    textAlign: "center",
                    color: "#000",
                    marginBottom: "2%",
                  }}
                >
                  Lasa offers a full range of services to meet your needs.
                </Text>
              </Col>
            </Grid>
            <Grid xs={12} justify="center" data-aos="fade-down">
              <Col
                css={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaHammer size={70} />
                <Text
                  data-aos="fade"
                  size={20}
                  css={{
                    textAlign: "center",
                    color: "#000",
                    marginBottom: "2%",
                  }}
                >
                  Lasa offers a full range of services to meet your needs.
                </Text>
              </Col>
            </Grid>
            <Grid xs={12} justify="center" data-aos="fade-right">
              <Col
                css={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaHammer size={70} />
                <Text
                  data-aos="fade"
                  size={20}
                  css={{
                    textAlign: "center",
                    color: "#000",
                    marginBottom: "2%",
                  }}
                >
                  Lasa offers a full range of services to meet your needs.
                </Text>
              </Col>
            </Grid>
            <Grid xs={12} justify="center" data-aos="fade-up-left">
              <Col
                css={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaHammer
                  size={70}
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                <Text
                  data-aos="fade"
                  size={20}
                  css={{
                    textAlign: "center",
                    color: "#000",
                    marginBottom: "2%",
                  }}
                >
                  Lasa offers a full range of services to meet your needs.
                </Text>
              </Col>
            </Grid>
            <Grid xs={12} justify="center" data-aos="fade-down-right">
              <Col
                css={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaHammer size={70} />
                <Text
                  data-aos="fade"
                  size={20}
                  css={{
                    textAlign: "center",
                    color: "#000",
                    marginBottom: "2%",
                  }}
                >
                  Lasa offers a full range of services to meet your needs.
                </Text>
              </Col>
            </Grid>
          </IconContext.Provider>
        </Grid.Container>
      )}
    </Container>
  );
};

export default Services;
