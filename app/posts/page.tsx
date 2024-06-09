"use client"
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { IPost } from '../types/types';
import axios from 'axios';
import PostList from '../components/PostList';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

const Posts: NextPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <div>Loading...</div>; 
  }

  async function fetchPosts() {
    try{
      const response = await axios.get('https://dummyjson.com/auth/posts');
      const postList: IPost[] = response.data.posts;
      setPosts(postList);
    } catch(e) {
      console.error(e);
    }
  } 

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <PostList posts = { posts }/>
    </div>
  );
}


export default Posts;
