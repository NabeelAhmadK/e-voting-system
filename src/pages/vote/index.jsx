import React from 'react'
import Tiles from '../../components/tiles'
import Input from '../../components/input'
import { Row, Col } from 'antd';
import Search from '../../components/search';

const PartyList = [
    {
        partyName: 'Pakistan Tehreek-e-Insaaf',
        partyAbbreviation: 'PTI'
    },
    {
        partyName: 'Pakistan Muslim League-N',
        partyAbbreviation: 'PMLN'
    },
    {
        partyName: 'Pakistan People Party',
        partyAbbreviation: 'PPP'
    },
    {
        partyName: 'Tehreek-e- Labbaik Pakistan',
        partyAbbreviation: 'TLP'
    },
]

const Vote = () => {
    const handleVoteClick = (index) => {
        console.log('Hello', index);
    }

    const renderedTiles = PartyList.map((party, index) => {
        return <Col className="gutter-row" span={6} style={{ marginTop: '20px' }}>
            <Tiles
                key={index}
                partyName={party.partyName}
                partyAbbreviation={party.partyAbbreviation}
                partyLogo="smiley.png"
                handleClick={() => handleVoteClick(party.partyName)} />
        </Col>
    })

    return (
        <div >
            <div gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ margin: '20px' }}>
                <Search />
            </div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ margin: '20px' }}>
                {renderedTiles}
            </Row>
        </div >
    )
}

export default Vote
