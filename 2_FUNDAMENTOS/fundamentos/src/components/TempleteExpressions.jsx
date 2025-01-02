const TempleteExpressions = () =>{

    const name = "Carlos"
    const data = {
        age: 19,
        job: "Programmer"
    }

    return(
        <div>
            <p>Olá {name}, tudo bem?</p>
            <p>Você atua como: {data.job}</p>
            <p>{4 + 4}</p>
        </div>
    );
}

export default TempleteExpressions;