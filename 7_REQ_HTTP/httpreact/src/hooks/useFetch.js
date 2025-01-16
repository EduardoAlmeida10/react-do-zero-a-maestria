import { useState, useEffect } from "react";

// 4- custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5- refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6- loanding
    const [loanding, setLoanding] = useState(false);

    // 7- tratamento de erros
    const [error, setError] = useState(null);

    // 8- desafio 6
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            setMethod(method);

        } else if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json",
                }
            });

            setMethod(method);
            setItemId(data);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            // 6- loanding
            setLoanding(true);

            try {
                const response = await fetch(url);

                const data = await response.json();

                setData(data);
            } catch (error) {
                console.log(error.message);
                setError("Houve algum erro ao carregar os dados!")
            }

            setLoanding(false);
        };

        fetchData();

    }, [url, callFetch]);

    // 5- refatorando post
    useEffect(() => {
        const httpRequest = async () => {

            let json;

            if (method === "POST") { // Verifica se o método é POST
                let fetchOptions = [url, config]; // Configura a URL e as opções do POST

                const response = await fetch(...fetchOptions); // Faz a requisição POST
                json = await response.json(); // Converte a resposta para JSON

            } else if (method === "DELETE") {
                const deleteUrl = `${url}/${itemId}`;
                const response = await fetch(deleteUrl, config);
                json = await response.json();

            }

            setCallFetch(json); // Atualiza os dados com a resposta do POST
        }

        httpRequest(); // Executa a requisição
    }, [config, method, url]) // Executa sempre que config, method ou url mudarem

    return { data, httpConfig, loanding, error };
}