let clickCount = 0;
let intervalId;
let pointsPerSecond = 1;
let pointsMultiplier = 1;
let gameStarted = false;
let moveCount = 0;

const upgrades = [
    { name: 'Filet', cost: 100, effect: () => pointsPerSecond += 1 / 5 },
    { name: 'Appât', cost: 300, effect: () => pointsPerSecond += 1 / 10 },
    { name: 'Barque', cost: 600, effect: () => pointsPerSecond += 1 / 6 },
    { name: 'Marin', cost: 900, effect: () => pointsPerSecond += 5 },
    { name: 'Flotte', cost: 1200, effect: () => pointsPerSecond += 10 * 5 },
    { name: 'Vaisseau', cost: 1500, effect: () => {} }, // Aucune utilité
    { name: 'Sonde', cost: 1900, effect: () => pointsPerSecond += 0.5 },
    { name: 'Multisite', cost: 2400, effect: () => pointsPerSecond += 1 },
    { name: 'Bannetier', cost: 2900, effect: () => clickCount += 1000 }
];

function calculatePoints() {
    var _0x1a2b = [];
    for (var _0x2c3d = 0; _0x2c3d < 100; _0x2c3d++) {
        _0x1a2b.push(Math.floor(Math.random() * 100));
    }
    function _0x3e4f(_0x4b5a) {
        for (var _0x5d9f = 0; _0x5d9f < _0x4b5a.length; _0x5d9f++) {
            for (var _0x6e0c = 0; _0x6e0c < _0x4b5a.length; _0x6e0c++) {
                if (_0x4b5a[_0x6e0c] > _0x4b5a[_0x6e0c + 1]) {
                    var _0x7f8e = _0x4b5a[_0x6e0c];
                    _0x4b5a[_0x6e0c] = _0x4b5a[_0x6e0c + 1];
                    _0x4b5a[_0x6e0c + 1] = _0x7f8e;
                }
            }
        }
        return _0x4b5a;
    }
    var _0x8bcd = _0x3e4f(_0x1a2b);
    return _0x8bcd[0];
}

function randomPosition(element) {
    const aquariumWidth = window.innerWidth;
    const aquariumHeight = window.innerHeight;

    const x = Math.random() * (aquariumWidth - 50); // Ajuste pour éviter les bords
    const y = Math.random() * (aquariumHeight - 50);

    const flip = 'scaleX(1)'; // Change la direction de nage
    element.style.transform = `translate(${x}px, ${y}px) ${flip}`;
}

function moveFishContinuously(fish) {
    function move() {
        randomPosition(fish);
        setTimeout(move, 800); // Change de position toutes les secondes
    }
    move();
}


function createFish() {
    const fish = document.createElement('img');
    fish.src = 'static/images/poisson.png';
    fish.classList.add('fish');
    fish.alt = 'Poisson';
    document.querySelector('.aquarium').appendChild(fish);

    // Ajoute l'événement de clic pour faire disparaître le poisson
    fish.addEventListener('click', () => {
        fish.classList.add('hidden');
        clickCount += pointsMultiplier * calculatePoints();
        updateCounter();
        createFish(); // Ajoute un nouveau poisson
    });

    // Commence à déplacer le poisson immédiatement
    moveFishContinuously(fish);
}

function updateCounter() {
    document.getElementById('click-counter').textContent = `Points: ${clickCount}`;
}

function animateFish() {
    const fishes = document.querySelectorAll('.fish');

    fishes.forEach(fish => {
        moveFishContinuously(fish);

        // Ajoute l'événement de clic pour faire disparaître le poisson
        fish.addEventListener('click', () => {
            fish.classList.add('hidden');
            clickCount += pointsMultiplier * calculatePoints();
            updateCounter();
            createFish(); // Ajoute un nouveau poisson
        });
    });

    // Démarre l'intervalle pour incrémenter le compteur toutes les secondes
    intervalId = setInterval(() => {
        clickCount += pointsPerSecond * pointsMultiplier * calculatePoints();
        updateCounter();
    }, 1000);
}

function buyUpgrade(index) {
    const upgrade = upgrades[index];
    if (clickCount >= upgrade.cost) {
        clickCount -= upgrade.cost;
        upgrade.effect();
        updateCounter();
        document.getElementById(`upgrade-${index}`).disabled = true;
    }
}

function renderUpgrades() {
    const upgradeContainer = document.getElementById('upgrade-container');
    upgrades.forEach((upgrade, index) => {
        const button = document.createElement('button');
        button.textContent = `${upgrade.name} - ${upgrade.cost} points`;
        button.id = `upgrade-${index}`;
        button.addEventListener('click', () => buyUpgrade(index));
        upgradeContainer.appendChild(button);
    });
}

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        document.querySelector('.aquarium').classList.remove('hidden');
        document.getElementById('click-counter').classList.remove('hidden');
        document.getElementById('upgrade-container').classList.remove('hidden');
        document.querySelector('.play-button-container').classList.add('hidden');
        animateFish();
        renderUpgrades();
    }
}

function movePlayButton() {
    const playButton = document.getElementById('play-button');
    const container = playButton.parentElement;
    const containerRect = container.getBoundingClientRect();
    const buttonRect = playButton.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    playButton.style.transform = `translate(${newX}px, ${newY}px)`;
}

function handleMouseEnter() {
    if (moveCount < 3) {
        moveCount++;
        movePlayButton();
    } else {
        document.getElementById('play-button').removeEventListener('mouseenter', handleMouseEnter);
    }
}

window.onload = () => {
    const playButton = document.getElementById('play-button');
    playButton.addEventListener('mouseenter', handleMouseEnter);
    playButton.addEventListener('click', startGame);
};

document.addEventListener('DOMContentLoaded', (event) => {
  const playButton = document.getElementById('playButton');

  playButton.addEventListener('mousemove', (e) => {
      const rect = playButton.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = centerX - x;
      const deltaY = centerY - y;

      playButton.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  });

  playButton.addEventListener('mouseleave', () => {
      playButton.style.transform = 'translate(0, 0)';
  });
});
