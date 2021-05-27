import React from 'react'
import logoPath from '../../assets/images/smiley.png'

const Tiles = ({ partyName, partyAbbreviation, partyLogo, handleClick }) => {

    return (
        <div className="block" onClick={handleClick}>
            <p className="m-0 p-0">{partyAbbreviation}</p>
            <small>{partyName}</small>
        </div>
    )
}


export default Tiles
