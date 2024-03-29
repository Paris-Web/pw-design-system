---
title: "Portrait"
menu: "components"
---

# Portrait

## Portrait simple

<dl>
    <dd>
        {{< example >}}
            {{< portrait
            name="Camille Exemple"
            fediverse="https://mamot.fr/@CamilleExemple"
            github="https://www.github.com/CamilleExemple"
            website="https://www.camilleexemple.com/"
            description="Pixelliste sans filet" >}}
        {{< /example >}}
    </dd>
    <dd>
        {{< example >}}
            {{< portrait
            name="Camille Exemple"
            fediverse="https://mamot.fr/@CamilleExemple"
            description="Pixelliste sans filet" >}}
        {{< /example >}}
    </dd>
    <dd>
        {{< example >}}
            {{< portrait
            name="Camille Exemple"
            description="Pixelliste sans réseaux" >}}
        {{< /example >}}
    </dd>
    <dd>
        {{< example >}}
            {{< portrait
            name="Camille Exemple"
            description="Pixelliste avec lien"
            link="#" >}}
        {{< /example >}}
    </dd>
    <dd>
        {{< example >}}
            {{< portrait
            avatar="https://www.paris-web.fr/img/staff/joachim-robert.jpg"
            name="Camille Exemple"
            description="Pixelliste avec lien et réseaux"
            link="#"
            fediverse="https://mamot.fr/@CamilleExemple"
            github="https://www.github.com/CamilleExemple"
            website="https://www.camilleexemple.com/"
            linkedin="https://www.linkedin.com/CamilleExemple" >}}
        {{< /example >}}
    </dd>
    <dd>
        {{< example >}}
            {{< portrait
            surprise="true"
            name="Orateur·rice Surprise&nbsp;!" >}}
        {{< /example >}}
    </dd>
</dl>

## Portrait long

<dl>
    <dd>
        {{< example >}}
            {{< portrait-long
                link="#"
                avatar=""
                name="Camille Exemple"
                fediverse="https://mamot.fr/@CamilleExemple"
                github="https://www.github.com/CamilleExemple"
                website="https://www.camilleexemple.com/" >}}
                Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui.
            {{< /portrait-long >}}
        {{< /example >}}
    </dd>
    <dd>
        {{< example >}}
            {{< portrait-long
                link="#"
                avatar="acme.jpg"
                sponsor="true"
                name="ACME Corp"
                fediverse="https://mamot.fr/@AcmeCorp"
                website="https://www.acmecorp.com/" >}}
                Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui.
            {{< /portrait-long >}}
        {{< /example >}}
    </dd>
</dl>

## Portrait court

<dl>
    <dd>
        {{< example >}}
            {{< portrait-small
                link="#"
                avatar=""
                name="Camille Exemple"
                description="Pixelliste sans filet" >}}
        {{< /example >}}
    </dd>
    <dd>
        {{< example >}}
            {{< portrait-small
                link="#"
                avatar=""
                name="Camille Exemple-long-de-la-ligne"
                description="Pixelliste sans filet" >}}
        {{< /example >}}
    </dd>
</dl>