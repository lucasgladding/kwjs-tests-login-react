import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LoginContainer from './index';

describe('Login container', () => {
  it('submits the authentication request', () => {
    const authentication = {
      authenticate: jest.fn(),
    };
    const onLogin = jest.fn();
    const data = {
      username: 'lucas',
      password: 'password',
    };
    
    render(<LoginContainer authentication={authentication} onLogin={onLogin} />);
    userEvent.type(screen.getByLabelText('Username'), data.username);
    userEvent.type(screen.getByLabelText('Password'), data.password);
    userEvent.click(screen.getByText('Login'));
    
    expect(authentication.authenticate).toHaveBeenCalledWith(data);
    expect(onLogin).toHaveBeenCalled();
  });
});
