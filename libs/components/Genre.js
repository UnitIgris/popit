import { Text, Box, Link } from '@chakra-ui/react'
import React, { useState } from 'react'
import useFetchData from '../hook/useFetchData'

function Genre({ handleGenreID }) {
  const [genreList, setGenreList] = useState([])
  const fetchData = useFetchData()
  const genre =
    'https://api.themoviedb.org/3/genre/movie/list?api_key=714cf0bd7594d949a81e6a43d09bdc9d&language=en-US'

  getGenres(genre)

  function getGenres(url) {
    fetchData(url).then((data) => setGenreList(data.genres))
  }

  return (
    <Box minW="15rem">
      {genreList.length == undefined ? (
        <Text>Not found</Text>
      ) : (
        genreList.map((res, index) => (
          <Box key={index}>
            <Link
              onClick={() => handleGenreID(res.id)}
              _hover={{ textDecorationStyle: 'none', bg: 'blackAlpha.600' }}
              padding="0.2rem"
              fontSize="lg"
              bg="blackAlpha.300"
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
