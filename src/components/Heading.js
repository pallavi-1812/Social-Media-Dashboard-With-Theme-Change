import React, { useContext } from 'react';
import ToggleContext from '../Context';

const Heading = () => {

    const { checked } = useContext(ToggleContext);

    return <div className={`overviewHead ${checked ? "light" : ""}`}><p>Overview-Today</p></div>;
}

export default Heading;