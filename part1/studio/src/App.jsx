import { useState } from "react";
import "./App.css";
import RecipeDescription from './components/Description';
import  RecipePhoto from './components/Photos.jsx';


function App() {
  return (
    <>
      <div className="App">
        <div><RecipePhoto/>
        </div>
        <div>
          <RecipeDescription />
        </div>
      </div>
    </>
  );
}

export default App;
