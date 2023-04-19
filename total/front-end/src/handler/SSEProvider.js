import React, { useState, useEffect, useContext } from "react";
import SSEContext from "./SSEContext";
import { EventSourcePolyfill } from "event-source-polyfill";

const EventSource = EventSourcePolyfill;
let eventSource;

const setupEventSource = (setMessage) => {
  // Create a new EventSource instance to connect to the server
  eventSource = new EventSource("http://localhost:8080/sse", {
    withCredentials: true,
  });

  // Set up the event listener for the 'message' event
  eventSource.onmessage = (event) => {
    console.log("Received SSE message:", event.data);
    setMessage(JSON.parse(event.data));
  };

  // Set up the event listener for the 'error' event
  eventSource.onerror = (error) => {
    console.error("SSE error:", error);
    setTimeout(() => {
      setupEventSource(setMessage);
    }, 60 * 1000);
  };
};

const SSEProvider = ({ children, value }) => {
  const { message, setMessage } = value;

  useEffect(() => {
    if (!eventSource) {
      setupEventSource(setMessage);
    }

    // Clean up the connection when the component is unmounted
    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, []);

  return (
    <SSEContext.Provider value={{ message, setMessage }}>
      {children}
    </SSEContext.Provider>
  );
};

export default SSEProvider;
