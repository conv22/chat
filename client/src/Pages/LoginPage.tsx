import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('login');
  return (
    <div>
      <Switcher setCurrentPage={setCurrentPage} />
      {currentPage === 'login' ? <Login /> : <Register />}
    </div>
  );
};

// Switcher

interface switcherProps {
  setCurrentPage(title: string): void;
}

const Switcher: React.FC<switcherProps> = ({ setCurrentPage }) => {
  return (
    <div>
      <button onClick={() => setCurrentPage('login')}>Login</button>
      <button onClick={() => setCurrentPage('register')}>Register</button>
    </div>
  );
};

//Auth pages

const Register: React.FC = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitHandler = () => {
    console.log(form);
  };
  return (
    <div>
      <h1> Register form</h1>
      <Form changeHandler={changeHandler} />
      <button onClick={submitHandler}>Accept</button>
    </div>
  );
};

const Login: React.FC = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitHandler = () => {
    console.log(form);
  };
  return (
    <div>
      <h1>Login form</h1>
      <Form changeHandler={changeHandler} />
      <button onClick={submitHandler}>Accept</button>
    </div>
  );
};

// Form

interface formProps {
  changeHandler(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Form: React.FC<formProps> = ({ changeHandler }) => {
  return (
    <form>
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        name='username'
        id='username'
        onChange={changeHandler}
      />
      <label htmlFor='password'>Username</label>
      <input
        type='password'
        name='password'
        id='password'
        onChange={changeHandler}
      />
    </form>
  );
};

export default LoginPage;
