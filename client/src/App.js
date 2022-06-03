import Home from "./pages/home/Home";
import TopBar from "./components/topbar/topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import About from "./pages/about/About";

import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider, Context } from "./context/Context";

import "./App.css";

function App() {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <ContextProvider>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/about" element={<About />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/write" element={user ? <Write /> : <Signin />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
