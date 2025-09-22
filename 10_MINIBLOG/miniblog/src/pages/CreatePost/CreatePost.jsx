import styles from "./CreatePost.module.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useInsertDocument } from "../../hooks/useInsertDocument"

function CreatePost() {

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")

    const navigate = useNavigate()

    const { user } = useAuthValue()

    const { insertDocument, response } = useInsertDocument("post")

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError("")

        let error = ""

        try {
            new URL(image)
        } catch {
            error = "A imagem precisa ser uma URL."
        }

        if (error) {
            setFormError(error)
            return
        }

        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

        if (!title || !image || !tags || !body) {
            setFormError("Por favor, preencha todos os campos!")
        }

        insertDocument({
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        })

        navigate("/")
    }

    return (
        <div className={styles.create_post}>
            <h2>Criar post</h2>
            <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título:</span>
                    <input
                        type="text"
                        name="title"
                        required
                        placeholder="Pense num bom título..."
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>URL da imagem:</span>
                    <input
                        type="text"
                        name="image"
                        required
                        placeholder="Insira uma imagem"
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                    />
                </label>
                <label>
                    <span>Conteudo:</span>
                    <textarea
                        name="body"
                        required
                        placeholder="Insira o conteudo do post"
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    >
                    </textarea>
                </label>
                <label>
                    <span>Tags:</span>
                    <input
                        type="text"
                        name="tags"
                        required
                        placeholder="Insira as tags separadas por virgulas"
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    />
                </label>
                {response.error && <p className="error">{response.error}</p>}
                {formError && <p className="error">{formError}</p>}
                {!response.loading && <button className="btn">Cadastrar</button>}
                {response.loading && <button className="btn" disabled>Aguarde...</button>}
            </form>
        </div>
    )
}

export default CreatePost