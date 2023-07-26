import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={216}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={2}
      className="svg-path"
      d="M20 0v163c-10.09 2.965-17.716 6.599-18 16-.292 9.665 10 17 18 17 12.156-2.501 15.533-6.482 17-17-6.639-7.758-10.361-8.275-17 0v37"
    />
  </svg>
)
export default SvgComponent
