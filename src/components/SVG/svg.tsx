// pages/index.tsx
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function SVG() {
  const [originalSvg, setOriginalSvg] = useState<string>('');
  const [modifiedSvg, setModifiedSvg] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    processSvg();
  }, []);

  const processSvg = async () => {
    setIsProcessing(true);
    setError(null);
    
    try {
      // Fetch the SVG file from public folder
      const response = await fetch('/circuit.svg');
      if (!response.ok) {
        throw new Error(`Failed to fetch SVG: ${response.status} ${response.statusText}`);
      }
      
      const svgText = await response.text();
      setOriginalSvg(svgText);
      
      // Process the SVG
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
      
      // Find and modify text in 'complabel' g tags
      const complabelGroups = svgDoc.querySelectorAll('g.complabel');
      complabelGroups.forEach(group => {
        const textElements = group.querySelectorAll('text');
        textElements.forEach(textElement => {
          textElement.setAttribute('fill', '#0000ff'); // Change to blue
        });
      });
      
      // Find and modify 'pinlabel' text elements
      const pinlabelTexts = svgDoc.querySelectorAll('text.pinlabel');
      pinlabelTexts.forEach(textElement => {
        textElement.setAttribute('fill', '#0000ff'); // Change to blue
      });
      
      // Serialize back to string
      const serializer = new XMLSerializer();
      const modifiedSvgString = serializer.serializeToString(svgDoc);
      setModifiedSvg(modifiedSvgString);
      
    } catch (err) {
      console.error('Error processing SVG:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadModifiedSvg = () => {
    if (!modifiedSvg) return;
    
    const blob = new Blob([modifiedSvg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'modified-circuit.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>SVG Text Color Modifier</title>
        <meta name="description" content="SVG text color modification tool" />
      </Head>

      <main>
        <h1 className="text-2xl font-bold mb-4">SVG Text Color Modifier</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            Error: {error}
          </div>
        )}
        
        {isProcessing ? (
          <div className="text-center p-8">
            <p className="text-lg">Processing SVG...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 shadow">
              <h2 className="text-xl font-semibold mb-3">Original SVG</h2>
              {originalSvg ? (
                <div className="overflow-auto max-h-96">
                  <div dangerouslySetInnerHTML={{ __html: originalSvg }} />
                </div>
              ) : (
                <p>No SVG loaded</p>
              )}
            </div>
            
            <div className="border rounded-lg p-4 shadow">
              <h2 className="text-xl font-semibold mb-3">Modified SVG</h2>
              {modifiedSvg ? (
                <>
                  <div className="overflow-auto max-h-96">
                    <div dangerouslySetInnerHTML={{ __html: modifiedSvg }} />
                  </div>
                  <button
                    onClick={downloadModifiedSvg}
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Download Modified SVG
                  </button>
                </>
              ) : (
                <p>No modified SVG available</p>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}