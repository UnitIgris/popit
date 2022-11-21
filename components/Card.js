import {

  Heading,
  Image,
  Card,
  Text,
  CardBody,
  Stack,
} from '@chakra-ui/react'
import React from 'react'

const Cards = (movie) => {
  console.log(movie.info)
  let IMG_BASE="https://image.tmdb.org/t/p/w1280"
  return (
    
    <Card maxW="sm">
      <CardBody>
        <Image
          src= {IMG_BASE+movie.info.poster_path} 
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack spacing="3">
          <Heading size="md">{movie.info.title}</Heading>
          <Text>{movie.info.overview}</Text>
          <Text color="blue.600" fontSize="2xl">
            {movie.info.vote_average}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default Cards
