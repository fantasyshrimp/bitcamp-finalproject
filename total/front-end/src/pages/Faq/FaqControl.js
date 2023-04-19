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
      const clone = range.cloneContents();
      const fragment = document.createDocumentFragment();

      handleStyle(fragment, clone, styles);
      range.deleteContents();
      range.insertNode(fragment);
    }  
  }

  function handleStyle(fragment, node, styles) {

    const childNodeCount = node.childNodes.length;
    for (let i = 0; i < childNodeCount; i++) {
      const childNode = node.childNodes[i];
      if (childNode.nodeType === Node.TEXT_NODE) {
        const span = document.createElement('span');

        if (styles && styles.length > 0) {
          for (let j = 0; j < styles.length; j++) {
            span.style[styles[j][0]] = styles[j][1];
          }
        }
      span.appendChild(document.createTextNode(childNode.textContent));
      fragment.appendChild(span);
      } else if (childNode.nodeType === Node.ELEMENT_NODE && childNode.tagName.toLowerCase() === 'span') {
        if (styles && styles.length > 0) {
          for (let j = 0; j < styles.length; j++) {
            childNode.style[styles[j][0]] = styles[j][1];
          }
        }
        fragment.appendChild(childNode.cloneNode(true));
        console.log("span이라 그냥 적용됨");
      } else {
        if (childNode.nodeType === Node.ELEMENT_NODE && childNode.tagName.toLowerCase() === 'br') {
          fragment.appendChild(document.createElement('br'));
        }
        const clonedNode = childNode.cloneNode(true);
        handleStyle(fragment, clonedNode, styles);
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

    <div id="hohohohoho"
      contentEditable={true}
      onInput={handleChange} onKeyDown={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
    
          for (let i= 0; i < 2; i++) {

          const selection = window.getSelection();
          const range = selection.getRangeAt(0);
      
          const br = document.createElement('br');
          range.insertNode(br);
          range.setStartAfter(br);
          range.setEndAfter(br);
          range.collapse(false);
          
          const newRange = document.createRange();
          newRange.setStart(br.nextSibling, 0);
          newRange.setEnd(br.nextSibling, 0);
          
          selection.removeAllRanges();
          selection.addRange(newRange);
        }
      }
    }}

      style={{
        width: '80%',
        height: '600px',
        padding: '10px',
        margin: '0 auto',
        border: '1px solid white',
        color: 'white', 
        overflow: 'auto'
      }}

    >
    </div>
    <StyleButton handleClick={handleClick} hi={'50px'} setStyle={[['color','red']]}/>
    <StyleButton handleClick={handleClick} hi={'150px'} setStyle={[['font-size','20px']]}/>
    </div>
  );
}

export default FaqControl;




// npm install --save react-contenteditable
// 설치가 완료되면, react-contenteditable에서 제공하는 ContentEditable 컴포넌트를 사용하여 contentEditable 속성을 가진 엘리먼트를 생성할 수 있습니다. 예를 들어, 다음과 같이 ContentEditable 컴포넌트를 사용하여 <div> 엘리먼트를 생성할 수 있습니다.

// jsx
// Copy code
// import React, { useState } from 'react';
// import { ContentEditable } from 'react-contenteditable';

// function MyComponent() {
//   const [html, setHtml] = useState('<div>내용을 입력하세요.</div>');

//   const handleChange = (event) => {
//     setHtml(event.target.value);
//   }

//   return (
//     <ContentEditable
//       html={html}
//       onChange={handleChange}
//     />
//   );
// }