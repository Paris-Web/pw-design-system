---
title: "Admin Archives"
menu: "outils"
---

# Formulaire de mise à jour des archives

Ce formulaire permet de mettre à jour les conférences dans Algolia. Cela a été mis en place pour plusieurs raisons :

- Eviter de devoir se balader entre MT et Algolia pour mettre à jour les conférences
- Ajouter des informations manquantes dans MT (thumbnail des vidéos, etc.)
- Eviter des réindexations inutiles lorsque certaines conférences sont déjà indexées

<form id="admin-archives-form" disabled>
    <div class="form-field">
        <div class="form-field__label">
            <label for="admin_api_key">Admin API Key (Algolia)</label>
        </div>
        <div class="form-field__input">
            <input name="admin_api_key" id="admin_api_key" type="text" />
        </div>
    </div>
    <div class="actions">
        <button type="submit" class="btn js-submit-button">Mettre à jour les conférences</button>
    </div>
</form>

<script src="../../admin-archives.js"></script>
