export default function Button({
  text = "Click me",
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick = () => {},
}) {
  const className = `btn btn-${variant} btn-${size}`;

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
