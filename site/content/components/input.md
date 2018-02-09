---
title: "Formulaire"
menu: "components"
---

# Champs de formulaire

<form>
{{< example >}}
<div class="form-field">
    <div class="form-field__label">
        <label for="name">Champ de formulaire</label>
    </div>
    <div class="form-field__input">
        <input name="name" id="name" type="text" />
    </div>
</div>
{{< /example >}}
{{< example >}}
<div class="form-field">
    <div class="form-field__label">
        <label for="name2">Champ de formulaire désactivé</label>
    </div>
    <div class="form-field__input">
        <input name="name2" id="name2" type="text" disabled="disabled" value="Contenu" />
    </div>
</div>
{{< /example >}}
{{< example >}}
<div class="form-field">
    <div class="form-field__label">
        <label for="name3">Champ email invalide</label>
    </div>
    <div class="form-field__input">
        <input name="name3" id="name3" type="email" value="toto" />
    </div>
</div>
{{< /example >}}
<div class="actions">
    <button class="btn">Envoyer la sauce !</button>
</div>
</form>

A noter que pour l'instant nous n'avons pas de validation en JavaScript. Il y aura donc la tooltip navigateur à la soumission du formulaire.

Sur le styleguide, si vous faites "Entrée" sur un input, ca va ouvrir les tootlips de code. Ce ne sera pas le cas sur le site final. Privilégiez donc le clic sur le bouton si vous voulez tester ce que ça donne.