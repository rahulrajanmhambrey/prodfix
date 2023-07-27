const highlightColor = "rgb(213, 234, 255)";
{/* <img src="prodfix.svg" alt="ProdFix"/> */}
const template = `
  <template id="highlightTemplate">
    <span class="highlight" style="background-color: ${highlightColor}; display: inline"></span>
  </template>

  <button id="prodfixHighlighter">
    <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="40" height="26" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_45_10395" transform="matrix(0.000822785 0 0 0.00126582 -0.0093038 0)"/>
</pattern>
<image id="image0_45_10395" width="1238" height="790" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
  </button>
`;

const styled = ({ display = "none", left = 0, top = 0 }) => `
  #prodfixHighlighter {
    align-items: center;
    background-color: black;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    display: ${display};
    justify-content: center;
    left: ${left}px;
    padding: 5px 10px;
    position: fixed;
    top: ${top}px;
    width: 40px;
    z-index: 9999;
  }
  .text-marker {
    fill: white;
  }
  .text-marker:hover {
    fill: ${highlightColor};
  }
`;

class ProdfixHighlighter extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  get markerPosition() {
    return JSON.parse(this.getAttribute("markerPosition") || "{}");
  }

  get styleElement() {
    return this.shadowRoot.querySelector("style");
  }

  get highlightTemplate() {
    return this.shadowRoot.getElementById("highlightTemplate");
  }

  static get observedAttributes() {
    return ["markerPosition"];
  }

  render() {
    this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = styled({});
    this.shadowRoot.appendChild(style);
    this.shadowRoot.innerHTML += template;
    this.shadowRoot
      .getElementById("prodfixHighlighter")
      .addEventListener("click", () => this.highlightSelection());
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "markerPosition") {
      this.styleElement.textContent = styled(this.markerPosition);
    }
  }

  highlightSelection() {
    this.createTask();
    var userSelection = window.getSelection();
    for (let i = 0; i < userSelection.rangeCount; i++) {
      this.highlightRange(userSelection.getRangeAt(i));
    }
    window.getSelection().empty();
  }

  highlightRange(range) {
    const clone =
      this.highlightTemplate.cloneNode(true).content.firstElementChild;
    clone.appendChild(range.extractContents());
    range.insertNode(clone);
  }

  getElementDetails() {
    const selection = window.getSelection();
    if (selection && !selection.isCollapsed) {
        const currentElement = selection.anchorNode.parentElement;
        if (currentElement) {
          const elementDetails = {
            tagName: currentElement.tagName,
            id: currentElement.id,
            className: currentElement.className,
            innerHTML: currentElement.innerHTML
        };

        // Convert the element details to a JSON string
        const jsonElementDetails = JSON.stringify(elementDetails);
          return jsonElementDetails;
        } else {
            console.log("No current element found for the selected text.");
        }
    }
  }

  createTask() {
    const req = new XMLHttpRequest();
    const apiUrl = "http://localhost/prodfix/task/add";
    const taskUrl = window.location.href;
    const baseUrl = window.location.origin;
    const taskName = window.getSelection().toString();
    const taskDesc = window.getSelection().toString();

    const params = {
      task_name: taskName,
      task_description: taskDesc,
      base_url: baseUrl,
      taskurl: taskUrl,
      element_details: this.getElementDetails(),
    };

    req.open("POST", apiUrl, true);
    req.setRequestHeader("Content-type", "application/json");
    req.send(JSON.stringify(params));

    req.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          console.log("Task is created!");
        } else {
          console.log("Error:", this.status);
        }
      }
    };
  }

  
}

function showWidgetOnGmail() {

  const button = document.createElement("button");
  button.style.top = "5px";
  button.style.right = "5px";
  button.style.paddingTop = "5px";
  button.style.background = "none";
  button.style.border = "hidden";
  button.style.cursor = "pointer";
  button.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16.7398 12.0022L12.0077 14.4008L7.27554 12.0024L12.0076 9.60373L16.7398 12.0022Z" fill="#535353"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.28546 12.0024L1 15.1884L2.93457 19.0049L12.0176 14.4008L7.28546 12.0024L12.0175 9.60373L2.93443 5L1 8.81661L7.28546 12.0024Z" fill="#43CBD1"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7145 12.0026L23 8.81654L21.0654 5L11.9824 9.6041L16.7145 12.0026L11.9825 14.4012L21.0656 19.005L23 15.1883L16.7145 12.0026Z" fill="#F88336"/>
  </svg>`

  console.log('finding element....');
    const targetElement = document.evaluate(
      '//div[@class="zo "]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    if (targetElement) {
      const parentElement = targetElement.parentElement;
      if (parentElement) {
        // Insert the button before the target element
        parentElement.insertBefore(button, targetElement);

        // Add an event listener to the button
        button.addEventListener("click", () => {
          // Custom logic for the button click action
          alert("Button clicked!");
        });
      }
    } else {
      // Retry after a short delay if the target element is not yet available
      console.log('else part is calling');
      setTimeout(showWidgetOnGmail(), 3000);
    }
}

window.customElements.define("prodfix-highlighter", ProdfixHighlighter);

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  
  if (message.action === "callContentScriptFunction") {
    // Call the content script function when requested from the background script
    const highlighter = new ProdfixHighlighter();
    highlighter.highlightSelection();
  } else if (message.action === "pageFinishLoading") {
    showWidgetOnGmail();
  }
  
});
