import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Certificate.css';

const Certificate = ({ user, setUser }) => {
  const navigate = useNavigate();
  const currentDate = new Date().toLocaleDateString('pt-BR');

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const handleBack = () => {
    navigate('/course-home');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Cria uma nova janela com apenas o certificado
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    
    const certificateContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Comprovante de Matrícula - ${user.name}</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: 'Times New Roman', serif;
              background: white;
              padding: 40px;
              color: #2d3748;
            }
            .certificate-document {
              max-width: 800px;
              margin: 0 auto;
              border: 3px solid #2d3748;
              padding: 60px;
              position: relative;
            }
            .certificate-border {
              position: absolute;
              top: 15px;
              left: 15px;
              right: 15px;
              bottom: 15px;
              border: 1px solid #4a5568;
            }
            .certificate-header {
              text-align: center;
              margin-bottom: 40px;
              padding-bottom: 30px;
              border-bottom: 2px solid #2d3748;
            }
            .university-logo {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 30px;
              margin-bottom: 20px;
            }
            .logo-placeholder {
              font-size: 14px;
              color: #2d3748;
              width: 100px;
              height: 100px;
              border: 2px solid #2d3748;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              background: white;
              font-weight: 800;
            }
            .university-info h1 {
              font-size: 3rem;
              color: #2d3748;
              margin: 0 0 10px 0;
              font-weight: 800;
              letter-spacing: 2px;
            }
            .university-info p {
              margin: 8px 0;
              color: #4a5568;
              font-size: 1.1rem;
              font-weight: 500;
            }
            .certificate-content h2 {
              text-align: center;
              font-size: 2rem;
              color: #2d3748;
              margin-bottom: 30px;
              font-weight: 800;
              letter-spacing: 2px;
              text-transform: uppercase;
              border-bottom: 1px solid #4a5568;
              padding-bottom: 15px;
            }
            .document-number {
              text-align: right;
              margin-bottom: 30px;
              font-size: 14px;
              color: #4a5568;
              font-weight: 600;
            }
            .certificate-text {
              margin-bottom: 40px;
              text-align: justify;
              font-size: 1.1rem;
              line-height: 1.8;
              color: #2d3748;
              padding: 20px;
              border-left: 3px solid #4a5568;
              background: #f7fafc;
            }
            .info-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 25px 50px;
              margin-bottom: 30px;
              padding: 30px;
              border: 1px solid #e2e8f0;
              background: #fafafa;
            }
            .info-item {
              display: flex;
              flex-direction: column;
              gap: 8px;
              padding: 15px 0;
              border-bottom: 1px solid #e2e8f0;
            }
            .label {
              font-size: 13px;
              color: #4a5568;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .value {
              font-size: 16px;
              color: #2d3748;
              font-weight: 600;
            }
            .status-active {
              color: #2d3748 !important;
              font-weight: 700 !important;
            }
            .certificate-validation {
              display: flex;
              justify-content: space-between;
              gap: 40px;
              margin-bottom: 40px;
              padding: 25px;
              border: 1px solid #e2e8f0;
              background: #fafafa;
            }
            .qr-section {
              display: flex;
              gap: 20px;
              align-items: center;
            }
            .qr-code {
              width: 80px;
              height: 80px;
              border: 1px solid #2d3748;
              padding: 4px;
              background: white;
            }
            .qr-grid {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              grid-template-rows: repeat(5, 1fr);
              gap: 1px;
              height: 100%;
              background: white;
            }
            .qr-pixel {
              background: white;
            }
            .qr-pixel.filled {
              background: #2d3748;
            }
            .qr-info {
              font-size: 12px;
            }
            .qr-info p {
              margin: 2px 0;
              color: #4a5568;
            }
            .verification-code {
              font-family: 'Courier New', monospace;
              font-weight: 700;
              color: #2d3748 !important;
            }
            .document-info {
              flex: 1;
            }
            .document-info p {
              margin-bottom: 15px;
              line-height: 1.6;
              color: #4a5568;
              font-size: 14px;
            }
            .validity-info {
              background: #f7fafc;
              padding: 15px;
              border-left: 3px solid #4a5568;
              margin-top: 15px;
            }
            .validity-info p {
              margin: 5px 0;
              font-weight: 600;
              color: #2d3748;
            }
            .signature-section {
              margin: 50px 0 20px 0;
            }
            .signature-container {
              display: flex;
              justify-content: space-between;
              align-items: end;
            }
            .signature-line {
              text-align: center;
            }
            .signature-space {
              width: 250px;
              height: 1px;
              background: #2d3748;
              margin-bottom: 15px;
            }
            .signature-line p {
              margin: 3px 0;
              font-size: 13px;
              color: #4a5568;
              font-weight: 500;
            }
            .institutional-seal {
              text-align: center;
            }
            .seal-circle {
              width: 80px;
              height: 80px;
              border: 2px solid #2d3748;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              background: white;
              margin-bottom: 10px;
            }
            .seal-content {
              text-align: center;
            }
            .seal-content p {
              margin: 0;
              font-size: 10px;
              font-weight: 700;
              color: #2d3748;
              line-height: 1;
            }
            .seal-content p:nth-child(2) {
              font-size: 16px;
              color: #4a5568;
            }
            .institutional-seal > p {
              font-size: 11px;
              color: #4a5568;
              font-weight: 600;
            }
            @media print {
              body { padding: 20px; }
              .certificate-document { border: 2px solid #000; }
            }
          </style>
        </head>
        <body>
          <div class="certificate-document">
            <div class="certificate-border"></div>
            
            <div class="certificate-header">
              <div class="university-logo">
                <div class="logo-placeholder">UNITER</div>
                <div class="university-info">
                  <h1>UNITER</h1>
                  <p>Universidade Tecnológica</p>
                  <p>CNPJ: 61.334.763/0001-00</p>
                </div>
              </div>
            </div>
            
            <div class="certificate-content">
              <h2>COMPROVANTE DE MATRÍCULA</h2>
              
              <div class="document-number">
                <strong>Documento Nº:</strong> ${Math.random().toString(36).substr(2, 9).toUpperCase()}
              </div>
              
              <div class="certificate-text">
                <p>
                  Certificamos que o(a) aluno(a) <strong>${user.name}</strong>, 
                  portador(a) do CPF <strong>${user.cpf}</strong>, 
                  encontra-se devidamente matriculado(a) nesta instituição de ensino.
                </p>
              </div>
              
              <div class="info-grid">
                <div class="info-item">
                  <span class="label">Nome do Aluno:</span>
                  <span class="value">${user.name}</span>
                </div>
                <div class="info-item">
                  <span class="label">CPF:</span>
                  <span class="value">${user.cpf}</span>
                </div>
                <div class="info-item">
                  <span class="label">Matrícula:</span>
                  <span class="value">${user.username}</span>
                </div>
                <div class="info-item">
                  <span class="label">Curso:</span>
                  <span class="value">Bacharel em Direito</span>
                </div>
                <div class="info-item">
                  <span class="label">Status:</span>
                  <span class="value status-active">Matriculado</span>
                </div>
                <div class="info-item">
                  <span class="label">Modalidade:</span>
                  <span class="value">Presencial</span>
                </div>
                <div class="info-item">
                  <span class="label">Período:</span>
                  <span class="value">Noturno</span>
                </div>
                <div class="info-item">
                  <span class="label">Semestre Atual:</span>
                  <span class="value">2026.1</span>
                </div>
                <div class="info-item">
                  <span class="label">Data de Matrícula:</span>
                  <span class="value">01/02/2026</span>
                </div>
                <div class="info-item">
                  <span class="label">Progresso do Curso:</span>
                  <span class="value">${user.progress}% concluído</span>
                </div>
                <div class="info-item">
                  <span class="label">Situação Acadêmica:</span>
                  <span class="value status-active">Regular</span>
                </div>
              </div>
              
              <div class="certificate-validation">
                <div class="qr-section">
                  <div class="qr-code">
                    <div class="qr-grid">
                      ${Array.from({ length: 25 }, (_, i) => 
                        `<div class="qr-pixel ${Math.random() > 0.5 ? 'filled' : ''}"></div>`
                      ).join('')}
                    </div>
                  </div>
                  <div class="qr-info">
                    <p><strong>Código de Verificação:</strong></p>
                    <p class="verification-code">${Math.random().toString(36).substr(2, 12).toUpperCase()}</p>
                    <p>www.uniter.edu.br/validar</p>
                  </div>
                </div>
                
                <div class="document-info">
                  <p>
                    Este comprovante foi gerado automaticamente pelo Sistema Acadêmico Integrado 
                    da UNITER em <strong>${currentDate}</strong>.
                  </p>
                  
                  <div class="validity-info">
                    <p><strong>Validade:</strong> 30 (trinta) dias a partir da data de emissão.</p>
                    <p><strong>Documento Oficial:</strong> Lei nº 9.394/96 - LDB</p>
                  </div>
                </div>
              </div>
              
              <div class="signature-section">
                <div class="signature-container">
                  <div class="signature-line">
                    <div class="signature-space"></div>
                    <p><strong>Prof. Dr. Maria Santos</strong></p>
                    <p>Secretária Acadêmica</p>
                    <p>UNITER - Universidade Tecnológica</p>
                    <p>CRA-SP 12345</p>
                  </div>
                  <div class="institutional-seal">
                    <div class="seal-circle">
                      <div class="seal-content">
                        <p>UNITER</p>
                        <p>★</p>
                        <p>2026</p>
                      </div>
                    </div>
                    <p>Selo Oficial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <script>
            window.onload = function() {
              // Mostra opção de salvar como PDF
              setTimeout(() => {
                if(confirm('Deseja salvar o comprovante como PDF?')) {
                  window.print();
                }
              }, 500);
            }
          </script>
        </body>
      </html>
    `;
    
    printWindow.document.write(certificateContent);
    printWindow.document.close();
  };

  return (
    <div className="certificate-container">
      <header className="header no-print">
        <div className="header-left">
          <button onClick={handleBack} className="back-btn">
            ← Voltar
          </button>
          <h1>Comprovante de Matrícula</h1>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          Sair
        </button>
      </header>
      
      <div className="container">
        <div className="certificate-actions no-print">
          <button onClick={handlePrint} className="action-btn print-btn">
            Imprimir
          </button>
          <button onClick={handleDownload} className="action-btn download-btn">
            Baixar PDF
          </button>
        </div>
        
        <div className="certificate-document">
          <div className="certificate-header">
            <div className="university-logo">
              <div className="logo-placeholder">
                UNITER
              </div>
              <div className="university-info">
                <h1>UNITER</h1>
                <p>Universidade Tecnológica</p>
                <p className="cnpj">CNPJ: 00.000.000/0001-00</p>
              </div>
            </div>
          </div>
          
          <div className="certificate-content">
            <h2>COMPROVANTE DE MATRÍCULA</h2>
            
            <div className="document-number">
              <strong>Documento Nº:</strong> {Math.random().toString(36).substr(2, 9).toUpperCase()}
            </div>
            
            <div className="certificate-text">
              <p>
                Certificamos que o(a) aluno(a) <strong>{user.name}</strong>, 
                portador(a) do CPF <strong>{user.cpf}</strong>, 
                encontra-se devidamente matriculado(a) nesta instituição de ensino.
              </p>
            </div>
            
            <div className="student-info">
              <div className="info-grid">
                <div className="info-item">
                  <span className="label">Nome do Aluno:</span>
                  <span className="value">{user.name}</span>
                </div>
                
                <div className="info-item">
                  <span className="label">CPF:</span>
                  <span className="value">{user.cpf}</span>
                </div>
                
                <div className="info-item">
                  <span className="label">Matrícula:</span>
                  <span className="value">{user.username}</span>
                </div>
                
                <div className="info-item">
                  <span className="label">Curso:</span>
                  <span className="value">Bacharel em Direito</span>
                </div>
                
                <div className="info-item">
                  <span className="label">Status:</span>
                  <span className="value status-active">Matriculado</span>
                </div>
                
                <div className="info-item">
                  <span className="label">Modalidade:</span>
                  <span className="value">Presencial</span>
                </div>
                
                <div className="info-item">
                  <span className="label">Período:</span>
                  <span className="value">Noturno</span>
                </div>
                
                <div className="info-item">
                  <span className="label">Semestre Atual:</span>
                  <span className="value">2026.1</span>
                </div>
                
                <div className="info-item">
                  <span className="label">Data de Matrícula:</span>
                  <span className="value">01/02/2026</span>
                </div>
                
                <div className="info-item">
                  <span className="label">Progresso do Curso:</span>
                  <span className="value">{user.progress}% concluído</span>
                </div>
                
                <div className="info-item">
                  <span className="label">Situação Acadêmica:</span>
                  <span className="value status-active">Regular</span>
                </div>
              </div>
            </div>
            
            <div className="certificate-footer">
              <div className="certificate-validation">
                <div className="qr-section">
                  <div className="qr-code">
                    <div className="qr-grid">
                      {Array.from({ length: 25 }, (_, i) => (
                        <div 
                          key={i} 
                          className={`qr-pixel ${Math.random() > 0.5 ? 'filled' : ''}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="qr-info">
                    <p><strong>Código de Verificação:</strong></p>
                    <p className="verification-code">
                      {Math.random().toString(36).substr(2, 12).toUpperCase()}
                    </p>
                    <p className="verify-url">www.uniter.edu.br/validar</p>
                  </div>
                </div>
                
                <div className="document-info">
                  <p>
                    Este comprovante foi gerado automaticamente pelo Sistema Acadêmico Integrado 
                    da UNITER em <strong>{currentDate}</strong>.
                  </p>
                  
                  <div className="validity-info">
                    <p><strong>Validade:</strong> 30 (trinta) dias a partir da data de emissão.</p>
                    <p><strong>Documento Oficial:</strong> Lei nº 9.394/96 - LDB</p>
                  </div>
                </div>
              </div>
              
              <div className="signature-section">
                <div className="signature-container">
                  <div className="signature-line">
                    <div className="signature-space"></div>
                    <p><strong>Prof. Dr. Maria Santos</strong></p>
                    <p>Secretária Acadêmica</p>
                    <p>UNITER - Universidade Tecnológica</p>
                    <p>CRA-SP 12345</p>
                  </div>
                  <div className="institutional-seal">
                    <div className="seal-circle">
                      <div className="seal-content">
                        <p>UNITER</p>
                        <p>★</p>
                        <p>2026</p>
                      </div>
                    </div>
                    <p>Selo Oficial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="certificate-border"></div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;