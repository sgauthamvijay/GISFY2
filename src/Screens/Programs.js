import React from 'react'
import { Col, Container, ListGroup,Row,Button,Table } from 'react-bootstrap'
import Header from '../components/Header'
import './screens.css/programs.css'

function Programs() {
    return (
        <>
        <Header/>
        <Container className='programs' >
           <Row>
                <Col lg={3}>
                    <ListGroup>
                        <ListGroup.Item>Dashboard</ListGroup.Item>
                        <ListGroup.Item>Programs</ListGroup.Item>
                        <ListGroup.Item>Beneficiary</ListGroup.Item>
                        <ListGroup.Item>Events</ListGroup.Item>
                        <ListGroup.Item>My Network</ListGroup.Item>
                        <ListGroup.Item>Invite user +</ListGroup.Item>
                    </ListGroup>
                </Col>
              <Col lg={9}>
                  <h1>Programs</h1> 
                  <Table className='Table'>
                    <thead >
                        <tr>
                            <th>ACTIVE</th>
                            <th>DRAFTS</th>
                            <th>ACHIEVED</th>
                            <th>DATE CREATED</th>
                            <th>MILESTONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>1</td> */}
                            <td>Pathway to progress</td>
                            <td>20% completed</td>
                            <td>23/09/2021</td>
                            <td>2 out of 6 completed</td>
                            <td></td>
                        </tr>
                        <tr>
                            {/* <td>2</td> */}
                            <td>Pathway to progress</td>
                            <td>20% completed</td>
                            <td>23/09/2021</td>
                            <td>2 out of 6 completed</td>
                            <td></td>
                        </tr>
                        <tr>
                            {/* <td>3</td> */}
                            <td>Pathway to progress</td>
                            <td>20% completed</td>
                            <td>23/09/2021</td>
                            <td>2 out of 6 completed</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>

              </Col>
           </Row>

          
        </Container>
            
        </>
    )
}

export default Programs
