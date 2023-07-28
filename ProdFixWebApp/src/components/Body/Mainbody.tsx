import React, { useState, useEffect } from "react";
import "./mainbody.css";
import Tasks from "../Tasks/Tasks";
import ToggleFilterButtons from "../ToggleFilterButtons/ToggleFilterButtons";
import axios from "axios";
const Mainbody = () => {
  // Assuming your data has a type called `Task` with an `_id` property
  type Task = {
    _id: string;
    _taskname: string;
    _taskdescription: string;
    _url: string;
    _baseurl: string;
    _elementdetails: string;
    _createdtimestamp: string;
  };

  // Initialize responseData with an empty array of Task type
  const [responseData, setResponseData] = useState<Task[]>([]);
  useEffect(() => {
    const url = "http://localhost:8000/prodfix/tasks";
    axios.get(url).then((response) => {
      console.log(response.data);
      setResponseData(response.data);
    });
  }, []);
  return (
    <div className="container">
      {/* Render a list of items based on responseData */}
      {responseData.map((item) => (
        <Tasks
          key={item._id}
          taskName={item._taskname}
          taskDescription={item._taskdescription}
          url={item._url}
          baseUrl={item._baseurl}
          elementDetails={item._elementdetails}
          createdTimestamp={item._createdtimestamp}
        />
      ))}
    </div>
  );
};

export default Mainbody;
