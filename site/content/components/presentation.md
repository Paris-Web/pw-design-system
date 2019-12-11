---
title: "Présentation"
menu: "components"
---

# Présentation

Une présentation peut être une conférence ou atelier.

{{< presentation
  title="Accessibilité, je t'emmènerai jusqu'au bout du back"
  format="Conférence"
  lieu="Auditorium Blaise Pascal"
  date="2017-10-05"
  duree="45"
  themes="accessibilité,back-office"
  services="LSF"
  authors="Julie Moynat" >}}
Réaliser un site accessible du front au back est un challenge. Oui, le back-office, ce grand oublié de l'accessibilité. Challenge relevé ?
{{< /presentation >}}

NB : J'ai un souci pour afficher la date en hugo. L'idée est donc de mettre le format de date qui est le plus pertinent en fonction de la situation : jeudi 9h15, 2017, etc.

# Aperçu d'une présentation

{{< presentation-preview
  authors="Agnès Haasser"
  title="Tempête de boulettes géantes"
  format="Conférence"
  duration="<time datetime=\"32m 39s\">32:39</time>"
  thumbnail="https://i.vimeocdn.com/filter/overlay?src0=https://i.vimeocdn.com/video/732320900_640.jpg&src1=http://f.vimeocdn.com/p/images/crawler_play.png"
  services="<abbr title=\"Langue des Signes Française\">LSF</abbr>,Vélotypie"
  language="Français"
  subtitles="Français"
>}}

* Comment gérer les cas avec plusieurs auteurs ? J'ai juste mis une virgule entre chaque pour l'instant.
* Est-ce qu'on est d'accord que les ateliers ne sont pas filmés ?
* Où peut on mettre l'année ? (C'est une info qui a son sens si on remonte des confs qui datent de 2007 ^^;) (peut être à la place de la différenciation Conférence/Atelier)

<!-- {"author_url":"https://vimeo.com/parisweb","thumbnail_height":360,"is_plus":"1","description":"Bonjour, je m'appelle Agnès, je suis développeuse web, j'ai 8 ans d'expérience… et j'ai vidé la base de prod. Pas au début de ma carrière, non. J'ai vidé la base de prod cette année, un beau soir à l'aube du printemps, au terme d'une après-midi de galères et de stress.\n\nJ'ai eu besoin d'en parler, alors j'ai demandé à mes collègues quelle était leur plus grosse boulette de prod. J'ai reçu des centaines de réponses. J'ai relativisé (vite), j'ai ri (un peu), j'ai appris (beaucoup).\n\nComment réduire les risques d'erreur humaine ? Comment en limiter les conséquences fâcheuses ? On parlera procédures, organisation… et vous repartirez avec quelques trucs et astuces à mettre en œuvre dans votre vie de tous les jours dès le retour au boulot !","title":"Tempête de boulettes géantes","url":"https://vimeo.com/295211615","video_id":295211615,"provider_name":"Vimeo","thumbnail_url":"https://i.vimeocdn.com/video/732320900_640.jpg","version":"1.0","uri":"/videos/295211615","html":"<iframe src=\"https://player.vimeo.com/video/295211615?app_id=122963\" width=\"640\" height=\"360\" frameborder=\"0\" title=\"Temp&ecirc;te de boulettes g&eacute;antes\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>","thumbnail_url_with_play_button":"https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F732320900_640.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png","account_type":"plus","upload_date":"2018-10-15 13:02:19","provider_url":"https://vimeo.com/","type":"video","author_name":"Paris Web","width":640,"height":360,"thumbnail_width":640,"duration":1959} -->