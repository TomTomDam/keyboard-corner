import React from "react";
import axios from "axios";

export default networkError = () => {
  const Post = (url, data) => {
    const request = axios
      .post(`${url}`)
      .then((res) => {
        if (res.data.statusCode === 200) {
          window.location = "/";
        }
        if (res.data.statusCode >= 400) {
          console.log(`Request to ${url} failed.`);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return request;
  };

  return (
    <div>
      <h1>networkError</h1>
    </div>
  );
};
