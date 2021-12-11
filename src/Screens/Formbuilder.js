import React from 'react'
import { Container, Row, Card, Button, Col } from 'react-bootstrap'
import Header from '../components/Header'
import './screens.css/Formbuilder.css'

function Formbuilder() {
    return (
        <Container  >
            <Header />
            <Row>
                <Col lg={6} sm={12} md={2}>
                    <Row className='heading'>
                        <h3>Build a beneficiary data collection form</h3>
                        <h6>Create a form for field agents to use while collecting beneficiary information</h6>
                    </Row>
                    <Row>
                        <strong>Mandatory</strong>
                    </Row>

                    <Row>
                        <Container className='Cards'>
                            <Card >
                                <Card.Body>
                                    <Card.Title>Personal Information</Card.Title>
                                    <Card.Text>
                                        Basic details, Occupation, Contact,Address
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card className='Card1'>
                                <Card.Body>
                                    <Card.Title>Education History</Card.Title>
                                    <Card.Text>
                                        Eduation Status,School, College,Highest Degree/Class
                                    </Card.Text>

                                </Card.Body>
                            </Card >
                            <Card className='Card2'>
                                <Card.Body>
                                    <Card.Title>Financial Information</Card.Title>
                                    <Card.Text>
                                        Income Details,Bank Details
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card className='Card3'>
                                <Card.Body>
                                    <Card.Title>Other Details</Card.Title>
                                    <Card.Text>
                                        ID Image,Reference Image, Self Image, Training Session Video etc
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Container>
                    </Row>
                    <Row>
                        <h1>   <strong>Custom</strong></h1>
                    </Row>

                    <Row>
                        <Container className='Cards'>
                            <Card >
                                <Card.Body>
                                    <Card.Title>Health</Card.Title>
                                    <Card.Text>
                                        Family health,Personal Health,,Medical Allergies,Childhood Dieseases
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card className='Card1'>
                                <Card.Body>
                                    <Card.Title>Asset Ownership</Card.Title>
                                    <Card.Text>
                                        White goods,Vehicles,Land,House,Cattle
                                    </Card.Text>

                                </Card.Body>
                            </Card >
                            <Card className='Card2'>
                                <Card.Body>
                                    <Card.Title>Access To Services</Card.Title>
                                    <Card.Text>
                                        Electricity,Data,Gas,Water,Healthcare,School,Govt Schemes
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card className='Card3'>
                                <Card.Body>
                                    <Card.Title>Other Details</Card.Title>
                                    <Card.Text>
                                        ID Image,Reference Image, Self Image, Training Session Video etc
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Container>
                    </Row>

                    <Row>
                        <Container> <div className="addcustom" >
                            <h2>+ Add Custom Section</h2>

                        </div>
                        </Container>
                    </Row>
                </Col>

            </Row>
           

             
                  
               
       



        </Container>

    )
}

export default Formbuilder


