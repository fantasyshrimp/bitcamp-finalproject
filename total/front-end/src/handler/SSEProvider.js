import React, { useState, useEffect, useContext } from "react";
import SSEContext from "./SSEContext";

const SSEProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let eventSource;

    const setupEventSource = () => {
      // Create a new EventSource instance to connect to the server
      eventSource = new EventSource("http://localhost:8080/sse", {
        // withCredentials: true,
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
          setupEventSource();
        }, 60 * 1000);
      };
    };

    // Call the function to initialize the EventSource connection
    setupEventSource();

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
