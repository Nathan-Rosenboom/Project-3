import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.onChangeParkName = this.onChangeParkName.bind(this);
        this.onChangeParkDescription = this.onChangeParkDescription.bind(this);
        this.onChangeParkAddress = this.onChangeParkAddress.bind(this);
        this.onChangeParkPlayground = this.onChangeParkPlayground.bind(this);
        this.onChangeParkToilets = this.onChangeParkToilets.bind(this);
        this.onChangeParkExerciseFacilities = this.onChangeParkExerciseFacilities.bind(this);
        this.onChangeParkPetsAllowed = this.onChangeParkPetsAllowed.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            park_name: '',
            park_description: '',
            park_address: '',
            park_playground: 'No',
            park_toilets: 'No',
            park_exerciseFacilities: 'No',
            park_petsAllowed: 'No'
        }
        
    }

    onChangeParkName(e) {
        this.setState({
            park_name: e.target.value
        });
    }

    onChangeParkDescription(e) {
        this.setState({
            park_description: e.target.value
        });
    }

    onChangeParkAddress(e) {
        this.setState({
            park_address: e.target.value
        });
    }

    onChangeParkPlayground(e) {
        this.setState({
            park_playground: e.target.value
        });
    }

    onChangeParkToilets(e) {
        this.setState({
            park_toilets: e.target.value
        });
    }

    onChangeParkExerciseFacilities(e) {
        this.setState({
            park_exerciseFacilities: e.target.value
        });
    }

    onChangeParkPetsAllowed(e) {
        this.setState({
            park_petsAllowed: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Park Name: ${this.state.park_name}`);
        console.log(`Park Description: ${this.state.park_description}`);
        console.log(`Park Address: ${this.state.park_address}`);
        console.log(`Park Has Playground: ${this.state.park_playground}`);
        console.log(`Park Has Toilets: ${this.state.park_toilets}`);
        console.log(`Park Has Exercise Facilities: ${this.state.park_exerciseFacilities}`);
        console.log(`Park Allows Pets: ${this.state.park_petsAllowed}`);
        
        const newPark = {
            park_name: this.state.park_name,
            park_description: this.state.park_description,
            park_address: this.state.park_address,
            park_playground: this.state.park_playground,
            park_toilets: this.state.park_toilets,
            park_exerciseFacilities: this.state.park_exerciseFacilities,
            park_petsAllowed: this.state.park_petsAllowed
        };

        axios.post('http://localhost:4000/api/parks/add', newPark).then(res => console.log(res.data));

        this.setState({
            park_name: '',
            park_description: '',
            park_address: '',
            park_playground: '',
            park_toilets: '',
            park_exerciseFacilities: '',
            park_petsAllowed: '',
        })
    };

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Park</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                        <label>Park Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.park_name}
                                onChange={this.onChangeParkName}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.park_description}
                                onChange={this.onChangeParkDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.park_address}
                                onChange={this.onChangeParkAddress}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="checkbox" 
                                    name="parkOptions" 
                                    id="playground" 
                                    value="Yes"
                                    checked={this.state.park_playground==='Yes'} 
                                    onChange={this.onChangeParkPlayground}
                                    />
                            <label className="form-check-label">Playground</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="checkbox" 
                                    name="parkOptions" 
                                    id="toilets" 
                                    value="Yes"
                                    checked={this.state.park_toilets==='Yes'} 
                                    onChange={this.onChangeParkToilets}
                                    />
                            <label className="form-check-label">Toilets</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="checkbox" 
                                    name="parkOptions" 
                                    id="exerciseFacilities" 
                                    value="Yes"
                                    checked={this.state.park_exerciseFacilities==='Yes'} 
                                    onChange={this.onChangeParkExerciseFacilities}
                                    />
                            <label className="form-check-label">Exercise Facilities</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="checkbox" 
                                    name="parkOptions" 
                                    id="petsAllowed" 
                                    value="Yes"
                                    checked={this.state.park_petsAllowed==='Yes'} 
                                    onChange={this.onChangeParkPetsAllowed}
                                    />
                            <label className="form-check-label">Pets Allowed</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Park" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}