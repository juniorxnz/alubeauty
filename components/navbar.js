class CustomNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.setupEvents();
  }

  
  render() {
    // verifica se a page atual ta dentro de /pages/
    const inPages = window.location.pathname.includes("/pages/");
    // base relativa correta:
    // - se estiver em /pages/... => volta 1 nível (../)
    // - se estiver na raiz => usa ./
    let base = "./";
    if (inPages) {
        base = "../";
    }


    // monta os caminhos finais
    const hrefHome = `${base}index.html`;
    const hrefSobre = `${base}pages/sobre.html`;
    const hrefServicos = `${base}pages/servicos.html`;
    const hrefAgendamento = `${base}pages/agendamento.html`;
    const srcLogo = `${base}assets/img/beautyblack-icon.svg`;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }

        /* Container principal com efeito vidromorfismo */
        .navbar {
          background-color: rgba(255, 255, 255, 0.85); /* bg translucido */
          backdrop-filter: blur(12px); /* O desfoque magico */
          -webkit-backdrop-filter: blur(12px); /* Safari */
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 80px; /* height fixa para alinhar tudo */
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* LOGO */
        .logo {
          font-family: 'Playfair Display', serif; /* Fonte serifada para luxo */
          font-size: 1.8rem;
          font-weight: 700;
          color: #333;
          text-decoration: none;
          letter-spacing: -0.5px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo span {
          color: #f43f5e; /* Cor da marca */
          font-style: italic;
        }

        /* LINKS (Desktop) */
        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-link {
          color: #555;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link:not(.btn-cta):hover {
          color: #f43f5e;
        }

        /* Efeito de sublinhado animado */
        .nav-link:not(.btn-cta)::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #f43f5d;
          transition: width 0.3s ease;
        }

        .nav-link:not(.btn-cta):hover::after {
          width: 100%;
        }

        /* BOTÃO DE DESTAQUE (CTA) */
        .btn-cta {
          background-color: #f43f5e;
          color: white;
          padding: 0.7rem 1.8rem;
          border-radius: 50px;
          font-weight: 600;
          transition: transform 0.2s, background-color 0.3s;
          box-shadow: 0 4px 15px rgba(225, 29, 72, 0.3);
        }

        .btn-cta:hover {
          background-color: #e11d48;
          transform: translateY(-2px);
          color: white;
        }

        /* BOTÃO MOBILE (Hambúrguer) */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        /* SVG do ícone */
        .mobile-menu-btn svg {
          width: 28px;
          height: 28px;
          stroke: #333;
          transition: stroke 0.3s;
        }

        /* RESPONSIVIDADE */
        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 80px; /* Logo abaixo da navbar */
            left: 0;
            right: 0;
            background-color: white;
            flex-direction: column;
            align-items: center;
            padding: 2rem 0;
            gap: 2rem;
            border-top: 1px solid rgba(0,0,0,0.05);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);

            /* Animação de entrada */
            opacity: 0;
            transform: translateY(-20px);
            pointer-events: none;
            transition: all 0.3s ease-in-out;
          }

          .nav-links.active {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }

          .mobile-menu-btn {
            display: block;
          }

          .btn-cta {
            width: 80%; /* Botão largo no mobile */
            text-align: center;
          }
        }
      </style>

      <header class="navbar">
        <div class="navbar-container">
          <a href="${hrefHome}" class="logo">
            <img src="${srcLogo}" alt="Alu Beauty" class="h-9 w-9">
          </a>

          <button class="mobile-menu-btn" aria-label="Abrir menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <nav class="nav-links">
            <a href="${hrefHome}" class="nav-link">Início</a>
            <a href="${hrefSobre}" class="nav-link">Sobre</a>
            <a href="${hrefServicos}" class="nav-link">Serviços</a>
            <a href="${hrefAgendamento}" class="nav-link btn-cta">Agendar Horário</a>
          </nav>
        </div>
      </header>
    `;
  }

  setupEvents() {
    const mobileBtn = this.shadowRoot.querySelector(".mobile-menu-btn");
    const navLinks = this.shadowRoot.querySelector(".nav-links");
    const links = this.shadowRoot.querySelectorAll(".nav-link");

    // toggla o menu
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");

      // visual effect simples no icone (troca cor quando ativo)
      const isOpen = navLinks.classList.contains("active");
      mobileBtn.querySelector("svg").style.stroke = isOpen ? "#f43f5e" : "#333";
    });

    // menu fecha quando clica em um link
    links.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        mobileBtn.querySelector("svg").style.stroke = "#333";
      });
    });
  }
}

customElements.define("custom-navbar", CustomNavbar);
