import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user, setUser }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const handleGenerateStudentCard = () => {
    navigate('/student-card');
    setIsDropdownOpen(false);
  };

  const handleGenerateCertificate = () => {
    navigate('/certificate');
    setIsDropdownOpen(false);
  };

  const handleGoHome = () => {
    navigate('/courses');
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <button className="logo-btn" onClick={handleGoHome}>
            <span className="logo">UNITER</span>
          </button>
        </div>

        <div className="navbar-center">
          <h2 className="page-title">Portal do Aluno</h2>
        </div>

        <div className="navbar-right">
          <div className="navbar-profile" onClick={toggleDropdown}>
            <div className="profile-avatar">
              <img 
                src={user.photo} 
                alt={user.name}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI2YwZjBmMCIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMTUiIHI9IjciIGZpbGw9IiM5OTk5OTkiLz48cGF0aCBkPSJNMTAgMzJDMTYgMjggMjQgMjggMzAgMzJaIiBmaWxsPSIjOTk5OTk5Ii8+PC9zdmc+';
                }}
              />
            </div>
            <div className="profile-info">
              <span className="profile-name">{user.name.split(' ')[0]}</span>
              <span className="dropdown-arrow">{isDropdownOpen ? '▲' : '▼'}</span>
            </div>
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
        <div className="dropdown-header">
          <div className="dropdown-avatar">
            <img 
              src={user.photo} 
              alt={user.name}
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIzMCIgZmlsbD0iI2YwZjBmMCIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMjIiIHI9IjEwIiBmaWxsPSIjOTk5OTk5Ii8+PHBhdGggZD0iTTE1IDQ4QzIyIDQwIDM4IDQwIDQ1IDQ4WiIgZmlsbD0iIzk5OTk5OSIvPjwvc3ZnPg==';
              }}
            />
          </div>
          <div className="dropdown-user-info">
            <h3>{user.name}</h3>
            <p className="user-course">Bacharel em Direito</p>
            <p className="user-id">Mat: {user.matricula}</p>
          </div>
        </div>

        <div className="dropdown-content">
          <div className="progress-section">
            <h4>Progresso Acadêmico</h4>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${user.progress}%` }}
              ></div>
            </div>
            <span className="progress-text">{user.progress}% concluído</span>
          </div>

          <div className="menu-section">
            <h4>Documentos</h4>
            <button 
              className="dropdown-menu-item"
              onClick={handleGenerateStudentCard}
            >
              <span className="menu-icon">ID</span>
              <span>Gerar Carteirinha</span>
            </button>
            <button 
              className="dropdown-menu-item"
              onClick={handleGenerateCertificate}
            >
              <span className="menu-icon">DOC</span>
              <span>Gerar Comprovante</span>
            </button>
            <button className="dropdown-menu-item">
              <span className="menu-icon">HST</span>
              <span>Histórico Escolar</span>
            </button>
            <button className="dropdown-menu-item">
              <span className="menu-icon">DEC</span>
              <span>Declarações</span>
            </button>
          </div>

          <div className="info-section">
            <h4>Informações Pessoais</h4>
            <div className="info-item">
              <span className="info-label">CPF:</span>
              <span className="info-value">{user.cpf}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Curso:</span>
              <span className="info-value">Bacharel em Direito</span>
            </div>
            <div className="info-item">
              <span className="info-label">Período:</span>
              <span className="info-value">Noturno</span>
            </div>
            <div className="info-item">
              <span className="info-label">Semestre:</span>
              <span className="info-value">2026.1</span>
            </div>
          </div>
        </div>
      </div>

      {isDropdownOpen && <div className="dropdown-overlay" onClick={toggleDropdown}></div>}
    </>
  );
};

export default Navbar;