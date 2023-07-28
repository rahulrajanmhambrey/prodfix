import React from "react";
import taskCompletionBox from "./Task Action.png";
import "./tasks.css";
const tasks = () => {
  return (
    <div id="main-tasks-container">
      <p>Today</p>
      <div id="task_container">
        <div id="toggle-icon">
          <img src={taskCompletionBox}></img>
        </div>
        <div id="time-box">
          <div id="time-value">9:46</div>
        </div>
        <div id="task">
          <p>Respond to customer inquiries and resolve support tickets</p>
          <p>
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.47775 15.9998H4.92267V7.75996L0 4.1272V14.5458C0 14.9314 0.155691 15.3013 0.432822 15.5739C0.709953 15.8466 1.08582 15.9998 1.47775 15.9998Z"
                fill="#4285F4"
              />
              <path
                d="M16.7494 15.9997H20.1981C20.3924 16 20.5849 15.9627 20.7645 15.8898C20.9441 15.8169 21.1073 15.7098 21.2449 15.5748C21.3824 15.4397 21.4915 15.2793 21.5659 15.1027C21.6404 14.9261 21.6787 14.7368 21.6787 14.5456V4.12427L16.756 7.75703L16.7494 15.9997Z"
                fill="#34A853"
              />
              <path
                d="M16.7494 1.45833V7.75978L21.6721 4.12702V2.18582C21.6721 0.388064 19.5894 -0.638424 18.1249 0.440228L16.7494 1.45833Z"
                fill="#FBBC04"
              />
              <path
                d="M4.92261 7.75995V1.4585L10.8336 5.82061L16.7455 1.4585V7.75995L10.8336 12.1221L4.92261 7.75995Z"
                fill="#EA4335"
              />
              <path
                d="M0 2.18582V4.12423L4.92267 7.75699V1.45833L3.54716 0.440228C2.08267 -0.638424 0 0.388064 0 2.18582Z"
                fill="#C5221F"
              />
            </svg>
            <span id="email">someone@work.com</span>
          </p>
        </div>
        <div id="moveable-button">
          <svg
            width="70"
            height="50"
            viewBox="0 0 70 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M47 8H23V9.5H47V8ZM47 12.5H23V14H47V12.5Z"
              fill="#ADADAD"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default tasks;
