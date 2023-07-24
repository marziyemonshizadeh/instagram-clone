import React from 'react';
import { BsTrash3Fill } from 'react-icons/bs';

export default function Comment({comment}) {
  return (
    <li className="d-flex justify-content-between">
        <div className='my-1'>
            <span className="fw-bold me-2">userName</span>
            {comment}
        </div>
        <BsTrash3Fill/>
    </li>
  )
}
