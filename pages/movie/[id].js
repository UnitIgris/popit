import { useEffect, useState } from 'react'
import {
  Box,
  Input,
  Image,
  Text,
  SimpleGrid,
  Card,
  Heading,
  CardBody,
  Stack,
} from '@chakra-ui/react'

function Movieid() {
  const [movieInfo, setMovieInfo] = useState(null)
  const [movieID, setMovieID] = useState('')
  const IMG_BASE = 'https://image.tmdb.org/t/p/w1280'
  const URL_INFO =
    'https://api.themoviedb.org/3/movie/' +
    movieID +
    '?api_key=714cf0bd7594d949a81e6a43d09bdc9d'

  function getId() {
    if (typeof window !== 'undefined') {
      var currentLocation = window.location.href
      const id = currentLocation.split('movie/', 2)[1]
      setMovieID(id)
    }
  }

  useEffect(() => {
    if (movieID) { 
      getSingleMovie(URL_INFO)
    }
  })
  useEffect(() => {
    getId()
  })

  function getSingleMovie(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovieInfo(data)
        console.log('movie', data)
        
      })
  }

  if (movieInfo == null) {
    return <p>Loading movie's data...</p>
  }
  return (
    <Box
      minH="100vh"
      h="100%"
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="6rem 4rem"
    >
      <Box display="flex" w="100%" flexDirection="column">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="100%"
          maxW="120rem"
          margin="0px auto 0px"
        >
          {movieID} {movieInfo.title}
        </Box>
      </Box>
    </Box>
  )
}
export default Movieid
