import React from 'react';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom' 


import ButtonsPage from './pages/ButtonsPage'
import InputPage from './pages/InputsPage';
import Layout from './components/Layout';


function App() {
  return (
    <Routes>
      <Layout>
        <Switch>
          <Route exact path='/' component={ButtonsPage}/>
          <Route exact path='/PageInput' component={InputPage}/>
        </Switch>
      </Layout>
    </Routes>
  );
}

export default App;
