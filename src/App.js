import {Switch, Route} from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'

function App() {
  return (
   <div>
       <Switch>

         <Route exact path='/'>
         <Notes/>
         </Route>

         <Route path='/create'>
         <Create/>
         </Route>

         
       </Switch>
     
   </div>
    
  );
}

export default App;
