import { useEffect, useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import "./AlarmModal.css";

function AlarmModal(props) {
  const [alarms, setAlarms] = useState(null);
  const { alarmShow, setAlarmShow } = props;
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const { alarmClickEvent, setAlarmClickEvent } = props;

  useEffect(() => {
    if (props.alarms !== null) {
      setAlarms(props.alarms);
      console.log(props.alarms);
    }
  }, [props.alarms]);

  // useEffect(() => {
  //   if (alarmClickEvent !== null) {
  //     const rect = alarmClickEvent.target.getBoundingClientRect();
  //     console.log(rect.bottom + " | " + rect.right);
  //     setModalPosition({ x: rect.right, y: rect.bottom });
  //   }
  // }, [alarmClickEvent]);

  const handleClose = () => setAlarmShow(false);

  // const alarmModalContentStyle = {};

  const handleClickReadAll = (e) => {
    e.preventDefault();
  };

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
        <Modal.Header>
          <div className="d-flex justify-content-between w-100">
            <div className="" style={{ fontWeight: "bold" }}>
              알림
            </div>
            <div className="">
              <a
                href=""
                style={{ textDecoration: "none", color: "black" }}
                onClick={handleClickReadAll}
              >
                모두 읽음 표시
              </a>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="p-0">
          <Container className="pt-2">
            {alarms && alarms.length > 0 ? (
              alarms.map((element) => (
                <Row className="p-2 pt-0" key={element.no}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      backgroundImage: `url(${element.otherMember.profilePhoto})`,
                    }}
                  ></div>
                  <Col>
                    <b>{element.otherMember.nickname}</b>
                    <span> 님이 </span>
                    {element.content}
                  </Col>
                </Row>
              ))
            ) : (
              <div className="pb-2">알림이 없습니다.</div>
            )}
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AlarmModal;
