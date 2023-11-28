import axios from "axios"

//returns 
interface LoginProps {
    email: string,
    password: string
}
export const useLogin = async(props:LoginProps) => {

    const res = await axios.post("https://localhost:7124/api/User/login", {
        email: props.email,
        password: props.password
    });
    console.log(res);
    return res.data;
}

export const useRegister = async() => {

    const res = await axios.post("https://localhost:7124/api/User/register", {
        name : "boodie",
        email : 'budi@gmail.com',
        password : 'budi'
    });

    console.log(res);

    return res;
}

export const addDocument = async () => {
    const res = await axios.post("https://localhost:7124/api/Document/PostDocument", {
        userID: "6DACA139-A3CE-4E96-AB79-93EF89ABCE3D",
        title: "a title",
        content: "a content"
    });

    console.log(res);

    return res;
}

//TAG MASIH ERROR BACKEND
// export const addTag = async () => {
//     const res = await axios.post("https://localhost:7124/api/Document/PostDocumentTag", {
//         documentID : "",
//         tagID : ""
//     })
// }

export const fetchDocument = async () => {
    const res = await axios.get("https://localhost:7124/api/Document/GetDocument");
    console.log(res);
    return res;
}

export const fetchTag = async () => {
    const res = await axios.get("https://localhost:7124/api/Tag");
    console.log(res.data);
    return (res);
}