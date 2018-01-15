---
title: "Portrait"
date: 2017-12-13T20:36:14+01:00
menu: "components"
---

# Portrait

## Portrait simple

<dl>
    <dd>
        {{< example >}}
            {{< portrait
            avatar=""
            name="Camille Exemple"
            twitter="https://www.twitter.com/CamilleExample"
            github="https://www.github.com/CamilleExample"
            website="https://www.camilleexemple.com/"
            description="Pixelliste sans filet" >}}
        {{< /example >}}
    </dd>

    <dd>
        {{< example >}}
            {{< portrait
            name="Camille Exemple"
            twitter="https://www.twitter.com/CamilleExample"
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
            name="Camille Exemple"
            description="Pixelliste avec lien et réseaux"
            link="#"
            twitter="https://www.twitter.com/CamilleExample"
            github="https://www.github.com/CamilleExample"
            website="https://www.camilleexemple.com/" >}}
        {{< /example >}}
    </dd>
</dl>

## Portrait long

<dl>
<dd>
{{< portrait-long
    link="#"
    avatar=""
    name="Camille Exemple"
    twitter="https://www.twitter.com/CamilleExample"
    github="https://www.github.com/CamilleExample"
    website="https://www.camilleexemple.com/" >}}
Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui.
{{< /portrait-long >}}
</dd>
</dl>

## Portrait court

<dl>
<dd>
{{< portrait-small
    link="#"
    avatar=""
    name="Camille Exemple"
    description="Pixelliste sans filet" >}}
</dd>
<dd>
{{< portrait-small
    link="#"
    avatar=""
    name="Camille Exemple-long-de-la-ligne"
    description="Pixelliste sans filet" >}}
</dd>
</dl>