import { useState, useEffect } from 'react'
import { Box, Input, Text, Heading } from '@chakra-ui/react'
import Cards from '../../libs/components/Card'
import Genre from '../../libs/components/Genre'
import useFetchData from '../../libs/hook/useFetchData'

function List() {
  const API_KEY = '&api_key=714cf0bd7594d949a81e6a43d09bdc9d'
  const BASE_URL = 'https://api.themoviedb.org/3/'
  const API_URL = BASE_URL + 'movie/upcoming?' + API_KEY
  const [movieList, setMovieList] = useState([])
  const [movieSearch, setMovieSearch] = useState('')
  const [searchGenre, setsearchGenre] = useState('')
  const [actualTitle, setActualTitle] = useState('')
  const [url_set, setUrl] = useState(API_URL)
  const fetchData = useFetchData()

  function getTitle() {
    const strurl = url_set.split('/', 5)[4]
    setActualTitle(strurl)
  }
  function getMovies(url) {
    fetchData(url).then((data) => setMovieList(data.results))
  }

  function handleGenreID(searchGenre) {
    setsearchGenre(searchGenre)
    const API_URL =
      BASE_URL + 'discover/movie?' + API_KEY + '&with_genres=' + searchGenre
    setUrl(API_URL)
  }
  useEffect(() => {
    getMovies(url_set)
    getTitle()
  }, [url_set])

  function checkSubmit(e) {
    if (e && e.key == 'Enter') {
      const API_URL =
        BASE_URL + 'search/movie?' + API_KEY + '&query=' + movieSearch
      setUrl(API_URL)
    }
  }

  return (
    <Box
      bg="white"
      display="flex"
      flexDirection="row"
      position="relative"
      alignItems="flex-start"
      h="100%"
      w="100%"
      user-select="none"
    >
      <Box
        display="flex"
        flexDirection="column"
        w="20rem"
        p="2rem"
        mt="4rem"
        color="black"
      >
        Genre
        <Box
          display="flex"
          flex-direction="column"
          width="15rem"
          padding="1rem"
          margin-top="4rem"
          color="dark"
          borderRight="1px solid black"
        >
          <Genre handleGenreID={handleGenreID} />
        </Box>
      </Box>
      <Box>
        <Input
          top="0"
          right="0"
          position="absolute"
          display="flex"
          borderRadius="10rem"
          alignItems="center"
          justifyContent="center"
          variant="custom"
          placeholder="Search"
          outline="none"
          bg="black"
          w="5rem"
          boxShadow="0 4px 8px black"
          margin="1.5rem"
          color="whiteAlpha.900"
          transition="all 300ms cubic-bezier(0.645, 0.045, 0.355, 1)"
          onChange={(e) => setMovieSearch(e.target.value)}
          value={movieSearch}
          onKeyPress={checkSubmit}
          _hover={{
            width: '30rem',
            transition: 'all 300ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
          }}
          _focus={{ width: '30rem' }}
        />
      </Box>
      <Box
        w="100%"
        h="100%"
        minH="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box margin="1.5rem" display="flex" w="100%" flexDirection="column">
          <Heading>{actualTitle.toUpperCase()}</Heading>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(10rem, 25rem))"
            justifyContent="space-evenly"
            alignContent="space-between"
            alignItems="start"
            padding="4rem 0"
            gridGap="2.5rem 2rem"
          >
            {movieList.length == 0 ? (
              <Text>Not found</Text>
            ) : (
              movieList.map((res, index) => (
                <Cards info={res} key={index}></Cards>
              ))
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default List
