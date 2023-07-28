import React, { useState } from "react";
import "./toggleFilterButtons.css";
const ToggleFilterButtons = () => {
  const [pendingTaskdisabled, setDisabled] = useState(false);
  const toggleDisable = () => {
    console.log("Clicked");
    setDisabled((prevDisabled) => !prevDisabled);
  };
  return (
    <div id="outer-container">
      <div id="toggleFilter-container">
        <div id="toggle-buttons">
          <button id="closed-tasks">
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="25" height="23" fill="white" />
              <rect
                x="1"
                y="1"
                width="23"
                height="21"
                stroke="#F88336"
                stroke-width="2"
              />
            </svg>
          </button>
          <button
            id="pending-tasks"
            onClick={toggleDisable}
            disabled={pendingTaskdisabled}
          >
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="25" height="23" fill="#43CBD1" />
              <path
                d="M20.3807 2.42114L12.5 9.67133L4.61937 2.42114L2.63159 4.2499L10.5122 11.5001L2.63159 18.7503L4.61937 20.579L12.5 13.3288L20.3807 20.579L22.3684 18.7503L14.4878 11.5001L22.3684 4.2499L20.3807 2.42114Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div id="filter-button">
          <svg
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6.42857L6.5079 1M6.5079 1L11.0158 6.42857M6.5079 1V20"
              stroke="#ADADAD"
              stroke-width="1.5"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M22.2858 14.5714L17.7779 20M17.7779 20L13.27 14.5714M17.7779 20V1"
              stroke="#ADADAD"
              stroke-width="1.5"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ToggleFilterButtons;
