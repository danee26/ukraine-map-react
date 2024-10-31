// src/Mauritius.tsx
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
var viewBox = "-20 -50 2000 1000";
var stateCode = [
  "Plaines Wilhems",
  "Port Louis",
  "Savanne",
  "Rivi\xE8re Noire",
  "Rivi\xE8re du Rempart",
  "Pamplemousses",
  "Moka",
  "Grand Port",
  "Flacq"
];
var drawPath = {
  "Plaines Wilhems": "M249.6,478.29L253.24,538.5L254.69,562.57L259.92,592.31L272.46,604.2L275.61,607.18L268.64,618.34L245.98,618.34L235.52,629.49L244.23,664.82L254.69,692.72L239,705.74L252.95,724.33L284.33,731.77L300.02,741.07L298.28,767.12L324.43,770.84L334.89,735.49L338.37,720.61L362.78,724.33L376.73,735.49L394.16,731.77L481.32,629.49L446.46,605.33L430.77,575.58L437.74,553.28L409.85,516.1L394.16,493.8L362.78,490.09L324.43,454.78L301.76,397.19L296.53,365.61L272.13,361.89L257.76,387.18L254.02,414.25L248.25,456.09L249.6,478.29z",
  "Port Louis": "M394.56,384.67L401.13,339.61L395.9,269.04L383.7,246.76L354.06,254.18L318.26,248.38L309.44,246.96L304.42,278.9L276.67,307.74L260.82,314.78L263.3,325.12L272.13,361.89L296.53,365.61L327.91,354.46L348.83,363.75L381.96,380.47L394.56,384.67z",
  Savanne: "M325.29,930.78L462.95,909.06L532.08,886.92L528.39,867.59L523.16,828.51L502.24,770.84L472.61,737.35L439.48,729.91L394.16,731.77L376.73,735.49L362.78,724.33L338.37,720.61L334.89,735.49L324.43,770.84L298.28,767.12L279.1,755.96L244.23,767.12L211.11,780.14L172.76,809.9L143.12,819.21L143.12,854.56L160.56,871.31L155.92,897.21L200.84,902.29L276.67,926.83L325.29,930.78z",
  "Rivi\xE8re Noire": "M263.3,325.12L260.82,314.78L225.68,324.91L210.09,332.51L174.16,362.64L170.85,367.98L157.38,382.34L120.52,455.83L109.42,485.97L101.89,538.36L100.31,633.88L87.23,676.15L104.93,686.16L106.78,703.91L98.32,752.54L88.55,774.96L66.35,779.19L26.19,770.87L0.43,781.02L7.56,804.14L28.17,828.25L121.58,912.87L155.92,897.21L160.56,871.31L143.12,854.56L143.12,819.21L172.76,809.9L211.11,780.14L244.23,767.12L279.1,755.96L298.28,767.12L300.02,741.07L284.33,731.77L252.95,724.33L239,705.74L254.69,692.72L244.23,664.82L235.52,629.49L245.98,618.34L268.64,618.34L275.61,607.18L272.46,604.2L259.92,592.31L254.69,562.57L253.24,538.5L249.6,478.29L248.25,456.09L254.02,414.25L257.76,387.18L272.13,361.89L263.3,325.12z",
  "Rivi\xE8re du Rempart": "M493.34,0L476.16,5.48L466.39,17.71L459.25,29.94L449.87,35.43L498.76,94.56L502.24,116.83L491.78,140.95L538.85,189.21L512.7,220.77L531.88,304.32L698.77,201.65L692.43,199.97L673.27,203.06L666.67,201.65L658.48,190.96L654.25,170.99L640.51,146.23L628.22,117.26L616.73,100.81L610.39,84.36L619.5,54.55L611.18,35.43L591.76,25.3L518.97,3.94L493.34,0z",
  Pamplemousses: "M531.88,304.32L512.7,220.77L538.85,189.21L491.78,140.95L502.24,116.83L498.76,94.56L449.87,35.43L428.07,37.11L416.98,42.17L372.19,78.45L365.06,88.86L355.15,107.42L335.07,169.3L310.49,214.74L309.44,246.96L318.26,248.38L354.06,254.18L383.7,246.76L395.9,269.04L401.13,339.61L394.56,384.67L409.85,389.76L437.74,378.61L470.86,356.32L494.59,355.09L497.01,339.61L524.91,321.03L531.88,304.32z",
  Moka: "M394.56,384.67L381.96,380.47L348.83,363.75L327.91,354.46L296.53,365.61L301.76,397.19L324.43,454.78L362.78,490.09L394.16,493.8L409.85,516.1L437.74,553.28L430.77,575.58L446.46,605.33L481.32,629.49L537.11,631.35L573.72,620.2L592.89,603.47L610.33,538.41L530.14,471.5L582.43,419.48L526.65,376.75L493.53,361.89L494.59,355.09L470.86,356.32L437.74,378.61L409.85,389.76L394.56,384.67z",
  "Grand Port": "M771.03,562.59L735.84,558.85L688.78,596.03L626.02,601.61L592.89,603.47L573.72,620.2L537.11,631.35L481.32,629.49L394.16,731.77L439.48,729.91L472.61,737.35L502.24,770.84L523.16,828.51L528.39,867.59L532.08,886.92L599.03,865.48L619.37,851.52L631.79,834.03L653.59,794.55L662.44,789.48L672.74,790.04L681.99,786.8L687.67,770.87L686.48,761.42L677.76,746.62L676.58,734.36L664.02,705.75L691.64,665.02L736.82,629.37L776.45,616.12L767.34,589.64L771.03,562.59z",
  Flacq: "M799.57,420.64L792.44,402.33L761.26,364.89L745.67,315.63L728.89,302.12L716.34,284.1L721.63,228.24L716.87,217.13L698.77,201.65L531.88,304.32L524.91,321.03L497.01,339.61L494.59,355.09L493.53,361.89L526.65,376.75L582.43,419.48L530.14,471.5L610.33,538.41L592.89,603.47L626.02,601.61L688.78,596.03L735.84,558.85L771.03,562.59L788.47,509.63L796.66,462.17L799.57,420.64z"
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

// src/Mauritius.tsx
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
var Mauritius = ({
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
      MauritiusSingle,
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
      MauritiusMultiple,
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
var MauritiusSingle = ({
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
var MauritiusMultiple = ({
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
var Mauritius_default = Mauritius;

// src/index.ts
var src_default = Mauritius_default;
export {
  src_default as default
};
