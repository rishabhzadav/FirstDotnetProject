import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

export const ProfileShow = () => {
  return <>
       <Container>
           <LinkContainer to='/profile'>
              <h1 className='botbtn'>see profile</h1>
           </LinkContainer>
       </Container>
  </>;
};
