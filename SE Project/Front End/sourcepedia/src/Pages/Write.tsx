import { useState } from "react"
import "./Write.css"

export default function Write(){

    const [tagList, SetTagList] = useState([
        {
            tagID: "1",
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
    const [tagSelected, SetTagSelected] = useState<string[]>([])
    const [content, SetContent] = useState("") // max 4000



    const checkBoxChecked = (e: React.ChangeEvent<HTMLInputElement>) => {

        if(e.target.checked) {
            SetTagSelected([...tagSelected, e.target.value])
        } else {
            for(let i=0; i<tagSelected.length; i++){
                if(tagSelected[i] === e.target.value) {
                    let arr = tagSelected
                    arr.splice(i, 1)
                    SetTagSelected(arr)
                }
            }
        }

    }

    const formSubmitted = (event: React.FormEvent<HTMLFormElement>) => {
        if(tagSelected.length === 0){
            event.preventDefault()
            alert("Please select at least one tag")
        } else {
            // send data
        }
    }

    return (
        <div className="write">
            <div>
                <h1>Post Document</h1>
                <form className="write-form" onSubmit={formSubmitted}>

                    <div className="input-div">
                        <div><label htmlFor="title">Title</label></div>
                        <div>
                            <input value={title} required id="title"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
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
                                        <div key={id}>
                                            <input type="checkbox" 
                                                id={tag.tagName} value={tag.tagName} 
                                                name="tag-list-write-page"
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

                    <div className="input-div">
                        <div><label htmlFor="content">Content</label></div>
                        <div>
                            <textarea value={content} required id="content"
                            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                                if(event.target.value.length <= 4000) SetContent(event.target.value)
                            }}></textarea>
                            </div>
                    </div>

                    <div className="input-div">
                        <div></div>
                        <div>
                            <button type="submit" className="post-button">POST</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}