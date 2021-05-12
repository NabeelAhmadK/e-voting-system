import React from 'react'
import Tiles from '../../components/tiles'
import { Row, Col } from 'antd';

const Vote = () => {

    const handleVoteClick = () => {
        console.log('Hello');
    }

    return (
        <div >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ margin: '20px' }}>
                <Col className="gutter-row" span={6} style={{ marginTop: '20px' }}>
                    <Tiles
                        partyName="Pakistan Tehreek-e-Insaaf"
                        partyAbbreviation="PTI"
                        partyLogo="smiley.png"
                        handleClick={handleVoteClick} />
                </Col >
            </Row>
        </div>
    )
}

export default Vote
