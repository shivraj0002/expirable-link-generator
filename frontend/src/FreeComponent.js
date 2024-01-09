import React, { useEffect, useState } from "react";
import axios from "axios";
import PrintComponent from "./PrintComponent";

export default function FreeComponent() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://nodejs-mongodb-auth-app.herokuapp.com/free-endpoint",
    };

    axios(configuration)
      .then((result) => {
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  return (
    <div>
      <h1 className="text-center">Free Component</h1>

      <h3 className="text-center text-danger">{message}</h3>

      <PrintComponent />
    </div>
  );
}
