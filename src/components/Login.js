// Importando as imagens
import thiagoPhoto from '../images/thiago.png';
import vitoriaPhoto from '../images/vitoria.jpeg';

import React, { useState } from 'react';
import './Login.css';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const users = {
    'vitoria.ribeiro': { 
      password: '123', 
      name: 'VITORIA RIBEIRO ROSA', 
      progress: 60, 
      cpf: '127.848.436-10',
      matricula: '600920393',
      dataNascimento: '15/09/2002',
      photo: vitoriaPhoto
    },
    'thiago.alves': { 
      password: '123', 
      name: 'THIAGO ALVES DA SILVA FILHO', 
      progress: 75, 
      cpf: '168.887.556-57',
      matricula: '500815757',
      dataNascimento: '01/01/2003',
      photo: thiagoPhoto
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (users[username] && users[username].password === password) {
      setUser({
        username,
        name: users[username].name,
        progress: users[username].progress,
        cpf: users[username].cpf,
        matricula: users[username].matricula,
        dataNascimento: users[username].dataNascimento,
        photo: users[username].photo
      });
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>UNITER</h1>
          <p>Universidade Tecnológica</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Usuário:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>
    
      </div>
    </div>
  );
};

export default Login;