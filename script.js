document.addEventListener('DOMContentLoaded', () => {
    const pouchA = document.getElementById('pouchA');
    const pouchB = document.getElementById('pouchB');
    const contentA = document.getElementById('contentA');
    const contentB = document.getElementById('contentB');
    const modalA = document.getElementById('modalA');
    const modalB = document.getElementById('modalB');
    const modalContentA = document.getElementById('modal-ContentA')
    const modalContentB = document.getElementById('modal-ContentB')

    const list = ["꽝", "다음 기회에", "한번 더", "광", "물티슈"];
    const array = ["새해 복 많이 받으세요.", "용돈 줘", "낙담하지 말기", "너나 잘하세요", "그래서 니가 뭘할 수 있는데", "오늘 저녁은 소고기드세요", "풍성한 한가위 되세요", "건강하게 오래오래사세요", "넌 할 수 있어", "어떤 일이든 원하는 대로 이뤄진다."]

    function toggleContent(contentId) {
        if (contentId === 'contentA') {
            contentA.classList.remove('hidden');
            contentB.classList.add('hidden');
        } else if (contentId === 'contentB') {
            contentA.classList.add('hidden');
            contentB.classList.remove('hidden');
        }
    }

    function FortuneCookie(word) {
        const randomWord = Math.floor(Math.random() * array.length);
        word.textContent = array[randomWord]

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
        FortuneCookie(modalContentA)
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