import React from "react";

export default function Profile() {
  return (
    <div className="max-w-2xl mx-auto py-6 px-4 flex flex-col gap-4">
      {/* Card 1: Cover + Avatar + Stats */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        {/* Cover */}
        <div className="h-40 bg-gradient-to-br from-purple-700 via-purple-500 to-purple-300 relative">
          <div className="absolute -top-4 -right-4 w-28 h-28 rounded-full bg-white opacity-10" />
          <div className="absolute bottom-3 left-8 w-16 h-16 rounded-full bg-white opacity-10" />
          <div className="absolute top-5 left-1/2 w-10 h-10 rounded-full bg-white opacity-10" />
        </div>
        {/* Avatar */}
        <div className="px-5 pb-5">
          <div className="relative w-24 h-24 -mt-12 mb-3">
            <img
              src="https://i.pravatar.cc/150?img=11"
              alt="avatar"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />
            {/* Camera icon */}
            <button className="absolute bottom-1 right-1 w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
          {/* Name + Settings */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Yousef Ahmed</h1>
              <p className="text-sm text-gray-400">@yousefahmed</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Settings
            </button>
          </div>
          {/* Stats */}
          <div className="flex gap-5 mt-4">
            <span className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">0</span> Posts
            </span>
            <span className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">0</span> Followers
            </span>
            <span className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">0</span> Following
            </span>
          </div>
        </div>
      </div>
      {/* Card 2: About */}
      <div className="bg-white rounded-2xl shadow-sm px-5 py-5">
        <h2 className="text-base font-bold text-gray-900 mb-4">About</h2>
        <div className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400">Email</p>
              <p className="text-sm font-medium text-gray-800">
                yousafsamy9@outlook.com
              </p>
            </div>
          </div>
          {/* Date of Birth */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400">Date of Birth</p>
              <p className="text-sm font-medium text-gray-800">Jun 8, 2004</p>
            </div>
          </div>
          {/* Gender */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400">Gender</p>
              <p className="text-sm font-medium text-gray-800">Male</p>
            </div>
          </div>
        </div>
      </div>
      {/* Card 3: My Posts header */}
      <div className="bg-white rounded-2xl shadow-sm px-5 py-4">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-purple-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          <h2 className="text-base font-bold text-purple-600">My Posts</h2>
        </div>
      </div>
      {/* Card 4: Empty state */}
      <div className="bg-white rounded-2xl shadow-sm px-5 py-12 flex flex-col items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-14 h-14 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
        <p className="text-sm text-gray-400">
          You haven't posted anything yet.
        </p>
        <a
          href="#"
          className="text-sm text-purple-600 font-medium hover:underline"
        >
          Create your first post
        </a>
      </div>
    </div>
  );
}
