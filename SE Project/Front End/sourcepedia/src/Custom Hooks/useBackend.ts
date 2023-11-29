import axios from "axios"

//returns 

interface LoginProps {
    email: string,
    password: string
}

interface RegisterProps {
    name: string,
    email: string,
    password: string
}

export const useBackend = () => {

    const UseLogin = async(props:LoginProps) => {

        const res = await axios.post("https://localhost:7124/api/User/login", {
            email: props.email,
            password: props.password
        });
        return res.data;
    }

    const UseRegister = async(props:RegisterProps) => {

        const res = await axios.post("https://localhost:7124/api/User/register", {
            name : props.name,
            email : props.email,
            password : props.password
        });

        console.log(res);

        return res;
    }

    const AddDocument = async () => {
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

    const FetchDocument = async () => {
        const res = await axios.get("https://localhost:7124/api/Document/GetDocument");
        console.log(res);
        return res;
    }

    const FetchTag = async () => {
        const res = await axios.get("https://localhost:7124/api/Tag");
        console.log(res.data);
        return (res);
    }

return {UseLogin, UseRegister, AddDocument, FetchDocument, FetchTag};
}