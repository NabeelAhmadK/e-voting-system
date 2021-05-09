import React from 'react'
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const input = ({ placeHolder, toolTipLabel }) => {
    return (
        <Input
            placeholder={placeHolder}
            prefix={<UserOutlined className="site-form-item-icon" />}
            suffix={
                <Tooltip title={toolTipLabel}>
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
            }
        />
    )
}


export default input
