import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import { useState, useRef, useEffect } from 'react';
import Titlecard from './titlecard.js';



export default function Bookmarks() {
  const [ ToWatch, Watched ] = [[], []];

  useEffect(() => {
    const rapidSave = localStorage.getItem('rapidSave') ? JSON.parse(localStorage.getItem('rapidSave')) : {};
    for (const k in rapidSave) {
      const { title, year, poster, crossVal, doneVal, plusVal } = rapidSave[k];
      const isToWatch = (crossVal && doneVal && !plusVal);
      const isWatched = (crossVal && !doneVal && plusVal);

      // const present = ();

      if (isToWatch) {
        ToWatch.push(<Titlecard
          key={k} title={title} year={year} imdbID={k} poster={poster}
          crossBtn={crossVal} doneBtn={doneVal} plusBtn={plusVal}
        />);
      } else if (isWatched) {
        Watched.push(<Titlecard
          key={k} title={title} year={year} imdbID={k} poster={poster}
          crossBtn={crossVal} doneBtn={doneVal} plusBtn={plusVal}
        />);
      } else {
        return 'SOMETHING NEEDS TO BE REMOVED';
      }
    }
  }, [ToWatch, Watched]);



  return (
    <>
      {/* <p>in bookmarks</p> */}
      <Tabs align="center">
        <TabList>
          <Tab>to watch!</Tab>
          <Tab>watched~</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {ToWatch}
            {/* <Searchbar /> */}
            {/* the search results might need to show up here */}
          </TabPanel>

          <TabPanel>
            {Watched}
            {/* <Bookmarks /> */}
            {/* a gallery view of titlecards here */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};