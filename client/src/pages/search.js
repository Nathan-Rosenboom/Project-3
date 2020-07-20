import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchInput from "../components/SearchInput";
import ParkList from "../components/ParkList";
import API from "../utils/api";

export default function Search() {
    const [search, setSearch] = useState('');
    const [parks, setParks] = useState([]);

    const onSave = async (park) => {
        API.savePark(park)
    }
    
    const onSearch = async (evt) => {
        evt.preventDefault();
        const results = await API.searchParks(search);
        const parks = results.items.map((park) => ({
            id: park.id,
            name: park.name,
            description: park.description,
            address: park.address,
            playground: park.playground,
            toilets: park.toilets,
            exerciseFacilities: park.exerciseFacilities,
            petsAllowed: park.petsAllowed,
            onSave,
            
        }));
        
        setParks(parks);
    }
    return (
        <>
        <Row>
            <Col><h1>Search for Parks Near You</h1></Col>
            <SearchInput search={search} onSearchChange={setSearch} onSearch={onSearch}/>
        </Row>
        <Row>
            <Col>
            <ParkList parks={parks}/>
            </Col>
        </Row>
        </>
    )
}