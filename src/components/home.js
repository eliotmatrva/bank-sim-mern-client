import React from 'react';
import Card from './card';
import bankLogo from '../assets/bank.png'

export default function Home(){

  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="Welcome to Banco Mal de Mateo"
      title="Banco Mal de Mattito"
      text="Welcome to Matt's Bad Bank. We promise to be responsible with your money!"
      body={(
        <img
          src={bankLogo}
          className="img-fluid"
          alt="this is the bank's logo"
        />
      )}
    />
  );  
}
