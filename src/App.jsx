import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Details from "./pages//Details";
import Explore from "./pages/Explore";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  // useEffect(() => {
  //   fetchApiConfig()
  // })
  // const fetchApiConfig = () => {
  //   fetchDataFromApi("/configuration").then((res) => {
  //     console.log(res);
  //     const url = {
  //       backdrop: res.images.secure_base_url + "original",
  //       poster: res.images.secure_base_url + "original",
  //       profile: res.images.secure_base_url + "original"

  //     }
  //   })
  // }
  return (

    // <BrowserRouter>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
      <Footer />
    </>
    // </BrowserRouter>


  )
}

export default App
