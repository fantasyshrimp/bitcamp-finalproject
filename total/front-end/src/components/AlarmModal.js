import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "./AlarmModal.css";

function AlarmModal(props) {
  const { alarmShow, setAlarmShow } = props;
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const { alarmClickEvent, setAlarmClickEvent } = props;

  // useEffect(() => {
  //   if (alarmClickEvent !== null) {
  //     const rect = alarmClickEvent.target.getBoundingClientRect();
  //     console.log(rect.bottom + " | " + rect.right);
  //     setModalPosition({ x: rect.right, y: rect.bottom });
  //   }
  // }, [alarmClickEvent]);

  const handleClose = () => setAlarmShow(false);

  // const alarmModalContentStyle = {};

  return (
    <>
      <Modal
        size="sm"
        show={alarmShow}
        onHide={handleClose}
        animation={false}
        aria-labelledby="alarm-modal-sizes-title-sm"
        backdropClassName="alarm-modal-backdrop"
        dialogClassName="alarm-modal-dialog"
        contentClassName="alarm-modal-content"
        // style={{
        //   top: modalPosition.y + "px",
        //   right: modalPosition.x + "px",
        // }}
      >
        <Modal.Body>알람 모달</Modal.Body>
      </Modal>
    </>
  );
}

export default AlarmModal;
