import styles from './Button.module.css'

const Button = ({ id, text }) => {
  return (
    <button id={id}>{text}</button>
  )
}

export default Button