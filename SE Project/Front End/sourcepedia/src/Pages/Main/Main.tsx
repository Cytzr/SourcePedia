import { useState } from "react"
import "./Main.css"

export default function Main(){

    // dummy data
    const [tagList, SetTagList] = useState([
        {
            tagID: "2",
            tagName: "Programming"
        },
        {
            tagID: "3",
            tagName: "Data Science"
        },
        {
            tagID: "2",
            tagName: "Technology"
        },
        // {
        //     tagID: "3",
        //     tagName: "Self Improvement"
        // },
        // {
        //     tagID: "2",
        //     tagName: "Writing"
        // },
        // {
        //     tagID: "3",
        //     tagName: "Relationship"
        // },
        // {
        //     tagID: "2",
        //     tagName: "Machine Learning"
        // },
        // {
        //     tagID: "2",
        //     tagName: "Productivity"
        // },
        // {
        //     tagID: "2",
        //     tagName: "Politics"
        // },
    ])
    const [postList, SetPostList] = useState([
        {
            documentID: "1",
            title: "ABC",
            content: "wertyuioplkjhgfdsxcvbn",
            publisedTime: "2023-11-12"
        },
        {
            documentID: "1",
            title: "ABC",
            content: "wertyuioplkjhgfdsxcvbn",
            publisedTime: "2023-11-12"
        },
        {
            documentID: "1",
            title: "ABC",
            content: "wertyuioplkjhgfdsxcvbn",
            publisedTime: "2023-11-12"
        },
        {
            documentID: "1",
            title: "ABC",
            content: "wertyuioplkjhgfdsxcvbn",
            publisedTime: "2023-11-12"
        },
    ])


    return (
        <div className="main">

            <div className="main-header">
                <div className="left-header">
                    <h1>Elevate your understanding.</h1>
                </div>
                <div className="right-header">
                    <p>Discover more of what matters to you</p>
                    <div className="tag-list-div">
                        {tagList.map((tag, id) => {
                            return (
                                <div key={id}>
                                    {tag.tagName}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="post-list-div">
                {postList.map((post, id) => {
                    return (
                        <div key={id}>
                            <p>{post.title}</p>
                            <p>{post.publisedTime}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}