// all the bookmarked movies show up here

// retrieve bookmarked obj from local storage
// able to mark as watched (default false boolean)


import {
  Card, CardHeader, CardBody, CardFooter,
  Heading, ButtonGroup, Button, Image
} from '@chakra-ui/react';

export default function Titlecard(props) {
  return (
    <>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src={props.poster}
            // alt={`${} movie poster`}
            borderRadius='lg'
          />

          {/* <Stack mt='6' spacing='3'>

          </Stack> */}
          <Heading mt='6' spacing='3' size='md'>
            {/* movie title here */}
            {props.title + ' ' + props.year}
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