import Image from "next/image";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const cardData = [
  {
    id: 1,
    title: "JavaScript",
    description: "+5 años",
    icon: "/img/JavaScript-logo.png",
  },
  {
    id: 2,
    title: "HTML",
    description: "+5 años",
    icon: "/img/logo-2582748_640.png",
  },
  {
    id: 3,
    title: "CSS",
    description: "+5 años",
    icon: "/img/logo-2582747_1280.webp",
  },
  {
    id: 4,
    title: "PHP",
    description: "+3 años",
    icon: "/img/PHP-logo.svg.png",
  },
];

function ProjectsList() {
  return (
    <Row className="justify-content-center align-items-center">
      {cardData.map(({ id, title, description, icon }) => (
        <Col key={id} md={3}>
          <Card>
            <Row className="align-items-center me-auto">
              <Col md={3}>
                <Card.Img
                  variant="top"
                  as={
                    () => <Image
                      alt={title}
                      src={icon}
                      width={60}
                      height={60}
                    />
                  }
                />
              </Col>
              <Col md={9}>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>
                    {description}
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      ))
      }
    </Row >
  );
}

export default ProjectsList;
