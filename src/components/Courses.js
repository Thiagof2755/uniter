import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Courses.css';

const Courses = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const handleCourseClick = () => {
    navigate('/course-home');
  };

  return (
    <div className="courses-container">
      <header className="header">
        <h1>UNITER - Portal do Aluno</h1>
        <button onClick={handleLogout} className="logout-btn">
          Sair
        </button>
      </header>
      
      <div className="container">
        <div className="welcome-section">
          <h2>Bem-vindo(a), {user.name}!</h2>
          <p>Aqui estão seus cursos matriculados</p>
        </div>
        
        <div className="courses-grid">
          <div className="course-card" onClick={handleCourseClick}>
            <div className="course-header">
              <h3>Direito</h3>
              <span className="course-status">Matriculado</span>
            </div>
            
            <div className="course-progress">
              <div className="progress-info">
                <span>Progresso do curso</span>
                <span className="progress-percentage">{user.progress}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${user.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="course-details">
              <div className="detail-item">
                <span className="detail-label">Modalidade:</span>
                <span>Presencial</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Período:</span>
                <span>Noturno</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Semestre:</span>
                <span>2026.1</span>
              </div>
            </div>
            
            <button className="enter-course-btn">
              Acessar Curso
            </button>
          </div>
        </div>
        
        <div className="quick-actions">
          <h3>Ações Rápidas</h3>
          <div className="actions-grid">
            <div className="action-card">
              <span className="action-title">Biblioteca Virtual</span>
            </div>
            <div className="action-card">
              <span className="action-title">Fórum de Discussão</span>
            </div>
            <div className="action-card">
              <span className="action-title">Notas e Frequência</span>
            </div>
            <div className="action-card">
              <span className="action-title">Calendário Acadêmico</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;