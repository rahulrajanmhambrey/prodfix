import React, { useState, useEffect } from "react";
import "./mainbody.css";
import Tasks from "../Tasks/Tasks";
import ToggleFilterButtons from "../ToggleFilterButtons/ToggleFilterButtons";
import axios from "axios";
const Mainbody = () => {
  useEffect(() => {
    // const url = "https://d84f-61-246-82-234.ngrok-free.app/prodfix/tasks";
    const url = "https://dummy.restapiexample.com/";
    axios.get(url).then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <div id="main-body-container">
      <h1></h1>
      <ToggleFilterButtons />
      <Tasks />
    </div>
  );
};

export default Mainbody;
