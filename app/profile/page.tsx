'use client'
import React from 'react'
import { useAuth } from '../context/AuthContext'

const ProfilePage: React.FC = () => {
    const { user } = useAuth();

    if(!user) {
        return <div className='flex justify-center items-center mt-24'>Loading...</div>;
    }

  return (
    <div className='mt-50'>
      {user.username}
    </div>
  )
}

export default ProfilePage
