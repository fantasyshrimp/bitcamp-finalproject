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
      
      let currentNode = range.startContainer;
      if (currentNode === range.endContainer) { //한컨테이너에서 이루어지면?

        const first = range.startOffset;
        const second = range.endOffset - range.startOffset;
        const selectedNode = setStyleToNode(currentNode.sliceNode(first).sliceNode(second, true), styles);
        
        // 이런식으로 한번에 관리도 되나?
        // const endOffset = (currentNode === range.endContainer) ? range.endOffset : currentNode.nodeValue.length;
        // const startOffset = (currentNode === range.startContainer) ? range.startOffset : 0;    
        range.setStart(selectedNode, 0);
        range.setEnd(selectedNode, selectedNode.length);
        selection.removeAllRanges();
        selection.addRange(range);

        return;
      }
      const startNode = range.startContainer;
      const endNode = range.endContainer;

      const selectedNodes = getSelectedNodes(range);
      selectedNodes.forEach((node, index) => {
        if (node === startNode && range.startOffset !== 0) {
          const sliceNode = node.sliceNode(range.startOffset);
          setStyleToNode(sliceNode, styles);
        } else if (node === endNode && index === (selectedNodes.length - 1)) {
          const sliceNode = node.sliceNode(range.endOffset, true);
          const lastNode = setStyleToNode(sliceNode, styles);
          range.setEnd(lastNode, lastNode.length);
        } else {          
          setStyleToNode(node, styles);
        }
      }); 

      
      selection.removeAllRanges();
      selection.addRange(range);

  }
}
// 선택된 노드의 최하위 node를 가져오는 함수
//-------------------------------------------------------------------

function getSelectedNodes(range) {
  const selectedNodes = [];
  let node = range.startContainer;
  while (node) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.length > 0) {
      selectedNodes.push(node);
    }
    node = getNextNode(node);
    if (node === getNextNode(range.endContainer)) {
      break;
    }
  }
  return selectedNodes;
}

function getNextNode(node) {
  if (node.firstChild && node.firstChild.textContent.length > 0) {
    if (node.firstChild.firstChild && node.firstChild.firstChild.textContent.length > 0) {
      return node.firstChild.firstChild;
    }
    return node.firstChild;
  }
  while (node) {
    if (node.nextSibling) {
      return node.nextSibling;
    }
    node = node.parentNode;
  }
  return null;
}

// node에 스타일 적용
//-------------------------------------------------------------------
  function setStyleToNode(node, styles) {
    if (node.parentNode.tagName === 'DIV') {
      const span = document.createElement('span');
      setStyle(span, styles);
      span.appendChild(document.createTextNode(node.textContent));
      node.parentNode.replaceChild(span, node);
      node = span.firstChild;
    } else if (node.parentNode.tagName === 'SPAN') {
      setStyle(node.parentNode, styles);
    }
    return node;
  }

  function setStyle(element, styleArray) {
    if (styleArray && styleArray.length > 0) {
      styleArray.forEach((style) => {
        element.style[style[0]] = style[1];
      })
    }
  }

 // node slice
 //--------------------------------------------------------------------------------------------------------------------------------
 
 Node.prototype.sliceNode = function(offset, isFront = false) {
  
   let dstNode = this;  
   const parentNode = dstNode.parentNode;

  if (this.nodeType === Node.TEXT_NODE) {    
    if (isFront) {
      dstNode = dstNode.splitText(offset).previousSibling;
    } else {
      dstNode = dstNode.splitText(offset);
    }
  }

  if (parentNode.nodeType === Node.ELEMENT_NODE && parentNode.tagName === 'SPAN') {
    const span = document.createElement('span');
    const parentNodeStyle = parentNode.style;
    for (let i = 0; i < parentNodeStyle.length; i++) {
      span.style[parentNodeStyle[i]] = parentNodeStyle[parentNodeStyle[i]];
    }

    span.appendChild(document.createTextNode(dstNode.textContent));
    parentNode.removeChild(dstNode);

    parentNode.parentNode.insertBefore(span, parentNode.nextSibling);
    if (isFront) {
      dstNode = span.previousSibling.firstChild;
    } else {
      dstNode = span.firstChild;
    }
  }
  return dstNode;
 }

  // -------------------------------------------------------------
 
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