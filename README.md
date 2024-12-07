______________________________________________________________________________________________________________________________________  
  
> ________     ____     __    __   ______      _____    _____   ________    _____                       __      _   ______      _____
>(___  ___)   / __ \    ) )  ( (  (   __ \    (_   _)  / ____\ (___  ___)  / ___/                      /  \    / ) (_  __ \    (_   _)  
>    ) )     / /  \ \  ( (    ) )  ) (__) )     | |   ( (___       ) )    ( (__        ________       / /\ \  / /    ) ) \ \     | |  
>   ( (     ( ()  () )  ) )  ( (  (    __/      | |    \___ \     ( (      ) __)      (________)      ) ) ) ) ) )   ( (   ) )    | |  
>    ) )    ( ()  () ) ( (    ) )  ) \ \  _     | |        ) )     ) )    ( (                        ( ( ( ( ( (     ) )  ) )    | |  
>   ( (      \ \__/ /   ) \__/ (  ( ( \ \_))   _| |__  ___/ /     ( (      \ \___                    / /  \ \/ /    / /__/ /    _| |__  
>   /__\      \____/    \______/   )_) \__/   /_____( /____/      /__\      \____\                  (_/    \__/    (______/    /_____(  
  
______________________________________________________________________________________________________________________________________  


# **Nuit de l’Info 2024 – Parallèle entre le Corps Humain et l’Océan**  
# Equipe **Touriste**

## **Présentation du projet**  
Ce projet a été développé dans le cadre de la **Nuit de l’Info 2024**, une compétition nationale qui réunit chaque année des milliers d’étudiants, enseignants et professionnels pour relever ensemble un défi informatique. Le principe est simple : nous disposons d’une nuit, du coucher au lever du soleil, pour imaginer, concevoir et développer une application web interactive et éducative répondant à un défi principal et à des défis secondaires proposés par des partenaires.  

L’édition 2024 s’est tenue du **5 au 6 décembre**, de **16h39 à 08h04**, dans une ambiance à la fois compétitive et collaborative, où notre créativité et nos compétences techniques ont été mises à l’épreuve.  

Le **défi principal**, proposé par **la Fondation Race for Water**, nous demandait de :  
> **Créer une application web éducative et interactive qui représente les parallèles entre les systèmes humains et les systèmes océaniques.**  
> Cette application devait permettre aux utilisateurs de comprendre comment chaque partie du corps humain trouve un écho dans les mécanismes de l’Océan. L’objectif était d’illustrer à la fois les bénéfices d’un bon fonctionnement et les conséquences des dysfonctionnements, sensibilisant ainsi aux enjeux environnementaux.  

En complément du défi principal, nous avons relevé **cinq défis secondaires** qui nous ont permis d’enrichir notre application avec des fonctionnalités ludiques et innovantes :  
1. **Coddity (code complexe)** : Développement d'une fonction complexe.  
2. **La French Tech (gamification)** : Ajout d’éléments ludiques pour encourager l’interaction.  
3. **Buetech (3D spatiale)** : Intégration d’une animation en 3D interactive.  
4. **Grinch (calendrier de l’Avent)** : Création d’un calendrier interactif basé sur une API.  
5. **API Météo** : Mise en place d’une fonctionnalité météo dynamique.  

---

## **Notre concept et nos réalisations**  
### **Une exploration interactive et éducative**  
Notre application web permet aux utilisateurs de découvrir les liens fascinants entre les mécanismes du corps humain et ceux de l’Océan. Chaque section de l’application est dédiée à une partie du corps humain (le cœur, le poumon, le cerveau, etc.) et explique comment elle peut être comparée à un système océanique clé (les courants marins, les écosystèmes, la circulation des nutriments…).  

---

## **Notre équipe**  
Notre projet a été conçu par une équipe de **sept développeurs**, étudiants en **BUT Réseaux et Télécommunications – parcours Cybersécurité** à l’IUT de Valence, avec l’aide de **deux graphistes**. Chacun a contribué activement au succès du projet :  

### **Développeurs**  
- **Bermond Michel** – Chef d’équipe, coordination globale.  
- **Dieval Flavien** – Développement de l’application météo et du site principal.  
- **Roux Fabien** – Recherche des contenus et rédaction des textes pour le site.  
- **Hauersperger Louis** – Conception du calendrier de l’Avent.  
- **Carrot Jordan** – Conception sur le calendrier de l’Avent.  
- **Lonjon Alexis** – Développement de l’animation 3D (globe) et résolution du code complexes.  
- **Soleilhac Bastien** – Création des mini-jeux (*Cookie Clicker* et *Poisson de la page d’accueil*).  

### **Graphistes**  
- **Baghdadi Orane**
- **Carrier Elouan**

---

## **Accéder au projet**  
Le projet est hébergé en ligne et accessible à cette adresse :  
[Accéder au site](#touriste-ndi.soleihb.fr)  
(*Remplacez `#lien-site` par l’URL finale du site.*)  

---

## Technologies utilisées
Ce projet combine plusieurs technologies pour offrir une expérience riche et fluide :
- **HTML** : Structure des pages web.
- **CSS** : Mise en forme et animations.
- **JavaScript** : Interactions dynamiques côté client.
- **Python** : Gestion des fonctionnalités côté serveur, en utilisant des frameworks et bibliothèques modernes.

---
## Installation des dépendances

Pour exécuter ce projet, assurez-vous que les packages suivants sont installés :
- **Python** (version 3.6 ou supérieure)
- **Modules Python** :
  - `cherrypy` : Pour gérer le serveur web.
  - `mako` : Pour le rendu des templates HTML.
  - `requests` : Pour effectuer des appels HTTP externes.
  - `json` : Pour manipuler les données au format JSON.

---

## Structure du projet
TOURISTE-NDI/  
├── res/  
│   ├── audio/  
│   │   ├── bruit_mer.mp3  
│   │   ├── dolphin.mp3  
│   │   ├── hohoho.mp3  
│   │   ├── ... (autres fichiers audio)  
│   ├── css/  
│   │   ├── Animation1.css  
│   │   ├── aquarium1.css  
│   │   ├── ... (autres fichiers CSS)  
│   ├── fonts/  
│   │   └── SuperOcean.ttf  
│   ├── images/  
│   │   ├── 1_axolot.png  
│   │   ├── 2_eauvie_ILLUS.png  
│   │   ├── ... (autres fichiers images)  
│   ├── js/  
│   │   ├── aquarium1.js  
│   │   ├── cookie.js  
│   │   └── ... (autres fichiers JS)  
│   └── templates/  
│       ├── boutonCookie.html  
│       ├── calendar.html  
│       └── ... (autres templates HTML)  
├── tmp/  
├── .gitignore  
├── config.txt  
├── interfaceWeb.py  
└── README.md  

---

## **Remarques importantes**  
- **Droits d’auteur** : Les images utilisées dans ce projet ne sont pas libres de droits. De même, le contenu produit durant la Nuit de l’Info 2024 appartient aux membres de l’équipe. Toute reproduction ou réutilisation nécessite notre autorisation.  
- **Usage éducatif** : Ce projet a été réalisé à des fins éducatives dans un contexte compétitif.  

---

## **Réalisé dans le cadre de l’IUT de Valence**  
Ce projet a été conçu dans le cadre d’un événement organisé par l’IUT de Valence. Il a permis à notre équipe, composée d’étudiants de deuxième année en **BUT Réseaux et Télécommunications – parcours Cybersécurité**, de relever ensemble les défis proposés lors de la Nuit de l’Info 2024. L’IUT a offert un cadre collaboratif et motivant qui a grandement contribué à la réussite de cette expérience enrichissante.  
