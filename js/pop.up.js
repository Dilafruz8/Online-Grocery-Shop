document.getElementById('button').addEventListener('click',function()  {
document.querySelector('.bg-modal').style.display = 'flex';
});

document.getElementById('btn-close').addEventListener('click',() => {
    document.querySelector('.bg-modal').style.display = 'none';
  });

document.getElementById('submit').addEventListener('click',function() {
  document.querySelector('.content').style.display = 'none'
  document.querySelector('.thankyou-content').style.display = 'flex';
});

document.getElementById('cross').addEventListener('click',function()  {
    document.querySelector('.thankyou-content').style.display = 'none';
  });
document.getElementById('menu-button').addEventListener('click', function () {
  document.querySelector('.menu-bg').style.display = 'flex';
});

document.getElementById('exit').addEventListener('click', function () {
  document.querySelector('.menu-bg').style.display = 'none';
});

// const modal = document.querySelector('modal')

// document.querySelector('.bg-modal').style.display = 'flex';
// const modal = document.querySelector('#modal');
// const openModal = document.querySelector('.open-button');
// const closeModal = document.querySelector('.btn-close');

// openModal.addEventListener('click', () {
// modal.showModal();
// })
