# Paris Web Design System

[Accéder au Design System](https://www.paris-web.fr/design-system/master/)

Toute aide est la bienvenue, quelle qu'en soit la forme ! Remarques, remontées de bugs, PRs ou toute autre formes de contributions seront appréciées. Si vous ne savez pas par où commencer, les [règles de contributions](https://github.com/Paris-Web/pw-design-system/blob/master/CONTRIBUTING.md) peuvent être un bon point de départ.

## Concept

Le but de ce dépôt est d'implémenter et documenter les différents composants faisant partie du Design System de Paris Web.

C'est ici aussi que les fichiers CSS et JS sont générés pour le site de [www.paris-web.fr](https://www.paris-web.fr).

## Usage

### Prerequisites

Il faut installer [node](https://nodejs.org/en/download/) et [npm](https://www.npmjs.com/get-npm) sur vos machines (testé avec node 18 et npm 9).

Ensuite, récupérez ce dépôt et installez les dépendances avec la commande suivante :

```bash
npm install
```

### Development

Pour faire tourner une instance locale du site, exécutez la commande suivante :

```bash
npm start
```

Vous pouvez ensuite aller sur http://localhost:3000/

### Static build

Pour compiler le site, exécutez la commande suivante :

```bash
npm run build
```

Les fichiers seront ensuite disponibles dans le dossier `/dist`.

Parmi ces fichiers, les fichiers `js/app.js` et `css/main.css` sont les fichiers qui pourront être utilisés directement sur le site de Paris Web. Les fichiers `js/hub.js` et `css/hub.css` sont utilisés pour le Hub.

### Déploiement

Pour déployer le site exécuter le script `./scripts/deploy.sh`.

Note : il faut avoir un accès SSH autorisé à la machine hébergeant le site. Voir https://wiki.paris-web.fr/display/association/Sites+web pour plus d'informations.

Cependant, cela ne devrait pas être utilisé au jour le jour. En effet, une intégration CricleCI a été mise en place et permet de déployer chaque commit. L'URL n'est pour l'instant pas publique, il faut que nous nous en occupions.

## Structure

La brique utilisée pour générer le Design System est [Hugo](https://gohugo.io/). C'est un
générateur de site statique. Vous pourrez donc retrouver la même structure de fichier que sur tout autre site en Hugo. La seule différence est que les fichiers CSS et les fichiers JS sont mis à part afin d'ajouter une étape de compilation (PostCSS et Webpack).

```
|--site
|  |--content                  // Les pages du design system
|  |--layouts                  // Les templates utilisés pour afficher les pages
|  |  |--_default/single.html  // La structure de vos pages de design system
|  |--static                   // Les fichiers statiques nécessaires à la compilation
|--src                         // Sources des assets
|  |--css
|  |--js
```

## Éléments propres au Design System

Ce Design System permet au pôle design de discuter des évolutions de celui-ci et
valider les implémentations réalisées. Cependant, il est aussi utile aux
intégrateurs afin de voir quel HTML utiliser pour afficher tel ou tel composant.

Pour cela, nous avons mis en place le shortcode `{{< example >}}`. En le mettant
autour d'un bout de HTML, vous permettez à celui qui visualise le styleguide
d'afficher le code en cliquant sur le composant.

Cela a été implémenté dans la page Logo si vous voulez voir ce que cela donne.

```html
{{< example >}}
<p>Le HTML de mon composant</p>
{{< /example >}}
```

## Merci

[Victor Hugo](https://github.com/netlify/victor-hugo) (cf.
`VICTOR_HUGO_LICENSE`)
