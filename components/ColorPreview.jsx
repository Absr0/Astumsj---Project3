function ColorPreview({ color }) {
  return (
    <div className="preview-container">
      <div
        className="preview-box"
        style={{ backgroundColor: color }}
      ></div>

      <h3>{color}</h3>
    </div>
  );
}

export default ColorPreview;
