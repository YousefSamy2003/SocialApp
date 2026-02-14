import React from 'react'
import HeaderPost from '../HeaderPost/HeaderPost'
import CommentPost from '../CommentPost/CommentPost'
import { Link } from 'react-router-dom'

export default function CardPost({ post }) {
  return (
       <div
          key={post._id}
          className="bg-gray-100  flex items-center justify-center"
        >
          <div className="bg-white p-8 rounded-lg shadow-md w-md mb-30">
            {/* User Info with Three-Dot Menu */}

            <Link to={"/postdetails/" + post._id}>
              <HeaderPost post={post}></HeaderPost>
            </Link>

            {/* Like and Comment Section */}
            <CommentPost post={post}></CommentPost>
          </div>
        </div>
  )
}
