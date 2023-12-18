import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl w-full h-auto' />

            </div>
            <h2
            className='text-l'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard