import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';
import gasIcon from '../assets/icon-gas.png';
import elecIcon from '../assets/icon-electricity.png';

const StyledButton = styled.button`
    align-items: center;
    background-color: ${(props) => props.theme.colors.grays.light};
    border: none;
    border-radius: ${(props) => props.theme.borderRadius.md};
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    justify-content: space-around;
    padding: ${(props) => props.theme.spacing['2']} ${(props) => props.theme.spacing['4']};
    margin-bottom: ${(props) => props.theme.spacing['4']};

    &:first-child {
        border-radius: ${(props) => props.theme.borderRadius.xl} 0 0 ${(props) => props.theme.borderRadius.xl}; 
    }

    &:last-child {
        border-radius: 0 ${(props) => props.theme.borderRadius.lg} ${(props) => props.theme.borderRadius.xl} 0;
    }

    &:not(:disabled) {
        filter: grayscale(100%);
    }

    &:disabled {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.white};
    }

    &:hover:not(:disabled) {
        cursor: pointer
    }
`;

const ButtonText = styled.span`
    + img {
        margin-left: ${(props) => props.theme.spacing['2']};
    }
`;

const ToggleButton = ({ text, toggleMeter, isActive, dataMeterType }: ToggleButtonProps) =>
    
    <StyledButton
        data-meter-type={dataMeterType}
        disabled={isActive}
        type="button"
        onClick={toggleMeter}    
    >
        <Icon
            altText=""
            src={dataMeterType === "electricity" ? elecIcon : gasIcon}
            height={20}
            width={15}            
        />

        <ButtonText>
            {text}
        </ButtonText>
        
    </StyledButton>;

export default ToggleButton;
