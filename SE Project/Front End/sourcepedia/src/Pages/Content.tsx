import { Link, useParams } from 'react-router-dom'
import './Content.css'
import { useBackend } from '../Custom Hooks/useBackend';
import { useEffect, useState } from 'react';
import { User } from './User';

type getDoc = {
    content: string,
    documentID: string,
    publishedTime: string,
    title: string,
    userID: string,
    userName: string,
}

export const Content = () =>{
    const { documentID } = useParams<string>();
    const { FetchOneDocument } = useBackend();
    const [data, setData] = useState<getDoc>();

    useEffect(() => {
        const getData = async() =>{
            const data = await FetchOneDocument(documentID);
            console.log(data);
            setData(data.data);
        }
        getData();
    },[])

    return (
        <div className='content-container'>
            <div className='header'>
                <div className='content-title'>{data?.title}</div>
                <div className="published-time">Published on: {data?.publishedTime}</div>
                <Link to={`/user/${data?.userID}`}><div className="author-name">by {data?.userName}</div></Link>
            </div>
            <img className='content-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Programming_code.jpg/800px-Programming_code.jpg" alt="programming" />
            <div className='content-body'>
                {data?.content}
            </div>
        </div>
    )
}