// src/pages/Reservation.js
import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, TimePicker, Select, InputNumber, Card, Modal } from 'antd';
import './styles/Reservation.css';

const { Option } = Select;

const Reservation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    setModalMessage('We received your reservation');
    setModalVisible(true);
  };

  const handleModalOk = () => {
    setModalVisible(false);
  };

  return (
    <div className="reservation-container">
      <Card className="reservation-card">
        <h2 className="reservation-title">Make a Reservation</h2>
        <Form
          name="reservation"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="date"
            label="Appointment Date"
            rules={[{ required: true, message: 'Please select your appointment date!' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="time"
            label="Appointment Time"
            rules={[{ required: true, message: 'Please select your appointment time!' }]}
          >
            <TimePicker use12Hours format="h:mm a" minuteStep={15} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="guests"
            label="Number of Guests"
            rules={[{ required: true, message: 'Please input the number of guests!' }]}
          >
            <InputNumber min={1} max={20} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="occasion"
            label="Occasion"
            rules={[{ required: true, message: 'Please select the occasion!' }]}
          >
            <Select placeholder="Select an occasion">
              <Option value="birthday">Birthday</Option>
              <Option value="anniversary">Anniversary</Option>
              <Option value="business">Business Meeting</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="reservation-form-button">
              Make Your Reservation
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Modal
        title="Reservation Status"
        open={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalOk}
      >
        <p>{modalMessage}</p>
      </Modal>
    </div>
  );
};

export default Reservation;
