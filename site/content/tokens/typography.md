---
title: "Typographie"
menu: "tokens"
---

# Typographie

La typo utilisée est **PT Sans** dans ses variantes PT Sans Caption et PT Sans
Narrow.

https://fonts.google.com/?query=PT+Sans

<dl>
    <dt>PT Sans</dt>
    <dd>
        <code>
            font-family: "PT Sans", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        </code>
    </dd>
    <dt>PT Sans Narrow</dt>
    <dd>
        <code>
            font-family: "PT Sans Narrow", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        </code>
    </dd>
</dl>

## Usage

La taille de base est 16px sur écrans et 14px sur terminaux mobiles. Les tailles
annexes sont relatives à cette taille de base.

La hauteur de ligne vaut 1.4em sur le texte courant, mais est variable sur les
différents types de titres.

Les lignes peuvent contenir 54 à 88 caractères. Un peu plus ou un peu moins
c’est pas très grave.

## Liens

### Classiques

Les liens sont toujours soulignés idéalement avec l’option
<code>text-decoration-skip-ink: auto;</code>. La couleur du lien et du trait de soulignement est toujours la couleur <code>--color-special-blue</code>, au hover c’est <code>--color-brand-01</code>

{{< example >}}
    <a href="">Lien classique avec du texte courant</a>
{{< /example >}}

### Titres

Si les liens sont des titres, ils doivent être soulignés, couleur <code>--color-brand-01</code>, en gras et suffisamment
gros pour ne pas avoir de confusion avec les textes normaux.

{{< example >}}
    <a href="" class="title">Lien titre</a>
{{< /example >}}

### Discrets

Si les liens sont des titres dans un contenu dense, ils doivent être soulignés, de la même couleur que le contenu pour ne pas alourdir la page et gêner la lecture.

{{< example >}}
    <a href="" class="discreet">Lien titre discret</a>
{{< /example >}}

## Affichage

{{< example >}}<p class="giga">Giga - 4.5rem</p>{{< /example >}} {{<
example >}}<p class="mega">Méga - 2.5rem</p>{{< /example >}}

## Titraille

### Standard

{{< example >}}<h1>H1 - 2.25rem</h1>{{< /example >}}
{{< example >}}<h2>H2 - 1.75rem</h2>{{< /example >}}
{{< example >}}<h3>H3 - 1.5rem</h3>{{< /example >}}
{{< example >}}<h4>H4 - 1.125rem</h4>{{< /example >}}
{{< example >}}<h5>H5 - 1rem</h5>{{< /example >}}
{{< example >}}<h6>H6 - 0.875rem</h6>{{< /example >}}

Il est également possible d’appliquer ces styles sur d’autres éléments
grâce aux classes utilitaires `hX-like`.

{{< example >}}<span class="h1-like">Je suis un span .h1-like avec un long contenu qui peut passer sur 2 lignes</span>{{< /example >}}
{{< example >}}<p class="h2-like">Je suis un p .h2-like avec un long contenu qui peut passer sur 2 lignes</p>{{< /example >}}
{{< example >}}<p class="h3-like">Je suis un p .h3-like avec un long contenu qui peut passer sur 2 lignes</p>{{< /example >}}


## Séparation

Certains titres ont pour but de séparer des sections logiques : au sein d’un article on reste dans la même section (et la liste de liens sur le côté est une autre section), mais deux catégories de sponsors doivent être séparées.

Dans ce cas il faut utiliser les classes `separation` et sa variante
`separation--primary`, et les décorations sous les titres permettront cela.

{{< example >}}<h1 class="separation separation--primary">H1 - 2.25rem</h1>{{< /example >}}
{{< example >}}<h1 class="separation">H1 - 2.25rem</h1>{{< /example >}}
{{< example >}}<h2 class="separation">H2 - 1.75rem</h2>{{< /example >}}
{{< example >}}<h3 class="separation separation--primary">H3 - 1.5rem</h3>{{< /example >}}

## Texte courant

{{< example >}}<p class="big">Big - 1.125rem</p>{{< /example >}}
{{< example >}}<p>p - 1rem</p>{{< /example >}}
{{< example >}}<p class="small">Small - 0.75rem</p>{{< /example >}}

## Date

### Standard

Pour des raisons d’accessibilité, cette classe n’est disponible que pour
des balises `<time>`.

{{< example >}}<time datetime="2017-10-16" class="date">16 octobre 2017</time>{{< /example >}}

### Importante

<p class="date-important">Du 4 au 6 octobre 2018<p>