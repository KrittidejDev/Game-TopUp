export default function Hamburger({
  width = "14",
  height = "8",
  color = "#C0621B",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7V8H0V7Z"
        fill={color}
      />
    </svg>
  );
}
