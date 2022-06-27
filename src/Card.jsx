import React from 'react'

function Card({name, emoji, meaning}) {
  return (
    <div>
        <div>
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
            </div>
    </div>
  )
}

export default Card;