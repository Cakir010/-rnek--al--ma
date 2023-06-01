import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <>
      <Form.Control
        placeholder="Search Movie"
        className="w-50 m-auto"
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="gap-3 justify-content-center">
          {data
            .filter((film) =>
              film.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((film, i) => (
              <Col xl="3" lg="4" md="6" key={i}>
                <PlayerCard {...film} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
