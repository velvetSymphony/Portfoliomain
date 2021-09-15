import * as React from "react";

declare class Zoom extends React.Component<ZoomProps, any> {}

export interface ZoomProps {
  duration?: number;
  delay?: number;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  count?: number;
  forever?: boolean;
  mirror?: boolean;
  opposite?: boolean;
  distance?: string;
  spy?: boolean;
  when?: boolean;
  in?: boolean;
  appear?: boolean;
  enter?: boolean;
  exit?: boolean;
  timeout?: Number;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  force?: boolean;
  refProp?: string;
  innerRef?: function;
  cascade?: boolean;
  collapse?: boolean;
  fraction?: number;
  ssrFadeout?: boolean;
  ssrReveal?: boolean;
  wait?: number;
  onReveal?: function;
}
