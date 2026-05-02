import svgPaths from "./svg-dh7oh5ja29";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p38ffec00} id="Vector" stroke="var(--stroke-0, #6F6F6F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d={svgPaths.p3cccb600} id="Vector_2" stroke="var(--stroke-0, #6F6F6F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

export default function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] size-full" data-name="Button">
      <Icon />
    </div>
  );
}