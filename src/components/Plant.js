import React, { Component } from 'react'

class Plant extends Component {
    state = {
        loading: true,
        plant: null
    }
    
    componentDidMount() {
       const plant = this.props.plants.find( plant => plant.id.toString() === this.props.match.params.id)

       this.setState({
           loading: false,
           plant
       })
    }
    
    render() {
        if(this.state.loading) {
            return <div>loading....</div>
        }

        if(!this.state.plant) {
            return <div>Plant Not Found</div>
        }

        return (
            <div>
                <h1>{ this.state.plant.name }</h1>
                <p>{ this.state.plant.content }</p>
            </div>
        )
    }
}

export default Plant;