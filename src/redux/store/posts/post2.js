//action types
const Like = "LIKE"
const disLike = "DISLIKE"
// const Save = "SAVE"
// const unSave = "UNSAVE"
// const AddNewPost = "ADD_NEW_POST"

// const AddComment = "ADD_COMMENT"
// const RemoveComment = "REMOVE_COMMENT"


//action creators
export const LikeAction = ()=>{
    return{
        type: Like
    }
}
export const disLikeAction = ()=>{
    return{
        type: disLike
    }
}
// const SaveAction = ()=>{
//     return{
//         type: Save
//     }
// }
// const AddNewPostAction = ()=>{
//     return{
//         type: AddNewPost
//     }
// }

// export const AddCommentAction = (comment)=>{
//     return{
//         type: AddComment,
//         payload: {
//             id: crypto.randomUUID(),
//             comment,
//         }
//     }
// }
// export const RemoveCommentAction = (id)=>{
//     return{
//         type: RemoveComment,
//         payload: {id}
//     }
// }


//reducer
export default function reducer(state=0,action){
    switch(action.type){
        case Like:
            return state+1;
    //    case AddComment:
    //         return [...state, action.payload];
    //    case RemoveComment:
    //         return state.filter(comment => comment.id !== action.payload.id)
    //    case Like:
    //       return state;
    //    case disLike:
    //       return state;
    //    case Save:
    //       return state;
    //    case unSave:
    //       return state;
       default:
          return state;
        
    }
}
//store