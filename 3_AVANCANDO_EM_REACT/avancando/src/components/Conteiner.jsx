
const Conteiner = ({children, myValue}) => {
  return (
    <div>
        <h1>Este é o título do conteiner</h1>
        {children}
        <p>O valor é: {myValue}</p>
    </div>
  )
}

export default Conteiner