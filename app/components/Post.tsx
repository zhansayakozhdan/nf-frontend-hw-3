import React, { FC } from "react"
import { IPost } from "../types/types";
import Link from "next/link";
import Image from "next/image";

interface PostProps {
    post: IPost
}

const Post: FC<PostProps> = ({ post }) => {
    return (
        <div className="flex flex-col sm:flex-row gap-10">
            <div className="order-1 sm:ml-6 xl:ml-0">
                <h3 className="mb-1 text-slate-900 font-semibold">
                    {post.title}
                </h3>
                <div className="prose prose-slate prose-sm text-slate-600">
                    <p>{post.body}</p>
                </div>
                <div className="px-2 py-4">
                    {post.tags.map((tag, index) =>
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            #{tag}
                        </span>
                    )}
                </div>
                <Link href={`/posts/${post.id}`} legacyBehavior>
                <a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-indigo-500 hover:text-white focus:ring-slate-500 mt-4">
                    Learn more
                    <svg className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                        width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M0 0L3 3L0 6"></path>
                    </svg>
                </a>
                </Link>
            </div>
                <img src={`https://picsum.photos/seed/${post.id}/300/200`} alt="" className="shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0" />
            
        </div>
    )
}

export default Post;