import React from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import { imageUrl ,API_KEY} from '../../constants/constants'
import axios from '../../axios'
import {useEffect,useState} from 'react'
function RowPost(props) {
  const [movie, setMovie] = useState([])
  const [urlId , setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovie(response.data.results)
    }).catch(err=>{
     // alert('network error')

    })
  }, [])
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
     
      autoplay: 0,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Array empty')
      }
    })
  }
  return (
    
    <div className='row'>
      <h2>{props.tittle}</h2>
      <div className='posters'>
        {movie.map((obj)=>
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter':'poster'} alt="ima" src={`${imageUrl+obj.backdrop_path}`} />
        )}
      </div>
      { urlId && <YouTube opts={opts}  videoId= {urlId.key}  /> }
    </div>
  )
}

export default RowPost
