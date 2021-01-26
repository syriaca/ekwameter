import React, { useContext } from 'react';
import { MeterContext } from './context/MeterContext';
import Logo from './assets/logo.png';
import Panel from './components/Panel';
import Heading from './components/Heading';
import MeterDataTable from './components/MeterDataTable';
import MeterDataFilter from './components/MeterDataFilter';

const App = () => {

  const { metersData, activeFilter, activeMeter } = useContext(MeterContext);

  return (
    <>
      <header>
        <figure>
            <img alt="logo ekwameter" width="300" src={Logo} />
        </figure>
      </header>
      <main>
        <Panel>
          <Heading tag={"h2"}>
            Relevé de votre compteur {activeMeter.type === "gas" ? "de gaz" : "d'électricité"} {activeFilter !== "all" ? `pour l'année ${activeFilter}` : `pour toutes les périodes` }
          </Heading>
          <MeterDataFilter />
          <MeterDataTable data={metersData} />   
        </Panel>    
      </main>     
    </>
  );
}

export default App;
