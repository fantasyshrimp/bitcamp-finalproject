import { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AlarmModal.css";
import FeedModal from "../pages/Feed/FeedModal";
import FeedList from "../pages/Feed/FeedList";

function AlarmModal(props) {
  const [alarms, setAlarms] = useState(null);
  const { alarmShow, setAlarmShow } = props;
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  // const { alarmClickEvent, setAlarmClickEvent } = props;
  const navigate = useNavigate();
  const [isFeedModalOpen, setIsFeedModalOpen] = useState(false);
  const feedModalData = useRef(null);

  useEffect(() => {
    if (props.alarms !== null) {
      setAlarms(props.alarms);
      console.log(props.alarms);
    }
  }, [props.alarms]);

  const handleClose = () => setAlarmShow(false);

  const handleClickReadAll = (e) => {
    e.preventDefault();
    // ReadAll 처리하기
  };

  const moveProfile = (no) => {
    handleClose();
    navigate("/Profile", { state: { no: no } });
  };

  const openFeedModal = (data) => {
    setAlarmShow(false);
    navigate("/feed");
    feedModalData.current = data;
    setIsFeedModalOpen(true);
  };

  const closeFeedModal = () => {
    setIsFeedModalOpen(false);
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
                    style={{
                      color: element.readFlag ? "#aaa" : "#000",
                      maxHeight: "40px",
                      overflow: "hidden",
                    }}
                  >
                    <b
                      className="alarm-modal-nickname"
                      onClick={() => moveProfile(element.otherMember.no)}
                      style={{ cursor: "pointer" }}
                    >
                      {element.otherMember.nickname}
                    </b>
                    <span> {element.content}</span>
                    <br />
                    {element.typeNo === 1 ? (
                      <span> "{element.reply.content}"`</span>
                    ) : (
                      <span></span>
                    )}
                  </Col>
                  {element.board === null || element.board.fileName === null ? (
                    <div />
                  ) : (
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundImage: `url(${element.board.fileName})`,
                        cursor: "pointer",
                      }}
                      onClick={() => openFeedModal(element.board)}
                    />
                  )}
                </Row>
              ))
            ) : (
              <div className="pb-2">알림이 없습니다.</div>
            )}
          </Container>
        </Modal.Body>
        <Modal.Footer className="p-2"></Modal.Footer>
      </Modal>

      {isFeedModalOpen && (
        <div>
          <div
            id="modal-background"
            style={{
              opacity: 0.3,
              backgroundColor: "black",
              pointerEvents: "all",
              cursor: "Default",
            }}
            onClick={() => {
              closeFeedModal();
            }}
          ></div>
          <div
            id="feed-modal"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <div
              id="feed-close"
              onClick={() => {
                closeFeedModal();
              }}
            >
              &times;
            </div>
            <FeedModal
              closeModal={closeFeedModal}
              data={feedModalData.current}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default AlarmModal;
