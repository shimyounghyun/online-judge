import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from './views/Main';
function App() {
  return (
	  <BrowserRouter>
	  	<Switch>
	  		<Route exact path="/" component={Main}/>
	  	</Switch>	
	  </BrowserRouter>
  );
}

export default App;
