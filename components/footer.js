class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #333;
          color: white;
          padding: 3rem 0;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        
        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #D4AF37;
          margin-bottom: 1rem;
          display: inline-block;
        }
        
        .footer-description {
          color: #bbb;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          color: white;
          background-color: #444;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        
        .social-link:hover {
          background-color: #D4AF37;
          transform: translateY(-3px);
        }
        
        .footer-title {
          font-weight: 600;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background-color: #D4AF37;
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        
        .footer-link {
          color: #bbb;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-link:hover {
          color: #D4AF37;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: #bbb;
        }
        
        .copyright {
          text-align: center;
          padding-top: 3rem;
          margin-top: 3rem;
          border-top: 1px solid #444;
          color: #bbb;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <div class="footer-container">
        <div>
          <a href="/" class="footer-logo">Alu Beauty</a>
          <p class="footer-description">
            Sua clínica de estética premium, oferecendo tratamentos personalizados para realçar sua beleza natural.
          </p>
          <div class="social-links">
            <a href="https://www.instagram.com/alu_skinbeauty/" class="social-link">
              <i data-feather="instagram"></i>
            </a>
            <a href="https://whatsapp.com" class="social-link">
              <i data-feather="message-circle"></i>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="footer-title">Links Rápidos</h3>
          <div class="footer-links">
            <a href="/" class="footer-link">Home</a>
            <a href="/servicos" class="footer-link">Serviços</a>
            <a href="/sobre" class="footer-link">Sobre Nós</a>
            <a href="/agendamento" class="footer-link">Agendamento</a>
          </div>
        </div>
        
        <div>
          <h3 class="footer-title">Serviços</h3>
          <div class="footer-links">
            <a href="/servicos/limpeza-de-pele" class="footer-link">Limpeza de Pele</a>
            <a href="/servicos/drenagem-linfatica" class="footer-link">Drenagem Linfática</a>
            <a href="/servicos/design-sobrancelhas" class="footer-link">Design de Sobrancelhas</a>
            <a href="/servicos/depilacao" class="footer-link">Depilação</a>
            <a href="/servicos/tratamentos-faciais" class="footer-link">Tratamentos Faciais</a>
          </div>
        </div>
        
        <div>
          <h3 class="footer-title">Contato</h3>
          <div class="contact-info">
            <div class="contact-item">
              <i data-feather="map-pin"></i>
              <span>Rua Beleza, 123 - Centro</span>
            </div>
            <div class="contact-item">
              <i data-feather="phone"></i>
              <span>(11) 99999-9999</span>
            </div>
            <div class="contact-item">
              <i data-feather="mail"></i>
              <span>contato@alubeauty.com</span>
            </div>
            <div class="contact-item">
              <i data-feather="clock"></i>
              <span>Seg-Sex: 9h-19h | Sáb: 9h-14h</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="copyright">
        &copy; ${new Date().getFullYear()} Alu Beauty. Todos os direitos reservados.
      </div>
    `;
    
    // Initialize feather icons
    feather.replace();
  }
}

customElements.define('custom-footer', CustomFooter);