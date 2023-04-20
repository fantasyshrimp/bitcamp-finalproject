import React, { createElement, useState, useEffect } from "react";
import SettingInput from "../personalSetting/SettingInput"
import StyleButton from "./StyleButton";
import "./FaqControl.css";

function FaqControl(props) {
  const [title, setTitle] = useState("");

  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.innerHTML);
  }

  function handleClick(event, styles) {
    event.preventDefault();
    const selection = window.getSelection();
    if (selection.type === 'Range') {
      const range = selection.getRangeAt(0);
      let st = range.startContainer; 
      let count = 1;
      let loopFlag = true;


      let currentNode = range.startContainer;
      while (currentNode && currentNode !== range.endContainer.nextSibling) {

        const newRange = document.createRange();

        if (currentNode === range.startContainer) { //현재 노드가 startContainer면
          newRange.setStart(currentNode.childNodes[0], range.startOffset)
          newRange.setEnd(range.startOffset, currentNode.childNodes[0].length);
        }

        // do something with the current node
        currentNode = currentNode.nextSibling || currentNode.parentNode.nextSibling;
      }



    //   while(loopFlag && st !== null && st !== undefined) {

    //     let nextNode = null;        
    //     const newRange = document.createRange();
    //     if (st === range.startContainer) {
    //       newRange.setStart(st, range.startOffset);
    //     } else {
    //       newRange.setStart(st, 0);
    //     }
    //     if (st === range.endContainer) {
    //       console.log('엔드 컨테이너 만남');
    //       newRange.setEnd(st, range.endOffset);
    //       loopFlag = false;
    //     } else {
    //       newRange.setEnd(st, st.length);//이부분그냥 while문 밖으로 빼야할듯
    //     }
    //     const clone = newRange.cloneContents();
    //     const fragment = document.createDocumentFragment();        

    //     if (st.parentNode.tagName === 'DIV') {
    //       nextNode = st.nextSibling;
    //       if (nextNode === null) {

    //       }
    //       const span = document.createElement('span');
    //       setStyle(span, styles);
    //       span.appendChild(document.createTextNode(clone.textContent));
    //       fragment.appendChild(span.cloneNode(true));
    //       newRange.deleteContents();
    //       newRange.insertNode(fragment);
    //       nextNode=== (null || undefined) ? nextNode=st.parentNode.parentNode.nextSibling : nextNode=nextNode;

    //       console.log(nextNode);

    //     } else {           // div가 아니면 
    //       if (st.parentNode.tagName === 'SPAN') {
    //         nextNode = st.parentNode.nextSibling;

    //         if (nextNode && nextNode.tagName === 'SPAN') {
    //           console.log('다음은스판만남');
    //         } 
    //         if (nextNode && nextNode.tagName === 'DIV') {
    //           console.log('다음은div만남');
    //         }  

    //         const parentText = st.parentNode.childNodes[0].textContent; //선택된놈의 길이가 이셍키랑 같으면 하나만만들어야함

    //         if (newRange.startOffset > 0) {
    //           const spanbefore = document.createElement('span');
    //           for (let i = 0; i < st.parentNode.style.length; i++) {
    //             spanbefore.style[st.parentNode.style[i]] = st.parentNode.style[st.parentNode.style[i]]
    //           }

    //           spanbefore.appendChild(document.createTextNode(parentText.slice(0,newRange.startOffset)));
    //           fragment.appendChild(spanbefore);
    //         }

    //         const span = document.createElement('span')
    //         for (let i = 0; i < st.parentNode.style.length; i++) {
    //           span.style[st.parentNode.style[i]] = st.parentNode.style[st.parentNode.style[i]]
    //         }
    //         setStyle(span, styles);
    //         span.appendChild(document.createTextNode(clone.childNodes[0].textContent));
    //         fragment.appendChild(span);

    //         if (parentText.length > newRange.endOffset) {
    //           const spanafter = document.createElement('span')
    //           for (let i = 0; i < st.parentNode.style.length; i++) {
    //             spanafter.style[st.parentNode.style[i]] = st.parentNode.style[st.parentNode.style[i]]
    //           }

    //           spanafter.appendChild(document.createTextNode(parentText.slice(newRange.endOffset,parentText.length)));
    //           fragment.appendChild(spanafter);
    //         }
    //       st.parentNode.remove();
          
    //       newRange.insertNode(fragment);
        
    //       }
    //     } 
    //     newRange.collapse(true);
    //     console.log(`----------------------------------------------------------다음노드 ${nextNode ? nextNode.tagName : nextNode}`);
    //     if (nextNode === null) {
    //       loopFlag=false;
    //     }
    //     st = nextNode;
    //   }
    // }  
  }
}

  function setStyle(element, styleArray) {
    if (styleArray && styleArray.length > 0) {
      for (let j = 0; j < styleArray.length; j++) {
        element.style[styleArray[j][0]] = styleArray[j][1];
      }
    }
  }


  return (
    <div style={{position: 'relative'}} >
    <input 
    style={{ 
      width: '80%',
      height: '50px',
      display: 'block',
      padding: '10px',
      margin: '0 auto',
      border: '1px solid white',
      backgroundColor: `var(--aim-base-alpa)`,
      color: 'white',
      }} />

    <div id="faq-body"
      contentEditable={true}
      onInput={handleChange} onKeyDown={(event) => {
        if (event.key === 'Enter') {    
      }
    }}

      style={{
        width: '80%',
        height: '600px',
        padding: '10px',
        margin: '0 auto',
        border: '1px solid white',
        color: 'white', 
        overflow: 'auto',
      }}

    >
    </div>
    <StyleButton handleClick={handleClick} hi={'50px'} setStyle={[['color','red'],['backgroundColor','white']]}/>
    <StyleButton handleClick={handleClick} hi={'150px'} setStyle={[['font-size','20px']]}/>
    </div>
  );
}

export default FaqControl;