const PlayComponent = (props,{fill}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="-3 0 28 28"
    {...props}
  >
    <title>{"play"}</title>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M21.415 12.554 2.418.311C1.291-.296 0-.233 0 1.946v24.108c0 1.992 1.385 2.306 2.418 1.635l18.997-12.243a2.076 2.076 0 0 0 0-2.892"
    />
  </svg>
);
export default PlayComponent;
