document.addEventListener('DOMContentLoaded', () => {
    const pouchA = document.getElementById('pouchA');
    const pouchB = document.getElementById('pouchB');
    const contentA = document.getElementById('contentA');
    const contentB = document.getElementById('contentB');
    const modalA = document.getElementById('modalA');
    const modalB = document.getElementById('modalB');
    const modalContentB = document.getElementById('modal-ContentB')

    const list = ["꽝", "다음 기회에", "한번 더", "광", "물티슈"];

    function toggleContent(contentId) {
        if (contentId === 'contentA') {
            contentA.classList.remove('hidden');
            contentB.classList.add('hidden');
        } else if (contentId === 'contentB') {
            contentA.classList.add('hidden');
            contentB.classList.remove('hidden');
        }
    }

    function randomPluck(modalContent) {
        const randomIndex = Math.floor(Math.random() * list.length);
        modalContent.textContent = list[randomIndex];
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
        randomPluck(modalContentB)
        modalB.style.display = 'block';
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});