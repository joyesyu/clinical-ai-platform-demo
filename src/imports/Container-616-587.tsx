import svgPaths from "./svg-8chyzfasi1";

function H() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="h2">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[18px] text-black top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Operational Health
      </p>
    </div>
  );
}

function P() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Stability & troubleshooting metrics`}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] h-[84.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[3.5px] items-start pb-px pt-[17.5px] px-[21px] relative size-full">
        <H />
        <P />
      </div>
    </div>
  );
}

function P1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[44.875px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6f6f6f] text-[12px] top-0 tracking-[0.3px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Uptime
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center left-[14px] top-[14px] w-[465.328px]" data-name="Container">
      <P1 />
    </div>
  );
}

function P2() {
  return (
    <div className="absolute h-[36px] left-[14px] top-[39px] w-[465.328px]" data-name="p">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#161616] text-[24px] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        99.8%
      </p>
    </div>
  );
}

function P3() {
  return (
    <div className="absolute h-[18px] left-[14px] top-[78.5px] w-[465.328px]" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Last 30 days
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[112.5px] left-0 rounded-[8px] top-0 w-[495.328px]" data-name="Container">
      <Container5 />
      <P2 />
      <P3 />
    </div>
  );
}

function P4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[71.688px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6f6f6f] text-[12px] top-0 tracking-[0.3px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Error Rate
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center left-[14px] top-[14px] w-[465.336px]" data-name="Container">
      <P4 />
    </div>
  );
}

function P5() {
  return <div className="absolute h-[36px] left-[14px] top-[39px] w-[465.336px]" data-name="p" />;
}

function P6() {
  return (
    <div className="absolute h-[18px] left-[14px] top-[78.5px] w-[465.336px]" data-name="p">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Above 1% threshold
      </p>
    </div>
  );
}

function AlertTriangle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="AlertTriangle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="AlertTriangle">
          <path d={svgPaths.p929c800} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 7.5V10.8333" id="Vector_2" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 14.1667H10.0075" id="Vector_3" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[14px] top-[38.5px]">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-[rgba(22,22,22,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        5.2%
      </p>
      <AlertTriangle />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[112.5px] left-[509.33px] rounded-[8px] top-0 w-[495.336px]" data-name="Container">
      <Container7 />
      <P5 />
      <P6 />
      <Frame />
    </div>
  );
}

function P7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[87.43px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6f6f6f] text-[12px] top-0 tracking-[0.3px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Latency (p95)
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center left-[14px] top-[14px] w-[465.336px]" data-name="Container">
      <P7 />
    </div>
  );
}

function P8() {
  return (
    <div className="absolute h-[36px] left-[14px] top-[39px] w-[465.336px]" data-name="p">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#161616] text-[24px] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        42ms
      </p>
    </div>
  );
}

function P9() {
  return (
    <div className="absolute h-[18px] left-[14px] top-[78.5px] w-[465.336px]" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        95th percentile
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white border border-[#d9d9d9] border-solid h-[112.5px] left-[1019px] rounded-[8px] top-[0.5px] w-[495.336px]" data-name="Container">
      <Container9 />
      <P8 />
      <P9 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[112.5px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container6 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return <div className="bg-[#d9d9d9] h-px shrink-0 w-full" data-name="Container" />;
}

function P10() {
  return (
    <div className="h-[21px] relative shrink-0 w-[85.195px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#161616] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Recent Errors
        </p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(24,144,255,0.1)] flex-[1_0_0] h-[27px] min-h-px min-w-px relative rounded-[8px]" data-name="button">
      <div aria-hidden="true" className="absolute border border-[rgba(24,144,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[22px] text-[#1890ff] text-[12px] text-center top-[4.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          24h
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[25px] relative rounded-[8px] shrink-0 w-[34.586px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[17.5px] text-[#6f6f6f] text-[12px] text-center top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          7d
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[27px] relative shrink-0 w-[84.906px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[27px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <P10 />
      <Container13 />
    </div>
  );
}

function Shield() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Shield">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Shield">
          <path d={svgPaths.pd04fc00} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function P11() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#161616] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Authentication Errors
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[21px] relative shrink-0 w-[154.609px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <Shield />
        <P11 />
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] h-[25px] relative rounded-[3.5px] shrink-0 w-[20.828px]" data-name="span">
      <div aria-hidden="true" className="absolute border border-[#e17100] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[7px] text-[#e17100] text-[12px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          3
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[25px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Span />
    </div>
  );
}

function P12() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Invalid or expired API keys
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white h-[80px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[7px] items-start pb-px pt-[15px] px-[15px] relative size-full">
        <Container16 />
        <P12 />
      </div>
    </div>
  );
}

function WifiOff() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="WifiOff">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_616_591)" id="WifiOff">
          <path d="M7 11.6667H7.00583" id="Vector" stroke="var(--stroke-0, #FF4D4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p151f4d00} id="Vector_2" stroke="var(--stroke-0, #FF4D4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p3e609ce0} id="Vector_3" stroke="var(--stroke-0, #FF4D4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1e139f00} id="Vector_4" stroke="var(--stroke-0, #FF4D4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pa4c2a00} id="Vector_5" stroke="var(--stroke-0, #FF4D4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p280c0d00} id="Vector_6" stroke="var(--stroke-0, #FF4D4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p176aeb00} id="Vector_7" stroke="var(--stroke-0, #FF4D4F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_616_591">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function P13() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#161616] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Network Errors
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[21px] relative shrink-0 w-[115.242px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <WifiOff />
        <P13 />
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="bg-[rgba(255,77,79,0.1)] h-[25px] relative rounded-[3.5px] shrink-0 w-[20.828px]" data-name="span">
      <div aria-hidden="true" className="absolute border border-[#ff4d4f] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[7px] text-[#ff4d4f] text-[12px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          1
        </p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[25px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Span1 />
    </div>
  );
}

function P14() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Connection timeouts or interruptions
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white h-[80px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[7px] items-start pb-px pt-[15px] px-[15px] relative size-full">
        <Container19 />
        <P14 />
      </div>
    </div>
  );
}

function AlertTriangle1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="AlertTriangle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="AlertTriangle">
          <path d={svgPaths.p3ba1200} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 5.25V7.58333" id="Vector_2" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 9.91667H7.00583" id="Vector_3" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function P15() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#161616] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Schema/Contract Errors
        </p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[21px] relative shrink-0 w-[172.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <AlertTriangle1 />
        <P15 />
      </div>
    </div>
  );
}

function Span2() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] h-[25px] relative rounded-[3.5px] shrink-0 w-[20.828px]" data-name="span">
      <div aria-hidden="true" className="absolute border border-[#e17100] border-solid inset-0 pointer-events-none rounded-[3.5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[18px] left-[7px] text-[#e17100] text-[12px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          2
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[25px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Span2 />
    </div>
  );
}

function P16() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Invalid request format or missing required fields
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white h-[80px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[7px] items-start pb-px pt-[15px] px-[15px] relative size-full">
        <Container22 />
        <P16 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[10.5px] h-[261px] items-start relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container18 />
      <Container21 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[302px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container14 />
    </div>
  );
}

function Container24() {
  return <div className="bg-[#d9d9d9] h-px shrink-0 w-full" data-name="Container" />;
}

function P17() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[1514px]" data-name="p">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#161616] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recent Activity Logs
      </p>
    </div>
  );
}

function Span3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[46.281px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          14:32:15
        </p>
      </div>
    </div>
  );
}

function Span4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[28.898px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#096] text-[12px] top-0 whitespace-nowrap">INFO</p>
      </div>
    </div>
  );
}

function Span5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[258.609px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#161616] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Model inference completed successfully (v2.1.0)
        </p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[18px] items-start relative shrink-0 w-full" data-name="Container">
      <Span3 />
      <Span4 />
      <Span5 />
    </div>
  );
}

function Span6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[46.281px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          14:31:42
        </p>
      </div>
    </div>
  );
}

function Span7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[28.898px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#e17100] text-[12px] top-0 whitespace-nowrap">WARN</p>
      </div>
    </div>
  );
}

function Span8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[273.984px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#161616] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          API rate limit approaching for institution_id: inst_***
        </p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[18px] items-start relative shrink-0 w-full" data-name="Container">
      <Span6 />
      <Span7 />
      <Span8 />
    </div>
  );
}

function Span9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[46.281px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          14:29:08
        </p>
      </div>
    </div>
  );
}

function Span10() {
  return (
    <div className="h-[18px] relative shrink-0 w-[28.898px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#096] text-[12px] top-0 whitespace-nowrap">INFO</p>
      </div>
    </div>
  );
}

function Span11() {
  return (
    <div className="h-[18px] relative shrink-0 w-[249.984px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#161616] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Preprocessing complete for request_id: req_***
        </p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[18px] items-start relative shrink-0 w-full" data-name="Container">
      <Span9 />
      <Span10 />
      <Span11 />
    </div>
  );
}

function Span12() {
  return (
    <div className="h-[18px] relative shrink-0 w-[46.281px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          14:27:33
        </p>
      </div>
    </div>
  );
}

function Span13() {
  return (
    <div className="h-[18px] relative shrink-0 w-[36.125px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#ff4d4f] text-[12px] top-0 whitespace-nowrap">ERROR</p>
      </div>
    </div>
  );
}

function Span14() {
  return (
    <div className="h-[18px] relative shrink-0 w-[232.383px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#161616] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Authentication failed: invalid API key format
        </p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[18px] items-start relative shrink-0 w-full" data-name="Container">
      <Span12 />
      <Span13 />
      <Span14 />
    </div>
  );
}

function Span15() {
  return (
    <div className="h-[18px] relative shrink-0 w-[46.281px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          14:25:19
        </p>
      </div>
    </div>
  );
}

function Span16() {
  return (
    <div className="h-[18px] relative shrink-0 w-[28.898px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#096] text-[12px] top-0 whitespace-nowrap">INFO</p>
      </div>
    </div>
  );
}

function Span17() {
  return (
    <div className="h-[18px] relative shrink-0 w-[258.609px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#161616] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Model inference completed successfully (v2.1.0)
        </p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[18px] items-start relative shrink-0 w-full" data-name="Container">
      <Span15 />
      <Span16 />
      <Span17 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-white h-[148px] left-0 rounded-[8px] top-[31.5px] w-[1514px]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip pb-px pt-[15px] px-[15px] relative rounded-[inherit] size-full">
        <Container27 />
        <Container28 />
        <Container29 />
        <Container30 />
        <Container31 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function P18() {
  return (
    <div className="absolute h-[18px] left-0 top-[186.5px] w-[1514px]" data-name="p">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6f6f6f] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        No PII or patient data is logged. Only high-level operational events are recorded.
      </p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[204.5px] relative shrink-0 w-full" data-name="Container">
      <P17 />
      <Container26 />
      <P18 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[747px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[21px] items-start pt-[21px] px-[21px] relative size-full">
        <Container3 />
        <Container10 />
        <Container11 />
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container1 />
        <Container2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}