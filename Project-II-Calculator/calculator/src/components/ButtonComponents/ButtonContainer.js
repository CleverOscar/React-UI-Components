import React from 'react';
import './Button.css';

const ButtonContainer = props => {
return (
<div className={`btn-box ${props.className}`}>
  {props.children}
</div>
);
};

export default ButtonContainer;
