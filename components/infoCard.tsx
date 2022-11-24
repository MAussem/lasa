import type { NextPage } from "next";
// react
import { useEffect } from "react";
// external
import { Card, Text, Row, Col, Button } from "@nextui-org/react";
import Aos from "aos";
import "aos/dist/aos.css";

interface props {
  title: string;
  label: string;
  imageURL: string;
}

const InfoCard: NextPage<props> = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { title, label, imageURL } = props;
  return (
    <Card data-aos="fade-left">
      <Card.Header css={{ position: "absolute", top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {title}
          </Text>
          <Text h4 color="#ffffffAA">
            {label}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image src={imageURL}></Card.Image>
      <Card.Footer
        isBlurred
        css={{ position: "absolute", bgBlur: "#0f111466", bottom: 0 }}
      >
        <Row>
          <Col>
            <Text color="#d1d1d1" size={18}>
              Type of Project
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded color="primary">
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  View More
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default InfoCard;
