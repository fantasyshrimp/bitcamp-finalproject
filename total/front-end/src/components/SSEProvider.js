import React, { useState, useEffect } from "react";
import SSEContext from "./SSEContext";

const SSEProvider = ({ children }) => {
  const [sseMessage, setSseMessage] = useState("");

  useEffect(() => {
    let eventSource;

    const setupEventSource = () => {
      eventSource = new EventSource("http://localhost:8080/sse", {
        withCredentials: true,
      });

      eventSource.onmessage = (event) => {
        console.log("Received SSE message:", event.data);
        setSseMessage(event.data);
      };

      eventSource.onerror = (error) => {
        console.error("SSE error:", error);
        setTimeout(() => {
          setupEventSource();
        }, 5000);
      };
    };

    setupEventSource();

    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, []);

  return (
    <SSEContext.Provider value={sseMessage}>{children}</SSEContext.Provider>
  );
};

export default SSEProvider;
