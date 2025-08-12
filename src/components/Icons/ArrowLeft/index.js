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
        fill="url(#paint0_linear_1373_1376)"
      />
      <g opacity="0.62">
        <path
          d="M25.1328 39.0005L18.2422 32.1099L25.1328 25.2192L23.0234 23.1099L14.0234 32.1099L23.0234 41.1099L25.1328 39.0005Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1373_1376"
          x1="0"
          y1="32.1099"
          x2="75"
          y2="32.1099"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D6214C" stop-opacity="0.4" />
          <stop offset="1" stop-color="#D6214C" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
