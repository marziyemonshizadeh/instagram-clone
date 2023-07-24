import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsFromServer } from '../../redux/store/posts/posts';
import Posts from '../instagramPosts/post';
import Story from '../story/story';

export default function Home() {
    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch();
    console.log('post:',posts);

    useEffect(() => {
        dispatch(getPostsFromServer("http://localhost:3001/posts"))
    },[])
    return (
      <>
          <Story/>
          {posts.map((post)=>(
                <Posts userName={post.userName} caption={post.caption} 
                imgUrl={post.imgUrl} 
                key={post.id}
                id={post.id}
                {...post}
                />
              ))
          } 
      </>
    )
}
