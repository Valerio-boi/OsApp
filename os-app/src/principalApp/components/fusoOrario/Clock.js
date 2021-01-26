import React from 'react'



class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: new Date()
        };

    }

    render() {

        const tempo = this.state.data.getTime() + this.props.timeZone * 3600 * 1000;
        const data = new Date(tempo);
        return <h2>{data.toLocaleTimeString()} </h2>
    }

    tichettio = () => {

        this.setState({
            data: new Date()
        });

    };

    componentDidMount() {

        console.log("ComponentDidMount");
        this.interval = setInterval(this.tichettio, 1000);

    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
}


export default Clock;