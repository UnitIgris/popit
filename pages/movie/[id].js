import { useEffect, useState } from 'react'
import { Box, Image, Text, Heading } from '@chakra-ui/react'

function Movieid() {
const [actors, setActors] = useState(null)
  const [movieInfo, setMovieInfo] = useState(null)
  const [movieID, setMovieID] = useState('')
  const URL_BASE = 'https://api.themoviedb.org/3/movie/'
  const IMG_BASE = 'https://image.tmdb.org/t/p/original'
  const API_KEY = '&?api_key=714cf0bd7594d949a81e6a43d09bdc9d'
  const URL_INFO = URL_BASE + movieID + API_KEY
  const URL_CAST = URL_BASE + movieID + '/casts?&api_key=714cf0bd7594d949a81e6a43d09bdc9d'
  function getId() {
    if (typeof window !== 'undefined') {
      var currentLocation = window.location.href
      const id = currentLocation.split('movie/', 2)[1]
      setMovieID(id)
    }
  }
  function getActor(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setActors(data)
        console.log(actors)
      })
  }


  useEffect(() => {
    if (movieID) {
      getSingleMovie(URL_INFO)
      getActor(URL_CAST)
    }
  }, [movieID])
  useEffect(() => {
    getId()
  })

  function getSingleMovie(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovieInfo(data)
        console.log(movieInfo)
      })
  }

  if (movieInfo == null) {
    return <p>Loading movie's data...</p>
  } else
    return (
      <>
        <Image
          position="fixed"
          w="100%"
          h="100%"
          left="0"
          bottom="0"
          objectFit="cover"
          zIndex="-1"
          opacity="0.75"
          line
          src={IMG_BASE + movieInfo.backdrop_path}
        />
        <Box
          borderRadius="1rem"
          maxW="80rem"
          bg="rgba(255,255,255,0.8)"
          margin="0 auto"
        >
          <Box margin="2rem">
            <Heading size="2xl">{movieInfo.title}</Heading>{' '}
            <Text fontSize="1.3rem" marginBottom="1rem">
              {movieInfo.tagline}
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column-reverse"
          >
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column-reverse"
            >
              <Box display="flex" marginRight="1.5rem">
                <Text alignItems="center" marginRight="0.25rem">
                  STAR***
                </Text>
                <Text alignItems="center" marginRight="0.25rem">
                  STAR***
                </Text>
                <Text alignItems="center" marginRight="0.25rem">
                  STAR***
                </Text>
                <Text alignItems="center" marginRight="0.25rem">
                  STAR***
                </Text>
                <Text alignItems="center" marginRight="0.25rem">
                  STAR***
                </Text>
              </Box>
              <Box display="flex">
                <Text fontSize="xl" marginRight="1.5rem">
                  {movieInfo.release_date}
                </Text>
                <Text fontSize="xl" marginRight="1.5rem">
                  {movieInfo.runtime}min
                </Text>
                <Text fontSize="xl" marginRight="1.5rem">
                  {movieInfo.original_language}
                </Text>
              </Box>
              <Text fontSize="xl" marginRight="1.5rem">
                  ACTOR***
                </Text>
              <Box>
                Genre :
                {movieInfo.genres.map(({ name }) => (
                  <Text
                    as="i"
                    margin="0.8rem 0 1.5rem 0.5rem"
                    letterSpacing="0.5px"
                  >
                    {name}
                  </Text>
                ))}
              </Box>
              <Text w="90%" fontSize="xl" margin="1rem 1.5rem">
                {movieInfo.overview}
              </Text>
            </Box>

            <Image
              borderRadius="1rem"
              position="relative"
              w="35%"
              h="35%"
              src={IMG_BASE + movieInfo.poster_path}
            />
          </Box>
        </Box>
      </>
    )
}
export default Movieid
