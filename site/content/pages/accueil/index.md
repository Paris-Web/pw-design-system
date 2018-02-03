---
title: "Accueil"
date: 2017-12-13T20:36:14+01:00
menu: "pages"
---

{{< hero
    title="Paris Web 2018"
    subTitle="La conférence francophone des gens qui font du web"
    image="hero.jpg"
    link="#"
    action="Découvrir les archives"
>}}

## Live (nouveau)

Pendant la conférence

```html
<section class="background-highlight">
  <div class="w1140p center">
  <h2>Suivez le direct !</h2>
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
<section class="background-highlight">
<div class="w1140p center txtcenter">
<h2 class="white">Revivez l'événement !</h2>
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
<section class="chiffres">
	<div class="w1140p center txtcenter">
	<h2 class='black'>Paris Web résumé en chiffres !</h2>
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
	<section class="s-speakers s-speakers-widget l-groundZero l-block l-third">
	  <article>
		<h2>Les orateurs 2016</h2>
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