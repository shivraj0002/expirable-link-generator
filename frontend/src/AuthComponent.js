import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const token = cookies.get("TOKEN");

export default function AuthComponent() {
  const [link, setLink] = useState("");


  useEffect(() => {
    const configuration = {
      method: "get",
      url: `${process.env.REACT_APP_API_KEY}/auth-endpoint`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(configuration)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  const logout = () => {
    cookies.remove("TOKEN", { path: "/" });
    window.location.href = "/";
  }

  const getLink = () =>{
    const configuration = {
      method: "get",
      url: `${process.env.REACT_APP_API_KEY}/get-link`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(configuration)
      .then((result) => {
        setLink(result.data.link)
      })
      .catch((error) => {
        error = new Error();
      });
  }

  return (
    <div className="text-center">
      <div className="d-flex justify-content-between">
      <h1>Home</h1>
      <Button type="submit" variant="danger" onClick={() => logout()}>
        Logout
      </Button>
      </div>
      <h3 className="text-danger">{"Genetate link here"}</h3>
      <div className="d-flex justify-content-center">
      <Button type="Button" variant="info" onClick={() => {}}>
        Genetate Link
      </Button>
      </div>
      <div className="d-flex justify-content-center" >
<p className="text-danger"></p>
      </div>
    </div>
  );
}
