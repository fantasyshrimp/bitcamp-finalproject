import { useEffect, useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AlarmModal.css";

function AlarmModal(props) {
  const [alarms, setAlarms] = useState(null);
  const { alarmShow, setAlarmShow } = props;
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const { alarmClickEvent, setAlarmClickEvent } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (props.alarms !== null) {
      setAlarms(props.alarms);
      // console.log(props.alarms);
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

  const moveProfile = (no) => {
    handleClose();
    navigate("/Profile", { state: { no: no } });
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
        <Modal.Header className="pt-2 pb-2">
          <div className="d-flex justify-content-between w-100">
            <div className="" style={{ fontWeight: "bold" }}>
              알림
            </div>
            <div className="">
              <a
                href=""
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleClickReadAll}
              >
                모두 읽음 표시
              </a>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body
          className="p-0"
          style={{ maxHeight: "calc(56px * 5)", overflowY: "auto" }}
        >
          <Container className="">
            {alarms && alarms.length > 0 ? (
              alarms.map((element) => (
                <Row className="p-2 alarm-modal-row" key={element.no}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      backgroundImage: `url(${element.otherMember.profilePhoto})`,
                      cursor: "pointer",
                    }}
                    onClick={() => moveProfile(element.otherMember.no)}
                  ></div>

                  <Col
                    className="pe-0"
                    style={{ color: element.readFlag ? "#aaa" : "#000" }}
                  >
                    <b
                      className="alarm-modal-nickname"
                      onClick={() => moveProfile(element.otherMember.no)}
                      style={{ cursor: "pointer" }}
                    >
                      {element.otherMember.nickname}
                    </b>
                    <span style={{ overflow: "hidden" }}>
                      {" "}
                      {element.content}
                    </span>
                    <br />
                  </Col>
                </Row>
              ))
            ) : (
              <div className="pb-2">알림이 없습니다.</div>
            )}
          </Container>
        </Modal.Body>
        <Modal.Footer className="p-2"></Modal.Footer>
      </Modal>
    </>
  );
}

export default AlarmModal;
