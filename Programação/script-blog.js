// Função assíncrona para buscar os dados
async function carregarPosts() {
  try {
    // 1. Busca o arquivo JSON
    const resposta = await fetch('./post.json');
    const posts = await resposta.json();

    // 2. Encontra o container no HTML onde os posts vão ficar
    const container = document.getElementById('feed-de-posts');

    // 3. Limpa o container (boa prática)
    container.innerHTML = '';

    // 4. Percorre cada post e cria o HTML usando Template Literals (Crase)
    posts.forEach(post => {
      const postHTML = `
        <article class="post-card">
                <div class="post-thumbnail">
                    <img src="${post.imagem_capa}" alt="Thumbnail do Post">
                </div>
                <div class="post-content">
                    <span class="post-category">${post.categoria}</span>
                    <h2><a href="#">${post.titulo}</a></h2>
                    <p class="post-excerpt">${post.resumo}</p>
                    <div class="post-meta">
                    </div>
                </div>
            </article>

      `;
      // Adiciona o HTML gerado dentro do container
      container.innerHTML += postHTML;
    });

  } catch (erro) {
    console.error("Erro ao carregar os posts:", erro);
  }
}

// Executa a função quando a página carrega
carregarPosts();