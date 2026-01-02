import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentCard.css';

const StudentCard = ({ user, setUser }) => {
  const navigate = useNavigate();
  const currentDate = new Date().toLocaleDateString('pt-BR');

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const handleBack = () => {
    navigate('/courses');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const printWindow = window.open('', '_blank', 'width=600,height=400');
    
    const cardContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Carteirinha Estudantil - ${user.name}</title>
          <style>
            body {
              margin: 0;
              padding: 40px;
              font-family: 'Arial', sans-serif;
              background: #f0f0f0;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
            }
            .student-card {
              width: 350px;
              height: 220px;
              background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
              border-radius: 15px;
              position: relative;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            }
            .card-header {
              background: rgba(255,255,255,0.1);
              padding: 12px 20px;
              text-align: center;
              border-bottom: 1px solid rgba(255,255,255,0.2);
            }
            .university-name {
              color: white;
              font-size: 14px;
              font-weight: 700;
              letter-spacing: 1px;
              margin: 0;
            }
            .card-type {
              color: rgba(255,255,255,0.9);
              font-size: 10px;
              margin: 2px 0 0 0;
              text-transform: uppercase;
            }
            .card-content {
              display: flex;
              padding: 15px 20px;
              height: calc(100% - 60px);
            }
            .photo-section {
              width: 70px;
              margin-right: 15px;
            }
            .student-photo {
              width: 70px;
              height: 90px;
              border: 2px solid white;
              border-radius: 8px;
              object-fit: cover;
              background: #f0f0f0;
            }
            .info-section {
              flex: 1;
              color: white;
            }
            .student-name {
              font-size: 16px;
              font-weight: 700;
              margin: 0 0 8px 0;
              line-height: 1.2;
            }
            .student-course {
              font-size: 12px;
              margin: 0 0 6px 0;
              opacity: 0.9;
            }
            .student-id {
              font-size: 11px;
              margin: 0 0 6px 0;
              opacity: 0.8;
              font-family: 'Courier New', monospace;
            }
            .valid-until {
              position: absolute;
              bottom: 15px;
              right: 20px;
              color: rgba(255,255,255,0.8);
              font-size: 10px;
            }
            .card-decoration {
              position: absolute;
              top: -50px;
              right: -50px;
              width: 100px;
              height: 100px;
              background: rgba(255,255,255,0.1);
              border-radius: 50%;
            }
            .barcode {
              position: absolute;
              bottom: 15px;
              left: 20px;
              width: 80px;
              height: 12px;
              background: repeating-linear-gradient(
                90deg,
                white 0px,
                white 1px,
                transparent 1px,
                transparent 3px
              );
              opacity: 0.8;
            }
            @media print {
              body { padding: 20px; background: white; }
            }
          </style>
        </head>
        <body>
          <div class="student-card">
            <div class="card-decoration"></div>
            <div class="card-header">
              <h1 class="university-name">UNITER</h1>
              <p class="card-type">Carteira de Identificação Estudantil</p>
            </div>
            <div class="card-content">
              <div class="photo-section">
                <img 
                  src="${user.photo}" 
                  alt="${user.name}"
                  class="student-photo"
                  onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iOTAiIHZpZXdCb3g9IjAgMCA3MCA5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNzAiIGhlaWdodD0iOTAiIGZpbGw9IiNmMGYwZjAiLz48Y2lyY2xlIGN4PSIzNSIgY3k9IjMwIiByPSIxMiIgZmlsbD0iIzk5OTk5OSIvPjxwYXRoIGQ9Ik0xNSA3NUMzMCA2MCA0MCA2MCA1NSA3NVoiIGZpbGw9IiM5OTk5OTkiLz48L3N2Zz4=';"
                />
              </div>
              <div class="info-section">
                <h2 class="student-name">${user.name}</h2>
                <p class="student-course">Bacharel em Direito</p>
                <p class="student-id">Mat: ${user.matricula}</p>
                <p class="student-id">CPF: ${user.cpf}</p>
                <p class="student-nascimento">data de Nascimento: ${user.dataNascimento}</p>
              </div>
            </div>
            <div class="barcode"></div>
            <div class="valid-until">Válida até: 12/2026</div>
          </div>
          
          <script>
            window.onload = function() {
              setTimeout(() => {
                if(confirm('Deseja salvar a carteirinha como PDF?')) {
                  window.print();
                }
              }, 500);
            }
          </script>
        </body>
      </html>
    `;
    
    printWindow.document.write(cardContent);
    printWindow.document.close();
  };

  return (
    <div className="student-card-container">
      <header className="header no-print">
        <div className="header-left">
          <button onClick={handleBack} className="back-btn">
            ← Voltar
          </button>
          <h1>Carteirinha de Estudante</h1>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          Sair
        </button>
      </header>
      
      <div className="container">
        <div className="card-actions no-print">
        </div>
        
        <div className="card-preview">
          <div className="student-card">
            <div className="card-decoration"></div>
            
            <div className="card-header">
              <h1 className="university-name">UNITER</h1>
              <p className="card-type">Carteira de Identificação Estudantil</p>
            </div>
            
            <div className="card-content">
              <div className="photo-section">
                <img 
                  src={user.photo} 
                  alt={user.name}
                  className="student-photo"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iOTAiIHZpZXdCb3g9IjAgMCA3MCA5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNzAiIGhlaWdodD0iOTAiIGZpbGw9IiNmMGYwZjAiLz48Y2lyY2xlIGN4PSIzNSIgY3k9IjMwIiByPSIxMiIgZmlsbD0iIzk5OTk5OSIvPjxwYXRoIGQ9Ik0xNSA3NUMzMCA2MCA0MCA2MCA1NSA3NVoiIGZpbGw9IiM5OTk5OTkiLz48L3N2Zz4=';
                  }}
                />
              </div>
              
              <div className="info-section">
                <h2 className="student-name">{user.name}</h2>
                <p className="student-course">Bacharel em Direito</p>
                <p className="student-id">Matricula: {user.matricula}</p>
                <p className="student-id">CPF: {user.cpf}</p>
                <p className="student-id">Data de Nascimento: {user.dataNascimento}</p>
                <p className="student-semester">Semestre: 2026.1</p>
              </div>
            </div>
            
            <div className="barcode"></div>
            <div className="valid-until">Válida até: 12/2026</div>
          </div>
          
          <div className="card-back">
            <div className="back-header">
              <h3>VERSO</h3>
            </div>
            <div className="back-content">
              <div className="back-info">
                <p><strong>Data de Emissão:</strong> {currentDate}</p>
                <p><strong>Modalidade:</strong> Presencial</p>
                <p><strong>Período:</strong> Noturno</p>
                <p><strong>Status:</strong> Ativo</p>
              </div>
              <div className="back-footer">
                <p>www.uniter.edu.br</p>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default StudentCard;