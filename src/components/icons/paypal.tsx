function PaypalIcon() {
  return (
    <svg
      width="26"
      height="30"
      viewBox="0 0 26 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_174_728)">
        <path
          d="M18.5 7.2C20.2 8.2 21 10 21 12C21 14.5 18.5 16.5 16 16.5H13.4L12.8 20.1C12.7532 20.3293 12.6276 20.5349 12.4449 20.6811C12.2621 20.8272 12.0339 20.9047 11.8 20.9H9.1C9.02501 20.9015 8.95064 20.8861 8.88239 20.855C8.81415 20.8239 8.75378 20.7778 8.70577 20.7202C8.65775 20.6626 8.62331 20.5949 8.605 20.5222C8.58669 20.4494 8.58498 20.3735 8.6 20.3L8.8 18.9M11 13H13.5C16 13 18.5 10.5 18.5 8C18.5 5 16.6 3 13.5 3H8C7.5 3 7 3.5 7 4L5 18C5 18.5 5.5 19 6 19H8.8L10 14C10.1 13.4 10.4 13 11 13Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_174_728"
          x="-3"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_174_728"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_174_728"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default PaypalIcon;
