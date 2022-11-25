import { Heading, Image, Card, Stack, Link } from '@chakra-ui/react'
import React from 'react'

function Cards(movie) {
  const NO_POSTER = 'https://www.linkpicture.com/q/no_thumbnail.jpg'
  const IMG_BASE = 'https://image.tmdb.org/t/p/original'
  const styledStack = {
    borderRadius: 'lg',
    spacing: '3',
    position: 'absolute',
    width: '100%',

    bottom: ' 0',
    left: '0',
    fontWeight: '300',
    padding: '30px 0',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 1 ),transparent )',
    textTransform: 'uppercase',
    textAlign: 'center',
    transition: '.5s',

    color: 'whiteAlpha.900',
    fontSize: '2xl',
  }

  return (
    <Card
      transition=".5s"
      maxW="sm"
      _hover={{
        transform: 'scale(1.05)',
        transition: '.5s',
      }}
      role="group"
    >
      <Link href={`/movie/${movie.info.id}`}>
        <Image
          boxShadow=" 0 15px 35px 0 "
          src={
            movie.info.poster_path
              ? IMG_BASE + movie.info.poster_path
              : NO_POSTER
          }
          alt={movie.info.title}
          borderRadius="lg"
        />

        {movie.info.poster_path ? (
          <Stack
            opacity="0"
            sx={styledStack}
            _groupHover={{
              paddingBottom: '50px',
              opacity: '1',
              transition: '.5s;',
            }}
          >
            <Heading size="md">{movie.info.title}</Heading>
          </Stack>
        ) : (
          <Stack sx={styledStack} opacity="1">
            <Heading size="md">{movie.info.title}</Heading>
          </Stack>
        )}
      </Link>
    </Card>
  )
}

export default Cards
