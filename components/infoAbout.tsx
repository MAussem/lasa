import { NextPage } from "next";
import { Container, Text } from "@nextui-org/react";

interface props {
  title: string;
  label: string;
  info: string;
  imageURL: string;
}

const InfoAbout: NextPage<props> = (props) => {
  const { title, label, info, imageURL } = props;
  return (
    <Container>
      <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
        {title}
      </Text>
      <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
        {label}
      </Text>
      <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
        {info}
      </Text>
    </Container>
  );
};

export default InfoAbout;
