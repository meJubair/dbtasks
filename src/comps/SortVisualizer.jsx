import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

const SortVisualizer = () => {
  useEffect(() => {
    
    document.title = `Sorting Visualizer`;

    }, []);



  const [inputArray, setInputArray] = useState([]);
  const [sortedArrayBubble, setSortedArrayBubble] = useState([]);
  const [sortedArraySelection, setSortedArraySelection] = useState([]);

  useEffect(() => {
    handleSortClick();
  }, [inputArray]);
  
  const handleInputChange = (event) => {
    const newArray = event.target.value
      .split(',')
      .map((item) => item.trim())
      .filter((item) => /^[0-9]+(\.[0-9]+)?$/.test(item)) // Check if the input is a valid number
      .map((item) => parseFloat(item));
  
    setInputArray(newArray);
  };

  const bubbleSort = (array) => {
    const n = array.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (array[i] > array[i + 1]) {
          const temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return array;
  };

  const selectionSort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }
    return array;
  };

  const handleSortClick = () => {
    const bubbleSortedArray = bubbleSort([...inputArray]);
    setSortedArrayBubble(bubbleSortedArray);

    const selectionSortedArray = selectionSort([...inputArray]);
    setSortedArraySelection(selectionSortedArray);
  };

  /* const isPalindrome = useMemo(() => checkPalindrome(inputArray), [inputArray]); */

  return (
    <Container>

      <p>
      <Link to={'/'}>Home</Link>
      <Link to={'/palindrome'}>Palindrome Checker</Link>
      </p>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <Form id='formPal'>
      <h1>Sorting Visualizer</h1>
      
      <Form.Group id='formPalindrome' controlId="formField">
              <Form.Label>Enter numbers separated by commas</Form.Label>
              <Form.Control
                type="text" 
                onChange={(event) => { handleInputChange(event); handleSortClick(); }}
              />
      </Form.Group>

      {/* <label>
        Enter numbers separated by commas: 
        <input type="text" onChange={(event) => { handleInputChange(event); handleSortClick(); }} />
      </label> */}
      {/* <button onClick={handleSortClick}>Sort</button> */}

      {inputArray && (
            <Alert /* variant={isPalindrome ? 'success' : 'danger'} */ className="mt-3">
              Bubble Sort: {sortedArrayBubble.join(',')}
              {/* {isPalindrome ? <p className='resultY'>It's Palindrome! 🎉</p> : <p className='resultN'>Not a palindrome. 😕</p>} */}
            </Alert>
      )}

      {inputArray && (
            <Alert /* variant={isPalindrome ? 'success' : 'danger'} */ className="mt-3">
              Selection Sort: {sortedArraySelection.join(',')}
              {/* {isPalindrome ? <p className='resultY'>It's Palindrome! 🎉</p> : <p className='resultN'>Not a palindrome. 😕</p>} */}
            </Alert>
      )}
      {/* <div>
        <h2>Bubble Sort:</h2>
        <p>{sortedArrayBubble.join(',')}</p>
      </div>

      <div>
        <h2>Selection Sort:</h2>
        <p>{sortedArraySelection.join(',')}</p>
      </div> */}
      </Form> 
        </Col>
      </Row>
    </Container>
  );
};

export default SortVisualizer;