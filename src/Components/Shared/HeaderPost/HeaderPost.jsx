import React from "react";

export default function HeaderPost({ post }) {
  return (
    <>
      <div key={post._id} className="flex items-center justify-between mb-4 w-full">
        <div className="flex items-center space-x-2">
          <img
            src={post.user.photo}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-gray-800 font-semibold">{post.user.name}</p>
            <p className="text-gray-500 text-sm">
              {post.createdAt.split("T")[0]}
            </p>
          </div>
        </div>
        <div className="text-gray-500 cursor-pointer">
          {/* Three-dot menu icon */}
          <button className="hover:bg-gray-50 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={12} cy={7} r={1} />
              <circle cx={12} cy={12} r={1} />
              <circle cx={12} cy={17} r={1} />
            </svg>
          </button>
        </div>
      </div>

      <div className="mb-4 w-full">
        <p className="text-gray-800">{post.body}</p>
      </div>
      {/* Image */}
      {post.image ? (
        <div className="mb-4 w-full">
          <img
            src={post.image}
            alt="Post Image"
            className="w-full h-100 object-cover rounded-md"
          />
        </div>
      ) : null}
    </>
  );
}
