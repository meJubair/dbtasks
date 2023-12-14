import React from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Home() {
  

    return (
        <Container>
            <Form>
                <Link to={'/palindrome'}>Palindrome Checker</Link>
                <Link to={'/sortingtask'}>Sorting Task</Link>
            </Form>
        </Container>
    )};

    export default Home;