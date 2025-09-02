# React Ukraine Map  

Create beautiful, interactive maps with a lightweight React component focused exclusively on **Ukraine**.  
This package makes it easy to highlight, style, and interact with Ukraine’s regions in your React apps.  

Drop a ✨ if you are here. It would mean a lot : )  

---

### Features  
1. Interactive and customizable **Ukraine map**.  
2. Very small dependency size (less than 800kB).  
3. Easy-to-use React component with flexible props.  

---

### Installation  

Install the package in your React project:  

```bash
npm install @react-map/ukraine
```  

That’s it! You’re now ready to use the Ukraine map component.  

---

### Usage  

The Ukraine component comes with a set of props to help you customize its look and behavior.  

```ts
export interface Props = {
  type: 'select-single' | 'select-multiple';
  size?: number;
  mapColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  hoverColor?: string;
  selectColor?: string;
  hints?: boolean;
  hintTextColor?: string;
  hintBackgroundColor?: string;
  hintPadding?: string;
  hintBorderRadius?: string;
  onSelect?: (region: string, selectedRegions?: string[]) => void;
}
```  

**Key props:**  
- `type` – either `select-single` (one region at a time) or `select-multiple` (many regions at once).  
- `size` – adjusts map size.  
- `mapColor`, `strokeColor`, `strokeWidth` – control base colors and borders.  
- `hoverColor`, `selectColor` – style hover and selected regions.  
- `hints` – enable tooltips showing region names.  
- `onSelect` – callback when a region is clicked.  

Each region returns its name as a string, which you can use to build your own logic (routing, analytics, UI updates, etc.).  

---

### Examples  

React Ukraine Map works seamlessly with other libraries:  

1. **With react-toastify**  
```tsx
import Ukraine from "@react-map/ukraine";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToast = (region: string) => {
  toast(region);
};

<Ukraine onSelect={showToast} size={1000} hoverColor="orange" type="select-single" />
<ToastContainer />
```  

2. **With react-router-dom**  
```tsx
import Ukraine from "@react-map/ukraine";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
const redirect = (region: string) => {
  navigate(`/regions/${region}`);
};

<Ukraine onSelect={redirect} size={1000} hoverColor="orange" type="select-single" />
```  

---

### Disclaimer  
- This package is for **interactive and visualization purposes only**.  
- If you face issues with rendering (e.g., the map not displaying fully), it’s most likely an SVG viewport issue. Please open an issue, and I’ll get it corrected.  

---

# Thanks  
If you read till here, thanks for taking interest in this. Hope this Ukraine map helps you build something great 🚀  
