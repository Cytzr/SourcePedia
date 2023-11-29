import { useMutation } from "@tanstack/react-query"
import { addTag } from "../Custom Hooks/useBackend"

export const CobaCoba = () =>{

    // const {data, mutate} = useMutation({
    //     mutationKey:["mutation"],
    //     mutationFn: useLogin({email:"calvin@gmail.com", password:"calvin"})
    // });



    return (
        <button onClick={() => addTag()}>coba coba nii</button>
    )
}