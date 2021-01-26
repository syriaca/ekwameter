import React from 'react';
import Select from './Select';
import styled from 'styled-components';
import MeterToggleButton from './MeterToggleButton';

const Section = styled.section`
    @media (min-width: ${(props) => props.theme.screens.md}) {
        display: flex;
        
        div:first-child {
            margin-right:${(props) => props.theme.spacing['4']};
        }
    }
`;

const MeterDataFilter = () => {

    return (
        <Section>
            <div>
                <MeterToggleButton />
            </div>
            <div>
                <Select />
            </div>
        </Section>
    )
};

export default MeterDataFilter;
