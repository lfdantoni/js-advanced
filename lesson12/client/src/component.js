const stylesModule = require('./component.css').default
const template = require('./component.hbs')

module.exports = {
  Component: () => {
    const div = document.createElement('div')
    // div.innerText = 'Test' + Date.now()
    // div.className = styles.component;

    div.innerHTML = template({
      styles: {
        component: stylesModule.component,
      },
      test: 'TEST!'
    })
    return div;
  }
}