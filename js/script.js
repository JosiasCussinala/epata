document.addEventListener("DOMContentLoaded", function () {
    // Menu responsivo
    const menuToggle = document.querySelector(".menu-toggle");
    const navUl = document.querySelector("nav ul");

    if (menuToggle && navUl) {
        menuToggle.addEventListener("click", function () {
            navUl.classList.toggle("active");
        });
    }

    // Testemunhos
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');

    if (testimonials.length > 0 && prevBtn && nextBtn) {
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = (i === index) ? 'block' : 'none';
            });
        }

        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
            showTestimonial(currentTestimonial);
        });

        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
            showTestimonial(currentTestimonial);
        });

        // Inicia com o primeiro testemunho visível
        showTestimonial(currentTestimonial);
    }

    // Alerta para "Ver detalhes" do Portfólio
    const detalheBtns = document.querySelectorAll(".portfolio-item .btn");

    if (detalheBtns.length > 0) {
        detalheBtns.forEach(btn => {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                Swal.fire({
                    icon: "info",
                    title: "Site Indisponível",
                    text: "Este projeto ainda não está disponível.",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#3085d6"
                });
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formInscricao").addEventListener("submit", function (event) {
        event.preventDefault();
        validarFormulario();
    });
});

function validarFormulario() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let curso = document.getElementById("curso").value;
    let tipo = document.getElementById("tipo").value;
    let horario = document.getElementById("horario").value;

    if (!nome || !email || !telefone || !curso || !tipo || !horario) {
        Swal.fire({
            title: "Erro",
            text: "Por favor, preencha todos os campos obrigatórios!",
            icon: "error",
            confirmButtonText: "OK"
        });
        return;
    }

    Swal.fire({
        title: "Confirmar Inscrição",
        text: "Tem certeza de que deseja se inscrever neste curso?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim, Confirmar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Sucesso", "Inscrição realizada com sucesso! Entraremos em contato em breve.", "success");
        }
    });
}


function enviarWhatsapp() {
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let dataNascimento = document.getElementById("data_nascimento").value;
    let endereco = document.getElementById("endereco").value.trim();
    let curso = document.getElementById("curso").value;
    let tipo = document.getElementById("tipo").value;
    let horario = document.getElementById("horario").value;

    if (!nome || !email || !telefone || !dataNascimento || !curso || !tipo || !horario) {
        swal("Erro", "Por favor, preencha todos os campos obrigatórios!", "error");
        return;
    }

    let mensagem = `Olá, gostaria de me inscrever no curso de *${curso}*.\n\n *Nome:* ${nome}\n *E-mail:* ${email}\n *Telefone:* ${telefone}\n *Data de Nascimento:* ${dataNascimento}\n *Endereço:* ${endereco || "Não informado"}\n *Tipo:* ${tipo}\n *Horário:* ${horario}`;

    let url = `https://wa.me/244923724469?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
    const cursoSelect = document.getElementById("curso");
    const precoInput = document.getElementById("preco");

    // Tabela de preços
    const precos = {
        "Contabilidade": "10.000 Kz",
        "Auditoria": "15.000 Kz",
        "Consultoria Financeira": "12.500 Kz",
        "Gestão Empresarial": "20.000 Kz"
    };

    // Atualizar preço ao mudar o curso
    cursoSelect.addEventListener("change", function () {
        const cursoSelecionado = cursoSelect.value;
        precoInput.value = precos[cursoSelecionado] || "A consultar";
    });
});

function mostrarOpcoesPagamento() {
    Swal.fire({
        title: "Escolha a Forma de Pagamento",
        html: `
            <button id="btn-referencia" class="btn-referencia">💳 Referência Multicaixa</button><br><br>
            <button id="btn-paypay" class="btn-paypay">💰 PayPay</button><br><br>
            <button id="btn-mobile-money" class="btn-mobile-money">📱 Mobile Money</button>
        `,
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        showConfirmButton: false,
        didOpen: () => {
            document.getElementById("btn-referencia").addEventListener("click", pagarReferencia);
            document.getElementById("btn-paypay").addEventListener("click", pagarPayPay);
            document.getElementById("btn-mobile-money").addEventListener("click", pagarMobileMoney);
        }
    });
}

function pagarReferencia() {
    Swal.fire({
        title: "Pagamento por Referência Multicaixa",
        text: "Para efetuar o pagamento, use a seguinte referência: 123456789 no seu Multicaixa Express.",
        icon: "info",
        confirmButtonText: "Ok, entendi!"
    });
}

function pagarPayPay() {
    Swal.fire({
        title: "Pagamento com PayPay",
        text: "Acesse PayPay e envie o valor para a conta: paypay@epata.com",
        icon: "info",
        confirmButtonText: "Ok, entendi!"
    });
}

function pagarMobileMoney() {
    Swal.fire({
        title: "Pagamento via Mobile Money",
        text: "Envie o valor para: \nUnitel Money: +244 900 123 456 \nE-Kwanza: +244 900 654 321",
        icon: "info",
        confirmButtonText: "Ok, entendi!"
    });
}
