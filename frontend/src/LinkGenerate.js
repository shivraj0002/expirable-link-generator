import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";

export default function LinkGeberateComponent() {
  let componentRef = useRef();

  return (
    <>
      <div id="print_component">
        <div style={{ display: "none" }}>
          <LinkGeberate ref={(el) => (componentRef = el)} />
        </div>
      </div>
    </>
  );
}

class LinkGeberate extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{ color: "green" }}>Attendance</h2>
        
      </div>
    );
  }
}
