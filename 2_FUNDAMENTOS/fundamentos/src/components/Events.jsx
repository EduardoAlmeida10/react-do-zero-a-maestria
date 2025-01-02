const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou!")
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Rederizando isso!</h1>
        } else {
            return <h1>tambem posso rederizar isso!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>
                    Clique aqui tambem
                </button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
}

export default Events;