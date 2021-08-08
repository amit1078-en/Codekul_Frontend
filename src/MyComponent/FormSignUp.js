
import React, {Component} from 'react'
import Service from '../services/Service'

import statesData from "./data";

export class FormSignUp extends Component{
    constructor(props){
        super(props)

        this.state = {
            fullName: '',
            age: '',
            gen: '',
            statee: '',
            city:''

        }
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {fullName: this.state.fullName, age: this.state.age, gen: this.state.gen, statee: this.state.statee, city: this.state.city};
        console.log('User => ' + JSON.stringify(user));
        Service.createEmployee(user).then((res) => {
            
        });
    }



    changeFullNameHandler= (event) => {
        this.setState({fullName: event.target.value});
    }

    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }

    changeGenderHandler= (event) => {
        this.setState({gen: event.target.value});
    }

    changeStateHandler= (event) => {
        this.setState({statee: event.target.value})
    }
    changeCityHandler= (event) => {
        this.setState({city: event.target.value})
    }

    



render() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-3">
                    <form className="form-card sign-up-form bg-light">
                        <h2 className="text-center">FORM</h2>
		                <p className="text-center">Fill the form</p>
                        <hr />
                        <div className="mb-3">
                            <div className="fgroup">
                                <div className="row">
                                    <div className="col"><input type="text" className="form-control" name="FullName" placeholder="FullName"
                                        required="required" value={this.state.fullName} onChange = {this.changeFullNameHandler} /></div>
                                    <div className="col"><input type="number" className="form-control" name="Age" placeholder="Age" min="1" max="120"
                                        required="required" value={this.state.age} onChange = {this.changeAgeHandler} /></div>
                                </div>
                            </div>
                                <div className="fgroup">
                                <select value={this.state.statee} id="sts" name="stt" class="form-control" required onChange={this.changeStateHandler}>
                        {statesData.map((rajya)=>(
                            <option key={rajya.name} value={rajya.name}>
                            {rajya.name}</option>
                        ))}  
                    </select> 
                                </div>
                                <div className="fgroup">
                                <select value={this.state.city} id="sts" name="stt" class="form-control" required  onChange={this.changeCityHandler}>
                        {statesData.find(item => item.name === this.state.statee)?.cities.map((seher) => (
                            <option key={seher} value={seher}>
                            {seher}</option>
                        ))}  
                </select> 
                                </div>
                                <div className="col-md-4" >
                          <label for="inputname">Gender</label>
                    <div className="form-control">
                        <input type="radio" name="mygen" id="gender" value="MALE" onChange={this.changeGenderHandler} />  MALE 

                        
                        <input type="radio" name="mygen" id="gender" value="FEMALE" onChange={this.changeGenderHandler} />  FEMALE
                    </div>
                   
                    </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-dark " onClick={this.saveUser} >Submit</button>
                                </div>
                            
                               
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}
}



