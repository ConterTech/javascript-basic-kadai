const changeBtn = document.getElementById('btn');

changeBtn.addEventListener('click', () => {
  const changeh1 = document.getElementById('text');

  setTimeout(() => {
    changeh1.innerHTML = 'ボタンをクリックしました';
  }, 2000);
});