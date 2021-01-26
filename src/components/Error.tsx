import React from 'react';
import styled from 'styled-components';

const StyledError = styled.p`
    background-color: ${(props) => props.theme.colors.red.light};
    border: 1px solid ${(props) => props.theme.colors.red.medium};
    border-radius: ${(props) => props.theme.borderRadius.sm};
    color: ${(props) => props.theme.colors.red.dark};
    padding: ${(props) => props.theme.spacing['6']} ${(props) => props.theme.spacing['4']};
`;

const Error = ({ text }: ErrorProps) =>
    
    <StyledError> {text} </StyledError>;

export default Error;
