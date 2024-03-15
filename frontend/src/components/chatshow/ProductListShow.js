import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container} from 'react-bootstrap'

export const ProductListShow = () => {
  return <>
       <Container>
           <LinkContainer to='/admin/productlist'>
              <h1 className='botbtn'>Move to productlist Screen</h1>
           </LinkContainer>
       </Container>
  </>;
};
