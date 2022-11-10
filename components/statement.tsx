import type { NextPage } from "next";
//react
import { useEffect } from "react";
// external
import { Container, Text } from "@nextui-org/react";
import Aos from "aos";
import "aos/dist/aos.css";

const Statement: NextPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container sm css={{ marginTop: "2%" }}>
      <Text
        data-aos="fade-left"
        size={35}
        css={{ textAlign: "center", color: "#000" }}
      >
        Lasa Development Inc.
      </Text>
      <Text
        data-aos="fade-up"
        size={20}
        css={{ textAlign: "center", color: "#000" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </Container>
  );
};

export default Statement;
