export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 2V30L24 16L8 2Z"
      className="fill-primary"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);
