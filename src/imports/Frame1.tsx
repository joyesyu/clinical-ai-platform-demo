import svgPaths from "./svg-cl1dbnd7kw";

function Icon() {
  return (
    <div className="absolute left-[1.75px] size-[24px] top-[8.75px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p369f8680} id="Vector" stroke="var(--stroke-0, #6F6F6F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d={svgPaths.p21b0a2c0} id="Vector_2" stroke="var(--stroke-0, #6F6F6F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#ff4d4f] content-stretch flex items-center justify-center left-[11.5px] px-[3.5px] rounded-[16777200px] size-[18px] top-0" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[15px] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        3
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Icon />
      <Text />
    </div>
  );
}