import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // for google map places autocomplete
            address: '',

            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},

            mapCenter: {
                lat: 41.902782,
                lng: 12.496365
            }
        };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        this.setState({ address });
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng);

                // update center state
                this.setState({ mapCenter: latLng });
            })
            .catch(error => console.error('Error', error));
    };

    render() {

        const styleList = {
            border: this.props.changeTema ? "1px solid rgb(255 255 255)" : "1px solid rgb(0 0 0)",
            position: 'absolute',
            width: '100%',
            height: '100%',
          };
        return (
            <div id='googleMaps' style={styleList} >
                <Map 
                    google={this.props.google}
                    initialCenter={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                    center={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                >
                    <Marker
                        position={{
                            lat: this.state.mapCenter.lat,
                            lng: this.state.mapCenter.lng
                        }} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC_x_yVyVytZApcFx0HB12n6FaJ5gko0tA')
})(MapContainer)