const hamburgjs = () => {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.ulNav').classList.remove('show');
  });
  document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.ulNav').classList.toggle('show');
  });
}

export { hamburgjs }
