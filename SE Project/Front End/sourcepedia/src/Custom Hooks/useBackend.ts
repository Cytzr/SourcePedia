import axios from "axios"
import { useLocalStorage } from "./useLocalStorage"


export const useLogin = async() => {
    const {getItem, setItem} = useLocalStorage("UserCredential");
    
    try{ 
        const res = await axios.post("https://localhost:7124/api/User/login", {
            email: 'calvin@gmail.com',
            password: 'cal'
        });
    }
    catch(error){}
}

export const useRegister = () => {

}

export const addDocument = () => {

}

export const addTag = () => {

}

export const fetchDocument = async () => {
    const res = await axios.get("https://localhost:7124/api/Document/GetDocument");
    return res;
}