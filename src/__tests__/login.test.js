import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import Login from 'src/pages/loginPage';

// Mocks
jest.mock('axios');
jest.mock('src/store/Context', () => ({
    useFoodCodeContext: () => ({
        pageState: {},
        dispatch: jest.fn()
    })
}));

const Wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

describe('Login Component', () => {
    beforeEach(() => {
        // Clear all mocks before each test
        jest.clearAllMocks();
    });

    it('renders correctly', () => {
        render(<Login />, { wrapper: Wrapper });
        expect(screen.getByText('Sign in')).toBeInTheDocument();
        expect(screen.getByRole('textbox', {name: /email/i})).toBeInTheDocument();
        expect(screen.getByRole('textbox', {name: /password/i})).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Login' })).toBeDisabled();
    });

    // it('enables the login button when form is valid', async () => {
    //     render(<Login />, { wrapper: Wrapper });
    //     await userEvent.type(screen.getByRole('textbox', {name: /email/i}), 'test@example.com');
    //     await userEvent.type(screen.getByRole('textbox', {name: /password/i}), 'Ayushi$01');
    //     await waitFor(() => {
    //         expect(screen.getByRole('button', { name: 'Login' })).not.toBeDisabled();
    //     });
    // });

    // it('handles login button click', async () => {
    //     axios.post.mockResolvedValue({ data: { message: 'Login Successful' } });
    //     render(<Login />, { wrapper: Wrapper });
    //     userEvent.type(screen.getByRole('textbox', {name: /email/i}), 'test@example.com');
    //     userEvent.type(screen.getByRole('textbox', {name: /password/i}), 'Ayushi$01');
    //     // Assume password validator is valid
    //     fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    //     expect(axios.post).toHaveBeenCalledWith('http://localhost:3100/api/v1/cafe/signin', {
    //         email: 'test@example.com',
    //         password: 'Ayushi$01'
    //     });
    // });
});
