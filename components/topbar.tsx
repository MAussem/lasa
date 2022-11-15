import type { NextPage } from "next";
// external
import { Navbar, Link, Row } from "@nextui-org/react";

const Topbar: NextPage = () => {
  const collapseItems = [
    "Home",
    "About",
    "Projects",
    "Services",
    "Team",
    "Contact",
    "FAQ",
  ];

  return (
    <>
      {/* NavBar */}
      <Navbar
        maxWidth="xl"
        css={{
          $$navbarBackgroundColor: "rgba(0, 0, 0, 0.5)",
          $$navbarBlurBackgroundColor: "#fff",
        }}
      >
        <Navbar.Brand showIn="md">
          <Navbar.Toggle aria-label="toggle navigation" />
        </Navbar.Brand>
        <Navbar.Content
          hideIn="md"
          enableCursorHighlight
          activeColor="primary"
          variant="highlight"
        >
          <Row gap={130}>
            {collapseItems.map((item, index) => (
              <Navbar.Link
                key={item}
                css={{
                  marginTop: "2%",
                  color: "#000",
                  zIndex: 100,
                  marginRight: "4%",
                }}
              >
                {item}
              </Navbar.Link>
            ))}
          </Row>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Topbar;
