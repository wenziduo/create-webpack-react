import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function LayoutComponent({ children }) {
  console.log('children', children)
  console.log(window.location)
  console.log(window.history)
  useEffect(() => {
    console.log('start')
    window.addEventListener('hashchange', (ev) => {
      console.log('hashchange', ev)
    })
  }, [])
  return (
    <div>
      <span>我是layout</span>
      <div><Link to="/login">前往login</Link></div>
      <div><Link to="/home">前往home</Link></div>
      <div><Link to="/list">前往list</Link></div>
      <div><Link to="/about">前往about</Link></div>
      <div>{children}</div>
    </div>
  );
}
