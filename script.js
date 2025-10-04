const products = Array.from({length:12}).map((_,i)=>({
  sku: `SKU-${1000+i}`,
  title: `Component ${i+1} — 10k per reel`,
  price: (0.5 + i*0.2).toFixed(2),
  img: 'assets/product-placeholder.png'
}));

function renderProducts(){
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  products.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}" />
      <div class="title">${p.title}</div>
      <div class="meta">${p.sku} • $${p.price}</div>
      <div style="margin-top:8px">
        <button class="btn">Add to Cart</button>
        <button class="btn ghost" style="margin-left:8px">Datasheet</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

document.getElementById('searchBtn').addEventListener('click', ()=>{
  const q = document.getElementById('searchInput').value.trim();
  alert('Search for: ' + (q || '(empty)') + '\nThis is a static demo — implement search backend to search real data.');
});

renderProducts();
