import React from 'react';
import { Grid } from './styles';
import CharactersList from '../CharactersList';
import ChannelInfo from '../ChanneInfo';
import SheetDetails from '../SheetDetails';
import ChannelData from '../ChannelData';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ChannelInfo />
      <CharactersList />
      <SheetDetails />
      <ChannelData />
    </Grid>
  );
};
export default Layout;
