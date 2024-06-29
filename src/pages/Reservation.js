import React, { useState, useEffect } from 'react';
import { Form, Button, DatePicker, Select, InputNumber, Card, Modal } from 'antd';
import moment from 'moment';
import './styles/Reservation.css';
import { fetchAPI, submitAPI } from '../components/utils';
import { CustomTimePicker } from '../components/CustomTimePicker';

const { Option } = Select;

const Reservation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [reservedTimes, setReservedTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    if (selectedDate) {
      fetchReservedTimes(selectedDate);
    }
  }, [selectedDate]);

  const fetchReservedTimes = async (date) => {
    setLoading(true);
    const reserved = await fetchAPI(date);
    setReservedTimes(reserved);
    setLoading(false);
  };

  const onFinish = async (values) => {
    const newReservation = {
      date: values.date.format('YYYY-MM-DD'),
      time: moment(values.time, 'HH:mm').format('HH:mm'),
      guests: values.guests,
      occasion: values.occasion,
    };
    await submitAPI(newReservation,setLoading);
    setModalMessage('We received your reservation');
    setModalVisible(true);
    fetchReservedTimes(newReservation.date);
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
            <DatePicker
              style={{ width: '100%' }}
              onChange={(date) => setSelectedDate(date)}
            />
          </Form.Item>
          <Form.Item
            name="time"
            label="Appointment Time"
            rules={[{ required: true, message: 'Please select your appointment time!' }]}
          >
            <CustomTimePicker
              startTime="09:00"
              endTime="23:00"
              reservedTimes={reservedTimes}
            />
          </Form.Item>
          <Form.Item
            name="guests"
            label="Number of Guests"
            rules={[{ required: true, message: 'Please input the number of guests!'}]}
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
            <Button type="primary" htmlType="submit" className="reservation-form-button" loading={loading}>
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
