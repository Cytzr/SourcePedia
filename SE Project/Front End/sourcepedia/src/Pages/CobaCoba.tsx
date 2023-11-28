import { fetchDocument, useLogin } from "../Custom Hooks/useBackend"

export const CobaCoba = () =>{
    return (
        <div>
            <button onClick={useLogin}>Try Using Backend</button>
        </div>
    )
}