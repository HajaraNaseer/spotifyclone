import React from 'react'
import './trending.css'
import TrendingCard from '../trendingCard/TrendingCard'

const Trending = () => {
  return (
    <div className='trendingSectionMainContainer'> 
   <span>
    Trending
     </span>
    
    <TrendingCard/>
    </div>
  )
}

export default Trending