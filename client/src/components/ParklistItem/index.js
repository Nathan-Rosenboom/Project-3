import React from 'react';
import { Row, Col, ListGroup, Button, Image } from 'react-bootstrap';

export default function ParkListItem({ name, description, address, playground, toilets, exerciseFacilities, petsAllowed, onView, onSave, onDelete}) {
    return (
        <ListGroup.Item>
            <Row>
                <Col xs={6}>
                    <h2>{Name}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                <p>{address}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <p>{description}</p>
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                <p>{playground}</p>
                </Col>
                <Col xs={2}>
                <p>{toilets}</p>
                </Col>
                <Col xs={2}>
                <p>{exerciseFacilities}</p>
                </Col>
                <Col xs={2}>
                <p>{petsAllowed}</p>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

