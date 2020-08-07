import React from "react";
import { Link } from "react-router-dom";

export default function LayoutComponent({ children }) {
  console.log('children', children)
  return (
    <div>
      <span>我是layout</span>
      <Link to="/home">前往home</Link>
      <Link to="/login">前往login</Link>
      <div>{children}</div>
    </div>
  );
}
