import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { Card, Col, Row } from 'antd';
import Accordion from '../../components/accordion'
import Input from '../../components/input';
import Button from '../../components/button';

const questions = [
    {
        title: 'Is providing my CNIC is safe ?',
        answer: 'Yes, CNIC is saved in our system as an encrypted. We will not share your Personal information with anyone.'
    },
    {
        title: 'Can I undo my vote ?',
        answer: 'No, Once the vote is cast it cannot be undone.'
    },
]

const Verification = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userCNIC, setUserCNIC] = useState(null);
    const [oneTimePassword, setOneTimePassword] = useState(null);

    useEffect(() => {
        console.log('in use effect')
    }, [userCNIC]);

    const onIdCardVerification = () => {
        showModal();
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
                            <Input
                                placeHolder='#####-#######-#'
                                toolTipLabel="Enter your CNIC with Dashes(-)"
                                value={userCNIC}
                                onValueChange={setUserCNIC} />
                            <small>We'll not share your CNIC with anyone</small>
                        </div>
                        <div style={{ marginTop: '20px', textAlign: 'right' }}>
                            <Button text="Submit" buttonType="primary" handleClick={onIdCardVerification} />
                        </div>
                    </Card>
                </Col>
            </Row>
            <br />
            <Accordion items={questions} />

            <Modal
                title="Code Verification"
                visible={isModalVisible}
                onOk={handleVerifyOTP}
                onCancel={handleCancel}
                footer={[
                    <Button key="cancel" buttonType="secondary" text="Cancel" handleClick={handleCancel} />,
                    <Button key="submit" buttonType="primary" text="Verify" handleClick={handleVerifyOTP} />
                ]}>
                <p>Please Enter Code that has been sent to your Registered Phone Number </p>

                <div style={{ marginTop: '20px' }}>
                    <Input
                        value={oneTimePassword}
                        onValueChange={setOneTimePassword}
                        placeHolder='Enter OTP'
                        toolTipLabel="Code has been sent to your Registered Phone Number" />
                </div>
            </Modal>
        </div>

    )
}

export default Verification;



// (async() => {
//     await axios.get('anyURL');
// })()