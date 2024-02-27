import { createContext } from "react";
import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const ApiContext = createContext();

export const Provider=({children})=>{
    const [url, setUrl] = useState({}); // Initialize url with an empty object

    // useEffect(() => {
    //   fetchApiConfig();
    // }, []);
  
    // const fetchApiConfig = () => {
    //   fetchDataFromApi("/configuration").then((res) => {
    //     console.log(res);
    //     const apiUrl = {
    //       backdrop: res.images.secure_base_url + "original",
    //       poster: res.images.secure_base_url + "original",
    //       profile: res.images.secure_base_url + "original",
    //     };
    //     setUrl(apiUrl); // Update the url state with the fetched data
    //     console.log(apiUrl);
    //   });
    // };
  

return(
    <ApiContext.Provider value={{url}}>
        {children}
    </ApiContext.Provider>
)
}