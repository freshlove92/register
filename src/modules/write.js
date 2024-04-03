//액션타입
const POSTING = "write/POSTING"
const TAG_CONTENT = "write/TAG_CONTENT"

//액션함수 //★순서대로 보내고 순서대로 받자★
export const posting = (title, content, tag, userID) => ({type:"POSTING", title, content, tag, userID})
export const tagcontent = (newTag) => ({type:"TAG_CONTENT", newTag})


//state
const PostingData = [] //담기는 그릇
const TagData = [] //담기는 그릇

const initialState ={
    tagData: TagData,
    PostingData: PostingData
}

export const write = (state=initialState, action) =>{

    switch(action.type){
        case "POSTING" :
            const newPosting = {
                title: action.title,
                content: action.content,
                tag: action.tag,
                userID: action.userID
            }
            return{
               ...state,
               PostingData: [...state.PostingData, newPosting]
            }

        case "TAG_CONTENT" :
            return{
                ...state,
                tagData: [...state.tagData, action.newTag]
            }
    
        default:
            return state;
            
    }


}