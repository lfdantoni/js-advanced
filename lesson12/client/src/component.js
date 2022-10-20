const styles = require('./component.css').default

module.exports = {
  Component: () => {
    const div = document.createElement('div')
    div.innerText = 'Test' + Date.now()
    div.className = styles.component;

    return div;
  }
}