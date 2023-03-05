import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

// styles
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isPending, error, online } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, online);
  };

  return (
    <form className='auth-form'>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button className='btn' onClick={handleSubmit} disabled={isPending}>
        {isPending ? 'Logging...' : 'Log in'}
      </button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
}
