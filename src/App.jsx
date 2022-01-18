import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* all public and private routes be declared here*/}
        <Route path="/" element={<h1>Welcome to home page</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;

// ! All pages should be placed in the pages folder
// ! All components should be placed in the components folder
// ! Any images, svg, pdf and others will be placed in the public folder
// ! Any common and resuable functions like loadDataFromLocalStorage(key) should be placed in the utils folder
// ! Reach out to me in case of any concerns
