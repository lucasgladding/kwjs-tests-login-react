import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Login from './Login';

describe('Login', () => {
  it('sends the login event with the form data', () => {
    const onLogin = jest.fn();
    const data = {
      username: 'lucas',
      password: 'password',
    };
    
    render(<Login onLogin={onLogin} />);
    userEvent.type(screen.getByLabelText('Username'), data.username);
    userEvent.type(screen.getByLabelText('Password'), data.password);
    userEvent.click(screen.getByText('Login'));
    
    expect(onLogin).toHaveBeenCalledWith(data);
  });
});
