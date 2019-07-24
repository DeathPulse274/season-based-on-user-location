import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = { latitude : null, errorMessage : ''};

    }

    //Works same as constructor
    componentDidMount(){
        
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude : position.coords.latitude}),
            (err) => this.setState({ errorMessage: err.message})
            
            );
    }

    //React says we have to define render
    render () {
        if(this.state.errorMessage && !this.state.latitude){
            return (
                <div>Error: {this.state.errorMessage}</div>
            );
        }

        if(!this.state.errorMessage && this.state.latitude){
            return (
                <div>Latitude : {this.state.latitude}</div>
            )
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(<App/> , document.querySelector('#root'));