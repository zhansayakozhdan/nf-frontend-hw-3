"use client"
import { IPost } from '@/app/types/types';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState<IPost | null>(null);

  // useEffect(() => {
  //   const pathname = window.location.pathname;
  //   const id = pathname.split('/').pop();

  //   async function fetchPost() {
  //     try {
  //       const res = await axios.get(`https://dummyjson.com/posts/${id}`);
  //       setPost(res.data);
  //     } catch(e) {
  //       console.error(e);
  //     }
  //   }
  //   fetchPost()
  // }, []);


  useEffect(() => {
    if (id) {
      axios.get(`https://dummyjson.com/posts/${id}`)
        .then(response => setPost(response.data))
        .catch(error => console.error(error));
    }
  }, [id]);


  if (!post) return <div>Loading...</div>;

  return (
    <div className='p-24 items-center mx-40'>

      <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0">
          <h2 className="text-5xl font-semibold text-gray-800 leading-tight mb-2">
            "{post.title}"
          </h2>
        </div>

        <img src={`https://picsum.photos/seed/${post.id}/300/200`} alt='news' className="w-full object-cover lg:rounded h-80" />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">

        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
          <p className="pb-6">
            {post.body}
          </p>

          <div className='float-end'>
          <span className="text-slate-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-2sm pr-3 py-1 border-r-2 border-gray-200">
            <svg className="h-8 w-8 text-slate-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>

            {post.views}
          </span>

          <span className="text-slate-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-2sm pr-3 py-1 border-r-2 border-gray-200">
            <svg className="h-8 w-8 text-slate-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>

            {post.reactions.likes}
          </span>

          <span className="text-slate-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-2sm pr-3 py-1 ">
            <svg className="h-8 w-8 text-slate-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
            </svg>
            {post.reactions.dislikes}
          </span>
          </div>

        </div>

        <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
          <div className="p-4 border-t border-b md:border md:rounded">
            <div className="flex py-2">
              <img src={`https://picsum.photos/seed/${post.userId}/300/200`}
                className="h-10 w-10 rounded-full mr-2 object-cover" />
              <div>
                <p className="font-semibold text-gray-700 text-sm"> Dylan Obrien </p>
                <p className="font-semibold text-gray-600 text-xs"> Author </p>
              </div>
            </div>
            <p className="text-gray-700 py-3">
              Mike writes about technology
              Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.
            </p>
            <button className="px-2 py-1 text-gray-100 bg-indigo-700 flex w-full items-center justify-center rounded">
              Follow
              <i className='bx bx-user-plus ml-2' ></i>
            </button>
          </div>
        </div>

      </div>


    </div>

  )
}

export default Post;
