import lodash from 'lodash';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import apiRequests from '../../Services/axios/Configs/configs';
  
import './story.css';

const Story = () => {
    const [stories, setStories] = useState();
    useEffect(() => {
        getAllStories();
    },[])

    const getAllStories=()=>{
        apiRequests.get("/stories")
        .then(res => setStories(res.data))
        .catch((err) => {
            console.log(err)})
    } 
    return ( 
        <div className='container d-flex justify-content-between cursor-pointer p-2 mt-2 overflow-auto'>
             {   
                lodash.map(stories,(story)=>(
                <div className='d-flex flex-column storyHoverStyle user-select-none' key={story.id}>
                    <div className="position-relative me-2 circleAround m-1">
                        <LazyLoadImage src={story.imgUrl} alt={story.userName} className='img-fluid rounded-circle 'style={{padding:3}}/>
                        {/* <img src={story.imgUrl} alt={story.userName} className='img-fluid rounded-circle 'style={{padding:3}}/> */}
                    </div>
                    <div className='text-center'>{story.userName}</div>
                </div>
                ))
            }
        </div>
     );
}
 
export default Story;