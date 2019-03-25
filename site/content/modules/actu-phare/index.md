---
title: "Actu phare"
menu: "modules"
---

# Actualité phare

Le module d’actualité phare a pour but l’affichage d’une actualité à mettre en avant.
Elle est utilisée sur la [page d’accueil]({{< relref "/pages/accueil/index.md" >}}).

---

## Avec image

{{< example >}}
    {{< actu-item
        title="Lorem ipsum dolor, sit amet"
        illustration="applaudissements.jpg"
        date="18 janvier 2018"
        url="#"
        excerpt="Nulla cupidatat cillum adipisicing duis veniam adipisicing deserunt officia velit consectetur esse velit. Exercitation irure aliquip Lorem ad consequat magna quis consectetur sunt esse non. Pariatur magna velit proident elit ipsum magna ullamco eiusmod exercitation commodo in fugiat labore. Mollit sint reprehenderit in dolor nostrud ex id in mollit consequat adipisicing exercitation."
    >}}
{{< /example >}}

## Sans image

{{< example >}}
    {{< actu-item
        title="Lorem ipsum dolor"
        date="18 décembre 2017"
        url="#"
        excerpt="Nulla cupidatat cillum adipisicing duis veniam adipisicing deserunt officia velit consectetur esse velit. Exercitation irure aliquip Lorem ad consequat magna quis."
    >}}
{{< /example >}}

## Long titre

{{< example >}}
    {{< actu-item
        title="Devenir membre bénévole pour Paris Web 2018, pourquoi, comment ?"
        illustration="public.jpg"
        date="15 mai 2017"
        url="#"
        excerpt="Nulla cupidatat cillum adipisicing duis veniam adipisicing deserunt officia velit consectetur esse velit. Exercitation irure aliquip Lorem ad consequat magna quis consectetur sunt esse non. Pariatur magna velit proident elit ipsum magna ullamco eiusmod exercitation commodo in fugiat labore. Mollit sint reprehenderit in dolor nostrud ex id in mollit consequat adipisicing exercitation."
    >}}
{{< /example >}}