const numberOfFish = 4; // Nombre de poissons à générer
let gamePaused = false; // Variable pour savoir si le jeu est en pause
let fishElements = []; // Tableau pour stocker les éléments de poisson



const fishData = [
    { rightImage: 'static/images/1_axolot.png', leftImage: 'static/images/1_axolot.png', text: "L’être humain partage une histoire profonde avec le vivant qui l’entoure. Si notre parenté avec le singe est bien connue, des découvertes plus surprenantes révèlent des liens insoupçonnés avec d'autres formes de vie. Une étude australienne a montré que nous partageons 70 % de nos gènes avec...les éponges de mer. Ces créatures primitives détiennent des cellules souches considérées comme un « Saint Graal »en biologie humaine. Ce lien génétique souligne combien la vie, dans toute sa diversité, est intimement connectée.", popupImage: 'static/images/1_epongedemer_ILLUS.png' },
    { rightImage: 'static/images/2_fish.png', leftImage: 'static/images/2_fish.png', text: "Toutes les formes de vie, y compris la nôtre, dépendent fondamentalement de l’eau. Le corps humain est composé à 65-70 % d’eau, avec des proportions encore plus élevées dans le cerveau (75 %) et le sang (83 %). Ce simple fait souligne à quel point l’eau, qui constitue également l’essentiel des océans, est cruciale pour la survie. Pourtant, cette ressource est menacée par les activités humaines, mettant en péril l’équilibre vital de notre planète.", popupImage: 'static/images/2_eauvie_ILLUS.png' },
    { rightImage: 'static/images/3_fish-and-chips.png', leftImage: 'static/images/3_fish-and-chips.png', text: "Face à la dégradation des écosystèmes marins, certaines initiatives tentent de rétablir l’équilibre. En Thaïlande, sous l’impulsion de la reine, 25 chars d’assaut, 273 wagons de train et 198 camions-poubelle ont été immergés dans la mer pour créer des récifs artificiels. Ces structures inhabituelles offrent un refuge aux poissons, dans l’espoir de regonfler les réserves, réduites par la surpêche. Bien que ce projet soit audacieux, il illustre aussi la gravité des dommages causés aux océans.", popupImage: 'static/images/3_tank.png' },
    { rightImage: 'static/images/4_Laboon_Anime_Concept_Art_ACROP-removebg-preview-removebg-preview.png', leftImage: 'static/images/4_Laboon_Anime_Concept_Art_ACROP-removebg-preview-removebg-preview.png', text: "Certains scientifiques défendent une théorie fascinante : toute chose dans l’univers serait vivante. Selon cette vision, la Terre elle-même pourrait être perçue comme une entité vivante, un être dont chaque composante, des océans aux forêts, serait interdépendante. Cette hypothèse remet en question notre rapport à la nature, invitant à un respect plus profond de notre environnement.", popupImage: 'static/images/4_laplaneteestvivante_ILLUS.png' }
];

function randomPosition(element) {
    const aquariumWidth = window.innerWidth;
    const aquariumHeight = window.innerHeight;

    const x = Math.random() * (aquariumWidth - 100); // Position horizontale aléatoire
    const y = Math.random() * (aquariumHeight - 100); // Position verticale aléatoire

    return { x, y };
}

function moveFishContinuously(fish, fishInfo) {
    function move() {
        const currentPosition = getCurrentPosition(fish);
        const newPosition = randomPosition(fish);
        const direction = newPosition.x > currentPosition.x ? 'right' : 'right';

        applyPositionAndDirection(fish, newPosition, direction, fishInfo);
        setTimeout(move, 4000); // Déplace le poisson toutes les 4 secondes
    }
    move(); // Démarre le mouvement
}

function getCurrentPosition(element) {
    let rect = element.getBoundingClientRect();
    
    return {
        x: rect.left + window.scrollX,  // Position horizontale
        y: rect.top + window.scrollY    // Position verticale
    };
}


function applyPositionAndDirection(element, position, direction, fishInfo) {
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


function generateFish() {
    console.log('coucou')
    const aquarium = document.querySelector('.aquarium1');

    for (let i = 0; i < numberOfFish; i++) {
        const fish = document.createElement('img');
        const fishInfo = fishData[i % fishData.length]; // Sélectionne les informations du poisson
        fish.src = fishInfo.rightImage; // Utilise l'image du poisson vers la droite par défaut
        fish.alt = 'Poisson';
        fish.classList.add('fish');
        fish.dataset.text = fishInfo.text; // Stocke le texte dans un attribut de données
        fish.dataset.popupImage = fishInfo.popupImage; // Stocke l'image du popup dans un attribut de données

        // Applique immédiatement la position initiale sans attendre
        const initialPosition = randomPosition(fish);
        applyPositionAndDirection(fish, initialPosition, 'right', fishInfo);
        aquarium.appendChild(fish);

        // Force un re-rendu du navigateur avant de démarrer l'animation
        requestAnimationFrame(() => {
            // L'animation commence après la position initiale
            moveFishContinuously(fish, fishInfo);
        });

        // Ajoute un gestionnaire de clic pour faire disparaître le poisson et mettre en pause le jeu
        fish.addEventListener('click', () => {
            if (!gamePaused) {
                gamePaused = true;
                disableFishClicks(); // Désactive les clics sur les poissons
                showMessage(fish.dataset.text, fish.dataset.popupImage); // Afficher le message avec le texte et l'image spécifiques
            }
            fish.classList.add('hidden');
        });

        fishElements.push(fish); // Ajoute le poisson au tableau
    }
}

function showMessage(text, imageSrc) {
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
        gamePaused = false; // Reprend le jeu
        enableFishClicks(); // Réactive les clics sur les poissons
        resumeFishMovement(); // Reprend le mouvement des poissons
    });

    messageBox.appendChild(messageContent);
    messageBox.appendChild(messageImage);
    messageBox.appendChild(closeButton);

    document.body.appendChild(messageBox); // Affiche le message
}

function resumeFishMovement() {
    fishElements.forEach(fish => {
        fish.classList.remove('hidden'); // Affiche le poisson
        moveFishContinuously(fish, fishData[fishElements.indexOf(fish) % fishData.length]); // Reprend le mouvement du poisson
    });
}

function disableFishClicks() {
    fishElements.forEach(fish => {
        fish.style.pointerEvents = 'none'; // Désactive les clics
    });
}

function enableFishClicks() {
    fishElements.forEach(fish => {
        fish.style.pointerEvents = 'auto'; // Réactive les clics
    });
}

window.addEventListener('load', generateFish)