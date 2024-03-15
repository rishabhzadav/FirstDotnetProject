import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container} from 'react-bootstrap'

export const UserShow = () => {
  return <>
       <Container>
           <LinkContainer to='/admin/userlist'>
              <h1 className='botbtn'>Move to USerlist Screen</h1>
           </LinkContainer>
       </Container>
  </>;
};
