import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.01rem solid var(--mainBlue);
border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--mainBlue)"};
color: ${prop => prop.cart ? "var(--mainYellow)" : "var(--mainBlue)"};
color: ${prop => prop.contShopping ? "var(--mainBlue)" : null };
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: poiner;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in;
overflow: hidden;

&:hover {
    background: ${prop => prop.cart ? "var(--mainYellow)" : "var(--mainBlue)"};
    color: ${prop => prop.cart ? "var(--mainBlue)" : "var(--lightBlue)"};
    
}
&:focus {
    outline: none;
}
`