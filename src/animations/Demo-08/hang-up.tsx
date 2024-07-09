import { SVGProps } from "react";

export function Hangup(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .4-.23.74-.56.9c-.98.49-1.87 1.12-2.67 1.85c-.17.18-.42.29-.67.29c-.3 0-.55-.12-.73-.3L.29 13.08a1 1 0 0 1-.29-.7c0-.28.11-.53.29-.71C3.34 8.77 7.46 7 12 7s8.66 1.77 11.71 4.67c.18.18.29.43.29.71c0 .27-.11.52-.29.7l-2.48 2.48c-.18.18-.43.3-.73.3a.98.98 0 0 1-.68-.29c-.79-.73-1.68-1.36-2.66-1.85a1 1 0 0 1-.56-.9v-3.1C15.15 9.25 13.6 9 12 9"
      ></path>
    </svg>
  );
}
