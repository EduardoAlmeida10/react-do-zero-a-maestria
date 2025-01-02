
const CarDetails = ({brand, km, color, newCar}) => {
    return (
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>marca: {brand}</li>
                <li>KM: {km}</li>
                <li>Cor: {color}</li>
            </ul>
            {newCar ? (
                <p>Este carro é novo</p>
            ) : (
                <p>Este carro é antigo</p>
            )}
        </div>
    )
}

export default CarDetails