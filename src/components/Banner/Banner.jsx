import React, { useEffect } from 'react'
import{API_KEY } from '../../constants/constants'
import{imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
import { useState } from 'react'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
  console.log(response.data.results[0])
  setMovie(response.data.results[0])

  
})
  },[])
    
  return (
  
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
    className='banner'>

     
        <div className='content'>
            <h1 className='tittle'>{movie ? movie.title: ""}</h1>
          
                <button className='button'>play</button>
                <button className='button'> More info</button>
            
                    </div> <h1 className='discription'>{movie ? movie.overview:""}</h1>
            <div className="fade"></div>        
    </div>
    
  )

}

export default Banner
