import * as React from "react";
import { useEffect } from "react";
import { Connector } from './circuitPage';

interface SvgDoorCircuitProps extends React.SVGProps<SVGSVGElement> {
    connectors: Connector[];
    onConnectorClick: (connector: Connector) => void;
    highlightedText: string | null;
  }
  
  const Circuit2 = React.forwardRef<SVGSVGElement, SvgDoorCircuitProps>(
    ({ connectors, onConnectorClick, highlightedText, ...props }, ref) => {
      const connectorC0015 = connectors.find((conn) => conn.connectorName === 'C0015');
      const connectorC0016 = connectors.find((conn) => conn.connectorName === 'C0016');
      const connectorC0013 = connectors.find((conn) => conn.connectorName === 'C0013');
      const connectorC0017 = connectors.find((conn) => conn.connectorName === 'C0017');
      const connectorC0007 = connectors.find((conn) => conn.connectorName === 'C0007');
      const connectorC0021 = connectors.find((conn) => conn.connectorName === 'C0021');
      const connectorC0020 = connectors.find((conn) => conn.connectorName === 'C0020');
      const connectorC0018 = connectors.find((conn) => conn.connectorName === 'C0018');
      const connectorC0019 = connectors.find((conn) => conn.connectorName === 'C0019');
      const connectorC0001 = connectors.find((conn) => conn.connectorName === 'C0001');
      const connectorC0002 = connectors.find((conn) => conn.connectorName === 'C0002');
      const connectorC0010 = connectors.find((conn) => conn.connectorName === 'C0010');
      const connectorC0011 = connectors.find((conn) => conn.connectorName === 'C0011');
      const connectorC0009 = connectors.find((conn) => conn.connectorName === 'C0009');


      return (
        <svg ref={ref} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" width="1191" height="842" viewBox="0 0 1191 842"   {...props}>
<defs>
<clipPath id="clip_0">
<path transform="matrix(0,1,1,0,0,0)" d="M770.22 72.148H67.19995V1099.048H770.22Z" fill-rule="evenodd"/>
</clipPath>
<clipPath id="clip_1">
<path transform="matrix(0,1,1,0,0,0)" d="M770.22 72.148H67.19995V1099.048H770.22Z" fill-rule="evenodd"/>
</clipPath>
<clipPath id="clip_2">
<path transform="matrix(0,1,1,0,0,0)" d="M773.94 25.768H65.22003V1145.4879H773.94Z" fill-rule="evenodd"/>
</clipPath>
<clipPath id="clip_3">
<path transform="matrix(0,1,1,0,0,0)" d="M.03 1191.03H842.01V.030029297H.03Z"/>
</clipPath>
</defs>

<text fill="#ffffff"  transform="matrix(1 0 0 1 0 0)" font-size="1.98" font-family="Arial" font-weight="bold"><tspan y="66.54" x="25.7679 26.96798 28.107668 28.887392 29.667117 30.74681 31.347147 32.547227 33.087568 34.52722 35.666913 36.74661 38.006879 39.206956 40.407033 41.546724">Terrain Response</tspan></text>
<g clip-path="url(#clip_0)">
<g clip-path="url(#clip_1)">
<g clip-path="url(#clip_2)">
<g clip-path="url(#clip_3)">
<path transform="matrix(0,1,1,0,0,0)" d="M67.228 72.144H770.25V1099.05H67.228Z" fill="#ffffff"/>
<path transform="matrix(1.0066,0,0,.9934,129.9279,495.05097)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H583.284V-102.419H565.345"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'CL0054,Y,0.35,905,ALL'
      ? '4px 4px 8px yellow, -4px -4px 8px yellow'
      : 'none', 
          }}><tspan y="493.2194" x="287.22257 290.9773 293.6653 296.35334 299.04136 301.72938 304.94834 306.28968 309.77894 311.12028 313.8083 315.14964 317.83766 319.179 321.867 324.55503 327.24305 328.58439 331.80335 334.49137">G0032A,N,0.5,955,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,474.72868,454.3434)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H220.253V-58.889"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'D00056,GY,0.35,2040,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="452.2363" x="512.594 516.34927 519.0377 521.72628 524.41476 527.1033 530.3227 531.66458 535.15438 536.4962 539.1847 540.52658 543.215 545.90359 547.2454 549.9339 552.62246 555.3109 557.99948 559.3413 562.5607 565.24929">G0025A,N,0.35,1580,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,124.76907,688.40536)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#1db200" d="M0 0H35.22L45.453 15.373H270.844L281.09 0H316.949"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'D00039,P,0.35,1685,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="703.22647" x="282.09703 285.31645 288.26557 290.95408 293.64259 296.3311 299.0196 300.36143 304.11665 305.45848 308.14698 309.4888 312.1773 314.86579 316.2076 318.89613 321.58464 324.27314 326.96165 328.30348 331.52293 334.2114">PF0047,G,0.35,1695,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,124.76907,703.6769)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H35.22L45.453-15.373H270.844L281.09 0H316.949"/>
<path transform="matrix(1.0066,0,0,.9934,124.76907,703.6769)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#fffff0" d="M0 0H35.22L45.453-15.373H270.844L281.09 0H316.949"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'D00044,BE,0.35,2040,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="687.8605" x="282.09703 285.31645 288.80619 291.4947 294.18318 296.87168 299.56019 302.2487 303.5905 306.80998 310.0294 311.37123 314.05973 315.40156 318.09007 320.77857 322.1204 324.8089 327.4974 330.1859 332.8744 334.21623 337.43568 340.12419">PR00048,BE,0.35,1695,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,129.9279,469.608)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#ff0000" d="M0 0H311.824"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'CH0053,G,0.35,905,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="467.60945" x="287.22257 290.71134 293.9298 296.61735 299.30488 301.9924 304.67994 306.02079 309.50956 310.8504 313.53794 314.8788 317.56636 318.9072 321.59474 324.28227 326.9698 329.65736 330.9982 334.21665 336.90419">DP0037,R,0.5,1875,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,129.9279,576.471)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H347.66L337.662-25.024"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'G00035,N,1.0,1150,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="575.18197" x="287.22257 290.97779 293.6663 296.3548 299.0433 301.7318 304.42033 305.76216 309.25187 310.5937 313.2822 314.62403 317.31254 318.65437 321.34288 324.03138 326.71989 329.4084 330.7502 333.96965 336.65815">G00035,N,1.0,1150,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,129.9279,454.3434)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#0000cf" d="M0 0H311.824"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'DP052A,R,2.0,985,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="452.2363" x="287.22257 289.91059 292.5986 295.28663 297.97465 300.66267 303.35069 304.69206 307.38008 308.7214 311.40943 312.75077 315.43879 318.1268 319.46815 322.15617 324.84419 327.5322 330.2202 331.56156 334.78053 337.46855">L00049,L,0.35,1870,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,124.76907,622.2717)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#0000cf" d="M0 0H35.22L45.453 15.364H270.844L281.09 0H316.949"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'G00034,N,0.35,2050,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="636.6512" x="282.09703 285.31596 288.00398 290.692 293.38 296.06803 299.287 300.62834 303.31636 304.65769 307.3457 308.68705 311.37507 314.06309 315.40443 318.09245 320.78047 323.46849 326.1565 327.49784 330.7168 333.40483">A0059A,L,0.35,1105,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,124.76907,637.5343)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H35.22L45.453-15.364H270.844L281.09 0H316.949"/>
<path transform="matrix(1.0066,0,0,.9934,124.76907,637.5343)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#fffff0" d="M0 0H35.22L45.453-15.364H270.844L281.09 0H316.949"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'GR0001,BR,0.5,440,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="621.28518" x="282.09703 285.31645 288.00495 290.69346 293.38197 296.07048 299.2899 300.6317 305.18818 306.53 309.21849 310.5603 313.2488 315.93733 317.27915 319.96766 322.65617 325.34468 328.03318 329.375 332.59443 335.28294">A0060A,W,0.35,1105,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,129.9279,535.76547)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H30.094L40.328 15.364H265.719L275.964 0H311.824"/>
<path transform="matrix(1.0066,0,0,.9934,129.9279,535.76547)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#fffff0" d="M0 0H30.094L40.328 15.364H265.719L275.964 0H311.824"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'B00012,Y,2.0,530,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="549.5702" x="287.22257 290.44203 293.13053 295.819 298.5075 301.196 303.88453 305.22636 309.7828 311.12464 313.81315 315.15498 317.84346 320.53196 321.87379 324.5623 327.2508 329.9393 332.6278 333.96965 337.18907 339.87757">A00036,W,0.35,1200,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,129.9279,551.0281)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#0000cf" d="M0 0H30.094L40.328-15.364H265.719L275.964 0H311.824"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'LP0014,W,0.5,440,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="534.1971" x="287.22257 290.44154 293.12956 295.81758 298.50559 301.1936 304.41255 305.75389 308.4419 309.78327 312.47129 313.81263 316.50065 319.18867 320.53 323.21803 325.90605 328.59407 331.28208 332.6234 335.84239 338.5304">A0042A,L,0.35,1200,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,536.60336,266.08717)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H224.721"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'A0016C,G-Y,0.35,880,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="262.7367" x="579.19058 582.94528 586.4346 589.12258 591.8106 594.4986 597.18667 598.528 602.0173 603.35867 606.0467 607.38809 610.07608 611.4174 614.10549 616.79348 619.4815 622.1695 623.51089 626.72988 629.4179">GR0041,N,0.5,1315,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,129.9279,301.7085)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#1db200" d="M0 0H628.73"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'LP006A,G,0.35,750,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="298.59419" x="579.19058 581.87857 585.09756 587.7856 590.4736 593.1616 596.38058 597.7219 601.4767 602.81808 605.50607 606.8475 609.53549 612.2235 613.5649 616.25289 618.9409 621.6289 624.31698 625.6583 628.87728 631.5653">LP061A,G,0.35,1650,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,129.9279,316.98005)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H628.73"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'L0021A,L,0.35,750,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="313.96025" x="579.19058 582.94577 586.43557 589.124 591.8125 594.50106 597.7205 599.0624 602.5521 603.894 606.58248 607.9243 610.61288 613.30136 614.6432 617.3317 620.0202 622.70877 625.3972 626.7391 629.95858 632.64706">GR064A,N,0.35,1650,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,536.60336,250.82456)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H224.721"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'GR005A,N,0.35,675,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="247.37071" x="579.19058 582.94528 586.4346 589.12258 591.8106 594.4986 597.18667 598.528 602.0173 603.35867 606.0467 607.38809 610.07608 612.7641 614.10549 616.79348 619.4815 622.1695 624.85757 626.1989 629.4179 632.1059">GR0043,N,0.35,1315,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,762.80856,128.69696)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H-224.721"/>
<path transform="matrix(1.0066,0,0,.9934,762.80856,128.69696)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#fffff0" d="M0 0H-224.721"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'A0013A,L,0.35,675,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="124.44582" x="579.19058 582.41006 585.0985 587.78707 590.4755 593.164 595.85256 597.1944 600.4139 603.6333 604.97518 607.6637 609.00558 611.69406 614.38259 615.7244 618.4129 621.10147 623.7899 626.4784 627.82028 631.03976 633.7283">B00027,BE,0.35,1315,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,762.80856,143.96054)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#adadad" d="M0 0H-224.721"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'LP008B,GY,0.35,675,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="139.7977" x="579.19058 582.41006 585.0985 587.78707 590.4755 593.164 595.85256 597.1944 600.9496 604.16909 605.5109 608.1994 609.54129 612.2298 614.9183 616.26016 618.94869 621.63717 624.3257 627.01419 628.356 631.5755 634.264">A00050,GY,0.35,1315,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,762.80856,159.22513)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#1db200" d="M0 0H-224.721"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'A0011A,V,0.35,675,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="155.16318" x="579.19058 581.87857 585.09756 587.7856 590.4736 593.1616 596.38058 597.7219 601.4767 602.81808 605.50607 606.8475 609.53549 610.87686 613.5649 616.25289 618.9409 621.6289 622.9703 626.1893 628.87728">LP030A,G,0.5,1315,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,762.80856,174.49668)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H-224.721"/>
<path transform="matrix(1.0066,0,0,.9934,762.80856,174.49668)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#fffff0" d="M0 0H-224.721"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'LP018A,R,0.35,675,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="170.52877" x="579.19058 582.41006 585.0985 587.78707 590.4755 593.164 595.85256 597.1944 600.4139 603.6333 604.97518 607.6637 609.00558 611.69406 614.38259 615.7244 618.4129 621.10147 623.7899 626.4784 627.82028 631.03976 633.7283">B00040,BE,0.35,1315,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,762.80856,189.76126)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H-224.721"/>
<path transform="matrix(1.0066,0,0,.9934,762.80856,189.76126)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#fffff0" d="M0 0H-224.721"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'D00010,Y,0.5,440,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="185.89443" x="579.19058 582.41006 585.0985 587.78707 590.4755 593.164 595.85256 597.1944 600.4139 603.6333 604.97518 607.6637 609.00558 611.69406 614.38259 615.7244 618.4129 621.10147 623.7899 626.4784 627.82028 631.03976 633.7283">B00045,BE,0.35,1315,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,762.80856,205.02385)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#0000cf" d="M0 0H-224.721"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'A00020,BE,0.35,675,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="201.26696" x="579.19058 582.40957 585.09756 587.7856 590.4736 593.1616 595.8496 597.191 599.879 601.2204 603.9084 605.24978 607.9378 610.6258 611.96719 614.6552 617.3432 620.03128 622.7193 624.06069 627.2796 629.96768">B00046,L,0.35,1315,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,762.80856,220.28844)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H-224.721"/>
<path transform="matrix(1.0066,0,0,.9934,762.80856,220.28844)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#ffff00" d="M0 0H-224.721"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'B00004,Y,2.0,530,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="216.63253" x="579.19058 582.40957 585.09756 587.7856 590.4736 593.1616 595.8496 597.191 600.41 601.75137 604.4394 605.78079 608.46878 611.1568 612.49819 615.18618 617.8742 620.5622 623.25027 624.5916 627.8106 630.4986">A00038,Y,0.35,1315,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,762.80856,235.55998)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H-224.721"/>
<path transform="matrix(1.0066,0,0,.9934,762.80856,235.55998)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#fffff0" d="M0 0H-224.721"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'GR0015,N,0.35,880,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="231.9982" x="579.19058 581.87857 585.09756 587.7856 590.4736 593.1616 595.8496 597.191 601.747 603.0884 605.77639 607.11776 609.8058 612.4938 613.83517 616.5232 619.2112 621.89926 624.5872 625.9286 629.1476 631.83566">LP0055,W,0.35,1315,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,762.80856,281.3587)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#1db200" d="M0 0H-224.721"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'A0002A,Y,0.35,675,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="278.1027" x="579.19058 582.40957 585.09756 587.7856 590.4736 593.1616 596.38058 597.7219 601.4767 602.81808 605.50607 606.8475 609.53549 612.2235 613.5649 616.25289 618.9409 621.6289 624.31698 625.6583 628.87728 631.5653">B0028A,G,0.35,1315,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,129.9279,332.24464)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H24.976L35.2 15.366H593.509L603.756 0H628.73"/>
<path transform="matrix(1.0066,0,0,.9934,129.9279,332.24464)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#fffff0" d="M0 0H24.976L35.2 15.366H593.509L603.756 0H628.73"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'A00007,BE,0.35,880,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="344.69746" x="579.19058 582.41006 585.8998 588.58828 591.2768 593.9653 597.18478 598.5266 603.08309 604.4249 607.11349 608.4553 611.1438 613.83236 615.1742 617.8627 620.55117 623.2397 625.92819 627.27 630.4895 633.178">EN062A,W,0.35,1650,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,129.9279,347.5092)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#1db200" d="M0 0H24.976L35.2-15.366H593.509L603.756 0H628.73"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'LP0017,G/Y,0.35,1315,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="329.3244" x="579.19058 582.40957 585.6285 588.3165 591.0045 593.69259 596.91159 598.2529 602.0076 603.349 606.03707 607.3784 610.0664 612.75448 614.0958 616.7838 619.47189 622.15988 624.8479 626.1893 629.40829 632.09628">EP063A,G,0.35,1650,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,693.8504,393.30793)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-217.685"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'LP019A,R,0.35,880,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="390.80079" x="512.594 516.34976 519.0387 521.72769 524.4167 527.10568 530.3256 531.66799 535.1582 536.50057 539.1895 540.53189 543.2209 545.90988 547.2522 549.9412 552.6302 555.31918 556.6615 559.8815 562.57046">G0024B,N,0.35,555,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,129.9279,393.30793)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#ff0000" d="M0 0H311.824"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'LP009B,L,0.35,880,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="390.80079" x="287.22257 290.71183 293.93077 296.61878 299.3068 301.9948 304.68287 306.0242 309.51344 310.85478 313.5428 314.88417 317.57218 320.2602 321.60154 324.28956 326.97758 329.6656 332.3536 333.69496 336.91389 339.6019">DP0031,R,0.35,1515,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,129.9279,408.5586)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H311.824"/>
<path transform="matrix(1.0066,0,0,.9934,129.9279,408.5586)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#ffff00" d="M0 0H311.824"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{
            textShadow: highlightedText === 'LP003A,P,0.35,880,ALL'
      ? '2px 2px 4px yellow, -2px -2px 4px yellow'
      : 'none', 
          }}><tspan y="406.15257" x="287.22257 290.44105 293.6595 296.34706 299.03459 301.7221 304.40965 305.7505 308.96897 310.3098 312.99736 314.3382 317.02574 319.7133 321.05415 323.74168 326.4292 329.11674 331.80427 333.14515 336.3636 339.05113">SE0029,Y,0.35,1510,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,774.4106,316.98005)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H162.007"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,332.24464)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H162.007"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,347.5092)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H162.007"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,205.02385)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H162.007"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,220.28844)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H162.007"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,235.55998)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H162.007"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,250.82456)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H162.007"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,266.08717)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H162.007"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,281.3587)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H162.007"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,301.7075)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H162.007"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,128.69696)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H162.007"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,143.95955)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H162.007"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,159.22414)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H162.007"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,174.49568)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H162.007"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,189.76026)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H162.007"/>
<path transform="matrix(1.0066,0,0,.9934,0,0)" stroke-width="1.214" stroke-linecap="round" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M446.004 385.675H466.488V421.51799H446.004Z"/>
<text  transform="matrix(1.0066419 0 0 .993402 0 0)" font-size="6.019718" font-family="Arial" fontWeight="bold"><tspan y="383.10908" x="446.0042 451.02467 452.36708 455.38298 457.39353 460.74653 465.09877 468.45176 471.46763 474.8206 476.83119 481.18345 485.53569 487.20317 489.2137 492.89176 496.90693 500.92207 504.9372">Microwave-RH (TXXX)</tspan><tspan y="375.4279" x="446.0042 450.01936 453.3723 456.7253 459.74119 463.09419 465.10475 467.1153 471.13047 472.47285 475.82585 477.8364 482.85685">Sensor-Alarm-</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,0,0)" stroke-width="1.214" stroke-linecap="round" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M446.004 616.16H466.488V652.01699H446.004Z"/>
<text  transform="matrix(1.0066419 0 0 .993402 0 0)" font-size="6.019718" font-family="Arial" fontWeight="bold"><tspan y="613.59207" x="446.0042 450.01936 453.3723 456.7253 460.07829 463.09419 466.44715 468.4577 470.4683 475.48875 476.83116 480.1841 481.85157 483.86216 487.21513 490.56809 493.92106 497.27406 499.2846 503.63688 507.98915 509.6566 511.66716 515.34518 519.3603 523.3755 527.3906">Speaker-Mid range-RH (FXXX)</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,114.45344,703.6769)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,123.48667,703.6769)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.93"/>
<path transform="matrix(1.0066,0,0,.9934,118.11042,707.0584)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C4.546 0 4.546-6.815 0-6.815"/>
<path transform="matrix(1.0066,0,0,.9934,119.816608,703.6769)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.263-3.39 2.263-3.39 0-3.39-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0016 && onConnectorClick(connectorC0016)}><tspan y="703.22647" x="107.57437 111.0641 113.7526 116.4411 119.12959 121.81809 123.43023 126.11873">C0016-10</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,114.45344,688.40536)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,123.48667,688.40536)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.93"/>
<path transform="matrix(1.0066,0,0,.9934,118.11042,691.7938)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C4.546 0 4.546-6.821 0-6.821"/>
<path transform="matrix(1.0066,0,0,.9934,119.816608,688.40536)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.263-3.39 2.263-3.39 0-3.39-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0016 && onConnectorClick(connectorC0016)}><tspan y="687.8605" x="108.91666 112.40591 115.09392 117.78194 120.46995 123.15796 124.76961">C0016-4</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,0,0)" stroke-width="1.214" stroke-linecap="round" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M446.004 682.755H466.488V718.591H446.004Z"/>
<text  transform="matrix(1.0066419 0 0 .993402 0 0)" font-size="6.019718" font-family="Arial" fontWeight="bold"><tspan y="680.18136" x="446.0042 450.01759 452.02635 455.37754 458.3916 461.40568 464.75688 466.76567 470.11683 472.1256 476.47605 480.82649 482.51203 484.52079 488.53416 492.5475 496.56086 500.5742">Pressure-RH (XXXX)</tspan><tspan y="672.50619" x="446.0042 450.01936 453.3723 456.7253 459.74119 463.09419 465.10475 467.1153 471.13047 472.47285 474.48344 477.8364 481.18937 484.54237 486.55293 490.56806 493.92103 495.9316 497.27403 500.62699 503.97996 507.33296 509.34355 512.69656">Sensor-Airbag-Peripheral</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,119.61529,535.76547)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,128.62738,535.76547)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,123.264209,539.152)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C4.545 0 4.545-6.82 0-6.82"/>
<path transform="matrix(1.0066,0,0,.9934,124.97744,535.76547)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.397 2.262-3.397 0-3.397-2.263 0-2.263 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0017 && onConnectorClick(connectorC0017)}><tspan y="534.1971" x="114.036159 117.52541 120.213428 122.901439 125.58945 128.27747 129.88913">C0017-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,114.45344,622.2717)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,123.48667,622.2717)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.93"/>
<path transform="matrix(1.0066,0,0,.9934,118.11042,625.6582)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C4.546 0 4.546-6.82 0-6.82"/>
<path transform="matrix(1.0066,0,0,.9934,119.816608,622.2717)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.39 2.262-3.39 0-3.39-2.263 0-2.263 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0016 && onConnectorClick(connectorC0016)}><tspan y="621.28518" x="108.91666 112.40591 115.09392 117.78194 120.46995 123.15796 124.76961">C0016-3</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,114.45344,637.5343)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,123.48667,637.5343)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.93"/>
<path transform="matrix(1.0066,0,0,.9934,118.11042,640.9228)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C4.546 0 4.546-6.82 0-6.82"/>
<path transform="matrix(1.0066,0,0,.9934,119.816608,637.5343)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.263-3.39 2.263-3.39 0-3.39-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0016 && onConnectorClick(connectorC0016)}><tspan y="636.6512" x="108.91666 112.40591 115.09392 117.78194 120.46995 123.15796 124.76961">C0016-9</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,128.62738,576.471)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,119.61529,576.471)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,124.97744,573.0835)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.553 0-4.553 6.821 0 6.821"/>
<path transform="matrix(1.0066,0,0,.9934,126.68363,576.47006)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.263-3.397 2.263-3.397 0-3.397-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0015 && onConnectorClick(connectorC0015)}><tspan y="575.18197" x="114.036159 117.52541 120.213428 122.901439 125.58945 128.27747 129.88913">C0015-8</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,119.61529,551.0281)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,128.62738,551.0281)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,123.264209,554.41659)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C4.545 0 4.545-6.82 0-6.82"/>
<path transform="matrix(1.0066,0,0,.9934,124.97744,551.0281)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.263-3.397 2.263-3.397 0-3.397-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0017 && onConnectorClick(connectorC0017)}><tspan y="549.5702" x="114.036159 117.52541 120.213428 122.901439 125.58945 128.27747 129.88913">C0017-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,128.62738,495.05097)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,119.61529,495.05097)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,124.97744,491.66249)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.553 0-4.553 6.822 0 6.822"/>
<path transform="matrix(1.0066,0,0,.9934,126.68363,495.05097)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.397 2.262-3.397 0-3.397-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0015 && onConnectorClick(connectorC0015)}><tspan y="493.2194" x="112.69406 116.18284 118.87037 121.55791 124.24544 126.932979 128.54415 131.23168">C0015-10</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,119.61529,454.3434)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,128.62738,454.3434)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,123.264209,457.7319)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C4.545 0 4.545-6.82 0-6.82"/>
<path transform="matrix(1.0066,0,0,.9934,124.97744,454.3434)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.263-3.397 2.263-3.397 0-3.397-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0016 && onConnectorClick(connectorC0016)}><tspan y="452.2363" x="114.036159 117.52541 120.213428 122.901439 125.58945 128.27747 129.88913">C0016-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,128.62738,469.608)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,119.61529,469.608)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,124.97744,466.2195)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.553 0-4.553 6.822 0 6.822"/>
<path transform="matrix(1.0066,0,0,.9934,126.68363,469.608)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.397 2.262-3.397 0-3.397-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0015 && onConnectorClick(connectorC0015)}><tspan y="467.60945" x="114.036159 117.52541 120.213428 122.901439 125.58945 128.27747 129.88913">C0015-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,0,0)" stroke-width="1.214" stroke-linecap="round" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M446.004 529.079H466.488V564.937H446.004Z"/>
<text  transform="matrix(1.0066419 0 0 .993402 0 0)" font-size="6.019718" font-family="Arial" fontWeight="bold"><tspan y="526.5251" x="446.0042 450.01817 451.35939 453.36875 456.72056 460.07234 463.42414 465.4335 469.78459 473.13636 476.48817 479.83995 481.51643 485.5304 487.20268 490.55445 493.90626 497.25804 499.26744 503.61848 507.9695 509.64598 511.65534 515.66928 519.68319 523.69717 527.71109">Airbag-Head Stage-RH (XXXX)</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,481.95103,551.0281)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 5.458-8.184 5.458-8.184 0-8.184-5.458 0-5.458 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,479.88346,551.0281)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.72-4.075 2.72-4.075 0-4.075-2.719 0-2.719 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,474.25657,548.98666)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-2.595V4.111H0"/>
<path transform="matrix(1.0066,0,0,.9934,469.56986,551.0281)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H2.062"/>
<path transform="matrix(1.0066,0,0,.9934,0,0)" stroke-width="1.214" stroke-linecap="round" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M446.004 447.116H466.488V482.973H446.004Z"/>
<text  transform="matrix(1.0066419 0 0 .993402 0 0)" font-size="6.019718" font-family="Arial" fontWeight="bold"><tspan y="444.56428" x="446.0042 449.35719 452.71018 454.38365 457.39955 460.7525 462.7631 467.11534 470.46833 473.8213 475.83186 477.84245 482.1947 486.54695 488.2144 490.22499 495.24543 499.26057 503.27574 507.29087">Latch-Door-RH (MXXX)</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,0,0)" stroke-width="1.214" stroke-linecap="round" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M446.004 119.319H527.96499V293.46699H446.004Z"/>
<text  transform="matrix(1.0066419 0 0 .993402 0 0)" font-size="6.019718" font-family="Arial" fontWeight="bold"><tspan y="116.75264" x="446.0042 451.02467 454.37767 457.73063 461.0836 462.426 465.77897 467.78956 472.14179 475.49479 478.84776 480.8583 482.8689 487.22117 491.5734 493.24085 495.25144 499.6037 503.61885 507.63398 511.64915">Module-Door-RH (DXXX)</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,128.62738,393.30793)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,119.61529,393.30793)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,124.97744,389.91944)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.553 0-4.553 6.822 0 6.822"/>
<path transform="matrix(1.0066,0,0,.9934,126.68363,393.30793)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.397 2.262-3.397 0-3.397-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0015 && onConnectorClick(connectorC0015)}><tspan y="390.80079" x="114.036159 117.52541 120.213428 122.901439 125.58945 128.27747 129.88913">C0015-4</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,119.61529,408.5586)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,128.62738,408.5586)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,123.264209,411.94709)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C4.545 0 4.545-6.822 0-6.822"/>
<path transform="matrix(1.0066,0,0,.9934,124.97744,408.5586)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.397 2.262-3.397 0-3.397-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0016 && onConnectorClick(connectorC0016)}><tspan y="406.15257" x="114.036159 117.52541 120.213428 122.901439 125.58945 128.27747 129.88913">C0016-8</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,119.61529,332.24464)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,128.62738,332.24464)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,123.264209,335.63313)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C4.545 0 4.545-6.822 0-6.822"/>
<path transform="matrix(1.0066,0,0,.9934,124.97744,332.24464)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.397 2.262-3.397 0-3.397-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0018 && onConnectorClick(connectorC0018)}><tspan y="329.3244" x="114.036159 117.52541 120.213428 122.901439 125.58945 128.27747 129.88913">C0018-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,119.61529,347.5092)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,128.62738,347.5092)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,123.264209,350.8957)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C4.545 0 4.545-6.82 0-6.82"/>
<path transform="matrix(1.0066,0,0,.9934,124.97744,347.5092)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.397 2.262-3.397 0-3.397-2.263 0-2.263 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0018 && onConnectorClick(connectorC0018)}><tspan y="344.69746" x="114.036159 117.52541 120.213428 122.901439 125.58945 128.27747 129.88913">C0018-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,128.62738,316.98005)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,119.61529,316.98005)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,124.97744,313.59156)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.553 0-4.553 6.815 0 6.815"/>
<path transform="matrix(1.0066,0,0,.9934,126.68363,316.98005)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.397 2.262-3.397 0-3.397-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0015 && onConnectorClick(connectorC0015)}><tspan y="313.96025" x="112.69406 116.18284 118.87037 121.55791 124.24544 126.932979 128.54415 131.23168">C0015-11</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,128.62738,301.7085)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,119.61529,301.7085)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,124.97744,298.321)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.553 0-4.553 6.82 0 6.82"/>
<path transform="matrix(1.0066,0,0,.9934,126.68363,301.7075)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.263-3.397 2.263-3.397 0-3.397-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0015 && onConnectorClick(connectorC0015)}><tspan y="298.59419" x="114.036159 117.52541 120.213428 122.901439 125.58945 128.27747 129.88913">C0015-3</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,0,0)" stroke-width="1.214" stroke-linecap="round" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M927.493 119.319H1029.926V360.063H927.493Z"/>
<text  transform="matrix(1.0066419 0 0 .993402 0 0)" font-size="6.019718" font-family="Arial" fontWeight="bold"><tspan y="116.75264" x="927.4931 932.5129 933.8547 935.8647 937.87466 941.227 943.23696 945.24697 949.5986 952.9509 956.30337 958.3133 960.32327 964.6749 969.02658 970.6941 972.70407 977.05569 981.0702 985.0848 989.0993">Mirror-Door-RH (DXXX)</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,773.12216,189.76126)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,764.09799,189.76126)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.93"/>
<path transform="matrix(1.0066,0,0,.9934,769.4722,186.37277)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.545 0-4.545 6.82 0 6.82"/>
<path transform="matrix(1.0066,0,0,.9934,771.1784,189.76126)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.395 2.262-3.395 0-3.395-2.263 0-2.263 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0021 && onConnectorClick(connectorC0021)}><tspan y="185.89443" x="754.29318 757.7824 760.47048 763.15847 765.8465 768.5345 770.1462">C0021-6</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,773.12216,316.98005)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,764.09799,316.98005)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.93"/>
<path transform="matrix(1.0066,0,0,.9934,769.4722,313.59156)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.545 0-4.545 6.815 0 6.815"/>
<path transform="matrix(1.0066,0,0,.9934,771.1784,316.98005)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.395 2.262-3.395 0-3.395-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0020 && onConnectorClick(connectorC0020)}><tspan y="313.96025" x="754.29318 757.7824 760.47048 763.15847 765.8465 768.5345 770.1462">C0020-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,773.12216,332.24464)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,764.09799,332.24464)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.93"/>
<path transform="matrix(1.0066,0,0,.9934,769.4722,328.85615)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.545 0-4.545 6.822 0 6.822"/>
<path transform="matrix(1.0066,0,0,.9934,771.1784,332.24464)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.395 2.262-3.395 0-3.395-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0019 && onConnectorClick(connectorC0019)}><tspan y="329.3244" x="754.29318 757.7824 760.47048 763.15847 765.8465 768.5345 770.1462">C0019-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,773.12216,347.5092)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,764.09799,347.5092)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.93"/>
<path transform="matrix(1.0066,0,0,.9934,769.4722,344.12074)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.545 0-4.545 6.82 0 6.82"/>
<path transform="matrix(1.0066,0,0,.9934,771.1784,347.5092)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.395 2.262-3.395 0-3.395-2.263 0-2.263 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0019 && onConnectorClick(connectorC0019)}><tspan y="344.69746" x="754.29318 757.7824 760.47048 763.15847 765.8465 768.5345 770.1462">C0019-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,773.12216,250.82456)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,764.09799,250.82456)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.93"/>
<path transform="matrix(1.0066,0,0,.9934,769.4722,247.43607)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.545 0-4.545 6.82 0 6.82"/>
<path transform="matrix(1.0066,0,0,.9934,771.1784,250.82456)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.395 2.262-3.395 0-3.395-2.263 0-2.263 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0021 && onConnectorClick(connectorC0021)}><tspan y="247.37071" x="752.9506 756.4389 759.126 761.81307 764.50009 767.18716 768.79788 771.48489">C0021-10</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,773.12216,266.08717)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,764.09799,266.08717)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.93"/>
<path transform="matrix(1.0066,0,0,.9934,769.4722,262.70066)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.545 0-4.545 6.82 0 6.82"/>
<path transform="matrix(1.0066,0,0,.9934,771.1784,266.08717)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.263-3.395 2.263-3.395 0-3.395-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0021 && onConnectorClick(connectorC0021)}><tspan y="262.7367" x="752.9506 756.4389 759.126 761.81307 764.50009 767.18716 768.79788 771.48489">C0021-11</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,773.12216,281.3587)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,764.09799,281.3587)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.93"/>
<path transform="matrix(1.0066,0,0,.9934,769.4722,277.9702)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.545 0-4.545 6.815 0 6.815"/>
<path transform="matrix(1.0066,0,0,.9934,771.1784,281.3587)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.395 2.262-3.395 0-3.395-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0021 && onConnectorClick(connectorC0021)}><tspan y="278.1027" x="752.9506 756.4389 759.126 761.81307 764.50009 767.18716 768.79788 771.48489">C0021-12</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,773.12216,301.7085)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,764.09799,301.7085)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.93"/>
<path transform="matrix(1.0066,0,0,.9934,769.4722,298.321)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.545 0-4.545 6.82 0 6.82"/>
<path transform="matrix(1.0066,0,0,.9934,771.1784,301.7075)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.263-3.395 2.263-3.395 0-3.395-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0020 && onConnectorClick(connectorC0020)}><tspan y="298.59419" x="754.29318 757.7824 760.47048 763.15847 765.8465 768.5345 770.1462">C0020-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,773.12216,205.02385)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,764.09799,205.02385)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.93"/>
<path transform="matrix(1.0066,0,0,.9934,769.4722,201.63735)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.545 0-4.545 6.82 0 6.82"/>
<path transform="matrix(1.0066,0,0,.9934,771.1784,205.02385)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.263-3.395 2.263-3.395 0-3.395-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0021 && onConnectorClick(connectorC0021)}><tspan y="201.26696" x="754.29318 757.7824 760.47048 763.15847 765.8465 768.5345 770.1462">C0021-7</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,773.12216,220.28844)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,764.09799,220.28844)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.93"/>
<path transform="matrix(1.0066,0,0,.9934,769.4722,216.9069)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.545 0-4.545 6.815 0 6.815"/>
<path transform="matrix(1.0066,0,0,.9934,771.1784,220.28844)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.269-3.395 2.269-3.395 0-3.395-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0021 && onConnectorClick(connectorC0021)}><tspan y="216.63253" x="754.29318 757.7824 760.47048 763.15847 765.8465 768.5345 770.1462">C0021-8</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,773.12216,235.55998)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,764.09799,235.55998)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.93"/>
<path transform="matrix(1.0066,0,0,.9934,769.4722,232.1715)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.545 0-4.545 6.822 0 6.822"/>
<path transform="matrix(1.0066,0,0,.9934,771.1784,235.55998)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.395 2.262-3.395 0-3.395-2.263 0-2.263 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0021 && onConnectorClick(connectorC0021)}><tspan y="231.9982" x="754.29318 757.7824 760.47048 763.15847 765.8465 768.5345 770.1462">C0021-9</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,773.12216,143.96054)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,764.09799,143.96054)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.93"/>
<path transform="matrix(1.0066,0,0,.9934,769.4722,140.57306)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.545 0-4.545 6.82 0 6.82"/>
<path transform="matrix(1.0066,0,0,.9934,771.1784,143.95955)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.263-3.395 2.263-3.395 0-3.395-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0021 && onConnectorClick(connectorC0021)}><tspan y="139.7977" x="754.29318 757.7824 760.47048 763.15847 765.8465 768.5345 770.1462">C0021-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,773.12216,159.22513)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,764.09799,159.22513)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.93"/>
<path transform="matrix(1.0066,0,0,.9934,769.4722,155.83664)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.545 0-4.545 6.822 0 6.822"/>
<path transform="matrix(1.0066,0,0,.9934,771.1784,159.22513)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.395 2.262-3.395 0-3.395-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0021 && onConnectorClick(connectorC0021)}><tspan y="155.16318" x="754.29318 757.7824 760.47048 763.15847 765.8465 768.5345 770.1462">C0021-4</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,773.12216,174.49668)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,764.09799,174.49668)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.93"/>
<path transform="matrix(1.0066,0,0,.9934,769.4722,171.10819)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.545 0-4.545 6.815 0 6.815"/>
<path transform="matrix(1.0066,0,0,.9934,771.1784,174.49668)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.395 2.262-3.395 0-3.395-2.269 0-2.269 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0021 && onConnectorClick(connectorC0021)}><tspan y="170.52877" x="754.29318 757.7824 760.47048 763.15847 765.8465 768.5345 770.1462">C0021-5</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,773.12216,128.69696)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,764.09799,128.69696)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.93"/>
<path transform="matrix(1.0066,0,0,.9934,769.4722,125.30847)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.545 0-4.545 6.82 0 6.82"/>
<path transform="matrix(1.0066,0,0,.9934,771.1784,128.69696)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.395 2.262-3.395 0-3.395-2.263 0-2.263 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0021 && onConnectorClick(connectorC0021)}><tspan y="124.44582" x="754.29318 757.7824 760.47048 763.15847 765.8465 768.5345 770.1462">C0021-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,124.76907,703.6769)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.273 .852-1.273 0-1.273-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,114.45344,703.6769)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.272 .852-1.272 0-1.272-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,124.76907,688.40536)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.273 .852-1.273 0-1.273-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,114.45344,688.40536)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.272 .852-1.272 0-1.272-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,447.6602,703.6769)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,446.37879,701.1417)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.411 0-3.411 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0001 && onConnectorClick(connectorC0001)}><tspan y="703.22647" x="416.25724 419.74409 422.42967 425.11528 427.80085 430.48646 432.0957">C0001-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,447.6612,688.40536)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.7 0-1.7 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,446.3798,685.8702)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.411 0-3.411 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0001 && onConnectorClick(connectorC0001)}><tspan y="687.8605" x="416.25724 419.74409 422.42967 425.11528 427.80085 430.48646 432.0957">C0001-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,124.76907,637.5343)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.273 .852-1.273 0-1.273-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,114.45344,637.5343)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.272 .852-1.272 0-1.272-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,124.76907,622.2717)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.273 .85-1.273 0-1.273-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,114.45344,622.2717)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.272 .85-1.272 0-1.272-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,119.61428,576.471)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,129.9279,576.471)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.28 .852-1.28 0-1.28-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,129.9279,551.0281)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.28 .852-1.28 0-1.28-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,119.61428,551.0281)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,129.9279,535.76547)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.28 .85-1.28 0-1.28-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,119.61428,535.76547)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,119.61428,495.05097)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,129.9279,495.05097)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.28 .852-1.28 0-1.28-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,119.61428,469.608)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,129.9279,469.608)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.28 .852-1.28 0-1.28-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,129.9279,454.3434)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.28 .852-1.28 0-1.28-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,119.61428,454.3434)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,447.6602,535.76547)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,446.37879,533.22836)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.411 0-3.411 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0010 && onConnectorClick(connectorC0010)}><tspan y="534.1971" x="416.25724 419.74409 422.42967 425.11528 427.80085 430.48646 432.0957">C0010-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,447.6612,622.2717)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,446.3798,619.73458)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.411 0-3.411 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0009 && onConnectorClick(connectorC0009)}><tspan y="621.28518" x="416.25724 419.74409 422.42967 425.11528 427.80085 430.48646 432.0957">C0009-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,447.6612,637.5343)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.7 0-1.7 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,446.3798,634.99917)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.411 0-3.411 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0009 && onConnectorClick(connectorC0009)}><tspan y="636.6512" x="416.25724 419.74409 422.42967 425.11528 427.80085 430.48646 432.0957">C0009-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,447.6612,551.0281)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.7 0-1.7 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,446.3798,548.4929)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.411 0-3.411 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0010 && onConnectorClick(connectorC0010)}><tspan y="549.5702" x="416.25724 419.74409 422.42967 425.11528 427.80085 430.48646 432.0957">C0010-2</tspan></text>
<path transform="matrix(0,1,1,0,470.236,551.029)" d="M0 0C.846 0 .846-1.289 0-1.289-.845-1.289-.845 0 0 0" fill-rule="evenodd"/>
<path transform="matrix(1.0066,0,0,.9934,470.21607,551.0281)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0011 && onConnectorClick(connectorC0011)}><tspan y="549.5702" x="477.70524 481.1945 483.8825 486.57054 489.25856 491.94657 493.5582">C0011-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,447.6612,469.608)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,446.3798,467.07286)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.411 0-3.411 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0013 && onConnectorClick(connectorC0013)}><tspan y="467.60945" x="416.25724 419.74409 422.42967 425.11528 427.80085 430.48646 432.0957">C0013-3</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,447.6612,454.3434)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,446.3798,451.80827)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.411 0-3.411 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0013 && onConnectorClick(connectorC0013)}><tspan y="452.2363" x="416.25724 419.74409 422.42967 425.11528 427.80085 430.48646 432.0957">C0013-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,473.44123,454.3434)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,472.15983,456.88056)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0013 && onConnectorClick(connectorC0013)}><tspan y="452.2363" x="477.70524 481.1945 483.8825 486.57054 489.25856 491.94657 493.5582">C0013-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,129.9279,408.5586)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.28 .85-1.28 0-1.28-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,119.61428,408.5586)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,119.61428,393.30793)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,129.9279,393.30793)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.28 .85-1.28 0-1.28-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,129.9279,347.5092)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.28 .85-1.28 0-1.28-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,119.61428,347.5092)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,129.9279,332.24464)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.28 .85-1.28 0-1.28-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,119.61428,332.24464)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,119.61428,316.98005)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,129.9279,316.98005)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.28 .852-1.28 0-1.28-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,119.61428,301.7085)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,129.9279,301.7085)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.28 .852-1.28 0-1.28-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,447.6602,393.30793)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,446.37879,390.77278)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.411 0-3.411 5.104 0 5.104"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0002 && onConnectorClick(connectorC0002)}><tspan y="390.80079" x="416.25724 419.74409 422.42967 425.11528 427.80085 430.48646 432.0957">C0002-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,447.6612,408.5586)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,446.3798,406.02146)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.411 0-3.411 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0002 && onConnectorClick(connectorC0002)}><tspan y="406.15257" x="416.25724 419.74409 422.42967 425.11528 427.80085 430.48646 432.0957">C0002-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,473.44123,393.30793)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,472.15983,395.84309)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.104 0-5.104"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0002 && onConnectorClick(connectorC0002)}><tspan y="390.80079" x="477.70524 481.1945 483.8825 486.57054 489.25856 491.94657 493.5582">C0002-4</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,535.31698,250.82456)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.7-2.554 1.7-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,534.0355,253.35971)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0007 && onConnectorClick(connectorC0007)}><tspan y="247.37071" x="537.832 541.3208 544.0083 546.69589 549.38339 552.0709 553.68209 556.3696">C0007-21</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,535.31698,281.3587)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,534.0355,283.89387)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.104 0-5.104"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0007 && onConnectorClick(connectorC0007)}><tspan y="278.1027" x="537.832 541.3208 544.0083 546.69589 549.38339 552.0709 553.68209 556.3696">C0007-17</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,535.31698,266.08717)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,534.0355,268.6243)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0007 && onConnectorClick(connectorC0007)}><tspan y="262.7367" x="537.832 541.3208 544.0083 546.69589 549.38339 552.0709 553.68209 556.3696">C0007-25</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,535.31698,220.28844)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,534.0355,222.83055)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.111 0-5.111"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0007 && onConnectorClick(connectorC0007)}><tspan y="216.63253" x="539.18167 542.6705 545.358 548.04556 550.73306 553.4206 555.0318">C0007-7</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,535.31698,235.55998)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,534.0355,238.09514)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0007 && onConnectorClick(connectorC0007)}><tspan y="231.9982" x="539.18167 542.6705 545.358 548.04556 550.73306 553.4206 555.0318">C0007-6</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,535.31698,205.02385)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,534.0355,207.56099)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0007 && onConnectorClick(connectorC0007)}><tspan y="201.26696" x="537.832 541.3208 544.0083 546.69589 549.38339 552.0709 553.68209 556.3696">C0007-18</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,535.31698,143.96054)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,534.0355,146.4977)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0007 && onConnectorClick(connectorC0007)}><tspan y="139.7977" x="537.832 541.3208 544.0083 546.69589 549.38339 552.0709 553.68209 556.3696">C0007-20</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,535.31698,189.76126)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.7-2.554 1.7-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,534.0355,192.29642)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0007 && onConnectorClick(connectorC0007)}><tspan y="185.89443" x="539.18167 542.6705 545.358 548.04556 550.73306 553.4206 555.0318">C0007-4</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,535.31698,174.49668)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,534.0355,177.03183)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.113 0-5.113"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0007 && onConnectorClick(connectorC0007)}><tspan y="170.52877" x="539.18167 542.6705 545.358 548.04556 550.73306 553.4206 555.0318">C0007-5</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,535.31698,159.22513)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,534.0355,161.76029)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.104 0-5.104"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0007 && onConnectorClick(connectorC0007)}><tspan y="155.16318" x="537.832 541.3208 544.0083 546.69589 549.38339 552.0709 553.68209 556.3696">C0007-24</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,535.31698,128.69696)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.7-2.554 1.7-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,534.0355,131.23212)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0007 && onConnectorClick(connectorC0007)}><tspan y="124.44582" x="537.832 541.3208 544.0083 546.69589 549.38339 552.0709 553.68209 556.3696">C0007-19</tspan></text>
<path transform="matrix(0,1,1,0,699.033,393.309)" d="M0 0C3.382 0 3.382-5.14 0-5.14-3.382-5.14-3.382 0 0 0" fill-rule="evenodd"/>
<path transform="matrix(1.0066,0,0,.9934,699.00418,393.30793)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 3.404-5.106 3.404-5.106 0-5.106-3.404 0-3.404 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial"><tspan y="390.80079" x="684.6113 687.82888 691.0464 693.7329 696.4195">SP002</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,764.097,347.5092)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,764.097,332.24464)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,764.097,316.98005)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,347.5092)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,332.24464)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,316.98005)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,940.05569,316.98005)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.552 1.702-2.552 0-2.552-1.702 0-1.702 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial"><tspan y="319.08576" x="951.44406 954.9352 958.156 962.183 965.4039 968.895 972.11587 973.45297 976.9441 980.70077 984.1919 987.6831 990.90396 994.3951 997.3457 998.689 1002.4457">CAMERA CONNECTION</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,940.05569,332.24464)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.552 1.702-2.552 0-2.552-1.702 0-1.702 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial"><tspan y="334.45176" x="948.76077 951.98068 954.9303 958.4206 961.6405 965.13076 968.62106 971.84097 974.7906 976.1276 979.61788 983.37356 986.86386 990.35409 993.57406 997.0643 1000.0139 1001.35629 1005.11196">ETHERNET CONNECTION</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,940.05569,347.5092)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.552 1.702-2.552 0-2.552-1.702 0-1.702 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial"><tspan y="349.8177" x="948.76077 951.98068 954.9303 958.4206 961.6405 965.13076 968.62106 971.84097 974.7906 976.1276 979.61788 983.37356 986.86386 990.35409 993.57406 997.0643 1000.0139 1001.35629 1005.11196">ETHERNET CONNECTION</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,764.097,301.7085)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,764.097,281.35969)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,764.097,266.08815)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,764.097,250.82555)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,301.70948)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,281.3607)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,266.08915)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,250.82656)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,764.097,235.56197)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,764.097,220.29042)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,764.097,205.02584)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,235.56197)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,220.29042)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,205.02584)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,940.05569,301.71049)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.552 1.702-2.552 0-2.552-1.702 0-1.702 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial"><tspan y="303.71263" x="951.44406 954.9352 958.156 962.183 965.4039 968.895 972.11587 973.45297 976.9441 980.70077 984.1919 987.6831 990.90396 994.3951 997.3457 998.689 1002.4457">CAMERA CONNECTION</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,940.05569,281.3587)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.552 1.702-2.552 0-2.552-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,940.05569,266.08717)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.552 1.702-2.552 0-2.552-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,940.05569,250.82456)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.7-2.552 1.7-2.552 0-2.552-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,940.05569,220.28844)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.552 1.702-2.552 0-2.552-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,940.05569,235.55998)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.552 1.702-2.552 0-2.552-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,940.05569,205.02385)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.552 1.702-2.552 0-2.552-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,764.097,189.76126)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,764.097,174.49668)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,764.097,159.22513)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,764.097,143.96054)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,189.76126)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,174.49668)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,159.22513)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,143.96054)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,764.097,128.69795)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,774.4106,128.69795)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,940.05569,189.76126)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.7-2.552 1.7-2.552 0-2.552-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,940.05569,174.49668)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.552 1.702-2.552 0-2.552-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,940.05569,159.22513)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.552 1.702-2.552 0-2.552-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,940.05569,143.96054)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.552 1.702-2.552 0-2.552-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,940.05569,128.69795)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.7-2.552 1.7-2.552 0-2.552-1.702 0-1.702 0 0"/>
</g>
</g>
</g>
</g>
</svg>
     
  );
});

Circuit2.displayName = 'Circuit2';
export default Circuit2;