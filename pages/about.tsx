import { NextPage } from "next";
import { Container } from "@nextui-org/react";
import InfoAbout from "../components/infoAbout";

const About: NextPage = () => {
  return (
    <Container>
      <InfoAbout
        title="About Lasa Development"
        label="Design, Build, Inovate"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        imageURL="sunset.jpg"
      />
    </Container>
  );
};

export default About;
