import { Input, Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import styles from './searchbar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.search-box}>
      <p>this is the searcher</p>
      <Input placeholder='Search...' />

      <IconButton aria-label='Search database' icon={<SearchIcon />} />
    </div>
  );
};

