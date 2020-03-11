import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from './views/Main';
import Write from './views/Write';
function App() {
  return (
	  <BrowserRouter>
	  	<Switch>
	  		<Route exact path="/" component={Main}/>
			<Route exact path="/write/:func_name" component={Write}/>
	  	</Switch>	
	  </BrowserRouter>
  );
}

export default App;
