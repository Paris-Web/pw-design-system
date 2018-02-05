---
title: "Fil d’actualités"
menu: "modules"
styleguideClassModifier: "fil-actu"
---

# Fil d’actualités

Le module de fil d’actualité est un encart autonome ayant pour but l’affichage des dernières actualités
publiées sur le site. Il permet également un accès direct à la page [page de liste des actualités](#).

Il est utilisé sur la [page d’accueil]({{< relref "pages/accueil/index.md" >}}) ainsi que dans la seconde
colonne de la [page de détail d’une actualité]({{< relref "pages/actualite/index.md" >}}).

---

## Par défaut

{{< example >}}
    {{< fil-actu >}}
        <li class="fil-actu__list__item">
            <a href="#" class="discreet">Etiam porta sem malesuada magna mollis euismod.</a>
            <time datetime="2017-10-16" class="date">16 octobre 2017</time>
        </li>
        <li class="fil-actu__list__item">
            <a href="#" class="discreet">Cras mattis consectetur purus sit amet fermentum.</a>
            <time datetime="2017-10-03" class="date">3 octobre 2017</time>
        </li>
        <li class="fil-actu__list__item">
            <a href="#" class="discreet">Maecenas faucibus mollis interdum.</a>
            <time datetime="2017-09-28" class="date">28 septembre 2017</time>
        </li>
        <li class="fil-actu__list__item">
            <a href="#" class="discreet">Etiam porta sem malesuada magna mollis euismod.</a>
            <time datetime="2017-10-16" class="date">16 octobre 2017</time>
        </li>
    {{< /fil-actu >}}
{{< /example >}}
