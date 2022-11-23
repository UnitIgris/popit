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
  //console.log(movie)
  const IMG_BASE = 'https://image.tmdb.org/t/p/w1280'
  return (
    <Card maxW="sm" role="group">
      <Link href={`/movie/${movie.info.id}`}>
        <Image
          boxShadow=" 0 15px 35px 0 "
          src={IMG_BASE + movie.info.poster_path}
          alt={movie.info.title}
          borderRadius="lg"
        />
        <Stack
          borderRadius="lg"
          spacing="3"
          position="absolute"
          width="100%"
          bottom=" 0"
          left="0"
          fontWeight="300"
          padding="30px 0"
          background="linear-gradient(to top, rgba(0, 0, 0, 1 ),transparent )"
          textTransform="uppercase"
          textAlign="center"
          opacity="0"
          transition=".5s"
          color="whiteAlpha.900"
          fontSize="2xl"
          _groupHover={{
            paddingBottom: '50px',
            opacity: '1',
            transition: '.5s;',
          }}
        >
          <Heading size="md">{movie.info.title}</Heading>
        </Stack>
      </Link>
    </Card>
  )
}

export default Cards
