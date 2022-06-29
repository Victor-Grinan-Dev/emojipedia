import React from 'react';
import axios from 'axios';
import Card from './Card';
import { useState, useEffect } from 'react';

const dbUrl = "http://localhost:8010/emojipedia";

function Emojipedia() {
    const [emojipedia, setEmojipedia] = useState([])

    const readData = () => {
        axios.get(dbUrl).then( database => {
            setEmojipedia(database.data);
        })
    }

    useEffect(() => {
        readData();
    }, [])
  
  return (
    <div style={{
        display: "flex",
        flexDirection: "column"
    }}>  
        <h1>"Emojipedia"</h1>
        <div className="displayCards"
        style={{
            display:"flex",
            flexDirection: "row",
            flexWrap: "wrap"
        }}>
            {emojipedia.map((item) => (
                <Card
                    key={item.id}
                    emoji={item.emoji}
                    name={item.name}
                    meaning={item.meaning}
                />
            ))}
        </div>
    </div>
  )
}

export default Emojipedia;
