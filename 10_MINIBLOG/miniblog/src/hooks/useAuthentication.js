import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth"

import { useState, useEffect } from "react"

import { db } from "../firebase/config"

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIsCancelled() {
        if (cancelled) {
            return
        }
    }

    const createUser = async (data) => {
        checkIsCancelled()

        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)

            return user
        } catch (error) {

            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa ter pelo menos 6 caracteres"
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado"
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde"
            }

            setError(systemErrorMessage)
            setLoading(false)

        }
    }

    const logout = () => {
        checkIsCancelled()
        signOut(auth)
    }

    const login = async (data) => {

        checkIsCancelled()

        setLoading(true)
        setError(false)

        try {

            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)

        } catch (error) {

            let systemErrorMessage

            if (error.code === "auth/invalid-credential") {
                systemErrorMessage = "Credenciais inválidas. Verifique e-mail e senha.";
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
            }

            setError(systemErrorMessage)
            setLoading(false)
        }

    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }

}