import type { NextPage } from "next";
// components
import InfoCard from "../components/infoCard";
import Jumbotron from "../components/jumbotron";
import Topbar from "../components/topbar";
// react
import { useEffect } from "react";
// external
import { Container, Grid, Text } from "@nextui-org/react";
import Aos from "aos";
import "aos/dist/aos.css";
import Statement from "../components/statement";
import Services from "../components/services";
import Footer from "../components/footer";
import Section from "../components/section";

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container fluid xl css={{ padding: 0, maxWidth: "100%" }}>
      <Topbar />
      {/* Jumbotron */}
      <Jumbotron />
      {/*Services*/}
      <Services />
      {/*Mission Statement*/}
      <Statement />
      <Section />
      {/* Cards X3 */}
      <Container xl css={{ background: "#fff", marginTop: "2%" }}>
        <hr
          data-aos="fade"
          style={{
            background: "black",
            color: "black",
            borderColor: "black",
            height: "3px",
            width: "50px",
          }}
        />
        <Text
          data-aos="fade-right"
          size={35}
          css={{
            textAlign: "center",
            color: "#000",
          }}
        >
          Construction Services
        </Text>
        <Grid.Container gap={2}>
          <Grid xs={12} sm={4}>
            <InfoCard
              label="Text"
              title="Project Title"
              imageURL="red_dawn.jpg"
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <InfoCard
              label="Text"
              title="Project Title"
              imageURL="sunset.jpg"
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <InfoCard label="Text" title="Title" imageURL="tail.jpg" />
          </Grid>
        </Grid.Container>
      </Container>

      <Footer />
    </Container>
  );
};

export default Home;
