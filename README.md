# Paris Web Design System

[Accéder au Design System](https://stage.paris-web.fr/design-system/master/)

## Concept

Le but de ce dépôt est d'implémenter et documenter les différents composants
faisant parti du Design System de Paris Web.

La brique utilisée pour le moment est [Hugo](https://gohugo.io/). C'est un
générateur de site statique.

Attention, ce n'est pour l'instant qu'un POC afin de décider ensemble si cela
est vraiement pertinent à utiliser ou non. Tous les retours sont les bienvenus.

## Roadmap

Les points avec ⚠️ sont les points à préciser avant de passer à l'intégration.
Les points avec 🛠️ sont les points en cours de réalisation.
Veiller à mettre à jour la roadmap sur master avant de commencer qqch pour éviter de se marcher dessus.

### Appel à orateurs + Inscriptions (26 février)

Date limite pour le design system : 9 février

* [ ] Favicon
* [x] ✅ Tokens - titraille (#24)
* [x] ✅ Composant - Hero ([#8](https://github.com/Paris-Web/pw-design-system/pull/8) - Julien)
* [x] ✅ Composant - Bandeau Call To Action (Si vous êtiez la.e prochain) (Julien)
      orateur.rice ?)
* [x] ✅ Composant - Citation (Julien)
* [x] ✅ Composant - [Lien flèche](https://zpl.io/2ZP4WrG) (Pierre)
* [x] ✅ Composant - Input (Julien)
* [x] ✅ Composant - Sponsor (Julien)
* [ ] 🛠️ Composant - Image légendée (Julien)
* [x] ✅ Composant - [Pagination](https://zpl.io/aNBq6yZ) (markup et styles - http://www.a11ymatters.com/pattern/pagination/) (Julien)
* [x] ✅ Module - Kesako (2 jours de conférences, 1 journée d'atelier,
      accessible à tous, etc.) (Julien)
* [x] ✅ Module - Actu' phare (#24)
* [x] ✅ Module - Liste actu' (#27) (Julien)
* [ ] Module - Devenir sponsor
* [x] ✅ Module - Portrait -> tous les orateurs (Julien)
* [x] ✅ Module - Newsletter (Julien)
* [x] ✅ Page - Actu (#24)
* [x] ✅ Page - Liste Actus (Julien)
* [x] ✅ Page - Sponsors (Julien)
* [x] ✅ Page - Header (Julien)
* [x] ✅ Page - Footer (Julien)
* [x] ✅ Page - Sidebar (Julien)
* [x] ✅ Page - Résultats de recherche (Julien)
* [ ] 🛠️ Page - Archives (Julien)

### Annonce des conférences (23 avril)

Date limite pour le design system : 2 mars (ca ne sert à rien de repousser la deadline, pour éviter d'accumuler le retard. Il y aura bien assez de choses à faire ailleurs)

* [ ] Composant - Tags
* [ ] Composant - Tabs
* [ ] Composant - Info Conférence (cf. page conférence + liste/tableau
* [ ] Module - Liste conférences
* [ ] Module - Tableau conférences
* [ ] Page - Conférence

### Nice to have

* [ ] Composant - [Pagination](https://zpl.io/aNBq6yZ) (logique d’affichage)

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

Vous pouvez ensuite aller sur http://localhost:3000/ \_- a moins que votre
navigateur ne se soit ouvert tout seul.

### Static build

Pour compiler le site, executez la commande suivante :

```bash
npm run build
```

### Déploiement

Pour déployer le site exécuter le script `./scripts/deploy.sh`.

Note : il faut avoir un accès SSH autorisé à la machine hébergeant le site. Voir
https://wiki.paris-web.fr/display/association/Sites+web pour plus d'informations

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
