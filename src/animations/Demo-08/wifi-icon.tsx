import { SVGProps } from "react";

export function WifiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.25rem"
      height="1.25rem"
      viewBox="0 -3 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9m8 8l3 3l3-3a4.237 4.237 0 0 0-6 0m-4-4l2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13"
      ></path>
    </svg>
  );
}
