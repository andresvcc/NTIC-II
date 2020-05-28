[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)![codecov](https://img.shields.io/badge/status-developement-orange)
[![Known Vulnerabilities](https://snyk.io/test/github/andresvcc/stage-meister/badge.svg)](https://snyk.io/test/github/andresvcc/stage-meister)[![Build Status](https://travis-ci.org/andresvcc/ademag.svg?branch=master)](https://travis-ci.org/andresvcc/ademag)   

# Welcome to Digital Statius : the Achilleid

Ce projet s’inscrit dans le cadre du projet **Digital Staus: The Achilleid** , supervisé par **l’unité de Lan de l’Université de Genève**. Il consiste à proposer une version libre d’accès au dernier ouvrage de Stace, **L’Achilléide**.

Le projet de cartographie des manuscrits consiste à prendre les données d’une panoplie de manuscrits répertoriés dans l’ouvrage **The Manuscripts of Staus**, et d’uliser ces données dans la créaon d’une carte interacve qui permet aux ulisateurs de suivre leurs déplacements au fil du temps, et d’offrir aux lanistes et autres philologues un oul permeant de faciliter la 3 recherche sur la transmission de manuscrits du Moyen-Âge jusqu’à nos jours.



# Installation

```bash
$ npm install
```
```bash
$ npx npm-force-resolutions
```


# Usage de production

**-Deployement**

```bash
🚀 $ npm run build
```
Le mode de production est destiné à être lancé par un serveur, la procédure consiste à effectuer une transpilation des modules de ce logiciel, ceci pour générer le dossier **build**.
> **Note 1:**  le dossier **build** contient les fichiers, **index.html** et autres éléments nécessaires à son fonctionnement. 
> **Note 2:** le fichier index.html peut également être utilisé localement
  

# Usage de develepement

  

**-Démarrer le serveurs local de développement  :**

```bash
📌 $ npm run dt
```
```bash
Deployment sur: http://localhost:5000
```
> **Note:**  Plusieurs modules de ce logiciel ne sont pas conçus pour fonctionner dans l'environnement de test sur Webpack, ils sont donc plus lents en mode développement qu'en mode production



# Usage

cette suite d'information est destinée à comprendre le fonctionnement de base, permettant d'effectuer la **maintenance**.

## Components

| Nom            |Description					 |
|----------------|-------------------------------|
|redux | `(Hook) conteneur de statut Redux` |
|Button | Bouton simple mis en œuvre à partir d'une composants **\<div/>**|
|GridContainer | Conteneur de composants **\<GridItem />** |
|GridItem | système de grille simplifie,  xs={**valeur entre 1 et 12**} |
|GridRow | système de grille affiché en ligne |
|GridColon | système de grille affiché en colonnes |
|ChartArea | affichage statistique |
|ChartCompare | affichage statistique |
|ChartBar | affichage statistique |
|Table | composante de présentation des données sous forme de tableau |
|SubTable | sous-table, d'une ligne du composants **\<Table/>** |
|Map | générateur de la carte |
|Marker | générateur de pointeurs |
|LineDraw | générateur de flèches|
|Slider | barre temporelle |

## Elements

| Nom            |Description					 |
|----------------|-------------------------------|
|Body| html body container |
|Header| navigation bar container |

## États initiaux dans le redux
| State          | description | Value					 |
|----------------|-------------|----------|
|barreTemporelle|date de début| 800|
|greetingStatus| affichage des tables (base de données) |false|
|sizeInfoBar| Propriétés initiales de la table |{ group: false, filter: false, size: 0 }|
|pageSize| nombre initial de lignes de la table |5|
|librairiesData|base de données des bibliothèques |[]|
|infoBar| le contenu initial de la barre d'information |'...'|
|center| Coordonnées initiales de la carte|{ pos: [41.902229, 12.4581], zoom: 3 }|
|openSearch| commutateur d'affichage de la barre de recherche |false|

## Management des données
**Database**
<img src="http://imgfz.com/i/iKNE9vL.png"  /></a>


**Graphe de parcours**
<img src="http://imgfz.com/i/eI1YNir.png" /></a>

**Data Warehouse**
<img src="http://imgfz.com/i/LhpPBya.png" /></a>