import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.p`
    background-color: ${(props) => props.theme.colors.green.medium};
    border: 1px solid ${(props) => props.theme.colors.green.light};
    border-radius: ${(props) => props.theme.borderRadius.sm};
    color: ${(props) => props.theme.colors.green.dark};
    padding: ${(props) => props.theme.spacing['6']} ${(props) => props.theme.spacing['4']};
`;

const Loader = ({ text }: ErrorProps) =>
    
    <StyledLoader> {text} </StyledLoader>;

export default Loader;
