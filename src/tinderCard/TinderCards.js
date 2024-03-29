import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css'
import axios from '../axios';

export default function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/tinder/cards");
            setPeople(req.data);
        }
        fetchData();
    }, [])

    const swiped = (direction, nameToDelete) =>{
        console.log("removing:" + nameToDelete);
        // setLastDirection (direction);
    };

    const outOfFrame =(name) => {
        console.log(name + "left the screen!");
    };


  return (
    <div className='tinderCards'>
    
        <div className='tinderCards__cardContainer'>
      
            {/* Start Preloader */}
            <div class="spinner-border m-5" role="status">
                <span class="sr-only">Loading...</span>
            </div>  
            {/* End Preloader */}

            {people.map((person)=>(
                <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir)=> swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                        style={{backgroundImage:   `url(${person.imgUrl})`}}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>        
    </div>
  )
}
