const produtos = [
  { id: 1, tag: "NOVO", preco: "R$ 79,90"},
  { id: 2, tag: "NOVO", preco: "R$ 79,90" },
  { id: 3, tag: "NOVO", preco: "R$ 79,90" },
  { id: 4, tag: "NOVO", preco: "R$ 79,90" },
  { id: 5, tag: "NOVO", preco: "R$ 79,90" }
];

const vitrines = document.querySelectorAll('.vitrine-produtos');

let todosOsCardsHTML = '';

produtos.forEach(produto => {
  todosOsCardsHTML += `
    <article class="card-produto">
      <span class="tag-novo">NOVO</span>
      <img src="img/imagem-lancamentos.svg" alt="Imagem dos lançamentos">
      <div class="info-produto">
        <h3 class="titulo-produto">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div class="linha-preco-antigo">
          <s class="preco-riscado">R$ 100,00</s>
          <span class="tag-desconto">10% OFF</span>
        </div>
        <p class="preco-atual"><strong>${produto.preco}</strong></p>
        <p class="parcelamento">Ou em até <strong>10x de R$ 7,90</strong></p>
      </div>
      <button type="button" class="btn-comprar">Comprar</button>
    </article>
  `;
});

vitrines.forEach(vitrine => {
  vitrine.innerHTML += todosOsCardsHTML;
});

const btnCategorias = document.getElementById('categorias');
const dropdownMenu = document.getElementById('dropdown-categorias');
const departamentoItems = document.querySelectorAll('.departamento-item');

// Abre/fecha ao clicar em "Todas as Categorias"
btnCategorias.addEventListener('click', (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle('aberto');
});

// Fecha ao clicar fora
document.addEventListener('click', (e) => {
  if (!btnCategorias.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove('aberto');
  }
});

// Troca o painel ao passar o mouse nos departamentos
departamentoItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Remove ativo de todos
    departamentoItems.forEach(i => i.classList.remove('ativo'));
    document.querySelectorAll('.categorias-panel').forEach(p => p.classList.remove('ativo'));

    // Ativa o atual
    item.classList.add('ativo');
    const panelId = 'panel-' + item.dataset.dept;
    const panel = document.getElementById(panelId);
    if (panel) panel.classList.add('ativo');
  });
});