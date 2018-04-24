# Paris Web Design System

[Accéder au Design System](https://stage.paris-web.fr/design-system/master/)

## Concept

Le but de ce dépôt est d'implémenter et documenter les différents composants
faisant parti du Design System de Paris Web.

La brique utilisée pour le moment est [Hugo](https://gohugo.io/). C'est un
générateur de site statique.

Toute aide est la bienvenue, quelle que soit la forme ! Remarques, PRs ou toute autre formes de contributions seront appréciées.

## Usage

### Prerequisites

Il faut installer [node](https://nodejs.org/en/download/) et
[npm](https://www.npmjs.com/get-npm) sur vos machines.

Ensuite, récupérez ce dépôt et installez les dépendances avec la commande
suivante :

```bash
npm install
```

### Development

Pour faire tourner une instance locale du site, executez la commande suivante :

```bash
npm start
```

Vous pouvez ensuite aller sur http://localhost:3000/ - a moins que votre
navigateur ne se soit ouvert tout seul.

### Static build

Pour compiler le site, executez la commande suivante :

```bash
npm run build
```

Les fichiers seront ensuite disponibles dans le dossier `/dist`.

Parmi ces fichiers, les fichiers `app.js` et `css/main.css` sont les fichiers qui pourront être utilisés directement sur le site de Paris Web.

### Déploiement

Pour déployer le site exécuter le script `./scripts/deploy.sh`.

Note : il faut avoir un accès SSH autorisé à la machine hébergeant le site. Voir
https://wiki.paris-web.fr/display/association/Sites+web pour plus d'informations.

Cependant, cela ne devrait pas être utilisé au jour le jour. En effet, une intégration CricleCI a été mise en place et permet de déployer chaque commit. L'URL n'est pour l'instant pas publique, il faut que nous nous en occupions.

## Structure

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

## Elements propres au Design System

Ce Design System permet au pôle design de discuter des évolutions de celui-ci et
valider les implémentations réalisées. Cependant, il est aussi utile aux
intégrateurs afin de voir quel HTML utiliser pour afficher telle ou telle
brique.

Pour cela, nous avons mis en place le shortcode `{{< example >}}`. En le mettant
autour de votre composant, vous permettez à celui qui visualise le styleguide
d'afficher le code en cliquant sur le composant.

Cela a été implémenté dans la page Logo si vous voulez voir ce que cela donne.

```html
{{< example >}}
<p>Le HTML de mon composant</p>
{{< /example >}}
```

## Brique initial

[Victor Hugo](https://github.com/netlify/victor-hugo) (cf.
`VICTOR_HUGO_LICENSE`)
