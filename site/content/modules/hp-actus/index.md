---
title: "HP : actualités"
menu: "modules"
---

# Bloc Actualités

Ce module est le bloc permettant d’afficher les actualités sur la page d’accueil.

Il utilisé les modules [fil d’actualités]({{< relref "modules/fil-actualites.md" >}}) et [actualité phare]({{< relref "modules/actu-phare/index.md" >}}).

---

{{< example >}}
<section class="content content--2-cols" aria-labelledby="news-title">
  <h2 class="separation separation--primary" id="news-title">Actualités</h2>

  <div class="content__wrapper">
    <div class="content__main">
      {{< actu-item
        title="Lorem ipsum dolor, sit amet"
        illustration="applaudissements.jpg"
        date="18 janvier 2018"
        url="#"
        excerpt="Nulla cupidatat cillum adipisicing duis veniam adipisicing deserunt officia velit consectetur esse velit. Exercitation irure aliquip Lorem ad consequat magna quis consectetur sunt esse non. Pariatur magna velit proident elit ipsum magna ullamco eiusmod exercitation commodo in fugiat labore. Mollit sint reprehenderit in dolor nostrud ex id in mollit consequat adipisicing exercitation."
      >}}
    </div>

    <div class="content__sidebar">
      {{< fil-actu >}}
        <li class="actu-list__item">
            <a href="#" class="discreet">Etiam porta sem malesuada magna mollis euismod.</a>
            <time datetime="2017-10-16" class="date">16 octobre 2017</time>
        </li>
        <li class="actu-list__item">
            <a href="#" class="discreet">Cras mattis consectetur purus sit amet fermentum.</a>
            <time datetime="2017-10-03" class="date">3 octobre 2017</time>
        </li>
        <li class="actu-list__item">
            <a href="#" class="discreet">Maecenas faucibus mollis interdum.</a>
            <time datetime="2017-09-28" class="date">28 septembre 2017</time>
        </li>
        <li class="actu-list__item">
            <a href="#" class="discreet">Etiam porta sem malesuada magna mollis euismod.</a>
            <time datetime="2017-10-16" class="date">16 octobre 2017</time>
        </li>
      {{< /fil-actu >}}
    </div>
  </div>
</section>
{{< /example >}}
