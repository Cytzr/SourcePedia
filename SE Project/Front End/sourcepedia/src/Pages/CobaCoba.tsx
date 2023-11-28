import { fetchDocument, fetchTag, useLogin, useRegister } from "../Custom Hooks/useBackend"

export const CobaCoba = () =>{
    return (
        <div>
            <button onClick={useLogin}>Try Using Backend</button>
        </div>
    )
}