import { useState } from "react";

function ToolTip({ direction, message }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div style={{ position: "relative", display: "inline-block" }}>
        <button onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
          ToolTip
        </button>
        {show && (
          <div style={{ ...styles.container, ...StyleSheet[direction].container }}>
            <p style={{ ...styles.tooltip, ...StyleSheet[direction].tooltip }}>{message}</p>
          </div>
        )}
      </div>
    </>
  );
}

const StyleSheet = {
  top: {
    container: {
      position: "absolute",
      bottom: "50px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "5px",
      zIndex: 9999,
    },
    tooltip: {
      margin: 0,
      whiteSpace: "nowrap", 
    },
  },
  right: {
    container: {
      position: "absolute",
      top: "50%",
      left: "160px",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "5px",
      zIndex: 9999,
    },
    tooltip: {
      margin: 0,
      whiteSpace: "nowrap", 
    },
  },
  left: {
    container: {
      position: "absolute",
      top: "50%",
      right: "160px",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "5px",
      zIndex: 9999,
    },
    tooltip: {
      margin: 0,
      whiteSpace: "nowrap", 
    },
  },
  bottom: {
    container: {
      position: "absolute",
      top: "50px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      color: "#fff",
      padding: "5px 10px",
      borderRadius: "5px",
      zIndex: 9999,
    },
    tooltip: {
      margin: 0,
      whiteSpace: "nowrap", 
    },
  },
};

const styles = {
  container: {},
  tooltip: {},
};

export default ToolTip;
