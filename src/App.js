import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from './components/Layout';

function App() {
  return (

   <div>
     <BrowserRouter>
     <Layout>
        <Switch>
          <Route exact path='/'>
          <Notes/>
          </Route>

          <Route path='/create'>
          <Create/>
          </Route> 
        </Switch>

     </Layout>
       
       </BrowserRouter>
     
   </div>
    
  );
}

export default App;
