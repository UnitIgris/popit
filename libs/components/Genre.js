import {
  Heading,
  Image,
  Card,
  Text,
  CardBody,
  Stack,
  Box,Link,
  Button,
} from '@chakra-ui/react'
import React, { useState } from 'react'


const Genre = ({ handleGenreID }) => {
  const [genreList, setGenreList] = useState([])

  const genre =
    'https://api.themoviedb.org/3/genre/movie/list?api_key=714cf0bd7594d949a81e6a43d09bdc9d&language=en-US'

  getMovies(genre)

  function getMovies(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setGenreList(data.genres)
      })
  }
  return (
    <Box minW="15rem" role="group">
      {genreList.length == undefined ? (
        <Text>Not found</Text>
      ) : (
        genreList.map((res, index) => (
          <Box  key={index}>
            <Link
              onClick={() => handleGenreID(res.name)}
              _hover={{ textDecorationStyle: 'none', border: '1px solid' }}
              borderRadius="2rem"
              fontSize="lg"
              bg="blackAlpha.100"
              display="block"
              outline="none"
              w="80%"
              marginBottom="0.5rem"
            >
              {res.name}
            </Link>
          </Box>
        ))
      )}
    </Box>
  )
}

export default Genre
