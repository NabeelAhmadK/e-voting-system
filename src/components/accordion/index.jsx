import { React, Fragment, useState } from 'react'
import PropTypes from 'prop-types'

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return <Fragment key={item.title}>
            <div
                className={`title ${active}`}
                onClick={() => onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.answer}</p>
            </div>
        </Fragment>
    })

    return (
        <div type="flex" justify="center" align="middle" >
            <div className="ui styled accordion" style={{ textAlign: 'left' }}>
                {renderedItems}
            </div>
        </div>
    )
}


Accordion.propTypes = {
    items: PropTypes.array
}

export default Accordion

