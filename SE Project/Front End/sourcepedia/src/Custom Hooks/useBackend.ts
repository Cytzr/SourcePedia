import axios from "axios"
import { useLocalStorage } from "./useLocalStorage"

// const express = require('express');

// const app = express();

// app.use((req:any, res:any, next:any) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });

export const useLogin = async() => {
    // const {getItem, setItem} = useLocalStorage("UserCredential");

    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      };
    
    try{ 
        const res = await axios.post("https://localhost:7124/api/User/login", {
            email: 'calvin@gmail.com',
            password: 'cal'
        }, config);
    }
    catch(error){}
}

export const useRegister = async() => {
    try{ 
        const res = await axios.post("https://localhost:7124/api/User/login", {
            "username" : "boodie",
            "email": 'budi@gmail.com',
            "password": 'budi',
        });
    }
    catch(error){}
}

export const addDocument = () => {

}

export const addTag = () => {

}

export const fetchDocument = async () => {
    const res = await axios.get("https://localhost:7124/api/Document/GetDocument");
    console.log(res);
    return res;
}

export const fetchTag = async () => {
    const res = await axios.get("https://localhost:7124/api/Tag");
    console.log(res);
    return (res);
}