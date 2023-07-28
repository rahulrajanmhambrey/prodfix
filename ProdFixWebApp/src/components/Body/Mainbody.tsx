import React, { useState, useEffect } from "react";
import "./mainbody.css";
import Tasks from "../Tasks/Tasks";
import ToggleFilterButtons from "../ToggleFilterButtons/ToggleFilterButtons";
import axios from "axios";
const Mainbody = () => {
  // Assuming your data has a type called `Task` with an `_id` property
  type Task = {
    _id: string;
    _taskid: string;
    _taskname: string;
    _taskdescription: string;
    _url: string;
    _baseurl: string;
    _elementdetails: string;
    _createdtimestamp: string;
    onDelete: Function;
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

  const handleDeleteTask = (taskId: string) => {
    // Here, you can make an API call to delete the entry with the specified taskId from the database.
    // After successful deletion, update the state or fetch the updated data.
    // For this example, let's assume you are updating the state with the filtered data.
    const payload = {
      id: taskId,
    };

    axios
      .delete(`http://127.0.0.1:8000/prodfix/task`, { data: payload })
      .then((response) => {
        // If the deletion was successful, update the state with the filtered data
        setResponseData((prevData) =>
          prevData.filter((item) => item._id !== taskId)
        );
      })
      .catch((error) => {
        // Handle any errors that occurred during the API call
        console.error("Error deleting task:", error);
      });
  };

  return (
    <div className="container">
      {/* Render a list of items based on responseData */}
      {responseData.map((item) => (
        <Tasks
          key={item._id}
          task_id={item._id}
          taskName={item._taskname}
          taskDescription={item._taskdescription}
          url={item._url}
          baseUrl={item._baseurl}
          elementDetails={item._elementdetails}
          createdTimestamp={item._createdtimestamp}
          onDelete={() => handleDeleteTask(item._id)}
        />
      ))}
    </div>
  );
};

export default Mainbody;
