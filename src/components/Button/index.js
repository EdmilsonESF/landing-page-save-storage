import React from 'react';

import { Container } from './styles';

const Button = (props) => (
  <Container type="button" style={{background: props.colorBtn}}  >
    {props.children}
  </Container>
);

export default Button;