import styled from 'styled-components';

/**
 * CL - CharactersList
 * CI - Channel info
 * CD - Channel data
 * SD - Sheet Details
 */

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 18vw 82vw;
  grid-template-rows: 46px 100%;

  grid-template-areas:
    'CL CI '
    'CL SD'
    'CL SD';

  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;
