import React from 'react'
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='relative'>
    <img src="https://images.unsplash.com/photo-1634176866089-b633f4aec882?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="background" className='absolute inset-0 w-full h-full object-cover' />
    <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto relative'>
    <h1 className='text-3xl font-bold lg:text-6xl relative z-10 text-white'>Welcome to the Yaduvesh's Blog!</h1>
    <p className='text-gray-500 text-xs sm:text-sm relative z-10'>
       A Journey of Discovery and Insight. Explore the depths of human experience, engage in
        thought-provoking discussions, and find inspiration to enrich your life. Join our
         community of seekers as we embark on a quest for wisdom, understanding, and connection.
          Dive in and let the exploration begin!
    </p>
    <Link
      to='/search'
      className='text-xs sm:text-sm text-teal-500 font-bold hover:underline relative z-10'
    >
      View all posts
    </Link>
  </div>
</div>

    <div className='p-3 bg-amber-100 dark:bg-slate-700'>
      <CallToAction />
    </div>

    <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
      {posts && posts.length > 0 && (
        <div className='flex flex-col gap-6'>
          <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
          <div className='flex flex-wrap gap-4'>
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
          <Link
            to={'/search'}
            className='text-lg text-teal-500 hover:underline text-center'
          >
            View all posts
          </Link>
        </div>
      )}
    </div>
  </div>
  )
}

export default Home