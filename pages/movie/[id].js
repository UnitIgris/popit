import { useEffect, useState } from 'react'
import { Box, Image, Text, Heading } from '@chakra-ui/react'
import useFetchData from '../../libs/hook/useFetchData'
import { BsStarFill, BsStar } from 'react-icons/bs'

function Movieid() {
  const [starRate, setStarRate] = useState(null)
  const [amountStar, setAmountStar] = useState(0)
  const [actors, setActors] = useState(null)
  const [movieInfo, setMovieInfo] = useState(null)
  const [movieID, setMovieID] = useState('')
  const URL_BASE = 'https://api.themoviedb.org/3/movie/'
  const IMG_BASE = 'https://image.tmdb.org/t/p/original'
  const API_KEY = '&?api_key=714cf0bd7594d949a81e6a43d09bdc9d'
  const URL_INFO = URL_BASE + movieID + API_KEY
  const URL_CAST =
    URL_BASE + movieID + '/casts?&api_key=714cf0bd7594d949a81e6a43d09bdc9d'
  const fetchData = useFetchData()

  function getStar(url) {
    fetchData(url).then((data) => setStarRate(data.vote_average))

    const starPercentage = starRate * 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}`
    setAmountStar(starPercentageRounded)
  }

  function getId() {
    if (typeof window !== 'undefined') {
      var currentLocation = window.location.href
      const id = currentLocation.split('movie/', 2)[1]
      setMovieID(id)
    }
  }
  function getActor(url) {
    fetchData(url).then((data) => setActors(data))
  }

  useEffect(() => {
    if (movieID) {
      getActor(URL_CAST)
      getSingleMovie(URL_INFO)
      getStar(URL_INFO)
    }
  }, [movieID])
  useEffect(() => {
    getId()
  })

  function getSingleMovie(url) {
    fetchData(url).then((data) => setMovieInfo(data))
  }

  console.log(movieInfo)
  if ((actors == null || undefined, movieInfo == null || undefined)) {
    return <p>Loading data's movie...</p>
  } else
    return (
      <>
        <Image
          //Warning: Received `true` for a non-boolean attribute `line`
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
        >{amountStar}
          <Box margin="2rem">
            <Heading size="2xl">{movieInfo.title}</Heading>{' '}
            <Text fontSize="1.3rem" marginBottom="1rem">
              {movieInfo.tagline}
            </Text>
          </Box>
          <Box  display="inline-block" position="relative">
            NO
          
            <Box
              position="absolute"
              top="0"
              left="0"
              white-space="nowrap"
              overflow="hidden"
              width="70%"
            >
              YES 
            
            </Box>
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
              <Box display="flex" marginRight="1.5rem"></Box>
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

              <Box margin="1rem 1.5rem">
                <b>Peoples who played in the movie as actors :</b>
                {actors.cast.map(({ name }) => (
                  <Text
                    key={name}
                    as="u"
                    margin="0.8rem 0 1.5rem 0.5rem"
                    letterSpacing="0.5px"
                  >
                    {name}
                  </Text>
                ))}
              </Box>
              <Heading fontSize="xl">
                Genres :
                {movieInfo.genres.map(({ name }) => (
                  <Text
                    key={name}
                    as="em"
                    margin="0.8rem 0 1.5rem 0.5rem"
                    letterSpacing="0.5px"
                  >
                    {name}
                  </Text>
                ))}
              </Heading>
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
