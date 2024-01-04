import React, {useEffect} from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Home() {
    useEffect(() => {
       
        document.title = `DB Tasks`;
        
    
      }, []);

    return (
        <Container>
            <Form>
                <Link to={'/palindrome'}>Palindrome Checker</Link>
                <Link to={'/sortingtask'}>Sorting Task</Link>
                <Link to={'/stackapp'}>Simple Stack App</Link>
            </Form>
        </Container>
    )};

    export default Home;