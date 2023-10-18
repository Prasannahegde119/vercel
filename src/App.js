// import React from "react";
// import Form from "./Form"; 

// function App() {
//   return (
//     <div className="App">
//       <Form />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Form from "./Form";
// import NavigationPage from "./NavigationPage";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route path="/Form">
//             <Form />
//           </Route>
//           <Route path="/">
//             <NavigationPage />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import View from "./View";
// import Blogs from "./pages/Blogs";
import NavigationPage from "./NavigationPage";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< NavigationPage/>}>
          {/* <Route index element={<NavigationPage />} /> */}
          <Route path="View" element={<View/>} />
          <Route path="Form" element={<Form />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
