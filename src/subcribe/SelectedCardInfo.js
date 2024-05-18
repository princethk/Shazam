import React, { useState, useEffect } from 'react';
import "./subscription.css";
import Alert from '@mui/material/Alert';


import { Stack } from '@mui/material';
const SelectedCardInfo = ({ selectedCard }) => {
  const [price, setPrice] = useState(0);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [cardNumber, setCardNumber] = useState('');

  useEffect(() => {
    if (selectedCard === 'monthly') {
      setPrice(199);
    } else if (selectedCard === '3-month') {
      setPrice(550);
    } else if (selectedCard === 'yearly') {
      setPrice(1850);
    } else {
      setPrice(0);
    }
  }, [selectedCard]);

  const handleButtonClick = () => {
    setIsSuccessful(true);
    setCardNumber('')
  };

  

  return (
    <div >
      <div>
      <h1>Selected Card Info</h1>
      <h2>You selected: {selectedCard}</h2>
      <h2>Your Price: ₹{price}</h2>

      <input
        type='text'
        placeholder='Enter card number'
        className='input-box'
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      </div>
      <div>
      <button className='conformbtn' onClick={handleButtonClick}>click to proceed</button>

      
       {isSuccessful && <Stack className='success' spacing={2} sx={{width: '100%'}}><Alert >
        <h2>Success</h2>
        <p>Your Payment Successfully Done Enjoy Music.</p>
      
        </Alert> </Stack>}
      
      </div>
    </div>
  );
};


export default SelectedCardInfo;
