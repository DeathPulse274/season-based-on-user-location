import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

class App extends React.Component{
    

    state = { latitude : null, errorMessage : '' }

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
                <SeasonDisplay latitude = {this.state.latitude}/>
            )
        }

        return <Spinner message="Please Accept Location Request"></Spinner>
    }
}

ReactDOM.render(<App/> , document.querySelector('#root'));