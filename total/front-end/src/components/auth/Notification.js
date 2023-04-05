import React, { useState } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notification-timeline";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type, title, content) => {
    const newNotification = {
      id: new Date().getTime(),
      type,
      title,
      content,
      date: new Date(),
    };
    setNotifications([...notifications, newNotification]);
  };

  return (
    <>
      <button onClick={() => addNotification("info", "알림 제목", "알림 내용")}>
        알림 추가
      </button>
      <NotificationContainer>
        {notifications.map((notification) => (
          <NotificationManager
            key={notification.id}
            id={notification.id}
            type={notification.type}
            title={notification.title}
            content={notification.content}
            date={notification.date}
          />
        ))}
      </NotificationContainer>
    </>
  );
};

export default Notification;
