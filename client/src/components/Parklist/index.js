import React from "react";
import { ListGroup, Card } from 'react-bootstrap';
import BookListItem from "../ParkListItem";

export default function ParkList({ parks =[] }){
    return (
        <Card>
            <Card.Title>Results</Card.Title>
            <Card.Body>
                <ListGroup>
                    {books.map((park) => (
                        <BookListItem key={park.id} {...park}/>
                    ))}   
                </ListGroup>
            </Card.Body>
        </Card>
    )
}