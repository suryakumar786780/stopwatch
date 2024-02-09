
const ButtonComp = ({styles, value, onclick}) => {
  return (
    <button className={styles} onClick={onclick}>{value}</button>
  )
}

export default ButtonComp