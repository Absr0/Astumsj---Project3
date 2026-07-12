function ColorButton({ color, onClick, isSelected }) {
  return (
    <button
      onClick={onClick}
      className={`color-btn ${isSelected ? "selected" : ""}`}
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  );
}

export default ColorButton;
