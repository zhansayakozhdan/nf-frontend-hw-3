import * as React from 'react';
import { IPost } from '../types/types';
import Post from './Post';

interface PostListProps {
    posts: IPost[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  
    return (
    <div className="grid grid-cols-1 gap-y-10  items-start p-8">
        {Array.isArray(posts) && posts.map( post => 
                <Post post = { post } key={post.id}/>
        )}
      </div>
    );
  
}

export default PostList;
