import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container} from 'react-bootstrap'

export const Cartshow = () => {
  return <>
       <Container>
           <LinkContainer to='/cart'>
              <h1 className='botbtn'>Move to cart Screen</h1>
           </LinkContainer>
       </Container>
  </>;
};
