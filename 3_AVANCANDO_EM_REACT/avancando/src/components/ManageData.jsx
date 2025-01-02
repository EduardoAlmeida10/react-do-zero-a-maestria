import { useState } from "react"

const ManageData = () => {
    
    const [someData, setSomeData] = useState(0);

    return (
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => setSomeData(someData + 1)}>Mudar variavel</button>
        </div>
    )
}

export default ManageData