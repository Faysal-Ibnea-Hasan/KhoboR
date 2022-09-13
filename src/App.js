
import './App.css';
import React from 'react'
import Navbar from './component/Navbar';
import Newscomponent from './component/Newscomponent';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';




const App =()=> {
  const PageSize = 21;
  const Country = "in"
  const [progress,setProgress]=useState(0)
  
  
 
  

    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          
          />
          
          <Switch>
            <Route exact path="/"><Newscomponent setProgress={setProgress}  key="general" PageSize={PageSize} country={Country} Category="general" /></Route>
            <Route exact path="/business"><Newscomponent setProgress={setProgress}  key="business" PageSize={PageSize} country={Country} Category="business" /></Route>
            <Route exact path="/entertainment"><Newscomponent setProgress={setProgress}  key="entertainment" PageSize={PageSize} country={Country} Category="entertainment" /></Route>
            <Route exact path="/general"><Newscomponent setProgress={setProgress}  key="general" PageSize={PageSize} country={Country} Category="general" /></Route>
            <Route exact path="/health"><Newscomponent setProgress={setProgress}  key="health" PageSize={PageSize} country={Country} Category="health" /></Route>
            <Route exact path="/science"><Newscomponent setProgress={setProgress}  key="science" PageSize={PageSize} country={Country} Category="science" /></Route>
            <Route exact path="/sports"><Newscomponent setProgress={setProgress}  key="sports" PageSize={PageSize} country={Country} Category="sports" /></Route>
            <Route exact path="/technology"><Newscomponent setProgress={setProgress}  key="technology" PageSize={PageSize} country={Country} Category="technology" /></Route>
          </Switch>
        </BrowserRouter>
      </div>








    )
  
}


export default App;