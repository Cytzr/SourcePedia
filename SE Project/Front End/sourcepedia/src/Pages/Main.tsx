import { useEffect, useState } from "react"
import "./Main.css"
import { useBackend } from "../Custom Hooks/useBackend"

interface getTag {
    tagID: string,
    tagName: string
}

interface getDoc {
    content: string,
    documentID: string,
    publishedTime: string,
    title: string,
    userID: string,
}

export default function Main(){

    const { FetchTag, FetchDocument, FetchDocumentByTag } = useBackend()

    const [tagList, SetTagList] = useState<getTag[]>([]);
    const [postList, SetPostList] = useState<getDoc[]>([]);
    const [selectedTag, SetSelectedTag] = useState<string[]>([]);

    useEffect(() => {
        const fetchTagAndDocument = async () => {
            const tagRes = await FetchTag()
            SetTagList(tagRes.data)

            const docRes = await FetchDocument()
            SetPostList(docRes.data)
        }
        fetchTagAndDocument()
    }, [])

    const checkBoxChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        let res: string[] = [];
        if(e.target.checked) { // ada yang di click
            SetSelectedTag([...selectedTag, e.target.value])
            res = [...selectedTag, e.target.value]
        } else { // ada yang di un-click
            for(let i=0; i<selectedTag.length; i++){
                if(selectedTag[i] === e.target.value) {
                    let arr = selectedTag
                    arr.splice(i, 1)
                    SetSelectedTag(arr)
                    res = arr
                }
            }
        }
        fetchByTag(res)
    }

    const fetchByTag = async (arr: string[]) => {

        if(arr.length > 0) { // ada tag yang dipilih
            try {
                const res = await FetchDocumentByTag(arr)
                SetPostList(res.data)
            } catch {
                alert("something went wrong")
            }            
        } else { // gada tag yang dipilih (ngambil semua document)
            const docRes = await FetchDocument()
            SetPostList(docRes.data)
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
                                        id={tag.tagName} value={tag.tagID} 
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
                                <p>{post.publishedTime.slice(0, 10)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}