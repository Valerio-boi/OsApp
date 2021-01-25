import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

class Calcolatrice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visuale: '',
            operator: '',
            flagOperator: false,
            valoreAppoggio: '0',
            count: []
        }
    }

    render() {
        const buttonStyle = {
            width: '100px',
            borderColor: 'black'
        };



        return (
            <React.Fragment>

                <Container>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Control size="lg" type="text"  value={this.state.visuale} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="info" style={buttonStyle} onClick={() => this.saveData('(')}><h2>(</h2></Button>
                            <Button variant="info" style={buttonStyle} onClick={() => this.saveData(')')}><h2>)</h2></Button>
                            <Button variant="info" style={buttonStyle} onClick={() => this.saveData('%')}><h2>%</h2></Button>
                            <Button variant="info" style={buttonStyle} onClick={() => this.clearCalcolatrice()}><h2>AC</h2></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="light" style={buttonStyle} onClick={() => this.saveData('7')}><h2>7</h2></Button>
                            <Button variant="light" style={buttonStyle} onClick={() => this.saveData('8')}><h2>8</h2></Button>
                            <Button variant="light" style={buttonStyle} onClick={() => this.saveData('9')}><h2>9</h2></Button>
                            <Button variant="info" style={buttonStyle} onClick={() => this.saveData('/')}><h2>÷</h2></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="light" style={buttonStyle} onClick={() => this.saveData('4')}><h2>4</h2></Button>
                            <Button variant="light" style={buttonStyle} onClick={() => this.saveData('5')}><h2>5</h2></Button>
                            <Button variant="light" style={buttonStyle} onClick={() => this.saveData('6')}><h2>6</h2></Button>
                            <Button variant="info" style={buttonStyle} onClick={() => this.saveData('*')}><h2>X</h2></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="light" style={buttonStyle} onClick={() => this.saveData('1')}><h2>1</h2></Button>
                            <Button variant="light" style={buttonStyle} onClick={() => this.saveData('2')}><h2>2</h2></Button>
                            <Button variant="light" style={buttonStyle} onClick={() => this.saveData('3')}><h2>3</h2></Button>
                            <Button variant="info" style={buttonStyle} onClick={() => this.saveData('-')}><h2>-</h2></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="light" style={buttonStyle} onClick={() => this.saveData('0')}><h2>0</h2></Button>
                            <Button variant="light" style={buttonStyle} onClick={() => this.saveData('.')}><h2>.</h2></Button>
                            <Button variant="primary" style={buttonStyle} onClick={() => this.calcolo()}><h2>=</h2></Button>
                            <Button variant="info" style={buttonStyle} onClick={() => this.saveData('+')}><h2>+</h2></Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }


    saveData = (value) => {
        switch(value){
            case '/':
                value = '÷';
                break;
            case '*':
                value = 'x';
                break;    
        }

        if(value !== '÷' && value !== 'x'){
            this.setState({ visuale: this.state.visuale + value })
            this.state.count.push(value);
        }else{
            if(value === '÷'){
                this.setState({ visuale: this.state.visuale + value })
                value = '/'
                this.state.count.push(value);
            }else{
                this.setState({ visuale: this.state.visuale + value })
                value = '*'
                this.state.count.push(value);
            }
        }
    }

    calcolo = () => {
        this.totale = '';
        this.flag = false;
        this.totalInt = 0;
        for (let i = 0; i < this.state.count.length; i++) {
            this.totale = this.totale + this.state.count[i];
        }
        for (let e = 0; e < this.totale.length; e++) {
            console.log('Nel for --> ' + this.totale[e]);
                this.totalInt = eval(this.totale);
        }
        console.log('Operazione ---> ' + this.totale);
        console.log("risultato --->" + this.totalInt)
        this.risultato();        
    }

    clearCalcolatrice = () => {
        this.setState({ visuale: '', count: [] });
    }

    risultato = () => {
        this.setState({ visuale: this.totalInt })
        console.log(this.state.count)
    }
}

export default Calcolatrice;