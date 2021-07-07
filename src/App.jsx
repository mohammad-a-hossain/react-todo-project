import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import {Container,Row,Col} from 'reactstrap';
import Todos from './components/todo';

 function App()  {
  return (
          <Container className='my-3'>
            <Row>
              <Col>
             <Todos></Todos>
         
              </Col>
             
            </Row>

          </Container>
    
  )
}
export default App