import MentorPostForm from '@/components/form/mentor-post-form';
import React from 'react'

const Post = () => {
  return (
    <div className="my-8 container mx-auto">
      <div>
        <h2 className="mb-6 text-3xl font-bold font-Rale">
          What is on your mind
        </h2>
        <span className=" font-Rale text-md">Share your experience</span>
      </div>
      <div className="my-6">
        <MentorPostForm />
      </div>
    </div>
  );
}

export default Post