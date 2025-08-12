export default function Hamburger({
  width = "75",
  height = "65",
  color = "#C0621B",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 75 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0.109863H75V64.1099H0V0.109863Z"
        fill="url(#paint0_linear_1373_1386)"
      />
      <g opacity="0.62">
        <path
          d="M49.8672 39.0005L56.7578 32.1099L49.8672 25.2192L51.9766 23.1099L60.9766 32.1099L51.9766 41.1099L49.8672 39.0005Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1373_1386"
          x1="75"
          y1="32.1099"
          x2="0"
          y2="32.1099"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#02A4FF" stop-opacity="0.4" />
          <stop offset="1" stop-color="#02A4FF" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
