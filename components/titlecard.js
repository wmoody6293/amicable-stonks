// all the bookmarked movies show up here

// retrieve bookmarked obj from local storage
// able to mark as watched (default false boolean)


import {
  Card, CardHeader, CardBody, CardFooter,
  Heading, ButtonGroup, Button, Image
} from '@chakra-ui/react';

export default function Titlecard() {
  return (
    <>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            // alt={`${} movie poster`}
            borderRadius='lg'
          />

          {/* <Stack mt='6' spacing='3'>

          </Stack> */}
          <Heading mt='6' spacing='3' size='md'>
            movie title here
            {/* {movieTitle} */}
          </Heading>

        </CardBody>

        {/* <Divider /> */}
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>Watched</Button>
            <Button variant='ghost' colorScheme='blue'>remove</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};