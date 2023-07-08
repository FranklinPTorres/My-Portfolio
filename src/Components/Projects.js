import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import picture1  from './images/pro1.png'
import picture2  from './images/pro2.png'
import picture3  from './images/pro3.png'
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Projets() {
  return (
    <Container className='fluid'>
   <div className='row'>
     <Col> <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={picture1} id='proImg' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    </Col>

    <Col>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={picture2} id='proImg' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

<Col>
<Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={picture3} id='proImg' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>

   </div>
   </Container>
   
  );
}

export default Projets;