import React from 'react'
import { Button, Container, Row ,Col,Image} from 'react-bootstrap'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Header from '../components/Header'
import "./screens.css/Overview.css"





function Overview() {
    return (
        <>
            <Header />
            <Container className='Cards'>
                <Row>
                    <Card style={{ width: '35rem' }} className='card1'>
                        <Card.Body>
                            <Card.Title>Set up tasks</Card.Title>

                            <Card.Text>

                                Add tasks to start tracking program data



                            </Card.Text>

                        </Card.Body>

                    </Card>

                    <Card style={{ width: '35rem' }} className='card2'>
                        <Card.Body>
                            <Card.Title>Set up tasks</Card.Title>

                            <Card.Text>

                                Add tasks to start tracking program data



                            </Card.Text>

                        </Card.Body>

                    </Card>
                </Row>
            </Container>

            <Row><h1>Program Overview</h1>
            <Image src="bargraph.jpg/100px250" fluid />


                </Row>
            <bargraph />
        </>
    )
}

export default Overview
