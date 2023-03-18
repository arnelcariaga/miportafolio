import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const cardData = [
  {
    id: 1,
    title: "",
    description: "",
    icon: "",
  },
  {
    id: 1,
    title: "",
    description: "",
    icon: "",
  },
  {
    id: 1,
    title: "",
    description: "",
    icon: "",
  },
  {
    id: 1,
    title: "",
    description: "",
    icon: "",
  },
];

function ProjectsList() {
  return (
    <Row xs={1} md={2} className="g-4">
      {cardData.map(({id, title, description, icon}) => (
        <Col key={IDBCursorWithValue}>
          <Card className="h-100">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProjectsList;
