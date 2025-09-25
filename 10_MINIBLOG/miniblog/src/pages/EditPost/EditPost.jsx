import styles from "./EditPost.module.css"

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { useUpdateDocument } from "../../hooks/useUpdateDocument"
import { useFetchDocument } from "../../hooks/useFetchDocument"


function EditPost() {

    const { id } = useParams()
    const { document: post } = useFetchDocument("post", id)

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")

    useEffect(() => {

        if (post) {
            setTitle(post.title)
            setBody(post.body)
            setImage(post.image)

            const textTags = post.tagsArray.join(", ")
            setTags(textTags)
        }

    }, [post])

    const navigate = useNavigate()

    const { user } = useAuthValue()

    const { updateDocument, response } = useUpdateDocument("post")

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

        const data = {
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        }

        updateDocument(id, data)

        navigate("/dashboard")
    }

    return (
        <div className={styles.edit_post}>
            {post && (
                <>
                    <h2>Editando post: {post.title}</h2>
                    <p>Altere os dados do post como desejar!</p>
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
                        <p className={styles.preview_title}>Preview da imagem atual</p>
                        <img src={post.image} alt={post.title} className={styles.image_preview} />
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
                        {!response.loading && <button className="btn">Editar</button>}
                        {response.loading && <button className="btn" disabled>Aguarde...</button>}
                    </form>
                </>
            )}
        </div>
    )
}

export default EditPost