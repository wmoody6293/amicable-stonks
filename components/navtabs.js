import Searchbar from './searchbar';
import Bookmarks from './bookmarks';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export default function Navtabs() {
  // create search results array
  // do logic here to create a list of Titlecards

  return (
    <>
      <Tabs align="center">
        <TabList>
          <Tab>Search!</Tab>
          <Tab>Saved</Tab>
        </TabList>

        <TabPanels>
          <TabPanel><Searchbar />
            {/* the search results might need to show up here */}
          </TabPanel>

          <TabPanel>
            <Bookmarks />
            {/* a gallery view of titlecards here */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};