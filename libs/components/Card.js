import {
  Heading,
  Image,
  Card,
  Text,
  CardBody,
  Stack,
  Link,
  Button,
} from '@chakra-ui/react'
import React from 'react'
  
const Cards = (movie) => {
  console.log(movie)
  const IMG_BASE = 'https://image.tmdb.org/t/p/w1280'
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={IMG_BASE + movie.info.poster_path}
          alt={movie.info.title}
          borderRadius="lg"
        />
        <Stack spacing="3">
          <Heading size="md">{movie.info.title}</Heading>
          <Text>{movie.info.overview}</Text>
          <Text color="blue.600" fontSize="2xl">
            {movie.info.vote_average}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            {movie.info.id}
          </Text>
        </Stack>
      </CardBody>
      <Link href={`/movie/${movie.info.id}`}>d</Link>
    </Card>
  )
}

export default Cards
