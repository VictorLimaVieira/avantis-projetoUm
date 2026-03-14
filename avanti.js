const produtos = [
  { id: 1, preco: "R$ 79,90" },
  { id: 2, preco: "R$ 79,90" },
  { id: 3, preco: "R$ 79,90" },
  { id: 4, preco: "R$ 79,90" },
  { id: 5, preco: "R$ 79,90" },
  { id: 6, preco: "R$ 79,90" },
  { id: 7, preco: "R$ 79,90" },
  { id: 8, preco: "R$ 79,90" },
  { id: 9, preco: "R$ 79,90" }
];

function renderizarSwiper(vitrine, swiperClass) {
  if (!vitrine) return;

  const textoVitrine = vitrine.querySelector('.texto-vitrine');

  let slidesHTML = '';
  produtos.forEach(produto => {
    slidesHTML += `
      <div class="swiper-slide">
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
      </div>
    `;
  });

  const swiperHTML = `
    <div class="swiper ${swiperClass}">
      <div class="swiper-wrapper">
        ${slidesHTML}
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-pagination"></div>
    </div>
  `;

  vitrine.innerHTML = '';
  if (textoVitrine) vitrine.appendChild(textoVitrine);
  vitrine.innerHTML += swiperHTML;

  new Swiper(`.${swiperClass}`, {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 16,
    navigation: {
      nextEl: `.${swiperClass} .swiper-button-next`,
      prevEl: `.${swiperClass} .swiper-button-prev`,
    },
    pagination: {
      el: `.${swiperClass} .swiper-pagination`,
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      480: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 5 },
    }
  });
}

renderizarSwiper(document.getElementById('vitrine-1'), 'swiper-vitrine-1');
renderizarSwiper(document.getElementById('vitrine-2'), 'swiper-vitrine-2');

const btnCategorias = document.getElementById('categorias');
const dropdownMenu = document.getElementById('dropdown-categorias');
const departamentoItems = document.querySelectorAll('.departamento-item');

btnCategorias.addEventListener('click', (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle('aberto');
});

document.addEventListener('click', (e) => {
  if (!btnCategorias.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove('aberto');
  }
});

departamentoItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    departamentoItems.forEach(i => i.classList.remove('ativo'));
    document.querySelectorAll('.categorias-panel').forEach(p => p.classList.remove('ativo'));

    item.classList.add('ativo');
    const panelId = 'panel-' + item.dataset.dept;
    const panel = document.getElementById(panelId);
    if (panel) panel.classList.add('ativo');
  });
});

const voceBuscou = document.querySelector('.resultado-busca');
const searchBusca = document.querySelector('.search-container');

function mostrarBuscar(event) {
  event.preventDefault();
  const termoBuscado = document.querySelector('.search-container input').value;
  document.getElementById('texto-resultado').innerHTML = `Você buscou por: '${termoBuscado}'`;
  voceBuscou.style.display = 'block';
}

searchBusca.addEventListener('submit', mostrarBuscar);

const hamburguer = document.getElementById('hamburguer');
const menuNav = document.getElementById('menu-nav');

hamburguer.addEventListener('click', () => {
  menuNav.classList.toggle('aberto');
});