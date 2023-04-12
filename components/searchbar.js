import {
  FormControl, FormLabel, FormErrorMessage, FormHelperText,
  Input, Button, ButtonGroup, IconButton
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
// import styles from './searchbar.module.css';

import { useState, useRef, useEffect } from 'react';
import Titlecard from './titlecard.js';



export default function SearchBar() {
  const [searched, setSearch] = useState(false);
  const [searchResults, setResults] = useState([]);
  const searchInput = useRef();



  useEffect(() => {
    const rapidSave = localStorage.getItem('rapidSave') ? JSON.parse(localStorage.getItem('rapidSave')) : {};
    const movieResults = function(arr) {
      return arr.map(({ Title, Year, imdbID, Poster }) => {
        rapidSave[imdbID] ??= { Title, Year, imdbID, Poster,
          crossBtn: false, doneBtn: true, plusBtn: true
        };
        return rapidSave[imdbID];
      });
    };

    // modify this so it send an alert and stops
    if (Number(process.env.BONUS) <= 0) throw Error('TOO SOON');

    const enteredInput = searchInput.current.value;

    if (searched && enteredInput !== '') {
      setTimeout(async function() {
        try {
          const res = await fetch(`api/rapid/${enteredInput}`);
          const { results } = await res.json();

          setResults(movieResults(results).map(({ Title, Year, imdbID, Poster,
            crossBtn, doneBtn, plusBtn,
            crossVal, doneVal, plusVal
          }) => {
            console.log(imdbID);
            return <Titlecard
              key={imdbID} title={Title} year={Year} imdbID={imdbID} poster={Poster}
              crossBtn={crossVal ?? crossBtn} doneBtn={doneVal ?? doneBtn} plusBtn={plusVal ?? plusBtn}
            />;
          }));
        } catch (reason) { console.log('ERROR in searchbar.js', reason); }
      }, 100);
      setSearch(false);
    }
  }, [searched]);

  return (
    <main
      // className={styles.container}
    >
      <FormControl
        // isInvalid={isError}
        // onSubmit={searchHandler}
        // className={styles.search}
      >
        {/* <FormLabel>?</FormLabel> */}
        <Input
          // isRequired
          type="text"
          // className={styles.search}
          placeholder="Search..."
          aria-label="search rapidApi"
          ref={searchInput}
        />

        <IconButton
          aria-label="search rapidApi"
          icon={<SearchIcon />}
          // onClick={searchHandler}
          onClick={() => setSearch(true)}
        />

        {/* {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )} */}
        {/* <FormHelperText>We'll never share your email... Pinky-swear!</FormHelperText> */}
      </FormControl>

      {searchResults}
    </main>
  );
};

