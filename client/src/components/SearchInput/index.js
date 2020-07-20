import React from "react";
import { Form, Button } from "react-bootstrap";

export default function SearchInput({ search, onSearchChange, onSearch }) {
  return (
    <Form onSubmit={onSearch}>
      <Form.Group controlId="book-title">
        <Form.Label>Park</Form.Label>
        <Form.Control value={search} placeholder="Enter book" onChange={evt => onSearchChange(evt.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
          Search
      </Button>
    </Form>
  );
}
