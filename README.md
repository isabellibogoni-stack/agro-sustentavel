# agro-sustentavel

# 🌱 AgroVida - Projeto de Agricultura Sustentável

> Uma página web interativa e eficiente projetada para conscientizar e apresentar soluções tecnológicas e ecológicas para o futuro do agronegócio.

Este projeto foi desenvolvido como uma solução prática e de página única (*One-Page*), focada em performance, design limpo com tons tecnológicos/profissionais (paleta baseada em azul escuro) e alta interatividade para o usuário.

---

## 🚀 Funcionalidades e Interatividade

O site foi construído focado na experiência do usuário, trazendo os seguintes recursos interativos controlados por JavaScript e CSS:

1. **Navegação Inteligente (Menu Fixo):** O cabeçalho permanece no topo do navegador enquanto o usuário rola a página. Ao clicar nos links do menu (`Início`, `Soluções`, `Contato`), a tela desliza suavemente até a seção desejada.
2. **Cards Dinâmicos (Efeito Hover):** Na seção de práticas sustentáveis, os cartões reagem ao passar o mouse por cima (sobem levemente e ganham uma borda colorida), indicando visualmente que são botões clicáveis.
3. **Painel de Informações Assíncrono:** Ao clicar em qualquer um dos cards (*Irrigação Gota a Gota*, *Energia Solar* ou *Rotação de Culturas*), o JavaScript altera o conteúdo da página em tempo real e exibe um painel explicativo detalhado sem a necessidade de recarregar o site.
4. **Alerta de Feedback:** O botão de contato simula o envio de um formulário exibindo uma mensagem interativa de sucesso para o usuário.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido do zero (*Vanilla Architecture*), utilizando as três tecnologias pilares da Web:

* **HTML5:** Estruturação semântica de todas as seções da página.
* **CSS3:** Identidade visual moderna baseada em variáveis nativas (`:root`), efeitos de transição suave (`transition`), animações de surgimento (`@keyframes fadeIn`) e estilização responsiva.
* **JavaScript (ES6):** Manipulação do DOM (Document Object Model) para controle de eventos de clique e alteração dinâmica de textos.

---

## 🎨 Paleta de Cores e Design

O design foi adaptado para tons de **Azul Escuro**, que transmitem seriedade, inovação e tecnologia aplicada ao campo, combinados com um fundo limpo que garante excelente legibilidade.

* `--azul-principal`: `#102A43` (Usado no menu e títulos)
* `--destaque-interativo`: `#FF8200` ou `#00E676` (Usado para botões e estados de hover)
* `--fundo-limpo`: `#F0F4F8` (Cor de fundo confortável para leitura)

---

## 📂 Estrutura do Repositório

O código está organizado de forma limpa e modularizada seguindo as boas práticas de desenvolvimento:

```text
├── index.html      # Estrutura principal da página única
├── style.css       # Todas as regras de estilização, cores e animações
├── script.js       # Lógica e funções interativas em JavaScript
└── README.md       # Documentação do projeto (este arquivo)
