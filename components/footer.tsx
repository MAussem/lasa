import type { NextPage } from "next";
// components
import { useMediaQuery } from "./useMediaQuery.js";
// external
import { Grid, Text, Col, Button } from "@nextui-org/react";
import { IconContext } from "react-icons";
import { FaPencilRuler } from "react-icons/fa";

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
          <Grid xs={4} data-aos="fade">
            <Col
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <IconContext.Provider value={{ color: "#fff" }}>
                <FaPencilRuler size={70} />
              </IconContext.Provider>
              <Text
                data-aos="fade"
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
          <Grid xs={4} data-aos="fade">
            <Col
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Text
                data-aos="fade"
                size={15}
                css={{
                  color: "#fff",
                  marginTop: "1%",
                }}
              >
                Address: 123 fake street, <br /> Waterloo, Ontario L9B2S7 Canada
              </Text>
              <Text
                data-aos="fade"
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
                data-aos="fade"
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
          <Grid xs={4} data-aos="fade">
            <Col
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                data-aos="fade"
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
                data-aos="fade"
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
              <Button size="xl">Contact Us</Button>
            </Col>
          </Grid>
        </>
      ) : (
        <>
          <Grid xs={12} data-aos="fade">
            <Col
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconContext.Provider value={{ color: "#fff" }}>
                <FaPencilRuler size={70} />
              </IconContext.Provider>
              <Text
                data-aos="fade"
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
          <Grid xs={12} data-aos="fade">
            <Col
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                data-aos="fade"
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
                data-aos="fade"
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
                data-aos="fade"
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
          <Grid xs={12} data-aos="fade">
            <Col
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                data-aos="fade"
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
                data-aos="fade"
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
              <Button size="xl">Contact Us</Button>
            </Col>
          </Grid>
        </>
      )}
    </Grid.Container>
  );
};

export default Footer;
