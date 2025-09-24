import styles from "./Search.module.css"

import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"

import PostDetail from "../../components/PostDetail/PostDetail"
import { Link } from "react-router-dom"

function Search() {

    const query = useQuery()
    const search = query.get("q")

    const { documents: posts } = useFetchDocuments("post", search)

    return (
        <div className={styles.search_container}>
            <h1>Search</h1>
            {posts && posts.length === 0 && (
                <>
                    <p>Não foram encontrados posts apartir da sua busca...</p>
                    <Link to="/" className="btn btn-dark">Voltar</Link>
                </>
            )}
            {posts && posts.map((post) => (
                <PostDetail key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Search