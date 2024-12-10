import React, { useState } from 'react';

const Atvalto = () => {
    const[celsius, setCelsius] = useState(0);
    const[fahren, setFahren] = useState("");
    const[kelvin, setKelvin] = useState("");

    const Valt = () =>{
        setFahren(`${celsius * 1.8 + 32}`);
        setKelvin(`${celsius + 273.15}`);
    }

    return(
        <body>
            <h1>Hőmérséklet Átváltó</h1>
            <p>Adja meg a Celsius hőmérsékletet:</p>
            <input type="number" value={celsius} onChange={e => setCelsius(Number(e.target.value))}/>
            <button onClick={Valt}>Átvált</button>
            <p></p>
            <b><div>{celsius} &deg;C = {fahren} &deg;F</div>
            <p></p>
            <div>{celsius} &deg;C = {kelvin} K</div></b>
        </body>
    );
}


export default Atvalto