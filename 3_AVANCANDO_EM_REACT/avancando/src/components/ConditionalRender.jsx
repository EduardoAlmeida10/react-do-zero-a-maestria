import { useState } from "react"

const ConditionalRender = () => {

    const [text, setText] = useState(false);
    const name = "joão"

    const handleText = () => {
        if (!text) {
            setText(true);
        } else {
            setText(false);
        }
    }

    return (
        <div>
            <h1>Isso será exibido?</h1>
            <button onClick={handleText}>
                {text ? (
                    <p>Clique aqui para fechar</p>
                ) : (
                    <p>Clique aqui para abrir</p>
                )}
            </button>
            {text && <div>
                <h2>Você é incrível!</h2>
            </div>}
            <h1>If ternário</h1>
            {name == "joão" ? (
                <p>O nome é João</p>
            ) : (
                <p>O nome não é João</p>
            )}
        </div>
    )
}

export default ConditionalRender