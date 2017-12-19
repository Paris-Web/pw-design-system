---
title: "Typographie"
date: 2017-12-13T20:36:14+01:00
menu: "tokens"
---

# Typographie

La typo utilisée est **PT Sans** dans ses variantes PT Sans Caption et PT Sans Narrow.

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

La taille de base est 16px sur écrans et 14px sur terminaux mobiles. Les tailles annexes sont relatives à cette taille de base.

La hauteur de ligne vaut 1.4em sur le texte courant, mais est variable sur les différents types de titres.

Les lignes peuvent contenir 54 à 88 caractères. Un peu plus ou un peu moins c’est pas très grave.

## Liens

<p>
    Les liens sont toujours soulignés idéalement avec l’option
    <code>text-decoration-skip-ink: auto;</code>. La couleur du lien et du trait de soulignement est toujours la couleur <code>--color-special-blue</code>, au hover c’est <code>--color-brand-01</code>
</p>

<a href="">Lien classique avec du texte courant</a>

## Affichage

{{< example >}}<p class="giga">Giga - 4.5rem</p>{{< /example >}}
{{< example >}}<p class="mega">Méga - 3rem</p>{{< /example >}}

## Titraille

{{< example >}}<h1>H1 - 2.25rem</h1>{{< /example >}}
{{< example >}}<h2>H2 - 1.75rem</h2>{{< /example >}}
{{< example >}}<h3>H3 - 1.5rem</h3>{{< /example >}}
{{< example >}}<h4>H4 - 1.125rem</h4>{{< /example >}}
{{< example >}}<h5>H5 - 1rem</h5>{{< /example >}}
{{< example >}}<h6>H6 - 0.875rem</h6>{{< /example >}}

## Texte courant

{{< example >}}<p class="big">Big - 1.125rem</p>{{< /example >}}
{{< example >}}<p>p - 1rem</p>{{< /example >}}
{{< example >}}<p class="small">Small - 0.75rem</p>{{< /example >}}