import React, { useState } from 'react';
import { Modal } from 'antd';
import { Card, Col, Row } from 'antd';

import Input from '../../components/input';
import Button from '../../components/button';

const Verification = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const onIdCardVerification = () => {
        showModal()
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleVerifyOTP = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="site-card-wrapper" style={{ marginTop: '140px', overflowX: 'hidden' }}>
            <Row gutter={16}>
                <Col span={8} push={8}>
                    <Card title="Verification" bordered={true}>
                        Please Enter your CNIC to Vote
                        <div style={{ marginTop: '20px' }}>
                            <Input placeHolder='#####-#######-#'
                                toolTipLabel="Enter your CNIC with Dashes(-)" />
                            <small>We'll not share your CNIC with anyone</small>
                        </div>
                        <div style={{ marginTop: '20px', textAlign: 'right' }}>
                            <Button text="Submit" buttonType="primary" handleClick={onIdCardVerification} />
                        </div>
                    </Card>
                </Col>
            </Row>

            <Modal
                title="Code Verification"
                visible={isModalVisible}
                onOk={handleVerifyOTP}
                onCancel={handleCancel}
                footer={[
                    <Button key="cancel" buttonType="secondary" text="Cancel" handleClick={handleCancel} />,
                    <Button key="submit" buttonType="primary" text="Verify" handleClick={handleVerifyOTP} />
                ]}>
                <p>Please Enter Code that has been sent to your Registered Phone Number</p>

                <div style={{ marginTop: '20px' }}>
                    <Input placeHolder='Enter OTP'
                        toolTipLabel="Code has been sent to your Registered Phone Number" />
                </div>
            </Modal>
        </div>

    )
}

export default Verification;