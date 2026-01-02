import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const handleGenerateStudentCard = () => {
    navigate('/student-card');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className={`sidebar-toggle ${isOpen ? 'active' : ''}`} 
        onClick={toggleSidebar}
      >
        {isOpen ? '×' : '☰'}
      </button>
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="profile-section">
            <div className="profile-image">
              <img 
                src={user.photo} 
                alt={user.name}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiIGZpbGw9IiNmMGYwZjAiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjM1IiByPSIxNSIgZmlsbD0iIzk5OTk5OSIvPjxwYXRoIGQ9Ik0yMCA4MEM0MCA2MCA2MCA2MCA4MCA4MFoiIGZpbGw9IiM5OTk5OTkiLz48L3N2Zz4=';
                }}
              />
            </div>
            <div className="profile-info">
              <h3>{user.name}</h3>
              <p className="profile-course">Direito</p>
              <p className="profile-id">Mat: {user.username}</p>
            </div>
          </div>
        </div>

        <div className="sidebar-content">
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
              className="menu-item"
              onClick={handleGenerateStudentCard}
            >
              <span className="menu-icon">ID</span>
              <span>Gerar Carteirinha</span>
            </button>
            <button className="menu-item">
              <span className="menu-icon">HST</span>
              <span>Histórico Escolar</span>
            </button>
            <button className="menu-item">
              <span className="menu-icon">DOC</span>
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

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </div>
      
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;