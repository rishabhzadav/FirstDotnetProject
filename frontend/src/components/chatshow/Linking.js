import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container } from 'react-bootstrap'

export const Linking = () => {
  return <>
       <Container>
           <LinkContainer to='/login'>
              <h1 className='botbtn'>Move to login</h1>
           </LinkContainer>
       </Container>
  </>;
};
