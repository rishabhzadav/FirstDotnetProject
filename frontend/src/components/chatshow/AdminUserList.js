import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container } from 'react-bootstrap'

export const AdminUserList = () => {
  return <>
       <Container>
           <LinkContainer to='/admin/userlist'>
              <h1 className='botbtn'>Move to user list Screen</h1>
           </LinkContainer>
       </Container>
  </>;
};
