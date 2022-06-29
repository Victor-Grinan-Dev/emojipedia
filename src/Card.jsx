import React from 'react'

function Card({name, emoji, meaning}) {
  return (
    <div style={{width:350, padding:20, margin:10,backgroundColor: "#A9D2FE", display: "flex", flexDirection:"column", borderRadius:10, textShadow:"0 0 10px #000", boxShadow: "5px 5px 10px #000"}}>
        <div>
            <h1>{emoji}</h1>
        </div>
        <div>
            <h3>{name}</h3>
        </div>
        <div>
            <h5>{meaning}</h5>
        </div>
    </div>
  )
}

export default Card;

/*
<dl>
                    <dt>
                        <span role="img" aria-label={name}>
                            {emoji}
                        </span>
                        <span>
                            {name}
                        </span>
                    </dt>
                    <dd>
                        {meaning}
                    </dd>
                </dl>
*/