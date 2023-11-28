import { useQuery, useMutation } from "@tanstack/react-query"
import { addDocument, fetchDocument, fetchTag, useLogin, useRegister } from "../Custom Hooks/useBackend"
import { any } from "zod"

export const CobaCoba = async () =>{

    const {data} = useMutation({
        mutationKey:["mutation"],
        mutationFn: (await useLogin({email:"calvin@gmail.com", password:"calvin"}))
    })

    return (
        <button>coba coba nii</button>
    )
}