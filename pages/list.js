import { useState, useEffect } from 'react'
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
  InputGroup,
  InputRightElement,
  Icon,
} from '@chakra-ui/react'
import Cards from '../libs/components/Card'
import Genre from '../libs/components/Genre'

function List() {
  const API_KEY = '&api_key=714cf0bd7594d949a81e6a43d09bdc9d'
  const BASE_URL = 'https://api.themoviedb.org/3/'
  const API_URL = BASE_URL + 'discover/movie?sort_by=popularity.desc' + API_KEY
  const [movieList, setMovieList] = useState([])
  const [movieSearch, setMovieSearch] = useState('')
  // const [searchGenre, setsearchGenre] = useState('')
  const [url_set, setUrl] = useState(API_URL)

  // function handleGenreID(searchGenre) {
  //   setsearchGenre(searchGenre)
  //   search(searchurl + searchGenre)
  //   console.log('genre', searchGenre)
  //   console.log('url', searchurl)
  // }
  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results)
      })
  }, [url_set])

  const checkSubmit = (e) => {
    if (e && e.key == 'Enter') {
      const API_URL =
        BASE_URL + 'search/movie?' + API_KEY + '&query=' + movieSearch
      setUrl(API_URL)
    }
  }

  // function search(moviename) {
  //   fetch(moviename)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('searching', searchurl)
  //     })
  // }

  return (
    <Box
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
          padding="2rem"
          margin-top="4rem"
          color="dark"
          borderRight="1px solid black"
        >
          {/* <Genre handleGenreID={handleGenreID} /> */}
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
          placeholder="search"
          outline="none"
          bg="black"
          w="12rem"
          color="whiteAlpha.900"
          onChange={(e) => {
            setMovieSearch(e.target.value)
          }}
          value={movieSearch}
          onKeyPress={checkSubmit}
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
        <Box display="flex" w="100%" flexDirection="column">
          <Box>TITRE</Box>
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
