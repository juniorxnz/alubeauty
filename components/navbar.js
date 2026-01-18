class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }
                
                .navbar-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-family: serif;
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #9f1239;
                    text-decoration: none;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-link {
                    color: #4c0519;
                    text-decoration: none;
                    font-weight: 500;
                    position: relative;
                    transition: color 0.3s ease;
                }
                
                .nav-link:hover {
                    color: #9f1239;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #9f1239;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #4c0519;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        right: 0;
                        background-color: white;
                        flex-direction: column;
                        align-items: center;
                        padding: 2rem 0;
                        gap: 1.5rem;
                        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
                        transform: translateY(-150%);
                        transition: transform 0.1s ease;
                    }
                    
                    .nav-links.active {
                        transform: translateY(0);
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            
            <div class="navbar-container">
                <a href="/" class="logo"></a>
                
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
                
                <div class="nav-links">
                    <a href="/index.html" class="nav-link">Início</a>
                    <a href="/pages/sobre.html" class="nav-link">Sobre</a>
                    <a href="/pages/servicos.html" class="nav-link">Serviços</a>
                    <a href="/pages/agendamento.html" class="nav-link">Agendar Atendimento</a>
                </div>
            </div>
        `;
        
        // Mobile menu toggle
        const mobileBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            feather.replace();
        });
        
        // Close menu when clicking a link
        this.shadowRoot.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);