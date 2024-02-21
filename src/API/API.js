import { useState, useEffect } from "react";
import Axios from "react-native-axios";

export const API = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    Axios.get("https://unikwork.com/instagram/api/get_data.php")
      .then((response) => {
        setInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return info;
};