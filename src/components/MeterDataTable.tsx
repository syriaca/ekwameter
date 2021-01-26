import React, { useContext } from 'react';
import { MeterContext } from '../context/MeterContext';
import styled from 'styled-components';
import Error from '../components/Error';
import Loader from '../components/Loader';

interface MeterProps {
    data: Array<MeterData>;
}

const StyledTable = styled.table`
    border-collapse: collapse;
    font-weight: ${(props) => props.theme.fontWeights.thin};
    table-layout: fixed;
    text-align: left;
    width: 100%;

    tbody tr:nth-child(odd) {
        background-color: ${(props) => props.theme.colors.grays.lightest};
    }
    
    th {
        color: ${(props) => props.theme.colors.grays.dark};
        background-color: ${(props) => props.theme.colors.grays.medium};
        text-transform: uppercase;
        width: calc(100% / 3);
    }

    th, td {
        padding: ${(props) => props.theme.spacing['4']};
    }
`;

const Table = ({ data }: MeterProps) => {

    const { activeMeter, isLoading, isError } = useContext(MeterContext);
    const isGas: boolean = activeMeter.type === "gas";
    
    return(
        <>        
            {isLoading ? (
                <Loader text={`Chargement de vos données pour le compteur ${isGas ? "de gaz" : "d'électricité"} en cours`} />
                ) : (
                isError ? (
                    <Error text={`Nous avons rencontré un problème lors de la récupération de vos données ${isGas ? "de gaz" : "d'électricité"}`} />
                ) : (
                <StyledTable>
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            {!isGas ?
                                (<>
                                    <th scope="col">Index HP (KWH)</th>
                                    <th scope="col">Index HC (KWH)</th>
                                </>
                                ) : (
                                    <th scope="col">Index M<sup>3</sup></th>
                                )
                            }
                        </tr>
                    </thead> 
                    <tbody>
                        {data.map(item => {
                            return (
                                <tr key={item.id}>
                                    {!isGas ? (
                                        <>
                                            <td>{item.createdAt}</td>
                                            <td>{item.indexhigh}</td>
                                            <td>{item.indexLow}</td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{item.createdAt}</td>
                                            <td>{item.indexHigh}</td>
                                        </>        
                                    )}
                                </tr>
                            );
                        })}
                    </tbody>
                </StyledTable>
            ))}
        </>        
    )
};

export default Table;
