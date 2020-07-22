import React, { Component } from 'react';
import axios from 'axios';

export default class EditTodo extends Component {

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

    componentDidMount() {
        axios.get('http://localhost:4000/parks/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    park_name: response.data.park_name,
                    park_description: response.data.park_description,
                    park_address: response.data.park_address,
                    park_playground: response.data.park_playground,
                    park_toilets: response.data.park_toilets,
                    park_exerciseFacilities: response.data.park_exerciseFacilities,
                    park_petsAllowed: response.data.park_petsAllowed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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
        const obj = {
            park_name: this.state.park_name,
            park_description: this.state.park_description,
            park_address: this.state.park_address,
            park_playground: this.state.park_playground,
            park_toilets: this.state.park_toilets,
            park_exerciseFacilities: this.state.park_exerciseFacilities,
            park_petsAllowed: this.state.park_petsAllowed
        };
        console.log(obj);
        axios.post('http://localhost:4000/api/parks/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Park Info</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: </label>
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

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Park" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}