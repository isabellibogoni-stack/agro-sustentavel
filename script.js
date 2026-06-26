/* ==========================================================================
   JAVASCRIPT: INTERATIVIDADE DO SITE AGRO SUSTENTÁVEL
   ========================================================================== */

/**
 * Função 1: Rolagem Suave
 * Faz a página rolar suavemente até a seção desejada ao clicar nos botões.
 * @param {string} id - O ID da seção de destino (ex: 'solucoes', 'contato').
 */
function scrollToSection(id) {
    const secao = document.getElementById(id);
    if (secao) {
        secao.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Função 2: Painel Dinâmico de Soluções
 * Altera o conteúdo do bloco de informações baseado no card que o usuário clicou.
 * @param {string} tipo - O tipo de tecnologia agrícola clicada.
 */
function mostrarDetalhes(tipo) {
    // Captura os elementos do HTML que serão modificados
    const painel = document.getElementById('info-panel');
    const titulo = document.getElementById('panel-title');
    const texto = document.getElementById('panel-text');

    // Torna o painel visível alterando o estilo CSS de 'none' para 'block'
    painel.style.display = 'block';

    // Objeto contendo os textos explicativos de cada prática agro sustentável
    const conteudos = {
        irrigacao: {
            titulo: "💧 Irrigação Gota a Gota",
            texto: "Reduz o desperdício de água em até 60%. O sistema aplica a quantidade exata de água diretamente na raiz da planta através de tubulações inteligentes, evitando a evaporação excessiva."
        },
        energia: {
            titulo: "☀️ Energia Solar no Campo",
            texto: "Utilização de painéis fotovoltaicos para alimentar bombas de água, cercas elétricas e sistemas de iluminação da fazenda. Gera energia limpa, renovável e reduz drasticamente os custos operacionais."
        },
        solo: {
            titulo: "🪱 Rotação de Culturas",
            texto: "Consiste em alternar as espécies plantadas na mesma área a cada safra. Isso ajuda a quebrar o ciclo de pragas, melhora a fixação de nutrientes naturais no solo e diminui a dependência de fertilizantes químicos."
        }
    };

    // Verifica se o tipo clicado existe no nosso objeto de conteúdos
    if (conteudos[tipo]) {
        titulo.innerText = conteudos[tipo].titulo;
        texto.innerText = conteudos[tipo].texto;
    }

    // Faz a tela rolar suavemente até o painel para garantir que o usuário veja a informação
    painel.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Função 3: Feedback do Formulário / Botão de Contato
 * Simula o envio de uma mensagem mostrando um alerta interativo na tela.
 */
function enviarMensagem() {
    alert("🚀 Mensagem enviada com sucesso! Obrigado pelo interesse no nosso projeto de agro sustentável. Entraremos em contato em breve.");
}