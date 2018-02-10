---
title: "Sidebar"
menu: "modules"
---

# Sidebar

<nav class="menu menu-example">
    <div class="menu__overlay js-close-menu"></div>
    <div class="menu__content" tabindex="-1">
        <button class="close-menu js-close-menu" title="Revenir au contenu">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" role="img" aria-label="Fermer">
                <path fill="#000" fill-rule="evenodd" d="M7.5 9.397l-4.94 5.145c-.585.61-1.535.61-2.12 0a1.609 1.609 0 0 1 0-2.21L5.078 7.5.439 2.667a1.609 1.609 0 0 1 0-2.21 1.458 1.458 0 0 1 2.122 0L7.5 5.604 12.44.458a1.458 1.458 0 0 1 2.12 0c.586.61.586 1.6 0 2.21L9.922 7.5l4.64 4.833c.585.61.585 1.6 0 2.21-.586.61-1.536.61-2.122 0L7.5 9.396z"/>
            </svg>
        </button>
        <div class="menu__content__wrapper">
            <div class="menu__head">
                <div class="logo">
                    <a href="/">
                        <img src="{{< absoluteUrl "images/logo/logo.svg" >}}" style="width: 10em; height: 4.5em" alt="Paris Web" />
                    </a>
                </div>

                <p class="date">
                    <span class="date-important">Du <time datetime="2018-10-04T09:00">4</time> au <time datetime="2018-10-06T18:00">6 octobre 2018</time></span>
                </p>
            </div>

            <div class="menu__links">
                <ul>
                    <li>
                        <a class="h3-like" href="modules/sidebar">
                            <span>Programme</span>
                        </a>
                    </li>
                    <li>
                        <a class="h3-like" href="modules/sidebar">
                            <span>Archives</span>
                        </a>
                    </li>
                    <li>
                        <a class="h3-like" href="modules/sidebar">
                            <span>Orateurs</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a class="h3-like" href="modules/sidebar">
                            <span>
                                Rechercher
                                <svg class="icon icon--search" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" role="img" aria-hidden="true">
                                    <path fill="#000" fill-rule="evenodd" d="M15.175 16.71a9 9 0 1 1 2.121-2.121l6.806 6.806-2.122 2.121-6.805-6.805zm-.973-3.093A6 6 0 1 0 5.717 5.13a6 6 0 0 0 8.485 8.486z"/>
                                </svg>

                            </span>
                        </a>
                    </li>
                </ul>
            </div>

            {{< sponsor-nav >}}
        </div>
    </div>
</nav>