import styles from "./Login.module.css"

import { useAuthentication } from "../../hooks/useAuthentication"
import { useEffect, useState } from "react"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const { login, error: AuthError, loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            email,
            password
        }

        const res = await login(user)

        console.log(res);
    }

    useEffect(() => {
        if (AuthError) {
            setError(AuthError)
        }
    }, [AuthError])

    return (
        <div className={styles.login}>
            <h1>Entrar</h1>
            <p>Faça login para poder utilizar o sistema</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail do usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Insira sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {error && <p className="error">{error}</p>}
                {!loading && <button className="btn">Entrar</button>}
                {loading && <button className="btn" disabled>Aguarde...</button>}
            </form>
        </div>
    )
}

export default Login