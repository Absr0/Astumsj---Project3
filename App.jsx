import { useState } from "react";
import ColorButton from "./components/ColorButton";
import ColorPreview from "./components/ColorPreview";
import Card from "./components/Card";
import "./index.css";

function App() {
  const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

  const [selectedColor, setSelectedColor] = useState("");

  return (
    <Card>
      <h1>🎨 Color Palette Picker</h1>

      <div className="buttons">
        {colors.map((color) => (
          <ColorButton
            key={color}
            color={color}
            onClick={() => setSelectedColor(color)}
            isSelected={selectedColor === color}
          />
        ))}
      </div>

      {selectedColor ? (
        <ColorPreview color={selectedColor} />
      ) : (
        <p>No color selected yet</p>
      )}

      <button
        className="reset-btn"
        onClick={() => setSelectedColor("")}
      >
        Reset
      </button>
    </Card>
  );
}

export default App;
