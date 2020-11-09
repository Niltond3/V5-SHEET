import React from 'react';
import Layout from './components/Layout';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    {/* <BrowserRouter>
      <Routes />
    </BrowserRouter> */}
    <Layout />
    <GlobalStyles />
  </>
);

export default App;
