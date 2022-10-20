import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

function DeckDetail() {
  const [cards, setCards] = useState([]);
  const stuff = useSelector((state) => state.deck);
  const deckId = stuff.id;
  const navigate = useNavigate();

  useEffect(() => {
    async function getDecks() {
      const deckUrl = `http://localhost:8000/decks/${deckId}`;
      const fetchConfig = {
        method: "get",
        credentials: "include",
      };
      const deckResponse = await fetch(deckUrl, fetchConfig);
      if (deckResponse.ok) {
        const deckData = await deckResponse.json();
        setCards(deckData.cards);
      }
    }
    getDecks();
  }, []);

  function execute() {
    navigate("/decks");
  }

  return (
    <React.Fragment>
      <Button onClick={execute}>Back To Decks</Button>
      <Container>
        <Row>
          {cards.map((card) => {
            return (
              <Col
                key={card.multiverse_id}
                xxl="2"
                xl="3"
                l="3"
                md="4"
                sm="6"
                xs="12"
              >
                <Image src={card.picture_url} style={{ width: "100%" }} />
                <div>{card.name}</div>
                <div>Quantity in Deck: {card.quantity}</div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default DeckDetail;