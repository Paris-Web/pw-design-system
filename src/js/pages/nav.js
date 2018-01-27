const listenButtons = () => {
    let previouslyFocusedElement
    const onCloseMenuTransitionEnd = () => {
        document.querySelector('#menu').classList.remove('menu--visible')
        document.querySelector('#menu .menu__content')
            .removeEventListener('transitionend', onCloseMenuTransitionEnd)
    }
    const openMenu = () => {
        previouslyFocusedElement = document.activeElement
        document.body.classList.add('is-menu-opened')
        document.querySelector('#menu').classList.add('menu--opened')
        document.querySelector('#menu').classList.add('menu--visible')
        document.querySelector('#menu .menu__content').focus();
    }

    const closeMenu = () => {
        document.body.classList.remove('is-menu-opened')
        document.querySelector('#menu').classList.remove('menu--opened')
        document.querySelector('#menu .menu__content')
            .addEventListener('transitionend', onCloseMenuTransitionEnd)
        previouslyFocusedElement.focus();
    }

    document.querySelector('.js-open-menu')
        .addEventListener('click', openMenu)


    const closeButtons = document.querySelectorAll('.js-close-menu')
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation()
            closeMenu()
        })
    }
}

const listenIntersection = (element, callback) => {
    if (IntersectionObserver) {
        const observer = new IntersectionObserver(entries => {
            const entry = entries.find(entry => entry.target === element)
            callback(entry)
        }, {
            threshold: 0
        })
        observer.observe(element)
    } else {
        window.addEventListener('scroll', () => {
            const offsetTop = element.offsetTop
            const windowHeight = window.innerHeight;
            callback({isIntersecting: window.scrollY > offsetTop - windowHeight})
        });
    }
}

const listenFooterPosition = () => {
    const footer = document.querySelector('#footer')
    const menu = document.querySelector('#menu')

    listenIntersection(footer, entry => {
        requestAnimationFrame(() => {
            if (entry.isIntersecting) {
                document.body.classList.add('is-footer-visible')
                menu.style.bottom = `${footer.getBoundingClientRect().height}px`
            } else {
                document.body.classList.remove('is-footer-visible')
            }
        })
    })
}

const initNavigation = () => {
    listenButtons()
    listenFooterPosition()
}

export default initNavigation