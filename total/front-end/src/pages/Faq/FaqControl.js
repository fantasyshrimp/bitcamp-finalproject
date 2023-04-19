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

      const newRange = document.createRange();
      newRange.setStart(range.startContainer, range.startOffset);
      //newRange.setEnd(range.startContainer, range.startContainer.length); //컨테이너가 짤리는애는 클론을하고? 아닌애들은 text면 스판으로 감싸서 스타일지정하고 아니면  꽉이면 부모에다 지정?

      let st = range.startContainer; 
      while (st !== range.endContainer && st != null && st != undefined) {
        console.log('먼가여러개가선택됨');
        st = st.nextSibling; // 여기서 코드를 돌면서 선택된걸 다 뽑아낼수 있으면 될듯?
      }

      newRange.setEnd(range.endContainer, range.endOffset);

       const clone = newRange.cloneContents();
       const fragment = document.createDocumentFragment();

      handleStyle(fragment, clone, styles);
      newRange.deleteContents();
      newRange.insertNode(fragment);
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
      } else {
        if (styles && styles.length > 0) {
          for (let j = 0; j < styles.length; j++) {
            childNode.style[styles[j][0]] = styles[j][1];
          }
        }
        fragment.appendChild(childNode.cloneNode(true));
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
          // event.preventDefault();
  
          // const selection = window.getSelection();
          // const range = selection.getRangeAt(0);
      
          // const br = document.createElement('br');
          // range.insertNode(br);
          // range.setStartAfter(br);
          // range.setEndAfter(br);
          // range.insertNode(br);
          // range.collapse(false);
          
          // const newRange = document.createRange();
          // newRange.setStart(br.nextSibling, 0);
          // newRange.setEnd(br.nextSibling, 0);
          
          // selection.removeAllRanges();
          // selection.addRange(newRange);
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
    <StyleButton handleClick={handleClick} hi={'50px'} setStyle={[['color','red']]}/>
    <StyleButton handleClick={handleClick} hi={'150px'} setStyle={[['font-size','20px']]}/>
    </div>
  );
}

export default FaqControl;