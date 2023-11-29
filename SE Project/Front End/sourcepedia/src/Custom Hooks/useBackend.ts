import axios from "axios"

//returns 

type LoginProps = {
    email: string,
    password: string
}

type RegisterProps = {
    name: string,
    email: string,
    password: string
}

type AddDocument = {
    userID: string,
    title: string,
    content: string
}

export const useBackend = () => {

    async function UseLogin(props:LoginProps){

        const res = await axios.post("https://localhost:7124/api/User/login", {
            email: props.email,
            password: props.password
        });
        return res.data;
    }

    async function UseRegister(props:RegisterProps) {

        const res = await axios.post("https://localhost:7124/api/User/register", {
            name : props.name,
            email : props.email,
            password : props.password
        });

        console.log(res);

        return res;
    }

    async function AddDocument(props:AddDocument){
        const res = await axios.post("https://localhost:7124/api/Document/PostDocument", {
            userID: props.userID,
            title: props.title,
            content: props.content
        });

        console.log(res);

        return res;
    }

    async function addTag () {
        const res = await axios.post("https://localhost:7124/api/Document/PostDocumentTag", {
            documentID : "",
            tagID : ""
        })
    }

    async function FetchDocument () {
        const res = await axios.get("https://localhost:7124/api/Document/GetDocument");
        console.log(res);
        return res;
    }

    async function FetchTag () {
        const res = await axios.get("https://localhost:7124/api/Tag");
        console.log(res.data);
        return (res);
    }

return {UseLogin, UseRegister, AddDocument, FetchDocument, FetchTag};
}