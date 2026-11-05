# Quel personnage de jeu vidéo es-tu ?

Un quiz de personnalité dans le navigateur : réponds aux questions et découvre lequel des 51 personnages de jeux vidéo te ressemble le plus.

- 12 questions par partie, tirées au hasard parmi 107
- Un score par personnage selon tes réponses, et le classement des 8 plus proches
- Une fiche pour le personnage obtenu, avec une citation, une anecdote et un résumé récupéré sur Wikipédia

## Utilisation

Aucune dépendance ni build :

- `index.html` : version découpée en fichiers (`css/`, `js/`)
- `quiz-personnage.html` : version autonome en un seul fichier

Ouvre l'un des deux dans un navigateur, ou sers le dossier avec n'importe quel serveur web statique.

## Structure

| Fichier | Rôle |
|---|---|
| `js/characters.js` | Les personnages, leurs descriptions et anecdotes |
| `js/questions.js` | Les questions et le barème de chaque réponse |
| `js/quiz.js` | Le déroulement du quiz et le calcul des scores |
| `js/ui.js` | L'affichage |
| `js/wiki.js` | La récupération des résumés Wikipédia |

Les personnages et leurs univers appartiennent à leurs ayants droit respectifs. Ce quiz est un projet de fan, sans affiliation.
