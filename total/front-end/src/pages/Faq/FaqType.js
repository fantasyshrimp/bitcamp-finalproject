import React from "react";
import Accordion from "react-bootstrap/Accordion";

function FaqType(props) {
  const { dbData } = props;

  return (
    <Accordion defaultActiveKey="0" flush>
      {dbData.map((data, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{data.title}</Accordion.Header>
          <Accordion.Body>{data.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default FaqType;
