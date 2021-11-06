import React from "react";
import ReactDOM from "react-dom";
import Loader from './Spinner';
import SeasonDisplay from "./SeasonDisplay";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errorMessage: ''
        }
        console.log('latitude is:', this.state.lat);
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude })
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        )
    }

    componentDidUpdate() {
        console.log('atfer obtaining..latitude is:', this.state.lat);
    }


    render() {

        if (this.state.lat) {
            return <div><SeasonDisplay lat={this.state.lat} /></div>
        }
        else if (this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        return <div><Loader message="Please allow location access to continue" /></div>

    }
}
ReactDOM.render(<App />,
    document.querySelector('#root'));