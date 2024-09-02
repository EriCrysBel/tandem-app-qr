import React, { useState } from "react";
import './TabsInput.css'

const TabsInput = ({}) => {
  const [activeTab, setActiveTab] = useState("text");

  const renderTabContent = () => {
    switch (activeTab) {
      case "text":
        return (
          <div>
            <label htmlFor="textInput">Enter Text:</label>
            <input 
            type="text" 
            id="textInput" 
            name="textInput"
            />
          </div>
        );
      case "coordinates":
        return (
          <div>
            <label htmlFor="latInput">Latitude:</label>
            <input type="text" id="latInput" name="latInput" />
            <label htmlFor="longInput">Longitude:</label>
            <input type="text" id="longInput" name="longInput" />

          </div>
        );
      case "url":
        return (
          <div>
            <label htmlFor="urlInput">Enter URL:</label>
            <input type="text" id="urlInput" name="urlInput" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={activeTab === "text" ? "active" : ""}
          onClick={() => setActiveTab("text")}
        >
          Text
        </button>
        <button
          className={activeTab === "coordinates" ? "active" : ""}
          onClick={() => setActiveTab("coordinates")}
        >
          Coordinates
        </button>
        <button
          className={activeTab === "url" ? "active" : ""}
          onClick={() => setActiveTab("url")}
        >
          URL
        </button>
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default TabsInput;
