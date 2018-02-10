---
title: "Résultats de la recherche : \"vide\""
linktitle: "Recherche vide"
menu: "pages"
layout: "page"
---

<form class="form-oneline" method="get" action="#" role="search">
    <div class="form-oneline__field form-field">
        <div class="form-field__label">
            <label for="search">Terme de recherche</label>
        </div>
        <div class="form-field__input">
            <input type="text" id="search" value="vide" />
        </div>
    </div>
    <input type="hidden" name="IncludeBlogs" value="all" />
    <input type="hidden" name="limit" value="100" />
    <div class="form-oneline__action">
        <button class="btn">Rechercher</button>
    </div>
</form>

La recherche "vide" a retourné 0 résultats.

Par défaut, ce moteur va rechercher tous les mots, quelque soit leur ordre. Pour lancer une recherche sur une phrase exacte, insérez la phrase entre des apostrophes :

```
"paris web"
```

Le moteur de recherche supporte aussi les mots clés AND, OR, NOT pour spécifier des expressions booléennes. Par exemple :

```
web OR internet

qualité NOT quantité
```
