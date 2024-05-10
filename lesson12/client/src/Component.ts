import * as styles from './styles.css';

interface ComponentProps {
  text: string;
}

export const Component = ({ text }: ComponentProps): Element => {
  const div = document.createElement('div')
  div.innerHTML = `
    <div class="${styles.component}">${text}</div>
  `

  return div.firstElementChild
}