const numberOfFish3 = 3; // Nombre de poissons à générer
let gamePaused3 = false; // Variable pour savoir si le jeu est en pause
let fishElements3 = []; // Tableau pour stocker les éléments de poisson


const fishData3 = [
    { rightImage: 'static/images/8_NSMBU_Cheep_Cheep-removebg-preview.png', leftImage: 'static/images/8_NSMBU_Cheep_Cheep-removebg-preview.png', text: "Les abysses sont un environnement totalement hostile à l'homme, et représentent l'un des milieux les moins explorés de la planète. À partir de la zone mésopélagique, les pressions sont trop grandes pour les méthodes traditionnelles d'exploration, exigeant des approches alternatives pour la recherche.", popupImage: 'static/images/8_abysses_ILLUS.png' },
    { rightImage: 'static/images/9_sirene-removebg-preview.png', leftImage: 'static/images/9_sirene-removebg-preview.png', text: "La destruction des coraux peut avoir des conséquences sur la santé publique. Il peut en effet se développer sur un récif en mauvais état une flambée de ciguatera, intoxication provoquée par la consommation de poissons récifaux. Nous avons besoin de l'océan comme il a besoin de nous.", popupImage: 'static/images/9_poumons_ILLUS.png' },
    { rightImage: 'static/images/10_submarine.png', leftImage: 'static/images/10_submarine.png', text: "La fascination pour les sirènes est très ancienne. Il y a 3000 ans, lors de son Odyssée, Ulysse voulait déjà partir à leur rencontre. Dans la Grèce antique, ces créatures sont considérées comme irrésistibles est très dangereuses. On peut également citer les hommes-poissons dans One Piece, manga le plus populaire du globe. Nous admirons l'océan à juste titre", popupImage: 'static/images/10_sirene_ILLUS.png' }
];

function randomPosition3(element) {
    const aquariumWidth = window.innerWidth;
    const aquariumHeight = window.innerHeight;

    const x = Math.random() * (aquariumWidth - 100); // Position horizontale aléatoire
    const y = Math.random() * (aquariumHeight - 100); // Position verticale aléatoire

    return { x, y };
}

function moveFishContinuously3(fish, fishInfo) {
    function move() {
        const currentPosition = getCurrentPosition3(fish);
        const newPosition = randomPosition3(fish);
        const direction = newPosition.x > currentPosition.x ? 'right' : 'right';

        applyPositionAndDirection3(fish, newPosition, direction, fishInfo);
        setTimeout(move, 4000); // Déplace le poisson toutes les 4 secondes
    }
    move(); // Démarre le mouvement
}

function getCurrentPosition3(element) {
    let rect = element.getBoundingClientRect();
    
    return {
        x: rect.left + window.scrollX,  // Position horizontale
        y: rect.top + window.scrollY    // Position verticale
    };
}


function applyPositionAndDirection3(element, position, direction, fishInfo) {
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


function generateFish3() {
    const aquarium3 = document.querySelector('.aquarium3');

    console.log("NTM")

    for (let i = 0; i < numberOfFish3; i++) {
        const fish = document.createElement('img');
        const fishInfo = fishData3[i % fishData3.length]; // Sélectionne les informations du poisson
        fish.src = fishInfo.rightImage; // Utilise l'image du poisson vers la droite par défaut
        fish.alt = 'Poisson';
        fish.classList.add('fish');
        fish.dataset.text = fishInfo.text; // Stocke le texte dans un attribut de données
        fish.dataset.popupImage = fishInfo.popupImage; // Stocke l'image du popup dans un attribut de données

        // Applique immédiatement la position initiale sans attendre
        const initialPosition = randomPosition3(fish);
        applyPositionAndDirection3(fish, initialPosition, 'right', fishInfo);
        aquarium3.appendChild(fish);

        // Force un re-rendu du navigateur avant de démarrer l'animation
        requestAnimationFrame(() => {
            // L'animation commence après la position initiale
            moveFishContinuously3(fish, fishInfo);
        });

        // Ajoute un gestionnaire de clic pour faire disparaître le poisson et mettre en pause le jeu
        fish.addEventListener('click', () => {
            if (!gamePaused3) {
                gamePaused3 = true;
                disableFishClicks3(); // Désactive les clics sur les poissons
                showMessage3(fish.dataset.text, fish.dataset.popupImage); // Afficher le message avec le texte et l'image spécifiques
            }
            fish.classList.add('hidden');
        });

        fishElements3.push(fish); // Ajoute le poisson au tableau
    }
}

function showMessage3(text, imageSrc) {
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
        gamePaused3 = false; // Reprend le jeu
        enableFishClicks3(); // Réactive les clics sur les poissons
        resumeFishMovement3(); // Reprend le mouvement des poissons
    });

    messageBox.appendChild(messageContent);
    messageBox.appendChild(messageImage);
    messageBox.appendChild(closeButton);

    document.body.appendChild(messageBox); // Affiche le message
}

function resumeFishMovement3() {
    fishElements3.forEach(fish => {
        fish.classList.remove('hidden'); // Affiche le poisson
        moveFishContinuously3(fish, fishData3[fishElements3.indexOf(fish) % fishData3.length]); // Reprend le mouvement du poisson
    });
}

function disableFishClicks3() {
    fishElements3.forEach(fish => {
        fish.style.pointerEvents = 'none'; // Désactive les clics
    });
}

function enableFishClicks3() {
    fishElements3.forEach(fish => {
        fish.style.pointerEvents = 'auto'; // Réactive les clics
    });
}

window.addEventListener('load', generateFish3)