const numberOfFish2 = 3; // Nombre de poissons à générer
let gamePaused2 = false; // Variable pour savoir si le jeu est en pause
let fishElements2 = []; // Tableau pour stocker les éléments de poisson


const fishData2 = [
    { rightImage: 'static/images/5_magicarpe.png', leftImage: 'static/images/5_magicarpe.png', text: "Malgré ces connexions et efforts, l’impact humain sur la planète reste catastrophique. Les océans, qui régulent notre climat et abritent d’innombrables espèces, sont en péril. Si les tendances actuelles se poursuivent, les déchets plastiques pourraient dépasser la biomasse des poissons d’ici 2050. Pire encore,90 % des grands poissons ont déjà disparu en raison de la surpêche. Ces chiffres ne sont pas qu’alarmants : ils sont unemenace directe pour l’avenir de l’humanité.", popupImage: 'static/images/5_surpeche_ILLUS.png' },
    { rightImage: 'static/images/6_Nemo.png', leftImage: 'static/images/6_Nemo.png', text: "L’humanité est intimement liée à l’océan et à la Terre dans son ensemble. Nos corps, nos ressources, notre survie même dépendent de cet équilibre fragile. Pourtant, nos actes menacent de briser cette interdépendance. Il est urgent de repenser notre place dans ce système global et de réagir avant que l’océan, si généreux, ne devienne une victime silencieuse et irréversible de notre insouciance.", popupImage: 'static/images/6_poissontriste_ILLUS.png' },
    { rightImage: 'static/images/7_neptune.png', leftImage: 'static/images/7_neptune.png', text: "En compétition, l'apnée sportive fait partie des sports extrêmes en raison des risques inhérents à la recherche de la performance, notamment le risque de syncope hypoxique. Et pourtant les hommes tendent à se surpasser dans cette discipline. Car l'océan fascine les humains.", popupImage: 'static/images/7_apnee_ILLUS.png' }
];

function randomPosition2(element) {
    const aquariumWidth = window.innerWidth;
    const aquariumHeight = window.innerHeight;

    const x = Math.random() * (aquariumWidth - 100); // Position horizontale aléatoire
    const y = Math.random() * (aquariumHeight - 100); // Position verticale aléatoire

    return { x, y };
}

function moveFishContinuously2(fish, fishInfo) {
    function move() {
        const currentPosition = getCurrentPosition2(fish);
        const newPosition = randomPosition2(fish);
        const direction = newPosition.x > currentPosition.x ? 'right' : 'right';

        applyPositionAndDirection2(fish, newPosition, direction, fishInfo);
        setTimeout(move, 4000); // Déplace le poisson toutes les 4 secondes
    }
    move(); // Démarre le mouvement
}

function getCurrentPosition2(element) {
    let rect = element.getBoundingClientRect();
    
    return {
        x: rect.left + window.scrollX,  // Position horizontale
        y: rect.top + window.scrollY    // Position verticale
    };
}


function applyPositionAndDirection2(element, position, direction, fishInfo) {
    // Applique la position avec la transformation CSS
    element.style.transform = `translate(${position.x}px, ${position.y}px)`;

    // Si la direction est à droite, on utilise l'image d'origine, sinon on inverse l'image avec scaleX(-1)
    if (direction === 'right') {
        element.src = fishInfo.rightImage;
        element.style.transform += ' scaleX(1)'; // Pas d'inversion
    } else {
        element.src = fishInfo.leftImage;
        element.style.transform += ' scaleX(-1)'; // Inversion horizontale pour aller à gauche
    }
}


function generateFish2() {
    const aquarium2 = document.querySelector('.aquarium2');

    console.log("NTM")

    for (let i = 0; i < numberOfFish2; i++) {
        const fish = document.createElement('img');
        const fishInfo = fishData2[i % fishData2.length]; // Sélectionne les informations du poisson
        fish.src = fishInfo.rightImage; // Utilise l'image du poisson vers la droite par défaut
        fish.alt = 'Poisson';
        fish.classList.add('fish');
        fish.dataset.text = fishInfo.text; // Stocke le texte dans un attribut de données
        fish.dataset.popupImage = fishInfo.popupImage; // Stocke l'image du popup dans un attribut de données

        // Applique immédiatement la position initiale sans attendre
        const initialPosition = randomPosition2(fish);
        applyPositionAndDirection2(fish, initialPosition, 'right', fishInfo);
        aquarium2.appendChild(fish);

        // Force un re-rendu du navigateur avant de démarrer l'animation
        requestAnimationFrame(() => {
            // L'animation commence après la position initiale
            moveFishContinuously2(fish, fishInfo);
        });

        // Ajoute un gestionnaire de clic pour faire disparaître le poisson et mettre en pause le jeu
        fish.addEventListener('click', () => {
            if (!gamePaused2) {
                gamePaused2 = true;
                disableFishClicks2(); // Désactive les clics sur les poissons
                showMessage2(fish.dataset.text, fish.dataset.popupImage); // Afficher le message avec le texte et l'image spécifiques
            }
            fish.classList.add('hidden');
        });

        fishElements2.push(fish); // Ajoute le poisson au tableau
    }
}

function showMessage2(text, imageSrc) {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.innerHTML = text;

    const messageImage = document.createElement('div');
    messageImage.classList.add('message-image');
    const img = document.createElement('img');
    img.src = imageSrc; // Utilise l'image spécifique
    img.alt = 'Illustration';
    messageImage.appendChild(img);

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '×';
    closeButton.addEventListener('click', () => {
        messageBox.remove(); // Ferme le message
        gamePaused2 = false; // Reprend le jeu
        enableFishClicks2(); // Réactive les clics sur les poissons
        resumeFishMovement2(); // Reprend le mouvement des poissons
    });

    messageBox.appendChild(messageContent);
    messageBox.appendChild(messageImage);
    messageBox.appendChild(closeButton);

    document.body.appendChild(messageBox); // Affiche le message
}

function resumeFishMovement2() {
    fishElements2.forEach(fish => {
        fish.classList.remove('hidden'); // Affiche le poisson
        moveFishContinuously2(fish, fishData2[fishElements2.indexOf(fish) % fishData2.length]); // Reprend le mouvement du poisson
    });
}

function disableFishClicks2() {
    fishElements2.forEach(fish => {
        fish.style.pointerEvents = 'none'; // Désactive les clics
    });
}

function enableFishClicks2() {
    fishElements2.forEach(fish => {
        fish.style.pointerEvents = 'auto'; // Réactive les clics
    });
}

window.addEventListener('load', generateFish2)