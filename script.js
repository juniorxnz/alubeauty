// ARQUIVO: script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. init nos icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // 2. mecanismo de smooth scroll p links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            // ve se é apenas um # vazio
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); //
            }
        });
    });

    // 3. ANIMAÇÃO DE SCROLL (intersection observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                entry.target.classList.add('opacity-100', 'translate-y-0');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // seleciona elementos p animar em QUALQUER página
    // navbar e footer removidas do mecanismo pra não ficarem piscando
    const elementosAnimaveis = document.querySelectorAll('section h1, section h2, section h3, section p, section .bg-white, section img, .animate-on-scroll');
    
    elementosAnimaveis.forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });

    //deadcode no momento - mecanismo será implementado somente no futuro
    // 4. logica do Formulário (Só executa se existir o form na página)
    const form = document.getElementById('formAgendamento');
    if (form) {
        // Data mínima
        const dateInput = document.getElementById('dataAgenda');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Verifica se o radio button foi selecionado com segurança
            const servicoInput = document.querySelector('input[name="servico"]:checked');
            if (!servicoInput) {
                alert("Por favor, selecione um serviço.");
                return;
            }

            const servico = servicoInput.value;
            const data = document.getElementById('dataAgenda').value;
            const hora = document.getElementById('horaAgenda').value;
            const nome = document.getElementById('nomeCliente').value;

            const dataObj = new Date(data);
            const dataFormatada = dataObj.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

            const mensagem = `Olá, Alu Beauty! 🌸%0A%0A` +
                `Gostaria de solicitar um agendamento:%0A` +
                `*Nome:* ${nome}%0A` +
                `*Serviço:* ${servico}%0A` +
                `*Data:* ${dataFormatada}%0A` +
                `*Horário Sugerido:* ${hora}%0A%0A` +
                `Aguardo a confirmação!`;

            const numeroWhatsApp = "5531999999999"; 
            const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

            window.open(linkWhatsApp, '_blank');
        });
    }
});