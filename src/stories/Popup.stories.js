import React, {useState} from "react";
import { storiesOf } from "@storybook/react";
import { Popup } from "../components/Popup/Popup";
import "./styles.css"

const stories = storiesOf("Popup plugin", module);
stories.add('Popup', () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
    <div className="App">
    <main>
      <button onClick={() => setButtonPopup(true)} className="save-btn">Click to Save</button>
    </main>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <h1>Success! </h1>
      <p>Employee Created!</p>
    </Popup>
  </div>)
})

/**import component into storybook, so that we can see it when we develop it */