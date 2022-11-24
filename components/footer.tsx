import type { NextPage } from "next";
// components
import { useMediaQuery } from "./useMediaQuery.js";
// external
import { Grid, Text, Col, Button } from "@nextui-org/react";
import { IconContext } from "react-icons";
import { FaPencilRuler } from "react-icons/fa";
import "animate.css";

const Footer: NextPage = () => {
  const isMd = useMediaQuery(960);

  return (
    <Grid.Container
      css={{
        background: "#00233DDE",
        marginTop: "2%",
        overflow: "hidden",
      }}
    >
      {!isMd ? (
        <>
          <Grid
            xs={4}
            className="animate__animated animate__fadeIn animate__slower"
          >
            <Col
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                margin: "15%",
              }}
            >
              <IconContext.Provider value={{ color: "#fff" }}>
                <FaPencilRuler size={70} />
              </IconContext.Provider>
              <Text
                className="animate__animated animate__fadeIn animate__slower"
                size={20}
                css={{
                  textAlign: "center",
                  color: "#fff",
                  marginTop: "2%",
                }}
              >
                Lasa Development Inc.
              </Text>
            </Col>
          </Grid>
          <Grid
            xs={4}
            className="animate__animated animate__fadeIn animate__slower"
          >
            <Col
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Text
                className="animate__animated animate__fadeIn animate__slower"
                size={15}
                css={{
                  color: "#fff",
                  marginTop: "15%",
                }}
              >
                Address: 123 fake street, <br /> Waterloo, Ontario L9B2S7 Canada
              </Text>
              <Text
                className="animate__animated animate__fadeIn animate__slower"
                size={15}
                css={{
                  textAlign: "center",
                  color: "#fff",
                  marginTop: "1%",
                }}
              >
                905-123-4567
              </Text>
              <Text
                className="animate__animated animate__fadeIn animate__slower"
                size={15}
                css={{
                  textAlign: "center",
                  color: "#fff",
                  marginTop: "1%",
                }}
              >
                <a>Get Directions</a>
              </Text>
            </Col>
          </Grid>
          <Grid
            xs={4}
            className="animate__animated animate__fadeIn animate__slower"
          >
            <Col
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                className="animate__animated animate__fadeIn animate__slower"
                size={25}
                css={{
                  textAlign: "center",
                  color: "#fff",
                  marginTop: "8%",
                }}
              >
                More Questions for Us?
              </Text>
              <Text
                className="animate__animated animate__fadeIn animate__slower"
                size={15}
                css={{
                  textAlign: "center",
                  color: "#fff",
                  marginBottom: "2%",
                }}
              >
                Our experts will answer your questions, provide advice and offer
                insights.
              </Text>
              <Button
                size="xl"
                bordered
                flat
                css={{
                  color: "#fff",
                  marginTop: "2%",
                  marginBottom: "4%",
                  borderColor: "#fff",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.162)",
                  },
                }}
              >
                Contact Us
              </Button>
            </Col>
          </Grid>
        </>
      ) : (
        <>
          <Grid
            xs={12}
            className="animate__animated animate__fadeIn animate__slower"
          >
            <Col
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "4%",
              }}
            >
              <IconContext.Provider value={{ color: "#fff" }}>
                <FaPencilRuler size={70} />
              </IconContext.Provider>
              <Text
                className="animate__animated animate__fadeIn animate__slower"
                size={20}
                css={{
                  textAlign: "center",
                  color: "#fff",
                  marginTop: "2%",
                }}
              >
                Lasa Development Inc.
              </Text>
            </Col>
          </Grid>
          <Grid
            xs={12}
            className="animate__animated animate__fadeIn animate__slower"
          >
            <Col
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                className="animate__animated animate__fadeIn animate__slower"
                size={15}
                css={{
                  color: "#fff",
                  marginTop: "1%",
                  textAlign: "center",
                }}
              >
                Address: 123 fake street, <br /> Waterloo, Ontario L9B2S7 Canada
              </Text>
              <Text
                className="animate__animated animate__fadeIn animate__slower"
                size={15}
                css={{
                  textAlign: "center",
                  color: "#fff",
                  marginTop: "1%",
                }}
              >
                905-123-4567
              </Text>
              <Text
                className="animate__animated animate__fadeIn animate__slower"
                size={15}
                css={{
                  textAlign: "center",
                  color: "#fff",
                  marginTop: "1%",
                }}
              >
                <a>Get Directions</a>
              </Text>
            </Col>
          </Grid>
          <Grid
            xs={12}
            className="animate__animated animate__fadeIn animate__slower"
          >
            <Col
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                className="animate__animated animate__fadeIn animate__slower"
                size={25}
                css={{
                  textAlign: "center",
                  color: "#fff",
                  marginTop: "1%",
                }}
              >
                More Questions for Us?
              </Text>
              <Text
                className="animate__animated animate__fadeIn animate__slower"
                size={15}
                css={{
                  textAlign: "center",
                  color: "#fff",
                  marginBottom: "2%",
                }}
              >
                Our experts will answer your questions, provide advice and offer
                insights.
              </Text>
              <Button size="xl" css={{ marginBottom: "4%" }}>
                Contact Us
              </Button>
            </Col>
          </Grid>
        </>
      )}
    </Grid.Container>
  );
};

export default Footer;
