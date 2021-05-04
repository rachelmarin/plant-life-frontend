import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addPlant } from '../actions/index';


let id = 0;

class PlantForm extends Component {

    state = {
        title: "",
        light: "",
        temp: "",
        water: "",
        soil: "",
        feed: "",
        tip: ""
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
    
       this.props.addPlant(plant, this.props.history)

    }

    
    render() {
        return (
            <div className='form'>
                <h3>{ this.props.header }</h3>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Name</label>
                    <br/>
                        <input 
                        type="text" 
                        id="title" 
                        name="title"
                        value={ this.state.title } 
                        onChange={this.handleChange}
                        required={true} 

                        />
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="light">Lighting </label>
                    <br/>                    
                        <textarea 
                        id="light" 
                        name="light"
                        value={ this.state.light }
                        onChange={this.handleChange}
                        required={true} 
                        />
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="temp">Tempature</label>
                    <br/>                    
                        <textarea 
                        id="temp" 
                        name="temp"
                        value={ this.state.temp }
                        onChange={this.handleChange}
                        required={true} 
                        />
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <label htmlFor="water">Water</label>
                    <br/>                    
                        <textarea 
                        id="water" 
                        name="water"
                        value={ this.state.water }
                        onChange={this.handleChange}
                        required={true} 
                        />
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="soil">Soil</label>
                    <br/>                    
                        <textarea 
                        id="soil" 
                        name="soil"
                        value={ this.state.soil }
                        onChange={this.handleChange}
                        required={true} 
                        />
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <label htmlFor="feed">Feeding</label>
                    <br/>                    
                        <textarea 
                        id="feed" 
                        name="feed"
                        value={ this.state.feed }
                        onChange={this.handleChange}
                        required={true} 
                        />
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="tip">Tips and Tricks)</label>
                    <br/>                    
                        <textarea 
                        id="tip" 
                        name="tip"
                        value={ this.state.tip }
                        onChange={this.handleChange}
                        required={true} 
                        />
                    </div>
                    <input className="myButton" type="submit" value="Add Plant" />    
                </form>
            </div>
        )
    }
}



export default connect(null, { addPlant } )(PlantForm);