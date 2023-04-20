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

      console.log(range.startContainer.textContent);
      console.log(range.endContainer.textContent);
      
      let currentNode = range.startContainer;

      if (currentNode === range.endContainer) { //한컨테이너에서 이루어지면?
        console.log("두개 같음");
        const newRange = document.createRange();
        newRange.setStart(currentNode, range.startOffset)
        newRange.setEnd(currentNode, range.endOffset);

        // 이런식으로 한번에 관리도 되네?
        // const endOffset = (currentNode === range.endContainer) ? range.endOffset : currentNode.nodeValue.length;
        // const startOffset = (currentNode === range.startContainer) ? range.startOffset : 0;    

        //const clone = newRange.cloneContents();
        const fragment = document.createDocumentFragment(); 
        setOwnFragment(fragment, newRange, currentNode, styles);
    
        newRange.deleteContents();
        newRange.insertNode(fragment);

        return;
      }

      const tmpRange = document.createRange(); // 마지막 노드 구분용 텍스트 삽입
      tmpRange.setStart(range.endContainer, range.endOffset);
      tmpRange.setEnd(range.endContainer, range.endOffset);        
      const test = document.createTextNode("--vbtd--mhlg--")
      tmpRange.insertNode(test);

      let loopFlag = true;
      while (currentNode && currentNode !== range.endContainer.nextSibling) {
        console.log("같지않아서 와일문에 들어옴")
        if (currentNode.textContent.length === 0) {
          console.log("길이 0이니까 패스");

        } else {
        // 이부분 뭔가 처리를 진행하면 루프를 돌지 못함
        // if (currentNode === range.startContainer) { //현재 노드가 startContainer면 범위를 지정 현재 노드가 엔드면 마지막 범위 지정
        //   console.log("첫 노드 처리"+ currentNode.textContent);
        //   const newRange = document.createRange();
        //   newRange.setStart(currentNode, range.startOffset)
        //   newRange.setEnd(currentNode, range.startContainer.textContent.length);

        //   const fragment = document.createDocumentFragment(); 
        //   setOwnFragment(fragment, newRange, currentNode, styles);
      
        //   newRange.deleteContents();
        //   newRange.insertNode(fragment);

        // } else if (currentNode === range.endContainer ||
        //   currentNode.textContent.includes("--vbtd--mhlg--")) {
        //   console.log("끝 노드 처리"+ currentNode.textContent);
        //   const newRange = document.createRange();
        //   newRange.setStart(currentNode, 0)
        //   newRange.setEnd(currentNode, range.endOffset);

        //   const fragment = document.createDocumentFragment(); 
        //   setOwnFragment(fragment, newRange, currentNode, styles);
      
        //   newRange.deleteContents();
        //   newRange.insertNode(fragment);

        //   break;
        // } else {
        //   console.log("중간 노드 처리"+ currentNode.textContent);
        //   const newRange = document.createRange();
        //   newRange.setStart(currentNode, 0)
        //   newRange.setEnd(currentNode, currentNode.textContent.length);

        //   const fragment = document.createDocumentFragment(); 
        //   setOwnFragment(fragment, newRange, currentNode, styles);
      
        //   newRange.deleteContents();
        //   newRange.insertNode(fragment);
        // }
        }

        // console.log('처리한 노드 ===>'+currentNode.textContent);
        //currentNode = currentNode.nextSibling || currentNode.parentNode.nextSibling; // 이게 다 돌수 있다고 믿자
        currentNode = currentNode.nextSibling || currentNode.parentNode.nextSibling; // 이게 다 돌수 있다고 믿자

        if (currentNode && currentNode.tagName === 'DIV') {
          currentNode = currentNode.childNodes[0]; //div만나면 첫번째 자식으로 이동;
        }
      }


  }
}

  function setStyle(element, styleArray) {
    if (styleArray && styleArray.length > 0) {
      for (let j = 0; j < styleArray.length; j++) {
        element.style[styleArray[j][0]] = styleArray[j][1];
      }
    }
  }

  function setOwnFragment(fragment, newRange, currentNode, styles) {
    const clone = newRange.cloneContents();
    //const fragment = document.createDocumentFragment(); 
    //이 선택된 range의 부모태그에 따라 다른방식으로 처리
    if (currentNode.parentNode.tagName === 'DIV') {
      const span = document.createElement('span');
      setStyle(span, styles);
      span.appendChild(document.createTextNode(clone.textContent));
      fragment.appendChild(span);
    } else if (currentNode.parentNode.tagName === 'SPAN') {          
      const parentText = currentNode.parentNode.childNodes[0].textContent; //선택된놈의 길이가 이셍키랑 같으면 하나만만들어야함

      if (newRange.startOffset > 0) {
        const spanbefore = document.createElement('span');
        for (let i = 0; i < currentNode.parentNode.style.length; i++) {
          spanbefore.style[currentNode.parentNode.style[i]] = currentNode.parentNode.style[currentNode.parentNode.style[i]]
        }
        spanbefore.appendChild(document.createTextNode(parentText.slice(0,newRange.startOffset)));
        fragment.appendChild(spanbefore);
      }
      //--------------
      const span = document.createElement('span')
      for (let i = 0; i < currentNode.parentNode.style.length; i++) {
        span.style[currentNode.parentNode.style[i]] = currentNode.parentNode.style[currentNode.parentNode.style[i]]
      }
      setStyle(span, styles);
      span.appendChild(document.createTextNode(clone.textContent));
      fragment.appendChild(span);
      //--------------
      if (parentText.length > newRange.endOffset) {
        const spanafter = document.createElement('span')
        for (let i = 0; i < currentNode.parentNode.style.length; i++) {
          spanafter.style[currentNode.parentNode.style[i]] = currentNode.parentNode.style[currentNode.parentNode.style[i]]
        }

        spanafter.appendChild(document.createTextNode(parentText.slice(newRange.endOffset,parentText.length)));
        fragment.appendChild(spanafter);
      }
      currentNode.parentNode.remove();
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
    <div id="own-text-editer">
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
    </div>
  );
}

export default FaqControl;





// // range 객체 생성
// const rangef = window.getSelection().getRangeAt(0);

// // 선택된 모든 노드의 공통 조상 노드 가져오기
// const commonAncestor = rangef.commonAncestorContainer;

// // TreeWalker 객체 생성
// const walker = document.createTreeWalker(range.commonAncestorContainer, NodeFilter.SHOW_ALL, null, false);


// // 선택된 모든 노드 찾기
// const selectedNodes = [];
// while (walker.nextNode()) {
//   const node = walker.currentNode;
//   if (rangef.intersectsNode(node)) {
//     selectedNodes.push(node);
//   }
// }

// console.log(selectedNodes); // 선택된 모든 노드 배열 출력

