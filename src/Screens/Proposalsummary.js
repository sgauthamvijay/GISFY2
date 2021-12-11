import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Header from '../components/Header'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import './screens.css/proposalsummary.css'


function Proposalsummary() {
    return (
        <>
            <Header />
            
            <Container>
         
                <Row >

                    <Col lg={3} >
                        <Card className='Cardproposal' >

                            <Card.Body>
                                <Card.Title><strong>About</strong></Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Title><strong>Duration</strong></Card.Title>
                                <Card.Text>
                                    24 Months
                                </Card.Text>
                                <Card.Title><strong>Beneficiary</strong></Card.Title>
                                <Card.Text>
                                    <Card.Title>
                                        <h6>Target category</h6>

                                    </Card.Title>
                                    <Card.Title>
                                        <h6>Age range</h6>
                                        <h6>18-32 years</h6>

                                    </Card.Title>
                                    <Card.Title>
                                        <h6>Total number planned</h6>
                                        <h6>10,000</h6>

                                    </Card.Title>
                                    <Card.Title>
                                        <h6>Location</h6>

                                        <h6>Raigad,Maharashtra,India</h6>

                                    </Card.Title>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col lg={9}>
                        <Card className='cardproposal2' >

                            <Card.Body>
                                <Card.Title>Context</Card.Title>
                                <Card.Text>
                                    <strong>Tell us about the problems faced by the community/individual targetd and their needs?</strong>
                                
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    

                                    <h5><strong>What is unique about this program's approach with regards to the forementioned needs?</strong></h5>
                                </Card.Text>

                                <Card.Title>Key Highlights</Card.Title>
                                <Card.Text>
                                    <h5><strong>Tell us about some of the key features,hightlights,approached and goals that this program aims to achieve</strong></h5>

                                </Card.Text>
                            </Card.Body>
                        </Card>


                    </Col>

                </Row>

                <Row className='Next'>
                    <h1>Team</h1>
                    <Col>

                        <Card style={{ width: '35rem' }}>
                            <Card.Body>
                                <Card.Title>John Doe</Card.Title>

                                <Card.Text>
                                    JohnDoe@xyz.com
                                </Card.Text>
                                <Card.Text>
                                    +91-9954678999
                                </Card.Text>
                                <Card.Text>
                                    Adhaar No|123456789123
                                </Card.Text>
                            </Card.Body>
                        </Card>




                    </Col>
                    <Col>

                        <Card style={{ width: '35rem' }}>
                            <Card.Body>
                                <Card.Title>John Doe</Card.Title>

                                <Card.Text>
                                    JohnDoe@xyz.com
                                </Card.Text>
                                <Card.Text>
                                    +91-9954678999
                                </Card.Text>
                                <Card.Text>
                                    Adhaar No|123456789123
                                </Card.Text>
                            </Card.Body>
                        </Card>





                    </Col>


                </Row>
                <Row className='Nextt'>
                    <Col>

                        <Card style={{ width: '35rem' }}>
                            <Card.Body>
                                <Card.Title>John Doe</Card.Title>

                                <Card.Text>
                                    JohnDoe@xyz.com
                                </Card.Text>
                                <Card.Text>
                                    +91-9954678999
                                </Card.Text>
                                <Card.Text>
                                    Adhaar No|123456789123
                                </Card.Text>
                            </Card.Body>
                        </Card>





                    </Col>
                    <Col>

                        <Card style={{ width: '35rem' }}>
                            <Card.Body>
                                <Card.Title>John Doe</Card.Title>

                                <Card.Text>
                                    JohnDoe@xyz.com
                                </Card.Text>
                                <Card.Text>
                                    +91-9954678999
                                </Card.Text>
                                <Card.Text>
                                    Adhaar No|123456789123
                                </Card.Text>
                            </Card.Body>
                        </Card>





                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Proposalsummary
