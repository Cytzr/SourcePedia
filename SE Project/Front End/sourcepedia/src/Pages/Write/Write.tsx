import { useState } from "react"
import "./Write.css"

export default function Write(){

    const [tagList, SetTagList] = useState([
        {
            tagID: "2",
            tagName: "Health"
        },
        {
            tagID: "3",
            tagName: "Science"
        },
        {
            tagID: "2",
            tagName: "Technology"
        },
    ])

    const [title, SetTitle] = useState("") // max 255
    const [tagSelected, SetTagSelected] = useState("")
    const [content, SetContent] = useState("") // max 4000





    return (
        <div className="write">
            <div>
                <h1>Post Document</h1>
                <div className="input-div">
                    <div>Title</div>
                    <div>
                        <input value={title} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            if(event.target.value.length <= 255) SetTitle(event.target.value)
                        }} />
                    </div>
                </div>
                <div className="input-div">
                    <div>Tag</div>
                    <div>
                        <div className="tag-list-container">
                            {tagList.map((tag, id) => {
                                return (
                                    <div className={false ? "tag-clicked" : "tag-not-clicked"} key={id}>{tag.tagName}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="input-div">
                    <div>Content</div>
                    <div>
                        <textarea value={content} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                            if(event.target.value.length <= 4000) SetContent(event.target.value)
                        }}></textarea>
                        </div>
                </div>
                <div className="input-div">
                    <div></div>
                    <div>
                        <div className="post-button">POST</div>
                    </div>
                </div>
            </div>
        </div>
    )
}