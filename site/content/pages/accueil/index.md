---
title: "Accueil"
date: 2017-12-13T20:36:14+01:00
menu: "pages"
---

{{< hero
    title="Paris Web 2018"
    titleId="main-title"
    subTitle="La conférence francophone des gens qui font du web"
    image="hero.jpg"
    link="#"
    action="Découvrir les archives"
>}}

<section class="content content--2-cols" aria-labelledby="news-title">
	<h2 class="separation separation--primary" id="news-title">Actualités</h2>

	<div class="content__wrapper">
		<div class="content__main">
			{{< actu-phare
				title="Devenez partenaires de Paris Web 2018 !"
				illustration="applaudissements.jpg"
				date="18 janvier 2018"
				url="#"
				excerpt="Augmentez votre visibilité professionnelle en devenant partenaire de Paris Web 2018."
			>}}
		</div>

		<div class="content__sidebar">
			{{< fil-actu >}}
				<li class="actu-list__item">
						<a href="{{< relref "pages/actualite/index.md" >}}" class="discreet">Des vœux, des dates et des tarifs pour Paris Web 2018</a>
						<time datetime="2017-10-16" class="date">16 octobre 2017</time>
				</li>
				<li class="actu-list__item">
						<a href="{{< relref "pages/actualite/index.md" >}}" class="discreet">En chemin vers Paris Web 2018 !</a>
						<time datetime="2017-10-03" class="date">3 octobre 2017</time>
				</li>
				<li class="actu-list__item">
						<a href="{{< relref "pages/actualite/index.md" >}}" class="discreet">Devenir membre bénévole pour Paris Web 2018, pourquoi, comment ?</a>
						<time datetime="2017-09-28" class="date">28 septembre 2017</time>
				</li>
				<li class="actu-list__item">
						<a href="{{< relref "pages/actualite/index.md" >}}" class="discreet">Paris Web 2017, c'est fini !</a>
						<time datetime="2017-11-03" class="date">3 novembre 2017</time>
				</li>
			{{< /fil-actu >}}
		</div>
	</div>
</section>

## Live (nouveau)

Pendant la conférence

```html
<section class="background-highlight" aria-labelledby="live">
  <div class="w1140p center">
  <h2 id="live">Suivez le direct !</h2>
  <li class="grid-3-small-1">
    <ul>
      <h3>Salle Moebius</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quisquam ex nostrum eos, iste ab possimus perspiciatis veritatis voluptas.</p>
      <button>Voir le direct!</button>
    </ul>
    <ul>
      <h3>Salle Blin</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quisquam ex nostrum eos, iste ab possimus perspiciatis veritatis voluptas.</p>
      <button>Voir le direct!</button>
    </ul>
    <ul>
      <h3>Twitter</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quisquam ex nostrum eos, iste ab possimus perspiciatis veritatis voluptas.</p>
      <button>Voir le direct!</button>
    </ul>
  </li>
  </div>
</section>
```

## Après (nouveau)

Après la conférence

```html
<section class="background-highlight" aria-labelledby="relive">
<div class="w1140p center txtcenter">
<h2 id="relive" class="white">Revivez l'événement !</h2>
<ul class="grid-5-small-1">
	<li>
		<h3>Presse</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quisquam ex nostrum eos, iste ab possimus perspiciatis veritatis voluptas.</p>
		<button class="white">Découvrir</button>
	</li>
	<li>
		<h3>Flickr</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quisquam ex nostrum eos, iste ab possimus perspiciatis veritatis voluptas.</p>
		<button class="white">Voir le direct!</button>
	</li>
	<li>
		<h3>Video</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quisquam ex nostrum eos, iste ab possimus perspiciatis veritatis voluptas.</p>
		<button class="white">Voir le direct!</button>
	</li>
	<li>
		<h3>Twitter</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quisquam ex nostrum eos, iste ab possimus perspiciatis veritatis voluptas.</p>
		<button class="white">Voir le direct!</button>
	</li>
</ul>
</div>
</section>
<section class="chiffres" aria-labelledby="key-figures">
	<div class="w1140p center txtcenter">
	<h2 id="key-figures" class='black'>Paris Web résumé en chiffres !</h2>
	<ul class="grid-5-small-1 ">
		<li>
			<span>10</span> Lorempi
		</li>
		<li>
			<span>50</span> orateurs
		</li>
		<li>
			<span>120</span> conférences
		</li>
		<li>
			<span>600</span> orateurs
		</li>
		<li>
			<span>1</span> licorne
		</li>
	</ul>
	</div>
</section>
```

## Orateurs

Pendant la conférence

```php
	<section class="s-speakers s-speakers-widget l-groundZero l-block l-third" aria-labelledby="speakers">
	  <article>
		<h2 id="speakers">Les orateurs 2016</h2>
		<a href="template.php?version=<?php echo $_GET['version']?>&template=liste-orateur&periode=<?php echo $_GET['periode']?>">Voir tous les orateurs</a>
		<ul>
      <?php foreach ($selection_orateur as $label_orateur){ ?>
      <li><dl class="clearfix speaker">
        <a href="template.php?version=<?php echo $_GET['version']?>&template=detail-orateur&periode=<?php echo $_GET['periode']?>&orateur=<?php echo $label_orateur;?>"><img src="<?php echo get_photo_orateur($label_orateur)?>" width="130" height="130" alt="">
        <?php echo $liste_orateur[$label_orateur]['nom'];?></a>
      </li>
      <?php } ?>
      </ul>
	  </article>
	</section>
```

## Actualités

Pendant la conférence

## Etc…

… et bien d’autres mais on ne remettra que celles que l’on garde !

Voir [le template commencé pour 2017](https://github.com/Paris-Web/pw-2017/blob/d88ab54bc77372ea3c994b6d93f4ac6089767803/template2017/page_accueil.php)
