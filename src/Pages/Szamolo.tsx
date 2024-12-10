import React, { useState } from 'react';

const Szamolo = () => {
    const[elso, setElso] = useState(0);
    const[masodik, setMasodik] = useState(0);
    const[muvjel, setMuvjel] = useState("+");
    const[eredmeny, setEredmeny] = useState("");

    const Szamolas = () =>{
        if(muvjel === "+"){
            setEredmeny(`Eredmény: ${elso + masodik}`)
        }
        else if(muvjel === "-"){
            setEredmeny(`Eredmény: ${elso - masodik}`)
        }
        else if(muvjel === "/" && (masodik !== 0|| elso !== 0)){
            setEredmeny(`Eredmény: ${elso / masodik}`)
        }
        else{
            setEredmeny(`Eredmény: ${elso * masodik}`)
        }
    }
    
    return (
    <body>
        <h1>
            Egyszerű Számológép
        </h1>

        <input type="number"  value={elso} onChange={e => setElso(Number(e.target.value))}/>{" "}
        <select value={muvjel} onChange={e => setMuvjel(e.target.value)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="/">/</option>
            <option value="*">*</option>
        </select>{" "}
        <input type="number"  value={masodik} onChange={e => setMasodik(Number(e.target.value))}/>{" "}
        <button onClick={Szamolas}>Számolás</button>
        <p>{eredmeny}</p>
    </body>
    );
}

export default Szamolo;