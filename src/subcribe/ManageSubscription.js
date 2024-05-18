import React, { useState } from 'react';
import SelectedCardInfo from './SelectedCardInfo';
import Fotter from '../components/Fotter';
import Header from '../components/Header';
import "./subscription.css";

const ManageSubscription = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [showSelectedCardInfo, setShowSelectedCardInfo] = useState(false);

    const handleCardClick = (cardId) => {
        setSelectedCard(cardId);
    };

    const handleShowInfoClick = () => {
        setShowSelectedCardInfo(true);
    };

    return (
        <>
       <Header/>
        <div className='container5'>
            <h2>
                SHAZAM WEBAPP SUBSCRIPTION
            </h2>
            <div >
                <div className='subCard' >
                    <SubscriptionCard
                        id="monthly"
                        selected={selectedCard === 'monthly'}
                        onClick={() => handleCardClick('monthly')}
                        monthly="Monthly"
                        price="199"
                    />
                    <SubscriptionCard
                        id="3-month"
                        selected={selectedCard === '3-month'}
                        onClick={() => handleCardClick('3-month')}
                        monthly="3 Month"
                        price="550"
                    />
                    <SubscriptionCard
                        id="yearly"
                        selected={selectedCard === 'yearly'}
                        onClick={() => handleCardClick('yearly')}
                        monthly="Yearly"
                        price="1850"
                    />

                </div>

            </div>
            <div >
                <button className='conformbtn' onClick={handleShowInfoClick}>Confirm Pack</button>
            </div>
            <div>
                {
            showSelectedCardInfo &&  <SelectedCardInfo  selectedCard={selectedCard}/> 
                }
            </div>
        </div>
        <Fotter/>
     </>
    );
};

const SubscriptionCard = ({ id, selected, onClick, monthly, price }) => {
    return (
        <div
        className={`card ${selected ? 'selected' : ''}`}
            onClick={onClick}
        >
            <h1 >{monthly}</h1>
            <h2 >₹{price}</h2>
        </div>
    );
};

export default ManageSubscription;