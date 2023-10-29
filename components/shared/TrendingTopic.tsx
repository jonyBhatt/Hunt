import React from 'react'
import { topics } from '@/utils/constants'
const TrendingTopic = () => {
  return (
    <div className="flex items-center gap-2">
      <h2 className="font-bold text-sm">Trending Topic :</h2>

      {topics.map((topic) => (
        <div key={topic.id} className="py-1 px-3 cursor-pointer  bg-secondary rounded-full text-black">
          <span className="text-xs font-regular text-gray-700/90">{ topic.title}</span>
        </div>
      ))}
    </div>
  );
}

export default TrendingTopic