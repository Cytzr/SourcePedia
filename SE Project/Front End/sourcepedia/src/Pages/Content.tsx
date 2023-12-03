import { useParams } from 'react-router-dom'
import './Content.css'
import { useBackend } from '../Custom Hooks/useBackend';

type getDoc = {
    content: string,
    documentID: string,
    publishedTime: string,
    title: string,
    userID: string,
}

export const Content = () =>{
    const { documentID } = useParams<string>();

    const { FetchOneDocument } = useBackend();

    const res = FetchOneDocument(documentID);
    console.log(res);

    return (
        <div className='content-container'>
            <div className='header'>
                <div className='content-title'>{}</div>
                <div className="published-time">Published on: 01-02-2023</div>
                <div className="author-name">by Kelvin Ethanael Yahja</div>
            </div>
            <img className='content-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Programming_code.jpg/800px-Programming_code.jpg" alt="programming" />
            <div className='content-body'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem et necessitatibus! Excepturi porro iusto, error officiis fuga doloremque rem tempore esse? Ab optio in tenetur eos cumque error minus eum veniam atque voluptas alias repellendus, laborum magni unde mollitia fugit veritatis deserunt nemo molestias rerum modi corporis rem sequi quibusdam. Assumenda quasi totam quia debitis necessitatibus quos doloribus, soluta reiciendis qui dolores quidem quaerat velit natus autem doloremque quisquam, animi nihil, labore modi praesentium provident dolore! Dicta excepturi natus animi non, temporibus provident dignissimos velit voluptatibus quia voluptates labore, adipisci sed possimus voluptatum, recusandae cupiditate ipsum qui atque. Blanditiis, eaque. Culpa quae in esse pariatur error excepturi totam quibusdam quas consectetur sunt quasi sit, velit facere quis qui unde temporibus minima magnam? Iure ullam sit eaque quod laborum iste illum voluptatibus fugit molestiae dolorem dolorum dicta deleniti autem ut aliquid minima, facere molestias quae exercitationem officiis nisi voluptate vel error a. Expedita ducimus, fugiat quod reiciendis, explicabo cumque iusto libero voluptates quam neque vero facilis a, adipisci cupiditate blanditiis error repellat exercitationem asperiores laudantium. Dolores facere praesentium distinctio vitae et! Laboriosam culpa voluptate et veritatis eius tempore voluptas deleniti, eos hic nesciunt. Nostrum repudiandae facere, sequi nesciunt quae id.
            </div>
        </div>
    )
}