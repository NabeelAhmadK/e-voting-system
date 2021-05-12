import React from 'react'
import logoPath from '../../assets/images/smiley.png'

const tiles = ({ partyName, partyAbbreviation, partyLogo, handleClick }) => {

    return (
        <div className="block" onClick={handleClick}>
            <img src={logoPath} alt="Party Logo" />
            <p className="m-0 p-0">{partyAbbreviation}</p>
            <small>{partyName}</small>
        </div>
    )
}


export default tiles
