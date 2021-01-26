import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
    align-items: center;
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    font-weight: ${(props) => props.theme.fontWeights.light};
    margin-top: 0;
`;

const Heading = ({ children, tag }: HeadingProps) =>
    
    <StyledHeading as={tag}> {children} </StyledHeading>;
    
export default Heading;
