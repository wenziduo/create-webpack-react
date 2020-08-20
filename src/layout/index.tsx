import React, { useEffect } from "react";
import { Spin, Button } from "@/antdComponent";

export default function LayoutComponent({ children }: { children: any }) {
  console.log("children", children);
  console.log(window.location);
  console.log(window.history);
  // const _dispatch = (params) => {
  //   return new Promise((resolve, reject) => {
  //     dispatch({
  //       ...params,
  //       resolve,
  //     })
  //   })
  // }
  useEffect(() => {
    console.log("start");
    window.addEventListener("hashchange", (ev) => {
      console.log("hashchange", ev);
    });
    window.addEventListener(
      "load",
      (ev) => {
        console.log("load", ev);
      },
      false
    );
  }, []);
  return (
    <div>
      <Spin spinning={true}>
        <Button type="default">123456789</Button>
      </Spin>
    </div>
  );
}
