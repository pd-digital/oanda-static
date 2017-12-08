const Tabs = () => {
  const addClass = (e, className) => {
    e.className += ` ${className}`
  }

  const removeClass = (e, className) => {
    const regex = new RegExp(`${className}`)
    e.className = e.className.replace(regex, '').trim()
  }

  const flickTab = (id) => {
    document.querySelectorAll('.tab.active').forEach(activeTab => {
      removeClass(activeTab, 'active')
    })

    addClass(document.querySelector(id), 'active')
  }

  const onTabClick = (e) => {
    if (e.target.className.indexOf('active') === -1) {
      document.querySelectorAll('[data-toggle="tab"].active').forEach(activeBtn => {
        removeClass(activeBtn, 'active')
      })

      addClass(e.target, 'active')
      console.log(e.target.dataset.selector)
      flickTab(e.target.dataset.selector)
    }
  }

  document.querySelectorAll('[data-toggle="tab"]').forEach(tabBtn => {
    tabBtn.addEventListener('click', onTabClick)
  })
}

Tabs()
