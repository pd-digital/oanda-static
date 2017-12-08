const Nav = () => {
  const addClass = (e, className) => {
    e.className += ` ${className}`
  }

  const removeClass = (e, className) => {
    const regex = new RegExp(`${className}`)
    e.className = e.className.replace(regex, '').trim()
  }

  const closeAnyOpenNavs = () => {
    document.querySelectorAll('.topnav__item.active').forEach((elem) => {
      removeClass(elem, 'active')
    })
  }

  const onPageClick = (e) => {
    if (e.target.parentElement.className.indexOf('active') !== -1) return false
    if (e.target.className.indexOf('subnav__link') !== -1) return false
    if (e.target.className.indexOf('subnav') !== -1) return false
    if (e.target.parentElement.className.indexOf('subnav__item') !== -1) return false
    if (!document.querySelector('.topnav__item.active')) return false

    const elem = document.querySelector('.topnav__item.active')
    removeClass(elem, 'active')
    document.removeEventListener('click', onPageClick)
  }

  const onNavLinkClick = (e) => {
    e.preventDefault();

    if (e.target.parentElement.className.indexOf('active') === -1) {
      if (e.target.attributes.href.value !== '#') return false;


      closeAnyOpenNavs()
      addClass(e.target.parentElement, 'active')
      document.addEventListener('click', onPageClick);
    } else {
      removeClass(e.target.parentElement, 'active')
    }
  }

  const onHamburgerClick = (e) => {
    const hamburger = document.querySelector('.hamburger')
    const navMain = document.querySelector('.nav-main')

    if (hamburger.className.indexOf('is-active') === -1) {
      addClass(hamburger, 'is-active')
      addClass(navMain, 'mobile-active')
    } else {
      removeClass(hamburger, 'is-active')
      removeClass(navMain, 'mobile-active')
    }
  };

  document.querySelectorAll('.nav-link').forEach(navlink => {
    navlink.addEventListener('click', onNavLinkClick)
  })

  document.querySelector('.hamburger').addEventListener('click', onHamburgerClick)
}

Nav();
