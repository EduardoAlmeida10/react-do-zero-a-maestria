
const UseDetails = ({id, age, name, profession}) => {
  return (
    <div>
        <h2>Pessoa {id}</h2>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
        <p>Profissão: {profession}</p>
        {age >= 18 ? (
            <p>Já pode tirar a carteira de habilitação!</p>
        ) : (
            <p>Não pode tirar a carteira de habilitação!</p>
        )}
    </div>
  )
}

export default UseDetails