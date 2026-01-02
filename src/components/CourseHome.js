import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseHome.css';

const CourseHome = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [currentDate] = useState(new Date());

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const handleBackToCourses = () => {
    navigate('/courses');
  };

  const handleGenerateCertificate = () => {
    navigate('/certificate');
  };

  // Gera um calendário simples
  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const monthNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const calendar = [];
    
    // Dias vazios do início
    for (let i = 0; i < firstDay; i++) {
      calendar.push(null);
    }
    
    // Dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(day);
    }
    
    return {
      monthName: monthNames[month],
      year: year,
      days: calendar
    };
  };

  const calendar = generateCalendar();

  return (
    <div className="course-home-container">
      <header className="header">
        <div className="header-left">
          <button onClick={handleBackToCourses} className="back-btn">
            ← Voltar
          </button>
          <h1>Direito - Home</h1>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          Sair
        </button>
      </header>
      
      <div className="container">
        <div className="course-header">
          <h2>Bem-vindo ao curso de Direito, {user.name}!</h2>
          <p>Ambiente Acadêmico - Semestre 2026.1</p>
        </div>
        
        <div className="main-content">
          <div className="calendar-section">
            <div className="calendar-card">
              <div className="calendar-header">
                <h3>Calendário Acadêmico</h3>
                <span className="calendar-month">
                  {calendar.monthName} {calendar.year}
                </span>
              </div>
              
              <div className="calendar-grid">
                <div className="calendar-weekdays">
                  <span>Dom</span>
                  <span>Seg</span>
                  <span>Ter</span>
                  <span>Qua</span>
                  <span>Qui</span>
                  <span>Sex</span>
                  <span>Sáb</span>
                </div>
                
                <div className="calendar-days">
                  {calendar.days.map((day, index) => (
                    <span 
                      key={index} 
                      className={`calendar-day ${!day ? 'empty' : ''} ${day === currentDate.getDate() ? 'today' : ''}`}
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="sidebar">
            <div className="actions-card">
              <h3>Ações</h3>
              <button 
                className="primary-btn generate-btn"
                onClick={handleGenerateCertificate}
              >
                Gerar Comprovante
              </button>
            </div>
            
            <div className="hidden-elements">
              <h4>Elementos Acadêmicos</h4>
              <div className="hidden-item">
                <span>Biblioteca Digital</span>
                <span className="status">Em breve</span>
              </div>
              <div className="hidden-item">
                <span>Notas Parciais</span>
                <span className="status">Indisponível</span>
              </div>
              <div className="hidden-item">
                <span>Atividades</span>
                <span className="status">Carregando...</span>
              </div>
              <div className="hidden-item">
                <span>Fórum</span>
                <span className="status">Manutenção</span>
              </div>
            </div>
            
            <div className="progress-card">
              <h4>Progresso do Curso</h4>
              <div className="progress-circle">
                <div className="progress-value">{user.progress}%</div>
              </div>
              <p>Você está indo muito bem!</p>
            </div>
          </div>
        </div>
        
        <div className="info-cards">
          <div className="info-card">
            <h4>Próximas Atividades</h4>
            <p>Nenhuma atividade pendente no momento.</p>
          </div>
          
          <div className="info-card">
            <h4>Avisos</h4>
            <p>Ambiente limpo e organizado.</p>
          </div>
          
          <div className="info-card">
            <h4>Turma</h4>
            <p>Direito - Turma 2026A - Noturno</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHome;