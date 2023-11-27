import { useState } from "react"
import "./Main.css"

export default function Main(){

    // dummy data
    const [tagList, SetTagList] = useState([
        {
            tagID: "1",
            tagName: "Health"
        },
        {
            tagID: "2",
            tagName: "Science"
        },
        {
            tagID: "3",
            tagName: "Technology"
        }
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

    const [selectedTag, SetSelectedTag] = useState<string[]>([]);



    const checkBoxChecked = (e: React.ChangeEvent<HTMLInputElement>) => {

        if(e.target.checked) {
            SetSelectedTag([...selectedTag, e.target.value])
        } else {
            for(let i=0; i<selectedTag.length; i++){
                if(selectedTag[i] === e.target.value) {
                    let arr = selectedTag
                    arr.splice(i, 1)
                    SetSelectedTag(arr)
                }
            }
        }

    }

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
                                    <input type="checkbox" 
                                        id={tag.tagName} value={tag.tagName} 
                                        name="tag-list-main-page"
                                        className="tag-checkbox"
                                        onChange={checkBoxChecked}
                                    />
                                    <label className="checkbox-label" htmlFor={tag.tagName}>
                                        {tag.tagName}
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="post-list-div-container">
                <div className="post-list-div">
                    {postList.map((post, id) => {
                        return (
                            <div className="post-overview" key={id}>
                                <p>{post.title}</p>
                                <p>{post.publisedTime}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}