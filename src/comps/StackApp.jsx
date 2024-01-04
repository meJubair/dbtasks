import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form, FormControl, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const StackApp = () => {
  useEffect(() => {
       
    document.title = `Simple Stack App`;
    

  }, []);
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const pushToStack = () => {
    if (inputValue.trim() !== '') {
      setStack([...stack, inputValue]);
      setInputValue('');
    }
  };

  const popFromStack = () => {
    if (stack.length > 0) {
      const newStack = [...stack];
      newStack.pop();
      setStack(newStack);
    }
  };

  return (
    <Container className="stack-app">

      <p>
        <Link to={'/'}>Home</Link>
        <Link to={'/sortingtask'}>Sorting Task</Link>
        <Link to={'/palindrome'}>PalindromeChecker</Link>
      </p>

      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
      <Form id='formPal'>
      <h1 className="text-center">Stack App</h1>
      <Form.Group id='formPalindrome' controlId="formField">
      <Row className="mb-3">
        <Col xs={8}>
          <InputGroup>
            <FormControl
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter value"
            />
          </InputGroup>
        </Col>
        <Col xs={2}>
          <Button variant="primary" onClick={pushToStack}>Push</Button>
        </Col>
        <Col xs={2}>
          <Button variant="danger" onClick={popFromStack}>Pop</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="text-center">Stack:</h2>
          <ListGroup>
            {stack.map((item, index) => (
              <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      </Form.Group>
      </Form>
      </Col>
      </Row>

    </Container>
  );
};

export default StackApp;
