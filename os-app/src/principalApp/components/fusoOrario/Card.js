import React from 'react'
import Card from 'react-bootstrap/Card'

import Alert from 'react-bootstrap/Alert'

class PersonalCard extends React.Component {



    render() {
        return this.clock();
        
    }

    clock() {
        const allertForTime =[
            'success',
          ].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
              {this.props.testo}
            </Alert>
          ));
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {this.props.national} />
                <Card.Body>
                    <Card.Title> <h2>{this.props.titolo}</h2> </Card.Title>
                    <Card.Text>
                       {allertForTime}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }

}

export default PersonalCard;

