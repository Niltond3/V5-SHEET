import styled from 'styled-components';

/**
 * CL - CharactersList
 * CI - Channel info
 * CD - Channel data
 * SD - Sheet Details
 */

export const Grid = styled.div`
  display: grid;

  @media (min-width: 1024px) {
    grid-template-columns: 71px auto min(580px, 100%);
    grid-template-rows: 46px auto 52px;
    grid-template-areas:
      'CL CI CI'
      'CL CD SD'
      'CL CD SD';
  }
  @media (min-width: 500px) {
    grid-template-columns: 71px auto min(580px, 55vw);
    grid-template-rows: 46px auto 52px;

    grid-template-areas:
      'CL CI CI'
      'CL CD SD'
      'CL CD SD';
  }
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
