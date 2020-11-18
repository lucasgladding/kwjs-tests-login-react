import React from 'react';

import Authentication from '../../services/Authentication';
import Login, { LoginEvent } from './Login';

interface LoginContainerProps {
  authentication?: Authentication;
  onLogin(): void;
}

const LoginContainer: React.FunctionComponent<LoginContainerProps> = ({ 
  authentication = new Authentication(), 
  onLogin 
}) => {
  const handleLoginEvent = (data: LoginEvent) => {
    authentication.authenticate(data);
    onLogin();
  };

  return (
    <Login onLogin={handleLoginEvent} />
  );
};

export default LoginContainer;
