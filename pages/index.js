import { Box, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
function app() {
  return (
    <Box
      position="fixed"
      w="100%"
      h="100%"
      left="0"
      bottom="0"
      objectFit="cover"
      zIndex="-1"
      opacity="0.75"
      bg="black"
    >
      <NextLink href="/search/movie" passHref>
        <Button
          position="absolute"
          left="0"
          right="0"
          margin="20rem auto"
          width="300px"
          height="100px"
        >
          Clik me to see something
        </Button>
      </NextLink>
    </Box>
  )
}
export default app
