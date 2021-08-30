import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        votes : 0
    }
}

incrementNumberOfPets = () => {
  this.setState({
      votes : this.state.votes + 1  
  })
}



  render() {
    
    return (
      <div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.imageUrl} onClick={this.incrementNumberOfPets}/>
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    ❤️ =  {this.state.votes} 
    </Card.Text>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    
  </Card.Body>
</Card>










        
      </div>















    )
  }
}

export default HornedBeasts;