import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Park = props => (
    <tr>
        <td>{props.park.park_name}</td>
        <td>{props.park.park_description}</td>
        <td>{props.park.park_address}</td>
        <td>{props.park.park_playground}</td>
        <td>{props.park.park_toilets}</td>
        <td>{props.park.park_exerciseFacilities}</td>
        <td>{props.park.park_petsAllowed}</td>
    </tr>
)

export default class ParksList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {parks: []};
    }
    
    componentDidMount() {
        axios.get('http://localhost:4000/api/parks/')
            .then(response => {
                this.setState({ parks: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    parkList() {
        return this.state.parks.map(function(currentPark, i){
            return <Park park={currentPark} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Parks List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Address</th>
                            <th>Playground</th>
                            <th>Toilets</th>
                            <th>Exercise Facilities</th>
                            <th>Pets Allowed</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.parkList() }
                    </tbody>
                </table>
            </div>
        )
    }
}