document.addEventListener('DOMContentLoaded', function() {
  const purseA = document.getElementById('purseA');
  const purseB = document.getElementById('purseB');

  purseA.addEventListener('click', function() {
    toggleEnlarge(purseA);
  });

  purseB.addEventListener('click', function() {
    toggleEnlarge(purseB);
  });

  function toggleEnlarge(purse) {
    purse.classList.toggle('enlarged');
  }
});
