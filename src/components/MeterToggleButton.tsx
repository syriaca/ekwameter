import React, { useContext } from 'react';
import styled from 'styled-components';
import ToggleButton from './ToggleButton';
import Label from './Label';
import { MeterContext } from '../context/MeterContext';

const FlexContainer = styled.div`    
    display: flex;
`;

const MeterToggleButton = () => {

    const { meter, activeMeter, toggleMeterType } = useContext(MeterContext);

    return (
        <>
            <Label text="Votre type de compteur"/>
            <FlexContainer>
                {meter.map((type: string, index: number) => {
                    return (
                            <ToggleButton
                                dataMeterType={type}
                                isActive={type === activeMeter.type}
                                key={index}
                                text={type !== "gas" ? "électricité" : "gaz"}
                                toggleMeter={toggleMeterType}
                            />
                        )
                    })}
            </FlexContainer>
        </>
    )
};

export default MeterToggleButton;
