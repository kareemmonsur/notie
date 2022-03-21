import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'

function App() {
  return (

   <div>
     <BrowserRouter>
       <Switch>
 
         <Route exact path='/'>
         <Notes/>
         </Route>

         <Route path='/create'>
         <Create/>
         </Route>

         
       </Switch>
       </BrowserRouter>
     
   </div>
    
  );
}

export default App;
