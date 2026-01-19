class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #000000;
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
        
        /* --- ESTILO DO LOGO ATUALIZADO --- */
        .footer-logo {
          font-family: 'Playfair Display', serif; /* Mesma fonte da Navbar */
          font-size: 1.8rem;
          font-weight: 700; /* Negrito igual da Navbar */
          color: #ffffff; /* Branco para contrastar com o fundo preto */
          margin-bottom: 1rem;
          display: inline-block;
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .footer-logo span {
          color: #f43f5e; /* Rose 500 (Mesma cor da Navbar) */
          font-style: italic; /* Itálico igual da Navbar */
        }
        /* ---------------------------------- */
        
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
          background-color: #f43f5e; /* Atualizei para o Rose da marca */
          transform: translateY(-3px);
        }

        .social-link.instagram {
          background-color: #E4405F; 
          color: white;
        }

        .social-link.whatsapp {
          background-color: #25D366;
          color: white;
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
          background-color: #f43f5e; /* Atualizei para o Rose da marca */
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
          color: #f43f5e; /* Atualizei para o Rose da marca */
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
            <a href="/" class="logo flex items-center gap-2">
                <img src="/assets/img/rosewhite-icon.svg" alt="Alu Beauty" class="h-9 w-9">
            </a>
          
          <p class="footer-description">
            Sua clínica de estética premium, oferecendo tratamentos personalizados para realçar sua beleza natural.
          </p>
          <div class="social-links">
            <a href="https://www.instagram.com/alu_skinbeauty/" class="social-link instagram">
              <i data-feather="instagram"></i>
            </a>
            <a href="https://wa.me/5531973261635" class="social-link whatsapp">
              <i data-feather="message-circle"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 class="footer-title">Links Rápidos</h3>
          <div class="footer-links">
            <a href="/index.html" class="footer-link">Início</a>
            <a href="/pages/servicos.html" class="footer-link">Serviços</a>
            <a href="/pages/sobre.html" class="footer-link">Sobre</a>
            <a href="/pages/agendamento.html" class="footer-link">Agendamento</a>
          </div>
        </div>
        
        
        <div>
          <h3 class="footer-title">Contato</h3>
          <div class="contact-info">
            <div class="contact-item">
              <i data-feather="map-pin"></i>
              <span>R. José dos Reis - Canaã -
              Ibirité - MG</span>
            </div>
            <div class="contact-item">
              <i data-feather="phone"></i>
              <span> (31) 9552-4994 </span>
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
    const icons = this.shadowRoot.querySelectorAll('[data-feather]');
    icons.forEach(icon => {
      const name = icon.getAttribute('data-feather');
      if (feather && feather.icons[name]) {
        icon.outerHTML = feather.icons[name].toSvg({
          class: 'feather-icon' 
        });
      }
    });
  }
}

customElements.define('custom-footer', CustomFooter);