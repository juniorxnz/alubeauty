class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    //quando o rodape entra na pagina esse metodo roda automaticamente assim que custor-footer aparece na tela

    // detecta se a page atual ta dentro de /pages/
    const inPages = window.location.pathname.includes('/pages/');

    // base relativa correta
    let base = './';
    if (inPages) {
      base = '../';
    }

    // caminhos internos do site
    const hrefHome = base + 'index.html';
    const hrefServicos = base + 'pages/servicos.html';
    const hrefSobre = base + 'pages/sobre.html';
    const hrefAgendamento = base + 'pages/agendamento.html';
    const srcLogo = base + 'assets/img/rosewhite-icon.svg';

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
        
        /* --- ESTILO da LOGO ATUALIZADO --- */
        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .footer-logo span {
          color: #f43f5e;
          font-style: italic;
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
          background-color: #f43f5e;
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
          background-color: #f43f5e;
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
          color: #f43f5e;
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
          <a href="${hrefHome}" class="footer-logo">
            <img src="${srcLogo}" alt="Alu Beauty" class="h-9 w-9">
          </a>
          
          <p class="footer-description">
            Sua clínica de estética premium, oferecendo tratamentos personalizados para realçar sua beleza natural.
          </p>

          <div class="social-links">
            <a href="https://www.instagram.com/alu_skinbeauty/" class="social-link instagram" aria-label="Instagram">
              <i data-feather="instagram"></i>
            </a>
            <a href="https://wa.me/5531973261635" class="social-link whatsapp" aria-label="WhatsApp">
              <i data-feather="message-circle"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="footer-title">Links Rápidos</h3>
          <div class="footer-links">
            <a href="${hrefHome}" class="footer-link">Início</a>
            <a href="${hrefServicos}" class="footer-link">Serviços</a>
            <a href="${hrefSobre}" class="footer-link">Sobre</a>
            <a href="${hrefAgendamento}" class="footer-link">Agendamento</a>
          </div>
        </div>
        
        <div>
          <h3 class="footer-title">Contato</h3>
          <div class="contact-info">
            <div class="contact-item">
              <i data-feather="map-pin"></i>
              <span>R. José dos Reis - Canaã - Ibirité - MG</span>
            </div>
            <div class="contact-item">
              <i data-feather="phone"></i>
              <span>(31) 9552-4994</span>
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

    // dá init na feather icons
    const icons = this.shadowRoot.querySelectorAll('[data-feather]');
    icons.forEach(icon => {
      const name = icon.getAttribute('data-feather');
      if (typeof feather !== 'undefined' && feather.icons && feather.icons[name]) {
        icon.outerHTML = feather.icons[name].toSvg({
          class: 'feather-icon'
        });
      }
    });
  }
}

customElements.define('custom-footer', CustomFooter);
