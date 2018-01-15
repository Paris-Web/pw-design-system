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

</dl>
