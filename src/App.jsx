import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import Protected from "./Components/Protected/Protected";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Protected isSignedIn={isLoggedIn}>
          <Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </Protected>
      ),
    },
    {
      path: "/login",
      element: <Login onLogin={loginHandler} />,
    },
  ]);

  return <>{<RouterProvider router={router} />}</>;
}

export default App;
