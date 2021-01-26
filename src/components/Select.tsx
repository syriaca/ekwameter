import React, {useState, useContext} from 'react';
import { MeterContext } from '../context/MeterContext';
import Label from './Label';
import styled from 'styled-components';

const StyledSelectContainer = styled.div`
    align-items: center;
    display: inline-flex;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.colors.grays.light};
    border-radius: ${(props) => props.theme.borderRadius.md};
    margin-bottom: 1rem;
    outline: 0;
    position: relative;
    text-align: left;
    width: 100%;

    @media (min-width: ${(props) => props.theme.screens.md}) {
        max-width: 200px;
    }

`;

const StyledSelect = styled.select`
    appearance: none;
    border: 0;
    outline: 0;
    padding: .5rem;
    border-radius: .5rem;
    width: 100%;

     @media (min-width: ${(props) => props.theme.screens.md}) {
        max-width: 200px;
    }
`;

const Arrow = styled.span`
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;    
    border-top: 10px solid ${(props) => props.theme.colors.secondary};
    height: 0; 
    position: absolute;
    right: ${(props) => props.theme.spacing['3']};
    width: 0;
`;

const Select = () => {
    
    const [selectValue, setSelectValue] = useState<string>();
    const { meterYears, handleYearFiltering } = useContext(MeterContext);
    
    return (
        <>
            <Label text="Filter vos relevés par années"/>
            <StyledSelectContainer>
                <Arrow />
                <StyledSelect
                    value={selectValue}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>): void => {
                        setSelectValue(event.target.value);
                        handleYearFiltering(event.target.value);
                    }}>
                    <option value="all"> Toutes les années </option>
                    {meterYears.map((option: any, index: number) => {
                        return (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        )
                    })}
            </StyledSelect>
            </StyledSelectContainer>
        </>    
    );
};

export default Select;
