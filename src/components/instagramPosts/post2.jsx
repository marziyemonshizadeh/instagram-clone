import lodash from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import apiRequests from '../../Services/axios/Configs/configs';
import LazyImg from '../lazyLoadImg/lazyLoadImg';

import { BsPatchCheckFill, BsTrash3Fill } from 'react-icons/bs';
import { FaCheck, FaHeart, FaRegComment, FaRegHeart } from 'react-icons/fa';
import { LuSend } from 'react-icons/lu';
import { MdCancel } from 'react-icons/md';
import { RiBookmarkFill, RiBookmarkLine } from 'react-icons/ri';
import { TfiMoreAlt } from 'react-icons/tfi';

import './post.css';
  
function Post({userName,caption,imgUrl}) {
    const [like,setLike] = useState(true);
    const [save,setSave] = useState(true);
    const [newComment, setNewComment] = useState('');
    const [showCommentInput, setShowCommentInput] = useState(false);

    const [comments, setComments] = useState();

    // show all comments
    useEffect(() => {
        getAllComments();
    },[])

    const getAllComments=()=>{
        apiRequests.get("/comments")
        .then(res => setComments(res.data))
        .catch((err) => {
            console.log(err)})
    }
    const addCommentHandler = () => {
        // console.log('hiii');
        // event.preventDefault();
        apiRequests.post("/comments",{body : newComment,postId: 1})
        .then(res => console.log(res))
        .catch((err) => {
            console.log(err)})
        // props.AddComment(newComment);
        setNewComment("");
        setShowCommentInput(false);
      };
    const removeCommentHandler =(id)=>{
        console.log('hiiii');
        apiRequests.delete(`/comments/${id}`)
        .then(res => console.log(res))
        .catch((err) => {
            console.log(err)})
    }
    return (
        <div className="card mx-auto  mt-2">
            {/* header */}
            <header className="card-title d-flex justify-content-between flex-row align-items-center mt-1">
                <div className='d-flex flex-row align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle mx-2 mt-1" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                    <p className="fw-bold">{userName}</p>
                    <BsPatchCheckFill className='mt-1 ms-1 bluetick'/>
                </div>
                <TfiMoreAlt className='me-2'/>
            </header>

             {/* image */}
             <LazyImg src={imgUrl} alt="post"/>

            {/* caption */}
            <div className='m-2'>
                <div className="d-flex justify-content-between mt-1">
                    <div className='d-flex gap-2'>
                        <FaRegHeart className={like? 'd-block' : 'd-none'} onClick={()=>setLike(!like)}/>
                        <FaHeart className={!like? 'heart d-block zoom-in-zoom-out' : 'd-none'} onClick={()=>setLike(!like)}/>
                        <FaRegComment className={showCommentInput? 'zoom-in-zoom-out' : ''} onClick={()=>setShowCommentInput(true)}/>
                        <LuSend/>
                    </div>
                    <RiBookmarkLine className={save? 'd-block' : 'd-none'} onClick={()=>setSave(!save)}/>
                    <RiBookmarkFill className={!save? 'd-block zoom-in-zoom-out' : 'd-none'} onClick={()=>setSave(!save)}/>

                </div>
                <div className="card-text user-select-none mt-2 mb-1">
                    <span className="fw-bold me-2">{userName}</span>
                    {caption}
                </div>


                {/* extra comments */}
                        <ul>
                        {lodash.map(comments,(comment)=>(
                                <li className="d-flex justify-content-between" key={comment.id}>
                                    <div>
                                        <span className="fw-bold me-2">username</span>
                                        {comment.body}
                                    </div>
                                    <BsTrash3Fill onClick={()=>{removeCommentHandler(2)}}/>
                                 </li>

                        ))}
                        </ul> 
                        {/* <div className='d-flex' key={comment.id}>
                        {comment.body}
                        </div>

                        <ul>
                            <CommentsList/>
                        </ul>
















                {/* add comments */}
                <div className={showCommentInput? 'd-block' : 'd-none'}>
                    <input type="text"  className="form-control mt-2"
                                        placeholder="Add a comment for this post"
                                        value={newComment} 
                                        onChange={event =>setNewComment(event.target.value)}/>
                    <div className="d-flex justify-content-end mt-2">
                        <MdCancel className='me-1 cancel' onClick={()=>{setShowCommentInput(false);
                                                                        setNewComment('')}}/>
                        <FaCheck className='success' onClick={()=>{addCommentHandler()}} />
                    </div>
                </div>
            </div>
        </div>
  )
}
const mapDispatchToProp = (dispatch) => ({
    Like: () => dispatch(LikeAction),
  });
export default connect(null, mapDispatchToProp)(Post);
// export default Post;
// ;