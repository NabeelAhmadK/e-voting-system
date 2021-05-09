import React from 'react'
import { Button } from 'antd';

const button = ({ handleClick, text, buttonType }) => {
    return (
        <Button type={buttonType} onClick={handleClick}>{text}</Button>
    )
}

export default button
