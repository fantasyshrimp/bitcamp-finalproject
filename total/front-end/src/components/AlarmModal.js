import { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AlarmModal.css";
import FeedModal from "../pages/Feed/FeedModal";

function AlarmModal(props) {
  const [alarms, setAlarms] = useState(null);
  const { alarmShow, setAlarmShow } = props;
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  // const { alarmClickEvent, setAlarmClickEvent } = props;
  const navigate = useNavigate();
  const [isFeedModalOpen, setIsFeedModalOpen] = useState(false);
  const feedModalData = useRef(null);
  const [displayedAlarmsCount, setDisplayedAlarmsCount] = useState(5);

  useEffect(() => {
    if (props.alarms !== null) {
      setAlarms(props.alarms);
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

  const handleLoadMore = () => {
    setDisplayedAlarmsCount(displayedAlarmsCount + 5);
  };

  const navigateAllAlam = () => {
    setAlarmShow(false);
    navigate("/personalSetting", { state: { menuNo: 3 } });
  }

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
            <div className="align-self-center" style={{ fontWeight: "bold" }}>
              알림
            </div>
            <div className="alarm-read-all" onClick={handleClickReadAll}>
              모두 읽음 표시
            </div>
          </div>
        </Modal.Header>
        <Modal.Body
          className="p-0"
          style={{ maxHeight: "calc(56px * 5)", overflowY: "auto" }}
        >
          <Container className="">
            {alarms && alarms.length > 0 ? (
              alarms.slice(0, displayedAlarmsCount).map((element) => (
                <Row className="p-2 alarm-modal-row" key={element.log.logNo}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      backgroundImage: `url(${element.giver.profilePhoto})`,
                      cursor: "pointer",
                    }}
                    onClick={() => moveProfile(element.giver.no)}
                  ></div>

                  <Col
                    style={{
                      color: element.log.readFlag ? "#aaa" : "#000",
                      maxHeight: "40px",
                      overflow: "hidden",
                    }}
                  >
                    <b
                      className="alarm-modal-nickname"
                      onClick={() => moveProfile(element.giver.no)}
                      style={{ cursor: "pointer" }}
                    >
                      {element.giver.nickname}
                    </b>
                    <span>님이 {element.log.content}</span>
                    <br />
                    {/* {element.typeNo === 1 ? (
                      <span> "{element.reply.content}"`</span>
                    ) : (
                      <span></span>
                    )} */}
                  </Col>
                  {element.board === undefined || element.board.fileName === undefined ? (
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
              <div className="pb-2 pt-2 d-flex align-items-center">
                알림이 없습니다.
              </div>
            )}

            {alarms && alarms.length > displayedAlarmsCount && (
              <div className="p-1 d-flex justify-content-center">
                <div
                  className="alarm-read-more"
                  onClick={handleLoadMore}
                  style={{
                    display: "inline-block",
                    padding: "1px",
                    color: "gray",
                    cursor: "pointer",
                  }}
                >
                  더 보기
                </div>
              </div>
            )}
          </Container>
        </Modal.Body>
        <Modal.Footer className="p-2">
          <div className="alarm-read-more"
            onClick={navigateAllAlam}
            style={{
              padding: "1px",
              color: "gray",
              cursor: "pointer",
            }}
          >
            전체 보기
          </div>
        </Modal.Footer>
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
