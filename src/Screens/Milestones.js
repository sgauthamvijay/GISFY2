import React from 'react'
import { Container, Row, Card, Button, Col, Modal, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './screens.css/Milestone.css'
import '../components/Newindow.js'
import { useState } from 'react'

function Milestones() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Header />
            <Container >
                <Table className='Table'>
                    <thead >
                        <tr>
                            <th>Registering youth of Ratnagiri with the program</th>
                            <th>STATUS</th>
                            <th>START DATE</th>
                            <th>END DATE</th>
                            <th>TEAM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>1</td> */}
                            <td>Registering through Adhaar Card</td>
                            <td>Active</td>
                            <td>23/09/2021</td>
                            <td></td>
                        </tr>
                        <tr>
                            {/* <td>2</td> */}
                            <td>Alloting roles within youth groups</td>
                            <td>Active</td>
                            <td>23/09/2021</td>
                        </tr>
                        <tr>
                            {/* <td>3</td> */}
                            <td>Informing and communicating the program details</td>
                            <td>Active</td>
                            <td>23/09/2021</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            <Container>
                <Row >
                    <Col lg={6} className='Row'>
                        <Card >
                            <Card.Body>

                                <Card.Text>
                                    Registering youth of Ratnagiri with the program
                                </Card.Text>
                                <Link to="Newindow">++</Link>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row >
                    <Col lg={6} className='Row'>
                        <Card >
                            <Card.Body>

                                <Card.Text>
                                    Registering youth of Ratnagiri with the program
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row >
                    <Col lg={6} className='Row'>
                        <Card >
                            <Card.Body>

                                <Card.Text>
                                    Registering youth of Ratnagiri with the program
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row >
                    <Col lg={6} className='Row'>
                        <Card >
                            <Card.Body>

                                <Card.Text>
                                    Registering youth of Ratnagiri with the program
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Container> <div className="addcustom" >
                    <h2>+ Add Milestone</h2>

                </div>
                </Container>
            </Row>
        </>
    )
}

export default Milestones
