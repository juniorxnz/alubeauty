# Alu Beauty — Estética & Bem-Estar ✨

Site institucional responsivo para a clínica **Alu Beauty**, com foco em apresentação de serviços, depoimentos e chamada para agendamento via WhatsApp.

> Projeto feito com HTML + CSS + Tailwind (CDN) e componentes reutilizáveis em JavaScript (Web Components).

---

## ✨ Visão geral

O projeto contém:
- **Hero** com CTA de agendamento e link para serviços
- **Seção de Serviços** (cards)
- **Seção Sobre**
- **Seção com mecanismo para agendamento**
- **Depoimentos**
- **Chamada para ação** com botão de agendamento e link direto para WhatsApp
- **Navbar e Footer como Web Components** (custom elements)

---

## 🧱 Tecnologias usadas

- **HTML5**
- **CSS3**
- **TailwindCSS (via CDN)**
- **JavaScript (Web Components / Custom Elements)**
- **Feather Icons**
- **Google Fonts** (Poppins + Playfair Display)

---

O site também foi hospedado via GITHUB PAGES no endereço: juniorxnz.github.io/alubeauty

## 📁 Estrutura do projeto
```
.
├── index.html
├── script.js
├── assets/
│   └── img/
│       ├── alu-icon.png
│       └── al.jpeg
│   └── css/
│       ├── style.css
├── components/
│   ├── navbar.js
│   └── footer.js
└── pages/
    ├── servicos.html
    ├── sobre.html
    └── agendamento.html
```
---

## ▶️ Como rodar o projeto

### Opção 1 — Abrir direto
Basta abrir o `index.html` no navegador.

> **Observação:** se algum componente não carregar por causa de caminhos (`/components/...`), use a opção 2.

### Opção 2 — Rodar com servidor local (recomendado)

#### VS Code (Live Server)
1. Instale a extensão **Live Server**
2. Clique com o botão direito no `index.html`
3. **Open with Live Server**

#### Pelo terminal (Python)
Na pasta do projeto:

```bash
python -m http.server 5500
```
