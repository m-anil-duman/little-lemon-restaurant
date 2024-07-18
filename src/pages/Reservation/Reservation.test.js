// src/components/Reservation.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Reservation from './Reservation';
import { fetchAPI, submitAPI } from '../../components/utils';

jest.mock('../../components/utils');

describe('Reservation Component', () => {
  beforeEach(() => {
    fetchAPI.mockResolvedValue([]);
    submitAPI.mockResolvedValue({});
  });

  test('renders the reservation form', () => {
    render(<Reservation />);
    expect(screen.getByText('Make a Reservation')).toBeInTheDocument();
  });

  test('submits the reservation form successfully', async () => {
    render(<Reservation />);

    const dateInput = screen.getByLabelText('Appointment Date');
    const timeInput = screen.getByLabelText('Appointment Time');
    const guestsInput = screen.getByLabelText('Number of Guests');
    const occasionSelect = screen.getByLabelText('Occasion');
    const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });

    fireEvent.mouseDown(occasionSelect);
    fireEvent.change(dateInput, { target: { value: '2023-12-25' } });
    fireEvent.change(timeInput, { target: { value: '12:00' } });
    fireEvent.change(guestsInput, { target: { value: 4 } });
    fireEvent.click(screen.getByText('Birthday'));

    fireEvent.click(submitButton);

    await waitFor(() => expect(submitAPI).toHaveBeenCalledWith({
      date: '2023-12-25',
      time: '12:00',
      guests: 4,
      occasion: 'birthday',
    }));

  });

  test('displays validation errors if fields are empty', async () => {
    render(<Reservation />);
    const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });

    fireEvent.click(submitButton);

    expect(await screen.findAllByText(/Please select your appointment date!/i)).toHaveLength(1);
    expect(await screen.findAllByText(/Please select your appointment time!/i)).toHaveLength(1);
    expect(screen.getByText('Please input the number of guests!')).toBeInTheDocument();
    expect(screen.getByText('Please select the occasion!')).toBeInTheDocument();
  });
});
