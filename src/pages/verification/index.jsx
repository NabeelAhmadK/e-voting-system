import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { Card, Col, Row } from 'antd';
import Accordion from '../../components/accordion'
import Input from '../../components/input';
import Button from '../../components/button';
import DropDown from '../../components/dropdown';

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

const gender = [
    {
        label: 'Male',
        value: 'm'
    },
    {
        label: 'Female',
        value: 'f'
    },
    {
        label: 'Other',
        value: 'x'
    }
]
const Verification = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userCNIC, setUserCNIC] = useState(null);
    const [selected, setSelected] = useState(gender[0]);
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

    const handleVerifyOTP = (event) => {
        setIsModalVisible(false);

        event.preventDefault();

        window.history.pushState({}, '', '/vote')

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="site-card-wrapper" style={{ marginTop: '140px', overflowX: 'hidden' }}>
            <Row gutter={16}>
                <Col span={8} push={8}>
                    <Card title="Verification" bordered={true}>
                        <div className="field">
                            <label className="label textBold">Please Enter your CNIC to Vote</label>
                            <div >
                                <Input
                                    placeHolder='#####-#######-#'
                                    toolTipLabel="Enter your CNIC with Dashes(-)"
                                    value={userCNIC}
                                    onValueChange={setUserCNIC} />
                                <small>We'll not share your CNIC with anyone</small>
                            </div>
                        </div>
                        <div className="mt-20">
                            <DropDown
                                selected={selected}
                                onSelectChange={setSelected}
                                options={gender}
                                label="Select a Gender" />
                        </div>
                        <div className="mt-20" style={{ textAlign: 'right' }}>
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