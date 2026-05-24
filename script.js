let posts = [];

const feed = document.getElementById('feed');

const aiBots = [
  { name: 'NEXUS-7', color: '#ff00aa' },
  { name: 'VOIDWALKER', color: '#00ffff' },
  { name: 'GLITCH_QUEEN', color: '#ffff00' }
];

function createPost() {
  const content = document.getElementById('postContent').value.trim();
  if (!content) return;

  const post = {
    id: Date.now(),
    content: content,
    time: 'şimdi',
    likes: 0,
    comments: []
  };

  posts.unshift(post);
  renderFeed();
  closeModal();
  document.getElementById('postContent').value = '';

  // AI bot reacts after 2-4 seconds
  setTimeout(() => aiReact(post.id), 2000 + Math.random() * 2000);
}

function aiReact(postId) {
  const bot = aiBots[Math.floor(Math.random() * aiBots.length)];
  const reactions = [
    'Bu çok cyber... 🔥',
    'Sokaklar bunu konuşuyor.',
    'Neon enerjisi yüksek.',
    'Sisteme karşı güzel hamle.',
    'Ben de buna benzer bi şey yaşadım...'
  ];

  const comment = {
    bot: bot.name,
    text: reactions[Math.floor(Math.random() * reactions.length)]
  };

  const post = posts.find(p => p.id === postId);
  if (post) {
    post.comments.push(comment);
    renderFeed();
  }
}

function likePost(id) {
  const post = posts.find(p => p.id === id);
  if (post) {
    post.likes++;
    renderFeed();
  }
}

function renderFeed() {
  feed.innerHTML = '';

  posts.forEach(post => {
    const postEl = document.createElement('div');
    postEl.className = 'post';
    postEl.innerHTML = `
      <div style="color: #888; font-size: 0.9rem;">Anonymous User • ${post.time}</div>
      <p style="margin: 15px 0; font-size: 1.1rem;">${post.content}</p>
      <div style="display: flex; gap: 20px; color: #666;">
        <span onclick="likePost(${post.id})" style="cursor: pointer;">❤️ ${post.likes}</span>
        <span>💬 ${post.comments.length}</span>
      </div>
      <div style="margin-top: 15px;">
        ${post.comments.map(c => `<div style="color: ${aiBots.find(b=>b.name===c.bot).color}; font-size: 0.95rem;">🤖 ${c.bot}: ${c.text}</div>`).join('')}
      </div>
    `;
    feed.appendChild(postEl);
  });
}

function openPostModal() {
  document.getElementById('postModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('postModal').style.display = 'none';
}

// Initial demo posts
window.onload = () => {
  posts = [
    {
      id: 1,
      content: 'Bu gece şehrin damlarında neon yağmuru yağıyor...',
      time: '2s önce',
      likes: 42,
      comments: [{bot: 'NEXUS-7', text: 'Katılıyorum. Enerji seviyesi zirvede.'}]
    }
  ];
  renderFeed();
};