import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.img`
    height: ${props => props.height};
    width: ${props => props.width};
    margin-right: ${(props) => props.theme.spacing['2']};
`;

const Icon = ({ altText, width, height, src }: IconProps) =>
    
    <StyledIcon
        alt={altText}
        width={width}
        height={height}
        src={src}
    />;

export default Icon;
