
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import RouteCompont from "./Component/RouteCompont"
import LinkComponent from  "./Component/LinkComponent"

function App() {
  return (
    <>
    <BrowserRouter>
    <LinkComponent/>
      <RouteCompont/>
    </BrowserRouter>
 
    </>
 
  );
}

export default App;
