import { Link, useParams } from 'react-router-dom'
import './User.css'
import { useBackend } from '../Custom Hooks/useBackend';
import { useEffect, useState } from 'react';

type getDoc = {
    content: string,
    documentID: string,
    publishedTime: string,
    title: string,
    userID: string,
    userName: string,
}

export const User = () =>{
    const { userID } = useParams<string>();
    const { FetchDocumentByUser } = useBackend();
    const [data, setData] = useState<getDoc[]>([]);
    let tempUser = "";
    useEffect(() =>{
        const getData = async() =>{
            const res = await FetchDocumentByUser(userID);
            setData(res.data);
            console.log(res.data);
        }
        getData();
    }, [])
    return(
        <div className='user-container'>
            <div className='header'>
                More From {data[0]?.userName}
            </div>
            <div className="post-list-div-container">
                <div className="post-list-div">
                    {data.map((post, id) => {
                        return (
                            <div className="post-overview">
                                <Link to={`/read/${post.documentID}`}>
                                    <div key={id}>
                                        <p>{post.title}</p>
                                        <p>{post.publishedTime.slice(0, 10)}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}