
// retrieve bookmarked obj from local storage
// able to mark as watched (default false boolean)


import {
  Card, CardHeader, CardBody, CardFooter,
  Heading, ButtonGroup, Button, Image, Input, IconButton
} from '@chakra-ui/react';
import { AddIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';

import { useState, useRef, useEffect } from 'react';



export default function Titlecard(props) {
  const { title, year, imdbID, poster, crossBtn, doneBtn, plusBtn } = props;

  // function crossBtnHandler(e) {
  //   e.preventDefault();

  //   delete rapidSave[imdbID];
  //   localStorage.setItem('rapidSave', JSON.stringify(rapidSave));



  //   // const res = await fetch('api/storage', {
  //   //   method: 'POST',
  //   //   headers: { 'Content-Type': 'application/json' },
  //   //   body: JSON.stringify({ poster, title, year })
  //   // });
  //   // const { results } = await res.json();

  //   // results.forEach(({ Title, Year, imdbID, Poster}) => {
  //   //   searchResults.push(<Titlecard
  //   //     key={imdbID}
  //   //     title={Title}
  //   //     year={Year}
  //   //     poster={Poster}
  //   //   />);
  //   // });
  // }

  const [crossNow, setCrossBtn] = useState(crossBtn);
  const [doneNow, setDoneBtn] = useState(doneBtn);
  const [plusNow, setPlusBtn] = useState(plusBtn);

  useEffect(() => {
    console.log('in titlecard useEffect');
    const rapidSave = localStorage.getItem('rapidSave') ? JSON.parse(localStorage.getItem('rapidSave')) : {};

    if (crossNow === false) {
      setDoneBtn(true);
      setPlusBtn(true);
      delete rapidSave[imdbID];
      localStorage.setItem('rapidSave', JSON.stringify(rapidSave));
    } else if (doneNow === false) {
      setCrossBtn(true);
      setPlusBtn(true);
      rapidSave[imdbID] = { title, year, poster,
        crossVal: crossNow, doneVal: doneNow, plusVal: plusNow };

      localStorage.setItem('rapidSave', JSON.stringify(rapidSave));
    }
    if (plusNow === false) {
      // console.log('in titlecard plusNow');
      setCrossBtn(true);
      setDoneBtn(true);
      // setPlusBtn(false);
      rapidSave[imdbID] = { title, year, poster,
        crossVal: crossNow, doneVal: doneNow, plusVal: plusNow };

      localStorage.setItem('rapidSave', JSON.stringify(rapidSave));
    }
  }, [crossNow, doneNow, plusNow]);

  // function plusBtnHandler(e) {
  //   e.preventDefault();

  //   setCrossBtn(true);
  //   setPlusBtn(false);
  //   rapidSave[imdbID] = { title, year, poster,
  //     crossVal: crossNow, doneVal: doneNow, plusVal: plusNow };

  //   localStorage.setItem('rapidSave', JSON.stringify(rapidSave));
  // }

  return (
    <>
      <Card
        size="sm"
        maxW="sm"
      >
        <CardBody>
          <Image src={poster} alt={`${title}'s movie poster`} borderRadius="lg" />
          <Heading mt='6'size='md'>{`${title} (${year})`}</Heading>
        </CardBody>

        {/* <Divider /> */}
        <CardFooter>
          <ButtonGroup spacing='2'>
            {crossNow && <Button
              leftIcon={<CloseIcon />} variant="ghost"
              onClick={() => setCrossBtn(false)}
            >remove</Button>}

            {doneNow && <Button
              leftIcon={<CheckIcon />} variant={plusBtn ? "ghost" : "solid"}
              onClick={() => setDoneBtn(false)}
            >watched~</Button>}

            {plusNow && <Button
              leftIcon={<AddIcon />} variant="solid"
              onClick={(e) => {
                // e.preventDefault();
                setPlusBtn(false)
              }}
            >to watch!</Button>}
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};