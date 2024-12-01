import * as React from "react";
import { useEffect } from "react";
import { Connector } from './circuitPage';

interface SvgDoorCircuitProps extends React.SVGProps<SVGSVGElement> {
    connectors: Connector[];
    onConnectorClick: (connector: Connector) => void;
    onTextClick: (textValue: string) => void;
  }
  
  const Circuit1 = React.forwardRef<SVGSVGElement, SvgDoorCircuitProps>(
    ({ connectors, onConnectorClick, onTextClick, ...props }, ref) => {
      // Find the connector with the name C060
      const connectorC0015 = connectors.find((conn) => conn.connectorName === 'C0015');
      const connectorC0016 = connectors.find((conn) => conn.connectorName === 'C0016');
      const connectorC0007 = connectors.find((conn) => conn.connectorName === 'C0007');
      const connectorC0008 = connectors.find((conn) => conn.connectorName === 'C0008');
      const connectorC0006 = connectors.find((conn) => conn.connectorName === 'C0006');
      const connectorC0005 = connectors.find((conn) => conn.connectorName === 'C0005');
      const connectorC0003 = connectors.find((conn) => conn.connectorName === 'C0003');
      const connectorC0004 = connectors.find((conn) => conn.connectorName === 'C0004');
      const connectorC0014 = connectors.find((conn) => conn.connectorName === 'C0014');
      const connectorC0012 = connectors.find((conn) => conn.connectorName === 'C0012');

      return (
        <svg ref={ref} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" width="1191" height="842" viewBox="0 0 1191 842"   {...props}>
<defs>
<clipPath id="clip_0">
<path transform="matrix(0,1,1,0,0,0)" d="M773.1 92.008H70.079959V1118.9081H773.1Z" fill-rule="evenodd"/>
</clipPath>
<clipPath id="clip_1">
<path transform="matrix(0,1,1,0,0,0)" d="M773.1 92.008H70.079959V1118.9081H773.1Z" fill-rule="evenodd"/>
</clipPath>
<clipPath id="clip_2">
<path transform="matrix(0,1,1,0,0,0)" d="M776.76 45.568H68.04004V1165.288H776.76Z" fill-rule="evenodd"/>
</clipPath>
<clipPath id="clip_3">
<path transform="matrix(0,1,1,0,0,0)" d="M.03 1191.03H842.01V.030029297H.03Z"/>
</clipPath>
</defs>
<text fill="#ffffff"  transform="matrix(1 0 0 1 0 0)" font-size="1.98" font-family="Arial" font-weight="bold"><tspan y="69.42" x="45.5679 46.647596 47.787286 48.44722 49.526914 50.666604 51.206945 52.65155 54.20704 55.762529 57.207136 45.5679 47.00756 48.207838 49.40811 50.66838 51.748079 52.34841 53.78807 54.329008 55.52928 56.78955 57.449487 57.989828 59.429487 60.569177">xx-xx DOORSCoupe Right Cam</tspan></text>
<g clip-path="url(#clip_0)">
<g clip-path="url(#clip_1)">
<g clip-path="url(#clip_2)">
<g clip-path="url(#clip_3)">
<path transform="matrix(0,1,1,0,0,0)" d="M70.063 91.99H773.13V1118.91H70.063Z" fill="#ffffff"/>
<path transform="matrix(1.0066,0,0,.9934,832.293,543.685)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H263.788V-281.706H140.857"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold'><tspan y="260.46339" x="1013.7971 1017.5519 1020.2398 1022.9278 1025.6157 1028.3037 1031.5227 1032.864 1036.3533 1037.6946 1040.3826 1041.7239 1044.4118 1045.753 1048.441 1051.129 1053.817 1055.1583 1058.3773 1061.0652">G0022B,N,0.5,735,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,149.773,564.043)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H675.471V-17.939"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold'><tspan y="562.66317" x="732.0751 735.82986 738.5178 741.2059 743.89389 746.5819 749.8009 751.1423 754.63156 755.9729 758.66098 760.0023 762.6903 764.0317 766.7197 769.4077 772.09579 773.43716 776.6561 779.3441">G0026A,N,2.0,610,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,523.328)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H245.872"/>
<path transform="matrix(1.0066,0,0,.9934,695.651,523.328)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#ffff00" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('B00004,Y,2.0,530,ALL')}><tspan y="521.68478" x="732.0751 735.29409 737.9821 740.6701 743.35818 746.04617 748.7342 750.07559 753.29458 754.6359 757.3239 758.6653 761.35336 762.6947 765.3827 768.07077 770.7587 772.1001 775.3191 778.00717">B00004,Y,2.0,530,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,477.529)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H245.872"/>
<path transform="matrix(1.0066,0,0,.9934,695.651,477.529)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#ffff00" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('B00012,Y,2.0,530,ALL')}><tspan y="475.58164" x="732.0751 735.29409 737.9821 740.6701 743.35818 746.04617 748.7342 750.07559 753.29458 754.6359 757.3239 758.6653 761.35336 762.6947 765.3827 768.07077 770.7587 772.1001 775.3191 778.00717">B00012,Y,2.0,530,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,462.265)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#874505" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('GR0001,BR,0.5,440,ALL')}><tspan y="460.21525" x="732.0751 735.82986 739.3191 742.00717 744.6951 747.3832 750.07119 751.41256 754.63156 758.1208 759.46218 762.1502 763.4916 766.1796 767.521 770.209 772.89706 775.585 776.9264 780.1454 782.8334">GR0001,BR,0.5,440,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,943.146,492.799)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H-245.872"/>
<path transform="matrix(1.0066,0,0,.9934,943.146,492.799)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#fffff0" d="M0 0H-245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('LP0014,W,0.5,440,ALL')}><tspan y="490.94804" x="732.0751 734.76266 737.98117 740.66867 743.3562 746.0437 748.73129 750.07217 754.6276 755.96859 758.65609 759.99697 762.6845 764.0254 766.7129 769.40048 772.088 773.4289 776.64736 779.3349">LP0014,W,0.5,440,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,508.064)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H245.872"/>
<path transform="matrix(1.0066,0,0,.9934,695.651,508.064)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#ffff00" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('D00010,Y,0.5,440,ALL')}><tspan y="506.32044" x="732.0751 735.5649 738.25338 740.9419 743.6304 746.3189 749.0074 750.34927 753.5687 754.9106 757.59909 758.9409 761.62948 762.9713 765.6598 768.3483 771.0368 772.37869 775.59817 778.2866">D00010,Y,0.5,440,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,543.685)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H130.618"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('G0023B,N,2.0,410,ALL')}><tspan y="542.178" x="732.0751 735.82986 738.5178 741.2059 743.89389 746.5819 749.8009 751.1423 754.63156 755.9729 758.66098 760.0023 762.6903 764.0317 766.7197 769.4077 772.09579 773.43716 776.6561 779.3441">G0023B,N,2.0,410,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,149.773,126.46)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#ff0000" d="M0 0H450.114"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('DP052A,R,2.0,985,ALL')}><tspan y="122.17303" x="455.48799 458.97724 462.19618 464.8842 467.5722 470.26023 473.4792 474.82054 478.30979 479.65113 482.33915 483.68049 486.3685 487.70985 490.39787 493.08589 495.7739 497.11524 500.3342 503.02223">DP052A,R,2.0,985,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,149.773,146.796)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#1db200" d="M0 0H450.114"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('CH0053,G,0.35,905,ALL')}><tspan y="142.65114" x="455.48799 458.97773 462.46745 465.15596 467.84446 470.53297 473.22148 474.5633 478.3185 479.66035 482.34886 483.69068 486.37919 489.06767 490.4095 493.098 495.7865 498.475 499.81684 503.0363 505.7248">CH0053,G,0.35,905,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,149.773,167.153)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H450.114"/>
<path transform="matrix(1.0066,0,0,.9934,149.773,167.153)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#ffff00" d="M0 0H450.114"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('CL0054,Y,0.35,905,ALL')}><tspan y="163.13628" x="455.48799 458.97724 461.66526 464.35328 467.0413 469.7293 472.41734 473.75868 476.97764 478.31898 481.007 482.34834 485.03636 487.72438 489.0657 491.75373 494.44175 497.12977 498.4711 501.69007 504.37809">CL0054,Y,0.35,905,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,602.858,279.101)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#ff65ff" d="M0 0H-240.744"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('D00039,P,0.35,1685,ALL')}><tspan y="275.83583" x="455.48799 458.97773 461.66624 464.35475 467.0432 469.73173 472.42024 473.76206 476.9815 478.32334 481.01185 482.35368 485.04216 487.73066 489.07249 491.761 494.4495 497.138 499.8265 501.16835 504.38777 507.07627">D00039,P,0.35,1685,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,149.773,319.815)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H178.63"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('G00034,N,0.35,2050,ALL')}><tspan y="316.81419" x="178.88597 182.6407 185.32872 188.01674 190.70476 193.39278 196.0808 197.42215 200.9114 202.25276 204.94078 206.28214 208.97016 211.65818 212.99954 215.68756 218.37558 221.0636 223.75162 225.09297 228.31194 230.99996">G00034,N,0.35,2050,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,149.773,279.101)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#adadad" d="M0 0H178.63"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('D00056,GY,0.35,2040,ALL')}><tspan y="275.83583" x="178.88597 182.37523 185.06325 187.75127 190.43929 193.1273 195.81533 197.15668 200.9114 204.13037 205.47173 208.15975 209.5011 212.18912 214.87714 216.2185 218.90653 221.59455 224.28256 226.97058 228.31194 231.53089 234.2189">D00056,GY,0.35,2040,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,149.773,299.458)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H178.63"/>
<path transform="matrix(1.0066,0,0,.9934,149.773,299.458)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#fffff0" d="M0 0H178.63"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('D00044,BE,0.35,2040,ALL')}><tspan y="296.32096" x="178.88597 182.3757 185.0642 187.75269 190.44118 193.12967 195.81816 197.16 200.37943 203.59886 204.9407 207.6292 208.97104 211.65953 214.34803 215.68987 218.37834 221.06684 223.75533 226.44382 227.78566 231.0051 233.69359">D00044,BE,0.35,2040,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,202.774)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('GR005A,N,0.35,675,ALL')}><tspan y="198.99488" x="732.0751 735.8303 739.32009 742.0086 744.6971 747.38558 750.60507 751.9469 755.43667 756.7785 759.46707 760.8089 763.4974 766.1859 767.5278 770.21627 772.9048 775.59329 776.9351 780.1546 782.8431">GR005A,N,0.35,675,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,263.838)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#0000cf" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('L0021A,L,0.35,750,ALL')}><tspan y="260.46339" x="732.0751 734.7631 737.4511 740.13919 742.82717 745.5152 748.7342 750.07559 752.76358 754.1049 756.79299 758.13436 760.8223 763.5104 764.85177 767.5398 770.2278 772.91586 774.2572 777.47616 780.1642">L0021A,L,0.35,750,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,324.901)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#1db200" d="M0 0H245.872"/>
<path transform="matrix(1.0066,0,0,.9934,695.651,324.901)" stroke-width="1.214" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#ffff00" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('LP0017,G/Y,0.35,1315,ALL')}><tspan y="321.94" x="732.0751 734.7631 737.9821 740.6701 743.35818 746.04617 748.7342 750.07559 753.83029 755.17166 758.3906 759.732 762.42007 763.7614 766.4494 769.13748 770.4788 773.1668 775.85488 778.54287 781.2309 782.57229 785.79129 788.47927">LP0017,G/Y,0.35,1315,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,340.166)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H245.872"/>
<path transform="matrix(1.0066,0,0,.9934,695.651,340.166)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#fffff0" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('A00007,BE,0.35,880,ALL')}><tspan y="337.30534" x="732.0751 735.29409 737.9821 740.6701 743.35818 746.04617 748.7342 750.07559 753.29458 756.5135 757.85488 760.5429 761.8843 764.57229 767.2603 768.6017 771.2897 773.9777 776.6657 778.00717 781.2261 783.9141">A00007,BE,0.35,880,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,355.436)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('GR0015,N,0.35,880,ALL')}><tspan y="352.67173" x="732.0751 735.82986 739.3191 742.00717 744.6951 747.3832 750.07119 751.41256 754.90188 756.2432 758.9312 760.2726 762.96066 765.6486 766.99 769.67807 772.366 775.0541 776.39547 779.61447 782.3024">GR0015,N,0.35,880,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,218.037)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H245.872"/>
<path transform="matrix(1.0066,0,0,.9934,695.651,218.037)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#ffff00" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('A0002A,Y,0.35,675,ALL')}><tspan y="214.36627" x="732.0751 735.2936 737.98117 740.66867 743.3562 746.0437 749.2622 750.6031 753.8216 755.1625 757.85006 759.1909 761.8785 764.566 765.90689 768.5944 771.2819 773.9695 775.31039 778.5289 781.2164">A0002A,Y,0.35,675,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,370.7)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#ff0000" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('LP019A,R,0.35,880,ALL')}><tspan y="368.0361" x="732.0751 734.7636 737.9831 740.6716 743.3601 746.0486 749.26809 750.6099 754.0997 755.4415 758.13 759.47189 762.1604 764.8489 766.19076 768.8793 771.56777 774.2563 775.59817 778.81759 781.5061">LP019A,R,0.35,880,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,385.965)" stroke-width=".607" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('A0016C,G-Y,0.35,880,ALL')}><tspan y="383.4085" x="732.0751 735.29458 737.9831 740.6716 743.3601 746.0486 749.5383 750.8802 754.63546 756.24758 759.46707 760.8089 763.4974 764.83926 767.5278 770.21627 771.5581 774.24667 776.9351 779.62368 780.9655 784.18496 786.8735">A0016C,G-Y,0.35,880,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,401.234)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#0000cf" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('LP009B,L,0.35,880,ALL')}><tspan y="398.7749" x="732.0751 734.7636 737.9831 740.6716 743.3601 746.0486 749.26809 750.6099 753.2984 754.64028 757.3288 758.67068 761.35916 764.0476 765.38949 768.078 770.7665 773.455 774.7969 778.01638 780.70486">LP009B,L,0.35,880,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,416.485)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#ff65ff" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('LP003A,P,0.35,880,ALL')}><tspan y="414.1262" x="732.0751 734.76266 737.98117 740.66867 743.3562 746.0437 749.2622 750.6031 753.8216 755.1625 757.85006 759.1909 761.8785 764.566 765.90689 768.5944 771.2819 773.9695 775.31039 778.5289 781.2164">LP003A,P,0.35,880,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,279.101)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#1db200" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('LP006A,G,0.35,750,ALL')}><tspan y="275.83583" x="732.0751 734.7631 737.9821 740.6701 743.35818 746.04617 749.26516 750.6065 754.3612 755.70266 758.3906 759.732 762.42007 765.10806 766.4494 769.13748 771.82546 774.5135 775.85488 779.0738 781.76187">LP006A,G,0.35,750,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,126.46)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#0000cf" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('A0013A,L,0.35,675,ALL')}><tspan y="122.17303" x="732.0751 735.29458 737.9831 740.6716 743.3601 746.0486 749.26809 750.6099 753.2984 754.64028 757.3288 758.67068 761.35916 764.0476 765.38949 768.078 770.7665 773.455 774.7969 778.01638 780.70486">A0013A,L,0.35,675,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,141.71)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#adadad" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('LP008B,GY,0.35,675,ALL')}><tspan y="137.52532" x="732.0751 734.7631 737.9821 740.6701 743.35818 746.04617 749.26516 750.6065 754.3612 757.5802 758.9216 761.6096 762.951 765.639 768.327 769.6684 772.3564 775.04446 777.7324 779.0738 782.2928 784.98086">LP008B,GY,0.35,675,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,156.973)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#a54cff" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('A0011A,V,0.35,675,ALL')}><tspan y="152.89069" x="732.0751 735.2936 737.98117 740.66867 743.3562 746.0437 749.2622 750.6031 753.8216 755.1625 757.85006 759.1909 761.8785 764.566 765.90689 768.5944 771.2819 773.9695 775.31039 778.5289 781.2164">A0011A,V,0.35,675,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,172.238)" stroke-width="3.27" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#ff0000" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('LP018A,R,0.35,675,ALL')}><tspan y="168.2631" x="732.0751 734.7636 737.9831 740.6716 743.3601 746.0486 749.26809 750.6099 754.0997 755.4415 758.13 759.47189 762.1604 764.8489 766.19076 768.8793 771.56777 774.2563 775.59817 778.81759 781.5061">LP018A,R,0.35,675,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,695.651,187.502)" stroke-width="3.675" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0H245.872"/>
<path transform="matrix(1.0066,0,0,.9934,695.651,187.502)" stroke-width="2.865" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#fffff0" d="M0 0H245.872"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer' }}
        onClick={() => onTextClick('A00020,BE,0.35,675,ALL')}><tspan y="183.6285" x="732.0751 735.29409 737.9821 740.6701 743.35818 746.04617 748.7342 750.07559 753.29458 756.5135 757.85488 760.5429 761.8843 764.57229 767.2603 768.6017 771.2897 773.9777 776.6657 778.00717 781.2261 783.9141">A00020,BE,0.35,675,ALL</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,0,0)" stroke-width="1.214" stroke-linecap="round" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M604.009 117.269H685.97V557.544H604.009Z"/>
<text  transform="matrix(1.0066419 0 0 .993402 0 0)" font-size="6.019718" font-family="Arial" fontWeight="bold"><tspan y="114.701808" x="604.0093 609.03036 612.3839 615.7375 619.09109 620.4341 623.78768 625.7988 630.1517 633.50527 636.8588 638.87 640.8812 645.2341 649.5869 651.2544 653.26559 657.6184 661.63418 665.6499 669.66567">Module-Door-RH (DXXX)</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,0,0)" stroke-width="1.214" stroke-linecap="round" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M942.081 316.814H962.573V429.478H942.081Z"/>
<text  transform="matrix(1.0066419 0 0 .993402 0 0)" font-size="6.019718" font-family="Arial" fontWeight="bold"><tspan y="314.24644" x="942.07986 946.09439 950.44607 951.78787 953.46078 956.476 959.82839 961.49588 965.51046 968.8628 971.87808 974.8933 976.90328 980.9178 984.27017 987.2854 988.6272 989.969 991.3108 994.66317 996.6731 999.68838 1001.69839 1006.05 1010.4017 1012.06918 1014.0791 1018.0937 1022.10836 1026.1229 1030.1375">Switch Pack-Auxiliary-RH (SXXX)</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,148.471,564.043)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,139.459,564.043)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,144.823,560.654)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.553 0-4.553 6.82 0 6.82"/>
<path transform="matrix(1.0066,0,0,.9934,146.529,564.043)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.397 2.262-3.397 0-3.397-2.263 0-2.263 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0015 && onConnectorClick(connectorC0015)}><tspan y="562.66317" x="133.75074 137.23998 139.928 142.61602 145.30403 147.99207 149.60372">C0015-7</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,0,0)" stroke-width="1.214" stroke-linecap="round" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M942.081 455.09H962.573V537.051H942.081Z"/>
<text  transform="matrix(1.0066419 0 0 .993402 0 0)" font-size="6.019718" font-family="Arial" fontWeight="bold"><tspan y="452.53688" x="942.07986 947.7607 949.10128 952.45248 955.8036 959.1547 963.5052 965.17269 966.51327 967.8539 969.5256 971.19729 972.86477 974.87356 978.2247 981.5993 984.95108 986.29226 989.644 991.3163 994.6681 996.6774 998.68679 1000.69619 1005.0472 1009.39828 1011.08377 1013.09317 1018.11239 1022.1264 1026.1404 1030.1544">Window lift regulatorr-RH (MXXX)</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,148.471,319.815)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,139.459,319.815)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,144.823,316.427)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.553 0-4.553 6.815 0 6.815"/>
<path transform="matrix(1.0066,0,0,.9934,146.529,319.815)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.397 2.262-3.397 0-3.397-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0015 && onConnectorClick(connectorC0015)}><tspan y="316.81419" x="133.75074 137.23998 139.928 142.61602 145.30403 147.99207 149.60372">C0015-9</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,139.459,279.101)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,148.471,279.101)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,143.109,282.489)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C4.545 0 4.545-6.82 0-6.82"/>
<path transform="matrix(1.0066,0,0,.9934,144.823,279.101)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.263-3.397 2.263-3.397 0-3.397-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0016 && onConnectorClick(connectorC0016)}><tspan y="275.83583" x="133.75074 137.23998 139.928 142.61602 145.30403 147.99207 149.60372">C0016-5</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,139.459,299.458)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,148.471,299.458)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,143.109,302.847)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C4.545 0 4.545-6.822 0-6.822"/>
<path transform="matrix(1.0066,0,0,.9934,144.823,299.458)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.397 2.262-3.397 0-3.397-2.263 0-2.263 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0016 && onConnectorClick(connectorC0016)}><tspan y="296.32096" x="132.40863 135.89742 138.58495 141.27248 143.96 146.64756 148.25872 150.94626">C0016-12</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,0,0)" stroke-width="1.214" stroke-linecap="round" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M332.549 270.709H353.03303V332.178H332.549Z"/>
<text  transform="matrix(1.0066419 0 0 .993402 0 0)" font-size="6.019718" font-family="Arial" fontWeight="bold"><tspan y="268.14323" x="332.54927 336.56324 340.91429 342.25547 343.92774 346.9424 350.2942 352.3036 356.65464 360.00645 363.35823 365.3676 367.37699 370.7288 374.08058 377.09526 380.10993 381.7822 386.13325 389.48506 390.82624 394.178 397.1927 400.20738 402.21678 406.5678 410.91886 412.60438 414.61378 418.62773 422.6417 426.65565 430.6696">Switch-Door-Lock/Unlock-RH (SXXX)</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,148.471,126.46)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,139.459,126.46)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,144.823,123.071)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-4.553 0-4.553 6.815 0 6.815"/>
<path transform="matrix(1.0066,0,0,.9934,146.529,126.46)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.397 2.262-3.397 0-3.397-2.271 0-2.271 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0015 && onConnectorClick(connectorC0015)}><tspan y="122.17303" x="133.75074 137.23998 139.928 142.61602 145.30403 147.99207 149.60372">C0015-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,139.459,146.796)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,148.471,146.796)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,143.109,150.184)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C4.545 0 4.545-6.82 0-6.82"/>
<path transform="matrix(1.0066,0,0,.9934,144.823,146.796)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.263-3.397 2.263-3.397 0-3.397-2.262 0-2.262 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0016 && onConnectorClick(connectorC0016)}><tspan y="142.65114" x="133.75074 137.23998 139.928 142.61602 145.30403 147.99207 149.60372">C0016-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,139.459,167.153)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H1.916"/>
<path transform="matrix(1.0066,0,0,.9934,148.471,167.153)" stroke-width=".405" stroke-linecap="butt" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M0 0H-1.916"/>
<path transform="matrix(1.0066,0,0,.9934,143.109,170.54)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C4.545 0 4.545-6.82 0-6.82"/>
<path transform="matrix(1.0066,0,0,.9934,144.823,167.153)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 2.262-3.397 2.262-3.397 0-3.397-2.263 0-2.263 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0016 && onConnectorClick(connectorC0016)}><tspan y="163.13628" x="133.75074 137.23998 139.928 142.61602 145.30403 147.99207 149.60372">C0016-7</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,0,0)" stroke-width="1.214" stroke-linecap="round" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M942.081 117.055H962.573V229.73401H942.081Z"/>
<text  transform="matrix(1.0066419 0 0 .993402 0 0)" font-size="6.019718" font-family="Arial" fontWeight="bold"><tspan y="114.48035" x="942.07986 946.09439 950.44607 951.78787 953.46078 956.476 959.82839 961.8383 967.5203 968.8621 972.2145 975.56686 978.9192 983.2709 984.93838 988.2908 989.63259 991.3055 992.9784 994.98837 999.33999 1003.69168 1005.35916 1007.36917 1011.38369 1015.3982 1019.4127 1023.4273">Switch-Window Lift-RH (SXXX)</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,0,0)" stroke-width="1.214" stroke-linecap="round" stroke-linejoin="bevel" fill="none" stroke="#000000" d="M942.081 255.345H962.573V291.202H942.081Z"/>
<text  transform="matrix(1.0066419 0 0 .993402 0 0)" font-size="6.019718" font-family="Arial" fontWeight="bold"><tspan y="252.79093" x="942.07986 945.7561 947.0967 950.4479 951.78848 954.80258 958.1537 961.5048 963.5136 965.52236 969.8728 974.2232 975.90878 977.9175 981.93087 985.94418 989.95748 993.9708">Finisher-RH (BXXX)</tspan><tspan y="245.09774" x="942.07986 945.4322 948.7846 953.8044 957.1568 959.16677 963.5184 966.8708 970.22317 972.2331 974.24307 975.91598 979.2683 980.9412 984.29367 986.3036 987.6454 990.99777">Lamp-Door-Interior</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,139.459,564.043)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.28 .85-1.28 0-1.28-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,149.773,564.043)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,694.357,543.685)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.068,546.222)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0006 && onConnectorClick(connectorC0006)}><tspan y="542.178" x="697.1868 700.6761 703.3641 706.0521 708.7402 711.42819 713.03988">C0006-3</tspan></text>
<path transform="matrix(0,1,1,0,832.306,543.686)" d="M0 0C3.382 0 3.382-5.14 0-5.14-3.382-5.14-3.382 0 0 0" fill-rule="evenodd"/>
<path transform="matrix(1.0066,0,0,.9934,832.272,543.685)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 3.404-5.106 3.404-5.106 0-5.106-3.404 0-3.404 0 0"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial"><tspan y="542.178" x="817.00509 820.2226 823.4401 826.1267 828.81326">SP001</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,477.529)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.709-2.554 1.709-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,480.071)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.113 0-5.113"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0006 && onConnectorClick(connectorC0006)}><tspan y="475.58164" x="697.1868 700.6761 703.3641 706.0521 708.7402 711.42819 713.03988">C0006-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,508.064)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,510.601)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0007 && onConnectorClick(connectorC0007)}><tspan y="506.32044" x="695.84378 699.3335 702.02206 704.7105 707.399 710.0875 711.69967 714.3882">C0007-16</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,523.328)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,525.863)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.104 0-5.104"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0006 && onConnectorClick(connectorC0006)}><tspan y="521.68478" x="697.1868 700.6761 703.3641 706.0521 708.7402 711.42819 713.03988">C0006-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,492.799)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,495.336)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0007 && onConnectorClick(connectorC0007)}><tspan y="490.94804" x="697.1868 700.6761 703.3641 706.0521 708.7402 711.42819 713.03988">C0007-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,462.265)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,464.8)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.104 0-5.104"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0007 && onConnectorClick(connectorC0007)}><tspan y="460.21525" x="697.1868 700.6761 703.3641 706.0521 708.7402 711.42819 713.03988">C0007-3</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,477.529)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.709-2.554 1.709-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,474.992)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.113 0 5.113"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0014 && onConnectorClick(connectorC0014)}><tspan y="475.58164" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0014-3</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,508.064)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,505.528)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0014 && onConnectorClick(connectorC0014)}><tspan y="506.32044" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0014-5</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,523.328)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,520.793)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.104 0 5.104"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0014 && onConnectorClick(connectorC0014)}><tspan y="521.68478" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0014-6</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,492.799)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,490.264)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0014 && onConnectorClick(connectorC0014)}><tspan y="490.94804" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0014-4</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,462.265)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,459.73)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.104 0 5.104"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0014 && onConnectorClick(connectorC0014)}><tspan y="460.21525" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0014-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,139.459,319.815)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.28 .852-1.28 0-1.28-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,149.773,319.815)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,149.773,299.458)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,139.459,299.458)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.28 .85-1.28 0-1.28-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,149.773,279.101)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,139.459,279.101)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.28 .852-1.28 0-1.28-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,333.442,319.815)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,332.154,317.28)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0012 && onConnectorClick(connectorC0012)}><tspan y="316.81419" x="302.77919 306.2684 308.95646 311.64448 314.3325 317.0205 318.63215">C0012-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,333.442,279.101)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.7 0-1.7 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,332.154,276.566)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0014 && onConnectorClick(connectorC0014)}><tspan y="275.83583" x="302.77919 306.2684 308.95646 311.64448 314.3325 317.0205 318.63215">C0012-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,333.442,299.458)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,332.154,296.921)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0014 && onConnectorClick(connectorC0014)}><tspan y="296.32096" x="302.77919 306.2684 308.95646 311.64448 314.3325 317.0205 318.63215">C0012-4</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,359.221,279.101)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.552 1.702-2.552 0-2.552-1.7 0-1.7 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,357.941,281.638)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0014 && onConnectorClick(connectorC0014)}><tspan y="275.83583" x="364.24794 367.73719 370.4252 373.11323 375.80125 378.48927 380.1009">C0012-3</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,149.773,167.153)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,139.459,167.153)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.28 .85-1.28 0-1.28-.852 0-.852 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,149.773,146.796)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.281 .852-1.281 0-1.281-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,139.459,146.796)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .852-1.28 .852-1.28 0-1.28-.85 0-.85 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,139.459,126.461)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.28 .85-1.28 0-1.28-.859 0-.859 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,149.773,126.461)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 .85-1.281 .85-1.281 0-1.281-.859 0-.859 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,946.997,202.775)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,200.238)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0004 && onConnectorClick(connectorC0004)}><tspan y="198.99488" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0004-5</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,202.774)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,205.309)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="198.99488" x="695.84378 699.3335 702.02206 704.7105 707.399 710.0875 711.69967 714.3882">C0008-15</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,370.7)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,373.235)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.104 0-5.104"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="368.0361" x="695.84378 699.3335 702.02206 704.7105 707.399 710.0875 711.69967 714.3882">C0008-19</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,401.234)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.707 0-1.707 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,403.771)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.113 0-5.113"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="398.7749" x="695.84378 699.3335 702.02206 704.7105 707.399 710.0875 711.69967 714.3882">C0008-21</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,416.485)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.707 0-1.707 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,419.022)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.113 0-5.113"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="414.1262" x="695.84378 699.3335 702.02206 704.7105 707.399 710.0875 711.69967 714.3882">C0008-22</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,385.965)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,388.5)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="383.4085" x="695.84378 699.3335 702.02206 704.7105 707.399 710.0875 711.69967 714.3882">C0008-20</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,340.166)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.7-2.554 1.7-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,342.701)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="337.30534" x="697.1868 700.6761 703.3641 706.0521 708.7402 711.42819 713.03988">C0008-8</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,355.436)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,357.973)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="352.67173" x="697.1868 700.6761 703.3641 706.0521 708.7402 711.42819 713.03988">C0008-9</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,324.901)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,327.437)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="321.94" x="697.1868 700.6761 703.3641 706.0521 708.7402 711.42819 713.03988">C0008-7</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,606.716,279.101)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.561 1.702-2.561 0-2.561-1.7 0-1.7 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,605.427,276.566)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="275.83583" x="572.91317 576.4019 579.0895 581.777 584.46456 587.1521 588.76327 591.4508">C0008-23</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,279.101)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.7 0-1.7 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,281.638)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="275.83583" x="695.84378 699.3335 702.02206 704.7105 707.399 710.0875 711.69967 714.3882">C0008-24</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,263.838)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,266.373)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="260.46339" x="697.1868 700.6761 703.3641 706.0521 708.7402 711.42819 713.03988">C0008-5</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,218.037)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.7 0-1.7 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,220.575)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="214.36627" x="695.84378 699.3335 702.02206 704.7105 707.399 710.0875 711.69967 714.3882">C0008-16</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,370.7)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,368.165)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.104 0 5.104"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0003 && onConnectorClick(connectorC0003)}><tspan y="368.0361" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0003-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,401.234)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.707 0-1.707 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,398.692)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.113 0 5.113"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0003 && onConnectorClick(connectorC0003)}><tspan y="398.7749" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0003-5</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,416.485)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.707 0-1.707 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,413.943)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.113 0 5.113"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0003 && onConnectorClick(connectorC0003)}><tspan y="414.1262" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0003-7</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,385.965)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,383.428)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0003 && onConnectorClick(connectorC0003)}><tspan y="383.4085" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0003-3</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,340.166)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.7-2.554 1.7-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,337.629)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0003 && onConnectorClick(connectorC0003)}><tspan y="337.30534" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0003-4</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,355.436)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,352.9)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0003 && onConnectorClick(connectorC0003)}><tspan y="352.67173" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0003-6</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,324.901)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,322.364)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0003 && onConnectorClick(connectorC0003)}><tspan y="321.94" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0003-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,279.101)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.7 0-1.7 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,276.566)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0005 && onConnectorClick(connectorC0005)}><tspan y="275.83583" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0005-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,263.838)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,261.301)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0005 && onConnectorClick(connectorC0005)}><tspan y="260.46339" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0005-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,972.785,263.838)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,971.496,266.373)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0005 && onConnectorClick(connectorC0005)}><tspan y="260.46339" x="973.78878 977.2781 979.96609 982.6541 985.3421 988.03018 989.6418">C0005-3</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,218.037)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.7 0-1.7 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,215.502)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0004 && onConnectorClick(connectorC0004)}><tspan y="214.36627" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0004-7</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,606.716,146.796)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.561 1.702-2.561 0-2.561-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,605.427,144.261)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0007 && onConnectorClick(connectorC0007)}><tspan y="142.65114" x="576.8281 580.3174 583.00546 585.6934 588.3815 591.06948 592.68118">C0007-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,606.716,167.153)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.561 1.702-2.561 0-2.561-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,605.427,164.616)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0007 && onConnectorClick(connectorC0007)}><tspan y="163.13628" x="572.91317 576.4019 579.0895 581.777 584.46456 587.1521 588.76327 591.4508">C0007-15</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,606.716,126.46)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.561 1.702-2.561 0-2.561-1.709 0-1.709 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,605.427,123.916)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.113 0 5.113"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0006 && onConnectorClick(connectorC0006)}><tspan y="122.17303" x="576.8281 580.3174 583.00546 585.6934 588.3815 591.06948 592.68118">C0006-4</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,141.71)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.709 0-1.709 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,144.246)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.113 0-5.113"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="137.52532" x="697.1868 700.6761 703.3641 706.0521 708.7402 711.42819 713.03988">C0008-3</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,172.238)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,174.775)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="168.2631" x="695.84378 699.3335 702.02206 704.7105 707.399 710.0875 711.69967 714.3882">C0008-13</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,187.502)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,190.044)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.111 0-5.111"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="183.6285" x="695.84378 699.3335 702.02206 704.7105 707.399 710.0875 711.69967 714.3882">C0008-14</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,156.973)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.7 0-1.7 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,159.51)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.106 0-5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="152.89069" x="697.1868 700.6761 703.3641 706.0521 708.7402 711.42819 713.03988">C0008-4</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,694.358,126.46)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.709 0-1.709 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,693.069,128.995)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C3.404 0 3.404-5.113 0-5.113"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0008 && onConnectorClick(connectorC0008)}><tspan y="122.17303" x="697.1868 700.6761 703.3641 706.0521 708.7402 711.42819 713.03988">C0008-2</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,141.71)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.709 0-1.709 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,139.166)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.113 0 5.113"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0004 && onConnectorClick(connectorC0004)}><tspan y="137.52532" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0004-6</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,172.238)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,169.703)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0004 && onConnectorClick(connectorC0004)}><tspan y="168.2631" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0004-1</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,187.502)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.702 0-1.702 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,184.967)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.111 0 5.111"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0004 && onConnectorClick(connectorC0004)}><tspan y="183.6285" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0004-3</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,156.973)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.7 0-1.7 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,154.438)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.106 0 5.106"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0004 && onConnectorClick(connectorC0004)}><tspan y="152.89069" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0004-8</tspan></text>
<path transform="matrix(1.0066,0,0,.9934,946.997,126.46)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C0 1.702-2.554 1.702-2.554 0-2.554-1.709 0-1.709 0 0"/>
<path transform="matrix(1.0066,0,0,.9934,945.716,123.916)" stroke-width=".405" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#000000" d="M0 0C-3.404 0-3.404 5.113 0 5.113"/>
<text  transform="matrix(1.0066413 0 0 .99340257 0 0)" font-size="4.826744" font-family="Arial" fontWeight='bold' style={{ cursor: 'pointer', fill: 'blue' }}
  onClick={() => connectorC0004 && onConnectorClick(connectorC0004)}><tspan y="122.17303" x="912.31906 915.8078 918.49539 921.18289 923.8704 926.558 928.1691">C0004-4</tspan></text>
</g>
</g>
</g>
</g>
    </svg>
     
  );
});

export default Circuit1;