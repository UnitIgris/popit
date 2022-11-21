import { useState } from 'react'
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
import Cards from '../components/Card'

function Page() {
  const API_KEY = '&api_key=714cf0bd7594d949a81e6a43d09bdc9d'
  const BASE_URL = 'https://api.themoviedb.org/3/'
  const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc' + API_KEY

  const [movieList, setMovieList] = useState([])

  getMovies(API_URL)

  function getMovies(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results)
        //console.log(data.results)
      })
  }

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
        sidebar
        <Box
          display="flex"
          flex-direction="column"
          width="15rem"
          padding="2rem"
          margin-top="4rem"
          color="dark"
          borderRight="1px solid black"
        >
          sidebar-container
        </Box>
      </Box>
      <Box>
        <Input
          placeholder="search"
          top="0"
          right="0"
          bg="black"
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="12rem"
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
                 <Cards info={res} key={index} />
              ))
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Page
