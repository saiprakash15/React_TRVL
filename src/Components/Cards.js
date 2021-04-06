import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
    return (
        <div className="cards">
            <h1> Checkout Epic Destination</h1>
            <div className="cards__container">
               <div className="cards__wrapper" >
                 <ul className="cards__item">
                    <CardItem
                    src ="images/img-9.jpg"
                    text="Explore the hidden Waterfall deep inside amazon"
                    label="Adventure"
                    path="/services"
                    
                    />
                    <CardItem
                    src ="images/img-4.jpg"
                    text="Explore the hidden Waterfall deep inside amazon"
                    label="Adventure"
                    path="/services"
                    
                    />
                    <CardItem
                    src ="images/img-2.jpg"
                    text="Explore the hidden Waterfall deep inside amazon"
                    label="Adventure"
                    path="/services"
                    
                    />
                    <CardItem
                    src ="images/img-1.jpg"
                    text="Explore the hidden Waterfall deep inside amazon"
                    label="Adventure"
                    path="/services"
                    
                    />
                 </ul>
               </div>
            </div>
        </div>
    )
}

export default Cards;
