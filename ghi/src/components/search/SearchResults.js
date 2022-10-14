import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/esm/Button";
import { useGetCardsQuery } from "../../store/scryfallApi";

function ContainerExample() {
  const { data, error, isLoading } = useGetCardsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);

  if ("message" in data) {
    return <div>Hello</div>;
  }

  return (
    <Container fluid="xxl">
      <Row>
        {data.cards.map((card) => {
          return (
            <Col sm key={card.multiverse_id}>
              <Image src={card.picture_url} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ContainerExample;