import svgPaths from "./svg-6389u5k8l8";

function AlertTriangle() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="AlertTriangle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="AlertTriangle">
          <path d={svgPaths.p5fd2960} id="Vector" stroke="var(--stroke-0, #FF4D4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M7 5.25V7.58333" id="Vector_2" stroke="var(--stroke-0, #FF4D4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d="M7 9.91667H7.00583" id="Vector_3" stroke="var(--stroke-0, #FF4D4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Container4({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[rgba(255,77,79,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[20px]"} data-name="Container">
      <AlertTriangle />
    </div>
  );
}

function H({ className }: { className?: string }) {
  return (
    <div className={className || "flex-[1_0_0] h-[27px] min-h-px min-w-px relative"} data-name="h2">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[18px] text-black top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Error Diagnostics
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <Container4 />
      <H />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function P() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        High error volume detected • Prioritize investigation
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[46.75px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[1.75px] items-start relative size-full">
        <Frame />
        <P />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[46.75px] relative shrink-0 w-[315.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[25px] relative rounded-[2px] shrink-0 w-[34.492px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[17.5px] text-[#6f6f6f] text-[12px] text-center top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          1h
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(0,0,0,0.85)] flex-[1_0_0] h-[25px] min-h-px min-w-px relative rounded-[2px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[21px] text-[#f8f8f8] text-[12px] text-center top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          24h
        </p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[25px] relative rounded-[2px] shrink-0 w-[34.586px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[17.5px] text-[#6f6f6f] text-[12px] text-center top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          7d
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(248,248,248,0.5)] flex-[1_0_0] h-[34px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-px pt-[4.5px] px-[4.5px] relative size-full">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[34px] relative shrink-0 w-[119px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[81.75px] items-center justify-between left-px px-[21px] top-px w-[1556px]" data-name="Container">
      <Container2 />
      <Container5 />
    </div>
  );
}

function Server() {
  return (
    <div className="absolute left-0 size-[14px] top-[3.5px]" data-name="Server">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_613_2360)" id="Server">
          <path d={svgPaths.p23c52300} id="Vector" stroke="var(--stroke-0, #161616)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="1.16667" />
          <path d={svgPaths.p2505ef80} id="Vector_2" stroke="var(--stroke-0, #161616)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="1.16667" />
          <path d="M3.5 3.5H3.50583" id="Vector_3" stroke="var(--stroke-0, #161616)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="1.16667" />
          <path d="M3.5 10.5H3.50583" id="Vector_4" stroke="var(--stroke-0, #161616)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_613_2360">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Div() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="div">
      <Server />
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[21px] left-[65.5px] text-[14px] text-[rgba(22,22,22,0.85)] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        System Errors
      </p>
    </div>
  );
}

function Span() {
  return <div className="bg-[rgba(111,111,111,0.75)] h-[1.75px] rounded-tl-[16777200px] rounded-tr-[16777200px] shrink-0 w-full" data-name="span" />;
}

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12.25px] h-[35px] items-start left-[21px] top-[14px] w-[109.117px]" data-name="button">
      <Div />
      <Span />
    </div>
  );
}

function MessageSquare() {
  return (
    <div className="absolute left-0 size-[14px] top-[3.5px]" data-name="MessageSquare">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="MessageSquare">
          <path d={svgPaths.pff358a0} id="Vector" stroke="var(--stroke-0, #6F6F6F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute bg-[#bfbfbf] h-[18.5px] left-[113.09px] rounded-[16777200px] top-[1.25px] w-[16.188px]" data-name="span">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[15px] left-[8.25px] text-[#6f6f6f] text-[10px] text-center top-[1.25px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        3
      </p>
    </div>
  );
}

function Div1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="div">
      <MessageSquare />
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[21px] left-[62px] text-[#6f6f6f] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        User Reports
      </p>
      <Span1 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35px] items-start left-[158.12px] top-[14px] w-[129.273px]" data-name="button">
      <Div1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white border-[#d9d9d9] border-b border-solid h-[50px] left-px top-[82.75px] w-[1556px]" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Activity() {
  return (
    <div className="absolute left-0 size-[14px] top-[3.5px]" data-name="Activity">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_613_2355)" id="Activity">
          <path d={svgPaths.p132cf580} id="Vector" stroke="var(--stroke-0, #6F6F6F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_613_2355">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function H1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="h3">
      <Activity />
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[21px] left-[21px] text-[#161616] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Error Sources
      </p>
    </div>
  );
}

function StatIcon() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="stat.icon">
      <div className="absolute inset-[8.32%_12.49%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6706 12.8364">
            <path d={svgPaths.p3077a600} id="Vector" stroke="var(--stroke-0, #FF4D4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Span2() {
  return (
    <div className="bg-[rgba(255,77,79,0.1)] relative rounded-[4px] shrink-0 size-[28px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7px] px-[7px] relative size-full">
        <StatIcon />
      </div>
    </div>
  );
}

function Svg() {
  return <div className="h-[24px] opacity-50 shrink-0 w-[60px]" data-name="svg" />;
}

function Container12() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start justify-between left-[15px] top-[15px] w-[338px]" data-name="Container">
      <Span2 />
      <Svg />
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[45.305px]" data-name="span">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[24px] text-[rgba(22,22,22,0.85)] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        42%
      </p>
    </div>
  );
}

function Span4() {
  return (
    <div className="absolute h-[18px] left-[52.3px] top-[13px] w-[72.258px]" data-name="span">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap">(842/2000)</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[36px] left-[15px] top-[50px] w-[338px]" data-name="Container">
      <Span3 />
      <Span4 />
    </div>
  );
}

function P1() {
  return (
    <div className="absolute h-[21px] left-[15px] top-[89.5px] w-[338px]" data-name="p">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#161616] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Runtime
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white col-1 h-[125.5px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container12 />
        <Container13 />
        <P1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function StatIcon1() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="stat.icon">
      <div className="absolute bottom-[16.67%] left-1/2 right-[49.96%] top-[83.33%]" data-name="Vector">
        <div className="absolute inset-[-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.1725 1.16667">
            <path d="M0.583333 0.583333H0.589167" id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_35.42%_31.55%_35.42%]" data-name="Vector">
        <div className="absolute inset-[-69.96%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.25 2.00042">
            <path d={svgPaths.p638b000} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[42.37%_57.62%_46.42%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-37.18%_-19.35%_-37.17%_-19.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.1826 2.73594">
            <path d={svgPaths.p1b20bb00} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[47.23%_20.83%_46.42%_70.8%]" data-name="Vector">
        <div className="absolute inset-[-65.67%_-49.83%_-65.66%_-49.83%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.33751 2.05518">
            <path d={svgPaths.p17756240} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.74%_74.26%_63.25%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-37.85%_-23.95%_-37.84%_-23.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.60341 2.70857">
            <path d={svgPaths.p26995a80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.84%_8.33%_63.25%_44.63%]" data-name="Vector">
        <div className="absolute inset-[-26.18%_-8.86%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.75137 3.39467">
            <path d={svgPaths.p37400c80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p1d50600} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Span5() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[4px] shrink-0 size-[28px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7px] px-[7px] relative size-full">
        <StatIcon1 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start justify-between left-[15px] top-[15px] w-[338px]" data-name="Container">
      <Span5 />
    </div>
  );
}

function Span6() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[45.305px]" data-name="span">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[24px] text-[rgba(22,22,22,0.85)] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        35%
      </p>
    </div>
  );
}

function Span7() {
  return (
    <div className="absolute h-[18px] left-[52.3px] top-[13px] w-[72.258px]" data-name="span">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap">(701/2000)</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[36px] left-[15px] top-[50px] w-[338px]" data-name="Container">
      <Span6 />
      <Span7 />
    </div>
  );
}

function P2() {
  return (
    <div className="absolute h-[21px] left-[15px] top-[89.5px] w-[338px]" data-name="p">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#161616] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Network
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white col-2 h-[125.5px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container15 />
        <Container16 />
        <P2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function StatIcon2() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="stat.icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 12.8333">
            <path d={svgPaths.p255b5a00} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.16667 3.5">
            <path d="M0.583333 0.583333V2.91667" id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.1725 1.16667">
            <path d="M0.583333 0.583333H0.589167" id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Span8() {
  return (
    <div className="bg-[rgba(43,127,255,0.1)] relative rounded-[4px] shrink-0 size-[28px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7px] px-[7px] relative size-full">
        <StatIcon2 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start justify-between left-[15px] top-[15px] w-[338px]" data-name="Container">
      <Span8 />
    </div>
  );
}

function Span9() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[45.305px]" data-name="span">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[24px] text-[rgba(22,22,22,0.85)] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        15%
      </p>
    </div>
  );
}

function Span10() {
  return (
    <div className="absolute h-[18px] left-[52.3px] top-[13px] w-[72.258px]" data-name="span">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap">(300/2000)</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[36px] left-[15px] top-[50px] w-[338px]" data-name="Container">
      <Span9 />
      <Span10 />
    </div>
  );
}

function P3() {
  return (
    <div className="absolute h-[21px] left-[15px] top-[89.5px] w-[338px]" data-name="p">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#161616] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Schema
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white col-3 h-[125.5px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container18 />
        <Container19 />
        <P3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function StatIcon3() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="stat.icon">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 12.8353">
            <path d={svgPaths.p127cad00} id="Vector" stroke="var(--stroke-0, #AD46FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Span11() {
  return (
    <div className="bg-[rgba(173,70,255,0.1)] relative rounded-[4px] shrink-0 size-[28px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7px] px-[7px] relative size-full">
        <StatIcon3 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start justify-between left-[15px] top-[15px] w-[338px]" data-name="Container">
      <Span11 />
    </div>
  );
}

function Span12() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[31.531px]" data-name="span">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[24px] text-[rgba(22,22,22,0.85)] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        8%
      </p>
    </div>
  );
}

function Span13() {
  return (
    <div className="absolute h-[18px] left-[38.53px] top-[13px] w-[72.258px]" data-name="span">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap">(160/2000)</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[36px] left-[15px] top-[50px] w-[338px]" data-name="Container">
      <Span12 />
      <Span13 />
    </div>
  );
}

function P4() {
  return (
    <div className="absolute h-[21px] left-[15px] top-[89.5px] w-[338px]" data-name="p">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[21px] left-0 text-[#161616] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Auth
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white col-4 h-[125.5px] justify-self-stretch relative rounded-[8px] row-1 shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container21 />
        <Container22 />
        <P4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="gap-x-[14px] gap-y-[14px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container14 />
      <Container17 />
      <Container20 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[160.5px] items-start relative shrink-0 w-full" data-name="Container">
      <H1 />
      <Container10 />
    </div>
  );
}

function FileWarning() {
  return (
    <div className="absolute left-0 size-[14px] top-[3.5px]" data-name="FileWarning">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="FileWarning">
          <path d={svgPaths.pd1f0180} id="Vector" stroke="var(--stroke-0, #6F6F6F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 5.25V7.58333" id="Vector_2" stroke="var(--stroke-0, #6F6F6F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.91667H7.00583" id="Vector_3" stroke="var(--stroke-0, #6F6F6F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function H2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[165.039px]" data-name="h3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <FileWarning />
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[21px] left-[21px] text-[#161616] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Top User-Facing Errors
        </p>
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div className="absolute left-[7px] size-[10.5px] top-[7.25px]" data-name="Filter">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g clipPath="url(#clip0_613_2324)" id="Filter">
          <path d={svgPaths.pd6c6ac0} id="Vector" stroke="var(--stroke-0, #6F6F6F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_613_2324">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[25px] relative rounded-[3.5px] shrink-0 w-[175.016px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Filter />
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[95.75px] text-[#6f6f6f] text-[12px] text-center top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Only new since last release
        </p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[25px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <H2 />
      <Button5 />
    </div>
  );
}

function P5() {
  return (
    <div className="h-[17.141px] relative shrink-0 w-[332.336px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[17.143px] left-0 not-italic text-[#161616] text-[12px] top-[-0.5px] whitespace-nowrap">Connection timeout waiting for model inference</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute content-stretch flex h-[17.141px] items-center left-[10.5px] top-[12.43px] w-[1085px]" data-name="div">
      <P5 />
    </div>
  );
}

function Td() {
  return (
    <div className="absolute h-[42.5px] left-0 top-0 w-[1106px]" data-name="td">
      <Div2 />
    </div>
  );
}

function Td1() {
  return (
    <div className="absolute h-[42.5px] left-[1106px] top-0 w-[70px]" data-name="td">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[17.143px] left-[10.5px] text-[12px] text-[rgba(0,0,0,0.85)] top-[12.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        543
      </p>
    </div>
  );
}

function Td2() {
  return (
    <div className="absolute h-[42.5px] left-[1176px] top-0 w-[56px]" data-name="td">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[14px] left-[10.5px] text-[#161616] text-[10.5px] top-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        +12%
      </p>
    </div>
  );
}

function Users() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[1.75px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g clipPath="url(#clip0_613_2377)" id="Users">
          <path d={svgPaths.p19300900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p2f2800} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p4ab3860} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p3798fb60} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_613_2377">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span14() {
  return (
    <div className="absolute h-[14px] left-[10.5px] top-[14px] w-[49px]" data-name="span">
      <Users />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[14px] left-[14px] text-[10.5px] text-[rgba(0,0,0,0.25)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` 12`}</p>
    </div>
  );
}

function Td3() {
  return (
    <div className="absolute h-[42.5px] left-[1232px] top-0 w-[70px]" data-name="td">
      <Span14 />
    </div>
  );
}

function Server1() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[1.75px]" data-name="Server">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g clipPath="url(#clip0_613_2315)" id="Server">
          <path d={svgPaths.p1d2ec980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="0.875" />
          <path d={svgPaths.p25c81900} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="0.875" />
          <path d="M2.625 2.625H2.62938" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="0.875" />
          <path d="M2.625 7.875H2.62938" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_613_2315">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span15() {
  return (
    <div className="absolute h-[14px] left-[10.5px] top-[14px] w-[77px]" data-name="span">
      <Server1 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[14px] left-[14px] text-[10.5px] text-[rgba(0,0,0,0.85)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` Inference`}</p>
    </div>
  );
}

function Td4() {
  return (
    <div className="absolute h-[42.5px] left-[1302px] top-0 w-[98px]" data-name="td">
      <Span15 />
    </div>
  );
}

function GitBranch() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[1.75px]" data-name="GitBranch">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="GitBranch">
          <path d="M2.625 1.3125V6.5625" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.pe83880} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p8382a80} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p3001a5c0} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Span16() {
  return (
    <div className="absolute h-[14px] left-[10.5px] top-[14px] w-[49px]" data-name="span">
      <GitBranch />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[14px] left-[14px] text-[10.5px] text-[rgba(0,0,0,0.25)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` v1.3.2`}</p>
    </div>
  );
}

function Td5() {
  return (
    <div className="absolute h-[42.5px] left-[1400px] top-0 w-[70px]" data-name="td">
      <Span16 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="absolute left-[17.5px] size-[14px] top-[14.8px]" data-name="ChevronDown">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Td6() {
  return (
    <div className="absolute h-[42.5px] left-[1470px] top-0 w-[42px]" data-name="td">
      <ChevronDown />
    </div>
  );
}

function Tr() {
  return (
    <div className="absolute border-[#d9d9d9] border-b border-solid h-[42.5px] left-0 top-0 w-[1512px]" data-name="tr">
      <Td />
      <Td1 />
      <Td2 />
      <Td3 />
      <Td4 />
      <Td5 />
      <Td6 />
    </div>
  );
}

function P6() {
  return (
    <div className="h-[17.141px] relative shrink-0 w-[469.602px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[17.143px] left-0 not-italic text-[#161616] text-[12px] top-[-0.5px] whitespace-nowrap">Invalid input shape: expected (224, 224, 3) but got (512, 512, 3)</p>
      </div>
    </div>
  );
}

function Span17() {
  return (
    <div className="bg-[rgba(43,127,255,0.1)] h-[20.5px] relative rounded-[3.5px] shrink-0 w-[33.938px]" data-name="span">
      <div aria-hidden="true" className="absolute border border-[rgba(43,127,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[6.25px] text-[#155dfc] text-[10px] top-[2.25px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          New
        </p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute content-stretch flex gap-[7px] h-[20.5px] items-center left-[10.5px] top-[11.25px] w-[1085px]" data-name="div">
      <P6 />
      <Span17 />
    </div>
  );
}

function Td7() {
  return (
    <div className="absolute h-[43px] left-0 top-0 w-[1106px]" data-name="td">
      <Div3 />
    </div>
  );
}

function Td8() {
  return (
    <div className="absolute h-[43px] left-[1106px] top-0 w-[70px]" data-name="td">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[17.143px] left-[10.5px] text-[12px] text-[rgba(0,0,0,0.85)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        312
      </p>
    </div>
  );
}

function Td9() {
  return (
    <div className="absolute h-[43px] left-[1176px] top-0 w-[56px]" data-name="td">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[14px] left-[10.5px] text-[#00bc7d] text-[10.5px] top-[14.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        -5%
      </p>
    </div>
  );
}

function Users1() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[1.75px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g clipPath="url(#clip0_613_2377)" id="Users">
          <path d={svgPaths.p19300900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p2f2800} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p4ab3860} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p3798fb60} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_613_2377">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span18() {
  return (
    <div className="absolute h-[14px] left-[10.5px] top-[14.5px] w-[49px]" data-name="span">
      <Users1 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[14px] left-[14px] text-[10.5px] text-[rgba(0,0,0,0.25)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` 8`}</p>
    </div>
  );
}

function Td10() {
  return (
    <div className="absolute h-[43px] left-[1232px] top-0 w-[70px]" data-name="td">
      <Span18 />
    </div>
  );
}

function Server2() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[1.75px]" data-name="Server">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g clipPath="url(#clip0_613_2315)" id="Server">
          <path d={svgPaths.p1d2ec980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="0.875" />
          <path d={svgPaths.p25c81900} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="0.875" />
          <path d="M2.625 2.625H2.62938" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="0.875" />
          <path d="M2.625 7.875H2.62938" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_613_2315">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span19() {
  return (
    <div className="absolute h-[14px] left-[10.5px] top-[14.5px] w-[77px]" data-name="span">
      <Server2 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[14px] left-[14px] text-[10.5px] text-[rgba(0,0,0,0.85)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` Preprocess`}</p>
    </div>
  );
}

function Td11() {
  return (
    <div className="absolute h-[43px] left-[1302px] top-0 w-[98px]" data-name="td">
      <Span19 />
    </div>
  );
}

function GitBranch1() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[1.75px]" data-name="GitBranch">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="GitBranch">
          <path d="M2.625 1.3125V6.5625" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.pe83880} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p8382a80} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p3001a5c0} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Span20() {
  return (
    <div className="absolute h-[14px] left-[10.5px] top-[14.5px] w-[49px]" data-name="span">
      <GitBranch1 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[14px] left-[14px] text-[10.5px] text-[rgba(0,0,0,0.25)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` v2.1.0`}</p>
    </div>
  );
}

function Td12() {
  return (
    <div className="absolute h-[43px] left-[1400px] top-0 w-[70px]" data-name="td">
      <Span20 />
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="absolute left-[17.5px] size-[14px] top-[15.3px]" data-name="ChevronDown">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Td13() {
  return (
    <div className="absolute h-[43px] left-[1470px] top-0 w-[42px]" data-name="td">
      <ChevronDown1 />
    </div>
  );
}

function Tr1() {
  return (
    <div className="absolute border-[#d9d9d9] border-b border-solid h-[43px] left-0 top-[42.5px] w-[1512px]" data-name="tr">
      <Td7 />
      <Td8 />
      <Td9 />
      <Td10 />
      <Td11 />
      <Td12 />
      <Td13 />
    </div>
  );
}

function P7() {
  return (
    <div className="h-[17.141px] relative shrink-0 w-[296.211px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[17.143px] left-0 not-italic text-[#161616] text-[12px] top-[-0.5px] whitespace-nowrap">{`API Key quota exceeded for tier 'starter'`}</p>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute content-stretch flex h-[17.141px] items-center left-[10.5px] top-[16.43px] w-[1085px]" data-name="div">
      <P7 />
    </div>
  );
}

function Td14() {
  return (
    <div className="absolute h-[50px] left-0 top-0 w-[1106px]" data-name="td">
      <Div4 />
    </div>
  );
}

function Td15() {
  return (
    <div className="absolute h-[50px] left-[1106px] top-0 w-[70px]" data-name="td">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[17.143px] left-[10.5px] text-[12px] text-[rgba(0,0,0,0.85)] top-[16.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        156
      </p>
    </div>
  );
}

function Td16() {
  return (
    <div className="absolute h-[50px] left-[1176px] top-0 w-[56px]" data-name="td">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[14px] left-[10.5px] text-[#161616] text-[10.5px] top-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        +2%
      </p>
    </div>
  );
}

function Users2() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[1.75px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g clipPath="url(#clip0_613_2377)" id="Users">
          <path d={svgPaths.p19300900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p2f2800} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p4ab3860} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p3798fb60} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_613_2377">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span21() {
  return (
    <div className="absolute h-[14px] left-[10.5px] top-[18px] w-[49px]" data-name="span">
      <Users2 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[14px] left-[14px] text-[10.5px] text-[rgba(0,0,0,0.25)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` 15`}</p>
    </div>
  );
}

function Td17() {
  return (
    <div className="absolute h-[50px] left-[1232px] top-0 w-[70px]" data-name="td">
      <Span21 />
    </div>
  );
}

function Server3() {
  return (
    <div className="absolute h-[10.5px] left-0 top-[8.75px] w-[10.25px]" data-name="Server">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.25 10.5">
        <g id="Server">
          <path d={svgPaths.p235170c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="0.854167" />
          <path d={svgPaths.p27f99640} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="0.854167" />
          <path d="M2.5625 2.6875H2.56677" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="0.854167" />
          <path d="M2.5625 7.8125H2.56677" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="0.854167" />
        </g>
      </svg>
    </div>
  );
}

function Span22() {
  return (
    <div className="absolute h-[28px] left-[10.5px] top-[11px] w-[77px]" data-name="span">
      <Server3 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[14px] left-[13.75px] text-[10.5px] text-[rgba(0,0,0,0.85)] top-0 w-[41px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` Auth Gateway`}</p>
    </div>
  );
}

function Td18() {
  return (
    <div className="absolute h-[50px] left-[1302px] top-0 w-[98px]" data-name="td">
      <Span22 />
    </div>
  );
}

function GitBranch2() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[1.75px]" data-name="GitBranch">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="GitBranch">
          <path d="M2.625 1.3125V6.5625" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.pe83880} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p8382a80} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p3001a5c0} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Span23() {
  return (
    <div className="absolute h-[14px] left-[10.5px] top-[18px] w-[49px]" data-name="span">
      <GitBranch2 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[14px] left-[14px] text-[10.5px] text-[rgba(0,0,0,0.25)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` v2.1.0`}</p>
    </div>
  );
}

function Td19() {
  return (
    <div className="absolute h-[50px] left-[1400px] top-0 w-[70px]" data-name="td">
      <Span23 />
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="absolute left-[17.5px] size-[14px] top-[18.8px]" data-name="ChevronDown">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Td20() {
  return (
    <div className="absolute h-[50px] left-[1470px] top-0 w-[42px]" data-name="td">
      <ChevronDown2 />
    </div>
  );
}

function Tr2() {
  return (
    <div className="absolute border-[#d9d9d9] border-b border-solid h-[50px] left-0 top-[85.5px] w-[1512px]" data-name="tr">
      <Td14 />
      <Td15 />
      <Td16 />
      <Td17 />
      <Td18 />
      <Td19 />
      <Td20 />
    </div>
  );
}

function P8() {
  return (
    <div className="h-[17.141px] relative shrink-0 w-[375.68px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[17.143px] left-0 not-italic text-[#161616] text-[12px] top-[-0.5px] whitespace-nowrap">{`Model version 'v1.5.2' is deprecated and unavailable`}</p>
      </div>
    </div>
  );
}

function Div5() {
  return (
    <div className="absolute content-stretch flex h-[17.141px] items-center left-[10.5px] top-[12.93px] w-[1085px]" data-name="div">
      <P8 />
    </div>
  );
}

function Td21() {
  return (
    <div className="absolute h-[42.5px] left-0 top-0 w-[1106px]" data-name="td">
      <Div5 />
    </div>
  );
}

function Td22() {
  return (
    <div className="absolute h-[42.5px] left-[1106px] top-0 w-[70px]" data-name="td">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[17.143px] left-[10.5px] text-[12px] text-[rgba(0,0,0,0.85)] top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        89
      </p>
    </div>
  );
}

function Td23() {
  return (
    <div className="absolute h-[42.5px] left-[1176px] top-0 w-[56px]" data-name="td">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[14px] left-[10.5px] text-[#161616] text-[10.5px] top-[14.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        +45%
      </p>
    </div>
  );
}

function Users3() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[1.75px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g clipPath="url(#clip0_613_2377)" id="Users">
          <path d={svgPaths.p19300900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p2f2800} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p4ab3860} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p3798fb60} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_613_2377">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span24() {
  return (
    <div className="absolute h-[14px] left-[10.5px] top-[14.5px] w-[49px]" data-name="span">
      <Users3 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[14px] left-[14px] text-[10.5px] text-[rgba(0,0,0,0.25)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` 5`}</p>
    </div>
  );
}

function Td24() {
  return (
    <div className="absolute h-[42.5px] left-[1232px] top-0 w-[70px]" data-name="td">
      <Span24 />
    </div>
  );
}

function Server4() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[1.75px]" data-name="Server">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g clipPath="url(#clip0_613_2315)" id="Server">
          <path d={svgPaths.p1d2ec980} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="0.875" />
          <path d={svgPaths.p25c81900} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="0.875" />
          <path d="M2.625 2.625H2.62938" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="0.875" />
          <path d="M2.625 7.875H2.62938" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85" strokeWidth="0.875" />
        </g>
        <defs>
          <clipPath id="clip0_613_2315">
            <rect fill="white" height="10.5" width="10.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span25() {
  return (
    <div className="absolute h-[14px] left-[10.5px] top-[14.5px] w-[77px]" data-name="span">
      <Server4 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[14px] left-[14px] text-[10.5px] text-[rgba(0,0,0,0.85)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` Router`}</p>
    </div>
  );
}

function Td25() {
  return (
    <div className="absolute h-[42.5px] left-[1302px] top-0 w-[98px]" data-name="td">
      <Span25 />
    </div>
  );
}

function GitBranch3() {
  return (
    <div className="absolute left-0 size-[10.5px] top-[1.75px]" data-name="GitBranch">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="GitBranch">
          <path d="M2.625 1.3125V6.5625" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.pe83880} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p8382a80} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
          <path d={svgPaths.p3001a5c0} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Span26() {
  return (
    <div className="absolute h-[14px] left-[10.5px] top-[14.5px] w-[49px]" data-name="span">
      <GitBranch3 />
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[14px] left-[14px] text-[10.5px] text-[rgba(0,0,0,0.25)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{` v1.5.2`}</p>
    </div>
  );
}

function Td26() {
  return (
    <div className="absolute h-[42.5px] left-[1400px] top-0 w-[70px]" data-name="td">
      <Span26 />
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="absolute left-[17.5px] size-[14px] top-[15.3px]" data-name="ChevronDown">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Td27() {
  return (
    <div className="absolute h-[42.5px] left-[1470px] top-0 w-[42px]" data-name="td">
      <ChevronDown3 />
    </div>
  );
}

function Tr3() {
  return (
    <div className="absolute h-[42.5px] left-0 top-[135.5px] w-[1512px]" data-name="tr">
      <Td21 />
      <Td22 />
      <Td23 />
      <Td24 />
      <Td25 />
      <Td26 />
      <Td27 />
    </div>
  );
}

function Tbody() {
  return (
    <div className="absolute h-[178px] left-0 top-[32px] w-[1512px]" data-name="tbody">
      <Tr />
      <Tr1 />
      <Tr2 />
      <Tr3 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute h-[210px] left-px top-px w-[1512px]" data-name="table">
      <Tbody />
    </div>
  );
}

function Th() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[1106px]" data-name="th">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[10.5px] text-[#6f6f6f] text-[12px] top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Error Message
      </p>
    </div>
  );
}

function Th1() {
  return (
    <div className="absolute h-[32px] left-[1106px] top-0 w-[70px]" data-name="th">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[10.5px] text-[#6f6f6f] text-[12px] top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Count
      </p>
    </div>
  );
}

function Th2() {
  return (
    <div className="absolute h-[32px] left-[1176px] top-0 w-[56px]" data-name="th">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[10.5px] text-[#6f6f6f] text-[12px] top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Trend
      </p>
    </div>
  );
}

function Th3() {
  return (
    <div className="absolute h-[32px] left-[1232px] top-0 w-[70px]" data-name="th">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[10.5px] text-[#6f6f6f] text-[12px] top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Users
      </p>
    </div>
  );
}

function Th4() {
  return (
    <div className="absolute h-[32px] left-[1302px] top-0 w-[98px]" data-name="th">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[10.5px] text-[#6f6f6f] text-[12px] top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Component
      </p>
    </div>
  );
}

function Th5() {
  return (
    <div className="absolute h-[32px] left-[1400px] top-0 w-[70px]" data-name="th">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[10.5px] text-[#6f6f6f] text-[12px] top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Version
      </p>
    </div>
  );
}

function Th6() {
  return <div className="absolute h-[32px] left-[1470px] top-0 w-[42px]" data-name="th" />;
}

function Tr4() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[1512px]" data-name="tr">
      <Th />
      <Th1 />
      <Th2 />
      <Th3 />
      <Th4 />
      <Th5 />
      <Th6 />
    </div>
  );
}

function Thead() {
  return (
    <div className="absolute bg-[rgba(191,191,191,0.5)] h-[32px] left-px top-px w-[1512px]" data-name="thead">
      <Tr4 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white h-[212px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Table />
        <Thead />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[251px] items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Clock() {
  return (
    <div className="absolute left-0 size-[14px] top-[3.5px]" data-name="Clock">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_613_2305)" id="Clock">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #6F6F6F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector_2" stroke="var(--stroke-0, #6F6F6F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_613_2305">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function H3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="h3">
      <Clock />
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[21px] left-[21px] text-[#161616] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recent Diagnostic Logs
      </p>
    </div>
  );
}

function Td28() {
  return (
    <div className="absolute h-[33.336px] left-0 top-0 w-[78.797px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.41px] whitespace-nowrap">14:45:22</p>
    </div>
  );
}

function Span27() {
  return (
    <div className="absolute bg-[rgba(255,77,79,0.1)] content-stretch flex h-[17.5px] items-start left-[10.5px] px-[6.25px] py-[2.75px] rounded-[3.5px] top-[8.16px] w-[24.688px]" data-name="span">
      <div aria-hidden="true" className="absolute border border-[rgba(255,77,79,0.2)] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#ff4d4f] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        P1
      </p>
    </div>
  );
}

function Td29() {
  return (
    <div className="absolute h-[33.336px] left-[78.8px] top-0 w-[64.102px]" data-name="td">
      <Span27 />
    </div>
  );
}

function Td30() {
  return (
    <div className="absolute h-[33.336px] left-[142.9px] top-0 w-[48.836px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#161616] text-[12px] top-[7.41px] whitespace-nowrap">500</p>
    </div>
  );
}

function Td31() {
  return (
    <div className="absolute h-[33.336px] left-[191.73px] top-0 w-[112px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.41px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inference
      </p>
    </div>
  );
}

function P9() {
  return (
    <div className="absolute h-[18.836px] left-[10.5px] overflow-clip top-[7px] w-[1016.789px]" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18.84px] left-0 text-[#161616] text-[12px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        CUDA out of memory during inference batch processing
      </p>
    </div>
  );
}

function Td32() {
  return (
    <div className="absolute h-[33.336px] left-[303.73px] top-0 w-[1037.789px]" data-name="td">
      <P9 />
    </div>
  );
}

function Td33() {
  return (
    <div className="absolute h-[33.336px] left-[1341.52px] top-0 w-[100.477px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.41px] whitespace-nowrap">trace_88293</p>
    </div>
  );
}

function Td34() {
  return (
    <div className="absolute h-[33.336px] left-[1442px] top-0 w-[70px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.41px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        v2.1.0
      </p>
    </div>
  );
}

function Tr5() {
  return (
    <div className="absolute border-[#d9d9d9] border-b border-solid h-[33.336px] left-0 top-0 w-[1512px]" data-name="tr">
      <Td28 />
      <Td29 />
      <Td30 />
      <Td31 />
      <Td32 />
      <Td33 />
      <Td34 />
    </div>
  );
}

function Td35() {
  return (
    <div className="absolute h-[33.836px] left-0 top-0 w-[78.797px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">14:42:10</p>
    </div>
  );
}

function Span28() {
  return (
    <div className="absolute bg-[rgba(254,154,0,0.1)] content-stretch flex h-[17.5px] items-start left-[10.5px] px-[6.25px] py-[2.75px] rounded-[3.5px] top-[8.66px] w-[24.688px]" data-name="span">
      <div aria-hidden="true" className="absolute border border-[rgba(254,154,0,0.2)] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#e17100] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        P2
      </p>
    </div>
  );
}

function Td36() {
  return (
    <div className="absolute h-[33.836px] left-[78.8px] top-0 w-[64.102px]" data-name="td">
      <Span28 />
    </div>
  );
}

function Td37() {
  return (
    <div className="absolute h-[33.836px] left-[142.9px] top-0 w-[48.836px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap">503</p>
    </div>
  );
}

function Td38() {
  return (
    <div className="absolute h-[33.836px] left-[191.73px] top-0 w-[112px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Network
      </p>
    </div>
  );
}

function P10() {
  return (
    <div className="absolute h-[18.836px] left-[10.5px] overflow-clip top-[7.5px] w-[1016.789px]" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18.84px] left-0 text-[#161616] text-[12px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Connection reset by peer while reading request body
      </p>
    </div>
  );
}

function Td39() {
  return (
    <div className="absolute h-[33.836px] left-[303.73px] top-0 w-[1037.789px]" data-name="td">
      <P10 />
    </div>
  );
}

function Td40() {
  return (
    <div className="absolute h-[33.836px] left-[1341.52px] top-0 w-[100.477px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">trace_77123</p>
    </div>
  );
}

function Td41() {
  return (
    <div className="absolute h-[33.836px] left-[1442px] top-0 w-[70px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        v2.1.0
      </p>
    </div>
  );
}

function Tr6() {
  return (
    <div className="absolute border-[#d9d9d9] border-b border-solid h-[33.836px] left-0 top-[33.34px] w-[1512px]" data-name="tr">
      <Td35 />
      <Td36 />
      <Td37 />
      <Td38 />
      <Td39 />
      <Td40 />
      <Td41 />
    </div>
  );
}

function Td42() {
  return (
    <div className="absolute h-[33.836px] left-0 top-0 w-[78.797px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">14:38:55</p>
    </div>
  );
}

function Span29() {
  return (
    <div className="absolute bg-[rgba(254,154,0,0.1)] content-stretch flex h-[17.5px] items-start left-[10.5px] px-[6.25px] py-[2.75px] rounded-[3.5px] top-[8.66px] w-[24.688px]" data-name="span">
      <div aria-hidden="true" className="absolute border border-[rgba(254,154,0,0.2)] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#e17100] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        P2
      </p>
    </div>
  );
}

function Td43() {
  return (
    <div className="absolute h-[33.836px] left-[78.8px] top-0 w-[64.102px]" data-name="td">
      <Span29 />
    </div>
  );
}

function Td44() {
  return (
    <div className="absolute h-[33.836px] left-[142.9px] top-0 w-[48.836px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap">400</p>
    </div>
  );
}

function Td45() {
  return (
    <div className="absolute h-[33.836px] left-[191.73px] top-0 w-[112px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Schema
      </p>
    </div>
  );
}

function P11() {
  return (
    <div className="absolute h-[18.836px] left-[10.5px] overflow-clip top-[7.5px] w-[1016.789px]" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18.84px] left-0 text-[#161616] text-[12px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Missing required field 'patient_age' in input JSON`}</p>
    </div>
  );
}

function Td46() {
  return (
    <div className="absolute h-[33.836px] left-[303.73px] top-0 w-[1037.789px]" data-name="td">
      <P11 />
    </div>
  );
}

function Td47() {
  return (
    <div className="absolute h-[33.836px] left-[1341.52px] top-0 w-[100.477px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">trace_66541</p>
    </div>
  );
}

function Td48() {
  return (
    <div className="absolute h-[33.836px] left-[1442px] top-0 w-[70px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        v2.0.0
      </p>
    </div>
  );
}

function Tr7() {
  return (
    <div className="absolute border-[#d9d9d9] border-b border-solid h-[33.836px] left-0 top-[67.17px] w-[1512px]" data-name="tr">
      <Td42 />
      <Td43 />
      <Td44 />
      <Td45 />
      <Td46 />
      <Td47 />
      <Td48 />
    </div>
  );
}

function Td49() {
  return (
    <div className="absolute h-[33.836px] left-0 top-0 w-[78.797px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">14:35:12</p>
    </div>
  );
}

function Span30() {
  return (
    <div className="absolute bg-[rgba(255,77,79,0.1)] content-stretch flex h-[17.5px] items-start left-[10.5px] px-[6.25px] py-[2.75px] rounded-[3.5px] top-[8.66px] w-[24.688px]" data-name="span">
      <div aria-hidden="true" className="absolute border border-[rgba(255,77,79,0.2)] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#ff4d4f] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        P1
      </p>
    </div>
  );
}

function Td50() {
  return (
    <div className="absolute h-[33.836px] left-[78.8px] top-0 w-[64.102px]" data-name="td">
      <Span30 />
    </div>
  );
}

function Td51() {
  return (
    <div className="absolute h-[33.836px] left-[142.9px] top-0 w-[48.836px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap">504</p>
    </div>
  );
}

function Td52() {
  return (
    <div className="absolute h-[33.836px] left-[191.73px] top-0 w-[112px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inference
      </p>
    </div>
  );
}

function P12() {
  return (
    <div className="absolute h-[18.836px] left-[10.5px] overflow-clip top-[7.5px] w-[1016.789px]" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18.84px] left-0 text-[#161616] text-[12px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Timeout waiting for upstream service 'image-preprocessor'`}</p>
    </div>
  );
}

function Td53() {
  return (
    <div className="absolute h-[33.836px] left-[303.73px] top-0 w-[1037.789px]" data-name="td">
      <P12 />
    </div>
  );
}

function Td54() {
  return (
    <div className="absolute h-[33.836px] left-[1341.52px] top-0 w-[100.477px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">trace_55902</p>
    </div>
  );
}

function Td55() {
  return (
    <div className="absolute h-[33.836px] left-[1442px] top-0 w-[70px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        v2.1.0
      </p>
    </div>
  );
}

function Tr8() {
  return (
    <div className="absolute border-[#d9d9d9] border-b border-solid h-[33.836px] left-0 top-[101.01px] w-[1512px]" data-name="tr">
      <Td49 />
      <Td50 />
      <Td51 />
      <Td52 />
      <Td53 />
      <Td54 />
      <Td55 />
    </div>
  );
}

function Td56() {
  return (
    <div className="absolute h-[33.836px] left-0 top-0 w-[78.797px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">14:30:05</p>
    </div>
  );
}

function Span31() {
  return (
    <div className="absolute bg-[#ff4d4f] content-stretch flex h-[15.5px] items-start left-[10.5px] px-[5.25px] py-[1.75px] rounded-[3.5px] top-[9.66px] w-[22.688px]" data-name="span">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[10px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        P0
      </p>
    </div>
  );
}

function Td57() {
  return (
    <div className="absolute h-[33.836px] left-[78.8px] top-0 w-[64.102px]" data-name="td">
      <Span31 />
    </div>
  );
}

function Td58() {
  return (
    <div className="absolute h-[33.836px] left-[142.9px] top-0 w-[48.836px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap">401</p>
    </div>
  );
}

function Td59() {
  return (
    <div className="absolute h-[33.836px] left-[191.73px] top-0 w-[112px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Auth
      </p>
    </div>
  );
}

function P13() {
  return (
    <div className="absolute h-[18.836px] left-[10.5px] overflow-clip top-[7.5px] w-[1016.789px]" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18.84px] left-0 text-[#161616] text-[12px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Invalid bearer token signature
      </p>
    </div>
  );
}

function Td60() {
  return (
    <div className="absolute h-[33.836px] left-[303.73px] top-0 w-[1037.789px]" data-name="td">
      <P13 />
    </div>
  );
}

function Td61() {
  return (
    <div className="absolute h-[33.836px] left-[1341.52px] top-0 w-[100.477px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">trace_44891</p>
    </div>
  );
}

function Td62() {
  return (
    <div className="absolute h-[33.836px] left-[1442px] top-0 w-[70px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        v2.1.0
      </p>
    </div>
  );
}

function Tr9() {
  return (
    <div className="absolute border-[#d9d9d9] border-b border-solid h-[33.836px] left-0 top-[134.84px] w-[1512px]" data-name="tr">
      <Td56 />
      <Td57 />
      <Td58 />
      <Td59 />
      <Td60 />
      <Td61 />
      <Td62 />
    </div>
  );
}

function Td63() {
  return (
    <div className="absolute h-[33.836px] left-0 top-0 w-[78.797px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">14:28:33</p>
    </div>
  );
}

function Span32() {
  return (
    <div className="absolute bg-[rgba(254,154,0,0.1)] content-stretch flex h-[17.5px] items-start left-[10.5px] px-[6.25px] py-[2.75px] rounded-[3.5px] top-[8.66px] w-[24.688px]" data-name="span">
      <div aria-hidden="true" className="absolute border border-[rgba(254,154,0,0.2)] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#e17100] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        P2
      </p>
    </div>
  );
}

function Td64() {
  return (
    <div className="absolute h-[33.836px] left-[78.8px] top-0 w-[64.102px]" data-name="td">
      <Span32 />
    </div>
  );
}

function Td65() {
  return (
    <div className="absolute h-[33.836px] left-[142.9px] top-0 w-[48.836px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap">422</p>
    </div>
  );
}

function Td66() {
  return (
    <div className="absolute h-[33.836px] left-[191.73px] top-0 w-[112px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Schema
      </p>
    </div>
  );
}

function P14() {
  return (
    <div className="absolute h-[18.836px] left-[10.5px] overflow-clip top-[7.5px] w-[1016.789px]" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18.84px] left-0 text-[#161616] text-[12px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Invalid DICOM metadata: StudyInstanceUID missing
      </p>
    </div>
  );
}

function Td67() {
  return (
    <div className="absolute h-[33.836px] left-[303.73px] top-0 w-[1037.789px]" data-name="td">
      <P14 />
    </div>
  );
}

function Td68() {
  return (
    <div className="absolute h-[33.836px] left-[1341.52px] top-0 w-[100.477px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">trace_33782</p>
    </div>
  );
}

function Td69() {
  return (
    <div className="absolute h-[33.836px] left-[1442px] top-0 w-[70px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        v2.1.0
      </p>
    </div>
  );
}

function Tr10() {
  return (
    <div className="absolute border-[#d9d9d9] border-b border-solid h-[33.836px] left-0 top-[168.68px] w-[1512px]" data-name="tr">
      <Td63 />
      <Td64 />
      <Td65 />
      <Td66 />
      <Td67 />
      <Td68 />
      <Td69 />
    </div>
  );
}

function Td70() {
  return (
    <div className="absolute h-[33.836px] left-0 top-0 w-[78.797px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">14:25:47</p>
    </div>
  );
}

function Span33() {
  return (
    <div className="absolute bg-[rgba(255,77,79,0.1)] content-stretch flex h-[17.5px] items-start left-[10.5px] px-[6.25px] py-[2.75px] rounded-[3.5px] top-[8.66px] w-[24.688px]" data-name="span">
      <div aria-hidden="true" className="absolute border border-[rgba(255,77,79,0.2)] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#ff4d4f] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        P1
      </p>
    </div>
  );
}

function Td71() {
  return (
    <div className="absolute h-[33.836px] left-[78.8px] top-0 w-[64.102px]" data-name="td">
      <Span33 />
    </div>
  );
}

function Td72() {
  return (
    <div className="absolute h-[33.836px] left-[142.9px] top-0 w-[48.836px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap">500</p>
    </div>
  );
}

function Td73() {
  return (
    <div className="absolute h-[33.836px] left-[191.73px] top-0 w-[112px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inference
      </p>
    </div>
  );
}

function P15() {
  return (
    <div className="absolute h-[18.836px] left-[10.5px] overflow-clip top-[7.5px] w-[1016.789px]" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18.84px] left-0 text-[#161616] text-[12px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Model checkpoint load failed: file corrupted
      </p>
    </div>
  );
}

function Td74() {
  return (
    <div className="absolute h-[33.836px] left-[303.73px] top-0 w-[1037.789px]" data-name="td">
      <P15 />
    </div>
  );
}

function Td75() {
  return (
    <div className="absolute h-[33.836px] left-[1341.52px] top-0 w-[100.477px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">trace_22671</p>
    </div>
  );
}

function Td76() {
  return (
    <div className="absolute h-[33.836px] left-[1442px] top-0 w-[70px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        v2.1.0
      </p>
    </div>
  );
}

function Tr11() {
  return (
    <div className="absolute border-[#d9d9d9] border-b border-solid h-[33.836px] left-0 top-[202.52px] w-[1512px]" data-name="tr">
      <Td70 />
      <Td71 />
      <Td72 />
      <Td73 />
      <Td74 />
      <Td75 />
      <Td76 />
    </div>
  );
}

function Td77() {
  return (
    <div className="absolute h-[33.836px] left-0 top-0 w-[78.797px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">14:22:19</p>
    </div>
  );
}

function Span34() {
  return (
    <div className="absolute bg-[rgba(254,154,0,0.1)] content-stretch flex h-[17.5px] items-start left-[10.5px] px-[6.25px] py-[2.75px] rounded-[3.5px] top-[8.66px] w-[24.688px]" data-name="span">
      <div aria-hidden="true" className="absolute border border-[rgba(254,154,0,0.2)] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#e17100] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        P2
      </p>
    </div>
  );
}

function Td78() {
  return (
    <div className="absolute h-[33.836px] left-[78.8px] top-0 w-[64.102px]" data-name="td">
      <Span34 />
    </div>
  );
}

function Td79() {
  return (
    <div className="absolute h-[33.836px] left-[142.9px] top-0 w-[48.836px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap">503</p>
    </div>
  );
}

function Td80() {
  return (
    <div className="absolute h-[33.836px] left-[191.73px] top-0 w-[112px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Network
      </p>
    </div>
  );
}

function P16() {
  return (
    <div className="absolute h-[18.836px] left-[10.5px] overflow-clip top-[7.5px] w-[1016.789px]" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18.84px] left-0 text-[#161616] text-[12px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Database connection pool exhausted
      </p>
    </div>
  );
}

function Td81() {
  return (
    <div className="absolute h-[33.836px] left-[303.73px] top-0 w-[1037.789px]" data-name="td">
      <P16 />
    </div>
  );
}

function Td82() {
  return (
    <div className="absolute h-[33.836px] left-[1341.52px] top-0 w-[100.477px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">trace_11560</p>
    </div>
  );
}

function Td83() {
  return (
    <div className="absolute h-[33.836px] left-[1442px] top-0 w-[70px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        v2.0.0
      </p>
    </div>
  );
}

function Tr12() {
  return (
    <div className="absolute border-[#d9d9d9] border-b border-solid h-[33.836px] left-0 top-[236.35px] w-[1512px]" data-name="tr">
      <Td77 />
      <Td78 />
      <Td79 />
      <Td80 />
      <Td81 />
      <Td82 />
      <Td83 />
    </div>
  );
}

function Td84() {
  return (
    <div className="absolute h-[33.836px] left-0 top-0 w-[78.797px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">14:19:05</p>
    </div>
  );
}

function Span35() {
  return (
    <div className="absolute bg-[rgba(255,77,79,0.1)] content-stretch flex h-[17.5px] items-start left-[10.5px] px-[6.25px] py-[2.75px] rounded-[3.5px] top-[8.66px] w-[24.688px]" data-name="span">
      <div aria-hidden="true" className="absolute border border-[rgba(255,77,79,0.2)] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#ff4d4f] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        P1
      </p>
    </div>
  );
}

function Td85() {
  return (
    <div className="absolute h-[33.836px] left-[78.8px] top-0 w-[64.102px]" data-name="td">
      <Span35 />
    </div>
  );
}

function Td86() {
  return (
    <div className="absolute h-[33.836px] left-[142.9px] top-0 w-[48.836px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap">429</p>
    </div>
  );
}

function Td87() {
  return (
    <div className="absolute h-[33.836px] left-[191.73px] top-0 w-[112px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Auth Gateway
      </p>
    </div>
  );
}

function P17() {
  return (
    <div className="absolute h-[18.836px] left-[10.5px] overflow-clip top-[7.5px] w-[1016.789px]" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18.84px] left-0 text-[#161616] text-[12px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Rate limit exceeded for API key 'sk_prod_xyz'`}</p>
    </div>
  );
}

function Td88() {
  return (
    <div className="absolute h-[33.836px] left-[303.73px] top-0 w-[1037.789px]" data-name="td">
      <P17 />
    </div>
  );
}

function Td89() {
  return (
    <div className="absolute h-[33.836px] left-[1341.52px] top-0 w-[100.477px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">trace_00449</p>
    </div>
  );
}

function Td90() {
  return (
    <div className="absolute h-[33.836px] left-[1442px] top-0 w-[70px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        v2.1.0
      </p>
    </div>
  );
}

function Tr13() {
  return (
    <div className="absolute border-[#d9d9d9] border-b border-solid h-[33.836px] left-0 top-[270.19px] w-[1512px]" data-name="tr">
      <Td84 />
      <Td85 />
      <Td86 />
      <Td87 />
      <Td88 />
      <Td89 />
      <Td90 />
    </div>
  );
}

function Td91() {
  return (
    <div className="absolute h-[33.836px] left-0 top-0 w-[78.797px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">14:15:58</p>
    </div>
  );
}

function Span36() {
  return (
    <div className="absolute bg-[rgba(254,154,0,0.1)] content-stretch flex h-[17.5px] items-start left-[10.5px] px-[6.25px] py-[2.75px] rounded-[3.5px] top-[8.66px] w-[24.688px]" data-name="span">
      <div aria-hidden="true" className="absolute border border-[rgba(254,154,0,0.2)] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#e17100] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        P2
      </p>
    </div>
  );
}

function Td92() {
  return (
    <div className="absolute h-[33.836px] left-[78.8px] top-0 w-[64.102px]" data-name="td">
      <Span36 />
    </div>
  );
}

function Td93() {
  return (
    <div className="absolute h-[33.836px] left-[142.9px] top-0 w-[48.836px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap">400</p>
    </div>
  );
}

function Td94() {
  return (
    <div className="absolute h-[33.836px] left-[191.73px] top-0 w-[112px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Preprocess
      </p>
    </div>
  );
}

function P18() {
  return (
    <div className="absolute h-[18.836px] left-[10.5px] overflow-clip top-[7.5px] w-[1016.789px]" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18.84px] left-0 text-[#161616] text-[12px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Image dimensions exceed maximum size 4096x4096
      </p>
    </div>
  );
}

function Td95() {
  return (
    <div className="absolute h-[33.836px] left-[303.73px] top-0 w-[1037.789px]" data-name="td">
      <P18 />
    </div>
  );
}

function Td96() {
  return (
    <div className="absolute h-[33.836px] left-[1341.52px] top-0 w-[100.477px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">trace_99338</p>
    </div>
  );
}

function Td97() {
  return (
    <div className="absolute h-[33.836px] left-[1442px] top-0 w-[70px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        v2.1.0
      </p>
    </div>
  );
}

function Tr14() {
  return (
    <div className="absolute border-[#d9d9d9] border-b border-solid h-[33.836px] left-0 top-[304.02px] w-[1512px]" data-name="tr">
      <Td91 />
      <Td92 />
      <Td93 />
      <Td94 />
      <Td95 />
      <Td96 />
      <Td97 />
    </div>
  );
}

function Td98() {
  return (
    <div className="absolute h-[33.836px] left-0 top-0 w-[78.797px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">14:12:41</p>
    </div>
  );
}

function Span37() {
  return (
    <div className="absolute bg-[#ff4d4f] content-stretch flex h-[15.5px] items-start left-[10.5px] px-[5.25px] py-[1.75px] rounded-[3.5px] top-[9.66px] w-[22.688px]" data-name="span">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[10px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        P0
      </p>
    </div>
  );
}

function Td99() {
  return (
    <div className="absolute h-[33.836px] left-[78.8px] top-0 w-[64.102px]" data-name="td">
      <Span37 />
    </div>
  );
}

function Td100() {
  return (
    <div className="absolute h-[33.836px] left-[142.9px] top-0 w-[48.836px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap">500</p>
    </div>
  );
}

function Td101() {
  return (
    <div className="absolute h-[33.836px] left-[191.73px] top-0 w-[112px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inference
      </p>
    </div>
  );
}

function P19() {
  return (
    <div className="absolute h-[18.836px] left-[10.5px] overflow-clip top-[7.5px] w-[1016.789px]" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18.84px] left-0 text-[#161616] text-[12px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Critical: Model server unresponsive for 30+ seconds
      </p>
    </div>
  );
}

function Td102() {
  return (
    <div className="absolute h-[33.836px] left-[303.73px] top-0 w-[1037.789px]" data-name="td">
      <P19 />
    </div>
  );
}

function Td103() {
  return (
    <div className="absolute h-[33.836px] left-[1341.52px] top-0 w-[100.477px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">trace_88227</p>
    </div>
  );
}

function Td104() {
  return (
    <div className="absolute h-[33.836px] left-[1442px] top-0 w-[70px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        v2.1.0
      </p>
    </div>
  );
}

function Tr15() {
  return (
    <div className="absolute border-[#d9d9d9] border-b border-solid h-[33.836px] left-0 top-[337.86px] w-[1512px]" data-name="tr">
      <Td98 />
      <Td99 />
      <Td100 />
      <Td101 />
      <Td102 />
      <Td103 />
      <Td104 />
    </div>
  );
}

function Td105() {
  return (
    <div className="absolute h-[33.336px] left-0 top-0 w-[78.797px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">14:09:27</p>
    </div>
  );
}

function Span38() {
  return (
    <div className="absolute bg-[rgba(254,154,0,0.1)] content-stretch flex h-[17.5px] items-start left-[10.5px] px-[6.25px] py-[2.75px] rounded-[3.5px] top-[8.66px] w-[24.688px]" data-name="span">
      <div aria-hidden="true" className="absolute border border-[rgba(254,154,0,0.2)] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#e17100] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        P2
      </p>
    </div>
  );
}

function Td106() {
  return (
    <div className="absolute h-[33.336px] left-[78.8px] top-0 w-[64.102px]" data-name="td">
      <Span38 />
    </div>
  );
}

function Td107() {
  return (
    <div className="absolute h-[33.336px] left-[142.9px] top-0 w-[48.836px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap">404</p>
    </div>
  );
}

function Td108() {
  return (
    <div className="absolute h-[33.336px] left-[191.73px] top-0 w-[112px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Router
      </p>
    </div>
  );
}

function P20() {
  return (
    <div className="absolute h-[18.836px] left-[10.5px] overflow-clip top-[7.5px] w-[1016.789px]" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18.84px] left-0 text-[#161616] text-[12px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Model version 'v1.5.2' not found in registry`}</p>
    </div>
  );
}

function Td109() {
  return (
    <div className="absolute h-[33.336px] left-[303.73px] top-0 w-[1037.789px]" data-name="td">
      <P20 />
    </div>
  );
}

function Td110() {
  return (
    <div className="absolute h-[33.336px] left-[1341.52px] top-0 w-[100.477px]" data-name="td">
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-[10.5px] not-italic text-[#6f6f6f] text-[12px] top-[7.91px] whitespace-nowrap">trace_77116</p>
    </div>
  );
}

function Td111() {
  return (
    <div className="absolute h-[33.336px] left-[1442px] top-0 w-[70px]" data-name="td">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[#161616] text-[12px] top-[7.91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        v1.5.2
      </p>
    </div>
  );
}

function Tr16() {
  return (
    <div className="absolute h-[33.336px] left-0 top-[371.7px] w-[1512px]" data-name="tr">
      <Td105 />
      <Td106 />
      <Td107 />
      <Td108 />
      <Td109 />
      <Td110 />
      <Td111 />
    </div>
  );
}

function Tbody1() {
  return (
    <div className="absolute h-[405.031px] left-0 top-[32px] w-[1512px]" data-name="tbody">
      <Tr5 />
      <Tr6 />
      <Tr7 />
      <Tr8 />
      <Tr9 />
      <Tr10 />
      <Tr11 />
      <Tr12 />
      <Tr13 />
      <Tr14 />
      <Tr15 />
      <Tr16 />
    </div>
  );
}

function Table1() {
  return (
    <div className="absolute h-[437.031px] left-px top-px w-[1512px]" data-name="table">
      <Tbody1 />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="absolute left-[75.94px] size-[10.5px] top-[3.75px]" data-name="ChevronRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="ChevronRight">
          <path d={svgPaths.p2a0c1610} id="Vector" stroke="var(--stroke-0, #1890FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="button">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[36.5px] text-[#1890ff] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`View All Logs `}</p>
      <ChevronRight />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[33px] items-start left-px pt-[8px] px-[712.781px] top-[438.03px] w-[1512px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button6 />
    </div>
  );
}

function Th7() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[78.797px]" data-name="th">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[10.5px] text-[#6f6f6f] text-[12px] top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Time
      </p>
    </div>
  );
}

function Th8() {
  return (
    <div className="absolute h-[32px] left-[78.8px] top-0 w-[64.102px]" data-name="th">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[10.5px] text-[#6f6f6f] text-[12px] top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Severity
      </p>
    </div>
  );
}

function Th9() {
  return (
    <div className="absolute h-[32px] left-[142.9px] top-0 w-[48.836px]" data-name="th">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[10.5px] text-[#6f6f6f] text-[12px] top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Code
      </p>
    </div>
  );
}

function Th10() {
  return (
    <div className="absolute h-[32px] left-[191.73px] top-0 w-[112px]" data-name="th">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[10.5px] text-[#6f6f6f] text-[12px] top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Component
      </p>
    </div>
  );
}

function Th11() {
  return (
    <div className="absolute h-[32px] left-[303.73px] top-0 w-[1037.789px]" data-name="th">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[10.5px] text-[#6f6f6f] text-[12px] top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Message
      </p>
    </div>
  );
}

function Th12() {
  return (
    <div className="absolute h-[32px] left-[1341.52px] top-0 w-[100.477px]" data-name="th">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[10.5px] text-[#6f6f6f] text-[12px] top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Trace ID
      </p>
    </div>
  );
}

function Th13() {
  return (
    <div className="absolute h-[32px] left-[1442px] top-0 w-[70px]" data-name="th">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[10.5px] text-[#6f6f6f] text-[12px] top-[7px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Version
      </p>
    </div>
  );
}

function Tr17() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[1512px]" data-name="tr">
      <Th7 />
      <Th8 />
      <Th9 />
      <Th10 />
      <Th11 />
      <Th12 />
      <Th13 />
    </div>
  );
}

function Thead1() {
  return (
    <div className="absolute bg-white h-[32px] left-px top-px w-[1512px]" data-name="thead">
      <Tr17 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-white h-[472.031px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Table1 />
        <Container29 />
        <Thead1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[507.031px] items-start relative shrink-0 w-full" data-name="Container">
      <H3 />
      <Container28 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] h-[786.031px] items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container27 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] h-[974.531px] items-start left-[22px] top-[153.75px] w-[1514px]" data-name="Container">
      <Container9 />
      <Container23 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white overflow-clip relative rounded-[14px] size-full" data-name="Container">
      <Container1 />
      <Container7 />
      <Container8 />
    </div>
  );
}