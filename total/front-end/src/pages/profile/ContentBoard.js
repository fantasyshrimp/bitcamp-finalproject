import React, {useState} from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ContentBoard(props) {
 
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    console.log(props.board);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
    return (
      <>  
        <div  onClick={openModal} 
          id="feed-list"
          className="feed-list"
          key={props.board.boardNo}
        >
          <div id="feed-writer" className="feed-item">
            <div
              id="feed-writer-pic"
              style={{
                backgroundImage: `url(/logo512.png)`,
                backgroundSize: "cover",
              }}
            ></div>
            <div id="feed-writer-name">
              <p id="feed-small-font" key={props.board.writerName}>
                {props.board.writerName}
              </p>
            </div>
          </div>
          <div id="feed-like" className="feed-item">
            <div id="feed-like-cnt">
              <p id="feed-small-font-right" key={props.board.likeCnt}>
                {props.board.likeCnt}
              </p>
            </div>
            <div
              id="feed-like-icon"
              style={{
                backgroundImage: `url(/heart.png)`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div id="feed-content" className="feed-item">
            <p id="feed-small-font" key={props.board.originContent}>
              {props.board.originContent}
            </p>
          </div>
        </div>       
        
        
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}
         style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
          content: { width: '300px', height: '800px', margin: 'auto' }}}
         >
        <h2>Modal Title</h2>
        <button onClick={closeModal}>Close Modal</button>
        </Modal>
      </>
  );
}

export default ContentBoard;