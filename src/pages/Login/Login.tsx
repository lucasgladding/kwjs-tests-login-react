import React, { useState } from 'react';

export interface LoginEvent {
  username: string;
  password: string;
}

interface LoginProps {
  onLogin(event: LoginEvent): void;
}

const Login: React.FunctionComponent<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    const event = { username, password };
    onLogin(event);
  };

  return (
    <div>
      <div>
        <input aria-label="Username" value={username} onChange={({ target: { value }}) => setUsername(value)} />
      </div>
      <div>
        <input aria-label="Password" type="password" value={password} onChange={({ target: { value } }) => setPassword(value)} />
      </div>
      <div>
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
