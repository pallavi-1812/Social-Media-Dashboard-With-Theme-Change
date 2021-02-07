import ToggleContext from './Context';
import Header from './components/Header';
import Card from './components/Card';
import Heading from './components/Heading';
import OverviewCard from './components/overviewCard';
import { useState } from 'react';

function App() {

  const [checked, setChecked] = useState(false);

  return (
    <ToggleContext.Provider value={{ checked, setChecked }}>
      <div className="container">
        <Header />
        <Card />
        <Heading />
        <OverviewCard />
      </div>
    </ToggleContext.Provider>
  );
}

export default App;
