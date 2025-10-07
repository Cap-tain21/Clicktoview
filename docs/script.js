document.getElementById('openDemo').addEventListener('click', () => {
  const area = document.getElementById('gameArea');
  area.innerHTML = '';
  const btn = document.createElement('button');
  btn.textContent = 'Click me';
  btn.style.fontSize = '18px';
  btn.style.padding = '16px';
  let score = 0;
  btn.onclick = () => { score++; btn.textContent = 'Score: ' + score; };
  area.appendChild(btn);
});

document.getElementById('previewBtn').addEventListener('click', () => {
  alert("This preview is the same as what the WebView shows. Replace index.html to change content.");
});
