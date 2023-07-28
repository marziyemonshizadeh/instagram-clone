import React, { useState } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { getPostCommentsFromServer } from '../../redux/store/posts/comments';

// import apiRequests from '../../Services/axios/Configs/configs';
import LazyImg from '../lazyLoadImg/lazyLoadImg';

import { BsPatchCheckFill } from 'react-icons/bs';
import { FaCheck, FaHeart, FaRegComment, FaRegHeart } from 'react-icons/fa';
import { LuSend } from 'react-icons/lu';
import { MdCancel } from 'react-icons/md';
import { RiBookmarkFill, RiBookmarkLine } from 'react-icons/ri';
import { TfiMoreAlt } from 'react-icons/tfi';

import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { removePostsFromServer } from '../../redux/store/posts/posts';
import './post.css';
  
function Post({userName,caption,imgUrl,id,cmnt}) {
    // states
    const [like,setLike] = useState(true);
    const [save,setSave] = useState(true);
    const [newComment, setNewComment] = useState('');
    const [showCommentInput, setShowCommentInput] = useState(false);

    const dispatch = useDispatch();
    const handleDeletePost =( ) => {
        swal({
            title: "confirm delete posts ???",
            icon: "warning",
            buttons: ["no", "yes!"],
        }).then((result) => {
            if(result){
                dispatch(removePostsFromServer(id))  
                swal({
                    title: "The post has been successfully deleted:)",
                    icon: "success",
                    buttons: "ok",
                })
            }
        })
        // {
        //     "userName": "Marzieh",
        //     "caption": "milano",
        //     "imgUrl": "https://galeriemagazine.com/wp-content/uploads/2019/04/Lubar-1920x1200.jpg",
        //     "id": 1
        //   },
        // dispatch(removePostsFromServer(id))
    }
    // const com = cmnt;
    //redux
    // const postComments = useSelector((state) => state.comments)
    // const dispatch = useDispatch();
    // console.log('postComments:',postComments);

    // useEffect(() => {
    //     dispatch(getPostCommentsFromServer("http://localhost:3001/comments"))
    // },[])
    // const [comments, setComments] = useState();



    // show all comments
    // useEffect(() => {
    //     getAllComments();
    //     dispatch(getPostCommentsFromServer("http://localhost:3001/comments"))
    //     console.log('i am post use effect ! i am render');
    // },[])

    // const getAllComments=()=>{
    //     apiRequests.get("/comments")
    //     .then(res => setComments(res.data))
    //     .catch((err) => {
    //         console.log(err)})
    // }
    return (
        <div className="card mx-md-auto  mt-2">
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
                <div className="dropdown">
                    <button type="button" className="btn" data-bs-toggle="dropdown">
                        <TfiMoreAlt className='me-2'/>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={handleDeletePost}>Delete</a></li>
                    </ul>
                </div>
            </header>
            {/* {com.map(i=>{
                   <p>hi {i.userName}</p>
                })}  */}
             {/* image */}
             <LazyImg src={imgUrl} alt="post"/>

            {/* caption */}
            <div className='m-2'>
                <div className="d-flex justify-content-between mt-1">
                    {/* like comment sant icons*/}
                    <div className='d-flex gap-2'>
                        <FaRegHeart className={like? 'd-block' : 'd-none'} onClick={()=>setLike(!like)}/>
                        <FaHeart className={!like? 'heart d-block zoom-in-zoom-out' : 'd-none'} onClick={()=>setLike(!like)}/>
                        <FaRegComment className={showCommentInput? 'zoom-in-zoom-out' : ''} onClick={()=>setShowCommentInput(true)}/>
                        <LuSend/>
                    </div>
                    {/* save icons*/}
                    <RiBookmarkLine className={save? 'd-block' : 'd-none'} onClick={()=>setSave(!save)}/>
                    <RiBookmarkFill className={!save? 'd-block zoom-in-zoom-out' : 'd-none'} onClick={()=>setSave(!save)}/>

                </div>
                {/* caption text */}
                <div className="card-text user-select-none mt-2 mb-1">
                    <span className="fw-bold me-2">{userName}</span>
                    {caption}
                </div>

              {/* post's comments */}
                    {/* <ul>
                    { postComments.map((comment)=>(
                        <li className="d-flex justify-content-between" key={comment.id}>
                            {id === comment.postId && 
                                <>
                                    <div>
                                        <span className="fw-bold me-2">{comment.userName}</span>
                                        {comment.body}
                                    </div>
                                    <BsTrash3Fill/>
                                </>}
                        </li>
                    ))}
                    </ul>  */}
                    {/* <div>{userName}: comments post {id} = {cmnt.map(i => {
                        console.log(`post ${id}=`,i.body);
                    })}</div> */}
                {/* add comments */}
                <div className={showCommentInput? 'd-block' : 'd-none'}>
                    <input type="text"  className="form-control mt-2"
                                        placeholder="Add a comment for this post"
                                        value={newComment} 
                                        onChange={event =>setNewComment(event.target.value)}/>
                    <div className="d-flex justify-content-end mt-2">
                        <MdCancel className='me-1 cancel' onClick={()=>{setShowCommentInput(false);
                                                                        setNewComment('')}}/>
                        <FaCheck className='success' />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Post;
