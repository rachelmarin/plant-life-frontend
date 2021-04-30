import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addPlant } from '../actions/Index';

let id = 0;

class PlantForm extends Component {

    state = {
        name: "",
        content: ""
    }
    handleChange = e =>{
        const stateChangeObj = {
            [e.target.name]: e.target.value
        }

        this.setState(stateChangeObj)
    }

    handleSubmit = e => {
       e.preventDefault();
       
       let plant = {
           ...this.state,
           id: ++id
       }
    
       this.props.addPlant(plant)

       this.props.history.push('/plants');
   
    }
    
    render() {
        return (
            <div>
                <h3>{ this.props.header }</h3>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlfor="name">Name</label>
                    <br/>
                        <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={ this.state.name } 
                        onChange={this.handleChange}

                        />
                    </div>
                    <br/>
                    <div>
                        <label htmlfor="content">Content</label>
                    <br/>                    
                        <textarea 
                        id="content" 
                        name="content"
                        value={ this.state.content }
                        onChange={this.handleChange}
                        />
                    </div>
                    <br/>
                    <input type="submit" value="Add Plant" />    
                </form>
            </div>
        )
    }
}



export default connect(null, { addPlant } )(PlantForm);