import React, { useEffect, useState, useMemo } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PalindromeChecker = () => {
  useEffect(() => {
       
    document.title = `Palindrome Checker`;
    

  }, []);

  const [inputText, setInputText] = useState('');
  
  const checkPalindrome = (text) => {
    const cleanedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');
    return cleanedText === reversedText;
  };

  const isPalindrome = useMemo(() => checkPalindrome(inputText), [inputText]);

  return (
    <Container>
      <p>
        <Link to={'/'}>Home</Link>
        <Link to={'/sortingtask'}>Sorting Task</Link>
        <Link to={'/stackapp'}>StackApp</Link>
      </p>

      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <Form id='formPal'>
            <h1>Palindrome Checker</h1>
            <Form.Group id='formPalindrome' controlId="formField">
              <Form.Label>Enter a word, number, or phrase</Form.Label>
              <Form.Control
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </Form.Group>
            {/* <Button variant="primary" disabled={!inputText} block>
              Check Palindrome
            </Button> */}
            {inputText && (
            <Alert variant={isPalindrome ? 'success' : 'danger'} className="mt-3">
              {isPalindrome ? <p className='resultY'>It's Palindrome! 🎉</p> : <p className='resultN'>Not a palindrome. 😕</p>}
            </Alert>
          )}
          </Form> 
        </Col>
      </Row>
    </Container>
  );
};

export default PalindromeChecker;
