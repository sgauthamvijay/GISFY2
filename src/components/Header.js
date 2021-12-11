import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <div>

            <Container className='header'>


                <Link id='1' to="/overview">OVERVIEW</Link>
                <Link id='2' to='"/Formbuilder'>FORMBUILDER</Link>
                <Link id='3' to="/Milestones">MILESTONES</Link>
                <Link id='4' to="/Reporting">REPORTING</Link>
                <Link id='5' to="/">PROPOSAL SUMMARY</Link>

            </Container>

        </div>
    )
}

export default Header

