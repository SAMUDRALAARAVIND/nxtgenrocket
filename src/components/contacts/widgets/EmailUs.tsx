import React, { useState } from 'react'
import { Input, Form, Button, notification } from "antd";
import axios from "axios";
const { TextArea } = Input;

const EmailUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (data: any) => {
        setIsSubmitting(true);
        (async function () {
            try {
                const response = await axios("https://contact-service-b9wn.onrender.com/contact/nxtgen/",
                    {
                        method: "POST",
                        data
                    }
                );
                if (response.status >= 200 && response.status < 300) {
                    notification.success({
                        message: "Thanks for contacting..",
                        description: response.data.message
                    });
                }
                else throw new Error(response.data?.message ?? "Something gone wrong")
            }
            catch (error) {
                notification.error({
                    message: "Oops Something went wrong",
                    description: "Oops! we couldn't save your contact please contact the team from the numbers shown at the bottom of the page"
                });
            }
            setIsSubmitting(false);
        })();
    };

    return (
        <section className='contacts'>
            <Form onFinish={handleSubmit} className="text-form" >
                <Form.Item name='name'>
                    <Input placeholder='Enter your Name' required min={3} />
                </Form.Item>
                <Form.Item name="email">
                    <Input placeholder='Email' type='email' required />
                </Form.Item>
                <Form.Item name='contactNumber'>
                    <Input placeholder='Contact Number' required />
                </Form.Item>
                <Form.Item name="message">
                    <TextArea
                        placeholder="Message... (optional)"
                        autoSize={{ minRows: 4, maxRows: 6 }}
                    />
                </Form.Item>
                <Button htmlType='submit' loading={isSubmitting} className='btn'>Get Quote</Button>
            </Form>
        </section>
    )
}

export default EmailUs