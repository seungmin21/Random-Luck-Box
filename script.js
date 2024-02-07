document.addEventListener('DOMContentLoaded', function() {
  const pouchA = document.getElementById('pouchA');
  const pouchB = document.getElementById('pouchB');
  const contentA = document.getElementById('contentA');
  const contentB = document.getElementById('contentB');
  const modalA = document.getElementById('modalA');
  const modalB = document.getElementById('modalB');

  function toggleContent(contentId) {
      if (contentId === 'contentA') {
          contentA.classList.remove('hidden');
          contentB.classList.add('hidden');
      } else if (contentId === 'contentB') {
          contentA.classList.add('hidden');
          contentB.classList.remove('hidden');
      }
  }

  pouchA.addEventListener('click', () => {
      toggleContent('contentA');
  });

  pouchB.addEventListener('click', () => {
      toggleContent('contentB');
  });

  contentA.addEventListener('click', () => {
      modalA.style.display = 'block';
  });

  contentB.addEventListener('click', () => {
      modalB.style.display = 'block';
  });

  window.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal')) {
          event.target.style.display = 'none';
      }
  });
});