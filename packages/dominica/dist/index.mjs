// src/Dominica.tsx
import React, { useEffect as useEffect2 } from "react";

// src/constants.ts
var constants = {
  WIDTH: "500px",
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: "0.5",
  HOVERCOLOR: "#303030",
  SELECTED_COLOR: "#ff0000"
};
var viewBox = "-50 -50 2200 1600";
var stateCode = [
  "Saint Peter",
  "Saint Paul",
  "Saint Patrick",
  "Saint Mark",
  "Saint Luke",
  "Saint Joseph",
  "Saint John",
  "Saint George",
  "Saint David",
  "Saint Andrew"
];
var drawPath = {
  "Saint Peter": "M39.03,347.02L31.62,345.23L29.03,346.75L27.65,347.91L16.71,361.06L16.68,361.1L32.16,375.38L46.01,402.01L49.13,486.1L56.46,527.93L78.18,546.1L96.64,557.37L112.32,580.06L112.38,580.02L166.25,534.41L186.59,513.75L189.86,508.02L194.6,501.94L217.36,490.94L277.95,482.71L271.14,453.11L86,353.46L84.8,353.99L82.64,354.26L80.06,354.08L65.84,351.31L64.37,351.4L46.96,346.84L44.2,346.48L41.1,347.02L39.03,347.02z",
  "Saint Paul": "M538.5,998.06L538.93,851.92L515.14,792.47L403.53,845.12L393.19,846.46L378.71,844.41L321.73,830.64L280.62,831.71L243.56,843.69L243.49,843.71L244.59,852.36L251.1,876.86L298.34,978.63L313.54,1041.12L318.24,1108.61L318.29,1108.61L357.07,1110.94L358.11,1110.85L364.05,1111.21L366.04,1111.03L372.41,1109.33L374.14,1109.24L375.6,1109.33L377.07,1109.78L378.45,1109.95L380.77,1109.42L383.36,1108.7L388.27,1104.32L391.38,1098.96L398.79,1074.57L399.39,1073.14L399.91,1071.88L400.94,1069.38L538.5,998.06z",
  "Saint Patrick": "M475.74,1460.83L477.23,1458.58L488.09,1433.26L534.65,1412.87L551.75,1367.85L569.8,1351.25L590.84,1347.31L619.21,1354.07L653.14,1349.56L666.17,1350.55L682.46,1346.33L706.48,1327.62L775.03,1206.19L784.8,1070.11L783.72,1042.57L642.53,1067.33L629.86,1073.94L603.06,1097.89L615.04,1106.74L616.59,1108.7L616.07,1113.89L575.13,1182.42L565.57,1191.81L552.21,1201.19L521.35,1217.45L488.17,1244.25L441.62,1315.28L444.81,1349.85L475.74,1460.83z",
  "Saint Mark": "M420.77,1495.01L461.22,1483.48L475.74,1460.83L475.74,1460.83L444.81,1349.85L387.5,1377.1L387.15,1377.19L387.04,1377.22L376.52,1456.9L383.3,1484.61L420.77,1495.01z",
  "Saint Luke": "M441.62,1315.28L386.46,1292.68L386.36,1292.64L387.65,1372.64L387.04,1377.22L387.15,1377.19L387.5,1377.1L444.81,1349.85L441.62,1315.28z",
  "Saint Joseph": "M348.71,540.4L332.68,533.24L320.7,525.46L277.95,482.71L217.36,490.94L194.6,501.94L189.86,508.02L186.59,513.75L166.25,534.41L112.38,580.02L112.32,580.06L115.91,585.25L130.84,620.46L137.22,653.41L149.44,682.14L226.13,758.6L236.58,789.01L243.49,843.71L243.56,843.69L280.62,831.71L321.73,830.64L378.71,844.41L393.19,846.46L403.53,845.12L515.14,792.47L572.55,654.33L554.19,607.74L503.34,566.51L483.77,555.69L470.84,550.15L460.76,549.07L450.16,546.84L438,542.63L403.27,527.25L399.13,526.36L395.51,527.07L381.81,534.05L368.36,538.34L348.71,540.4z",
  "Saint John": "M66.78,0L27.96,148.4L0.4,189.13L26.06,191.52L66.5,206.32L89.58,210.83L72.48,245.49L16.69,284.94L0.4,307.48L0.27,339.88L13.84,358.48L16.68,361.1L16.71,361.06L27.65,347.91L29.03,346.75L31.62,345.23L39.03,347.02L41.1,347.02L44.2,346.48L46.96,346.84L64.37,351.4L65.84,351.31L80.06,354.08L82.64,354.26L84.8,353.99L86,353.46L271.14,453.11L263.04,385.12L258.73,368.04L236.92,349.97L233.99,329.57L235.97,229.28L232.79,191.79L231.23,191.16L228.73,187.41L227.79,186.78L226.67,186.33L225.63,186.06L224.43,186.24L223.3,186.42L221.84,186.78L218.74,186.6L216.93,186.33L210.98,183.74L209.69,182.84L208.39,181.5L206.84,178.37L205.98,176.94L193.91,172.11L171.42,149.56L162.45,134.16L132.73,2.68L66.78,0z",
  "Saint George": "M603.06,1097.89L608.23,1077.78L608.4,1074.03L607.71,1067.42L606.16,1061.7L603.49,1054.73L602.89,1052.13L602.71,1049.72L604.09,1044L592.97,1033.81L538.5,998.06L400.94,1069.38L399.91,1071.88L399.39,1073.14L398.79,1074.57L391.38,1098.96L388.27,1104.32L383.36,1108.7L380.77,1109.42L378.45,1109.95L377.07,1109.78L375.6,1109.33L374.14,1109.24L372.41,1109.33L366.04,1111.03L364.05,1111.21L358.11,1110.85L357.07,1110.94L318.29,1108.61L318.24,1108.61L319.51,1126.83L327.11,1168.34L369.32,1217.59L387.65,1256.85L386.02,1271.62L386.36,1292.64L386.46,1292.68L441.62,1315.28L488.17,1244.25L521.35,1217.45L552.21,1201.19L565.57,1191.81L575.13,1182.42L616.07,1113.89L616.59,1108.7L615.04,1106.74L603.06,1097.89z",
  "Saint David": "M783.72,1042.57L783.72,1042.53L778.83,932.18L799.73,805.9L783.17,799.29L769.33,787.74L754.13,782.25L777.2,685.24L771.64,558.35L740.01,436.52L735.12,429.2L716.74,452.66L711.31,465.45L712.61,470.37L715.02,540.67L714.16,547.37L712.87,547.91L710.8,549.52L698.73,561.95L695.28,564.81L693.39,565.89L691.58,566.42L690.02,566.69L684.59,566.78L683.47,567.05L682.18,567.59L673.73,574.83L668.05,581.09L665.2,583.59L662.87,584.93L661.75,584.93L659.51,584.49L658.22,584.4L655.81,584.93L654.86,585.11L653.74,584.67L652.27,584.13L650.98,583.33L635.72,594.06L572.55,654.33L515.14,792.47L538.93,851.92L538.5,998.06L592.97,1033.81L604.09,1044L602.71,1049.72L602.89,1052.13L603.49,1054.73L606.16,1061.7L607.71,1067.42L608.4,1074.03L608.23,1077.78L603.06,1097.89L629.86,1073.94L642.53,1067.33L783.72,1042.57z",
  "Saint Andrew": "M735.12,429.2L683.68,354.82L665.09,321.71L631.97,265.49L610.79,212.66L604.82,189.13L439.23,123.18L397.83,131.35L348.15,157.56L304.99,128.95L251.1,49.47L210.38,18.6L172.65,4.23L132.74,2.68L132.73,2.68L162.45,134.16L171.42,149.56L193.91,172.11L205.98,176.94L206.84,178.37L208.39,181.5L209.69,182.84L210.98,183.74L216.93,186.33L218.74,186.6L221.84,186.78L223.3,186.42L224.43,186.24L225.63,186.06L226.67,186.33L227.79,186.78L228.73,187.41L231.23,191.16L232.79,191.79L235.97,229.28L233.99,329.57L236.92,349.97L258.73,368.04L263.04,385.12L271.14,453.11L277.95,482.71L320.7,525.46L332.68,533.24L348.71,540.4L368.36,538.34L381.81,534.05L395.51,527.07L399.13,526.36L403.27,527.25L438,542.63L450.16,546.84L460.76,549.07L470.84,550.15L483.77,555.69L503.34,566.51L554.19,607.74L572.55,654.33L635.72,594.06L650.98,583.33L652.27,584.13L653.74,584.67L654.86,585.11L655.81,584.93L658.22,584.4L659.51,584.49L661.75,584.93L662.87,584.93L665.2,583.59L668.05,581.09L673.73,574.83L682.18,567.59L683.47,567.05L684.59,566.78L690.02,566.69L691.58,566.42L693.39,565.89L695.28,564.81L698.73,561.95L710.8,549.52L712.87,547.91L714.16,547.37L715.02,540.67L712.61,470.37L711.31,465.45L716.74,452.66L735.12,429.2z"
};

// src/hooks/mouseTrack.ts
import { useState, useEffect } from "react";
var useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const updateMousePosition = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return position;
};
var mouseTrack_default = useMousePosition;

// src/Dominica.tsx
import { useState as useState2, useId } from "react";
var getStrokeProperties = (borderStyle) => {
  switch (borderStyle) {
    case "dashed":
      return {
        strokeDasharray: "8 4"
      };
    case "dotted":
      return {
        strokeDasharray: "2 2"
      };
    case "dash-dot":
      return {
        strokeDasharray: "8 4 2 4"
      };
    case "dash-double-dot":
      return {
        strokeDasharray: "8 4 2 4 2 4"
      };
    default:
      return {
        strokeDasharray: "none"
      };
  }
};
var Dominica = ({
  type,
  size,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  onSelect,
  hints,
  selectColor,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  cityColors,
  disableClick,
  disableHover,
  borderStyle
}) => {
  if (type === "select-single") {
    return /* @__PURE__ */ React.createElement(
      DominicaSingle,
      {
        type: "select-single",
        size,
        selectColor,
        mapColor,
        strokeColor,
        strokeWidth,
        hoverColor,
        hints,
        onSelect,
        hintTextColor,
        hintBackgroundColor,
        hintPadding,
        hintBorderRadius,
        cityColors,
        disableClick,
        disableHover,
        borderStyle
      }
    );
  } else if (type === "select-multiple") {
    return /* @__PURE__ */ React.createElement(
      DominicaMultiple,
      {
        type: "select-multiple",
        size,
        selectColor,
        mapColor,
        strokeColor,
        strokeWidth,
        onSelect,
        hoverColor,
        hints,
        hintTextColor,
        hintBackgroundColor,
        hintPadding,
        hintBorderRadius,
        cityColors,
        disableClick,
        disableHover,
        borderStyle
      }
    );
  } else {
    return null;
  }
};
var DominicaSingle = ({
  size,
  mapColor,
  strokeColor,
  selectColor,
  strokeWidth,
  hoverColor,
  hints,
  onSelect,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  cityColors = {},
  disableClick = false,
  disableHover = false,
  borderStyle
}) => {
  const instanceId = useId().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = useState2(null);
  const [selectedState, setSelectedState] = useState2(null);
  const strokeProps = getStrokeProperties(borderStyle);
  const mapStyle = {
    width: size || constants.WIDTH,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
    ...strokeProps
  };
  useEffect2(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor || constants.MAPCOLOR;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  useEffect2(() => {
    if (selectedState) {
      const path = document.getElementById(`${selectedState}-${instanceId}`);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    }
  }, [selectedState, selectColor, instanceId]);
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(hoverStateId);
    if (path && !disableHover) {
      if (selectedState === hoverStateId) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = hoverColor || constants.HOVERCOLOR;
      }
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(null);
    if (path && !disableHover) {
      if (selectedState === hoverStateId) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = cityColors[hoverStateId] || mapColor || constants.MAPCOLOR;
      }
    }
  };
  const handleClick = (stateCode2) => {
    if (disableClick) return;
    if (selectedState === stateCode2) {
      const path = document.getElementById(`${stateCode2}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[stateCode2] || mapColor || constants.MAPCOLOR;
      }
      setSelectedState(null);
      if (onSelect) {
        onSelect(null);
      }
    } else {
      if (selectedState) {
        const previousPath = document.getElementById(`${selectedState}-${instanceId}`);
        if (previousPath) {
          previousPath.style.fill = cityColors[selectedState] || mapColor || constants.MAPCOLOR;
        }
      }
      setSelectedState(stateCode2);
      if (onSelect) {
        onSelect(stateCode2);
      }
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ React.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(stateCode2),
      onMouseEnter: () => handleMouseEnter(stateCode2),
      onMouseLeave: () => handleMouseLeave(stateCode2),
      id: `${stateCode2}-${instanceId}`,
      d: drawPath[stateCode2],
      style: {
        fill: cityColors[stateCode2] || mapColor || constants.MAPCOLOR,
        cursor: disableClick ? "default" : "pointer",
        ...strokeProps
      }
    }
  )))), hints && /* @__PURE__ */ React.createElement("div", null, stateHovered && /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        position: "absolute",
        top: y + 20,
        left: x + 20,
        backgroundColor: hintBackgroundColor || "white",
        padding: hintPadding || "10px",
        borderRadius: hintBorderRadius || "5px",
        border: "1px solid #ccc",
        color: hintTextColor || "black"
      }
    },
    stateHovered
  )));
};
var DominicaMultiple = ({
  size,
  selectColor,
  mapColor,
  strokeColor,
  strokeWidth,
  hoverColor,
  hints,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  onSelect,
  cityColors = {},
  disableClick = false,
  disableHover = false,
  borderStyle
}) => {
  const instanceId = useId().replace(/:/g, "");
  const [selectedStates, setSelectedStates] = useState2([]);
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = useState2(null);
  const strokeProps = getStrokeProperties(borderStyle);
  const mapStyle = {
    width: size || constants.WIDTH,
    stroke: strokeColor || constants.STROKE_COLOR,
    strokeWidth: strokeWidth || constants.STROKE_WIDTH,
    ...strokeProps
  };
  useEffect2(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor || constants.MAPCOLOR;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  useEffect2(() => {
    selectedStates.forEach((stateCode2) => {
      const path = document.getElementById(`${stateCode2}-${instanceId}`);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    });
  }, [selectedStates, selectColor, instanceId]);
  const handleClick = (stateCode2) => {
    if (disableClick) return;
    if (selectedStates.includes(stateCode2)) {
      const remove_state_code = selectedStates.filter((state) => state !== stateCode2);
      setSelectedStates(remove_state_code);
      const path = document.getElementById(`${stateCode2}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[stateCode2] || mapColor || constants.MAPCOLOR;
      }
    } else {
      setSelectedStates([...selectedStates, stateCode2]);
    }
    if (onSelect) {
      onSelect(stateCode2, selectedStates);
    }
  };
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(hoverStateId);
    if (path && !disableHover) {
      if (selectedStates.includes(hoverStateId)) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = hoverColor || constants.HOVERCOLOR;
      }
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(null);
    if (path && !disableHover) {
      if (selectedStates.includes(hoverStateId)) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      } else {
        path.style.fill = cityColors[hoverStateId] || mapColor || constants.MAPCOLOR;
      }
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((stateCode2, index) => /* @__PURE__ */ React.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(stateCode2),
      onMouseEnter: () => handleMouseEnter(stateCode2),
      onMouseLeave: () => handleMouseLeave(stateCode2),
      id: `${stateCode2}-${instanceId}`,
      d: drawPath[stateCode2],
      style: {
        fill: cityColors[stateCode2] || mapColor || constants.MAPCOLOR,
        cursor: disableClick ? "default" : "pointer",
        ...strokeProps
      }
    }
  )))), hints && /* @__PURE__ */ React.createElement("div", null, stateHovered && /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        position: "absolute",
        top: y + 20,
        left: x + 20,
        backgroundColor: hintBackgroundColor || "white",
        padding: hintPadding || "10px",
        borderRadius: hintBorderRadius || "5px",
        border: "1px solid #ccc",
        color: hintTextColor || "black"
      }
    },
    stateHovered
  )));
};
var Dominica_default = Dominica;

// src/index.ts
var src_default = Dominica_default;
export {
  src_default as default
};
