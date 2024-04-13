import React, { useState, useEffect } from 'react';

const DynamicSVGComponent = ({ svgPath, width, height, color, hoverColor }) => {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    const fetchSVG = async () => {
      try {
        const response = await fetch(svgPath);
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    };

    fetchSVG();
  }, [svgPath]);

  return (
    <div style={{ width, height }}>
      {svgContent && (
        // Apply styles to the SVG content using CSS
        <div style={{ width: '100%', height: '100%' }}>
          <style>{`
            .dynamic-svg-container svg {
              width: 100%;
              height: 100%;
            }
            .dynamic-svg-container path,
            .dynamic-svg-container rect,
            .dynamic-svg-container circle,
            .dynamic-svg-container ellipse,
            .dynamic-svg-container polygon,
            .dynamic-svg-container polyline {
              fill: ${color}; 
              transition: fill 300ms ease;
            }
            .dynamic-svg-container:hover path,
            .dynamic-svg-container:hover rect,
            .dynamic-svg-container:hover circle,
            .dynamic-svg-container:hover ellipse,
            .dynamic-svg-container:hover polygon,
            .dynamic-svg-container:hover polyline {
              fill: ${hoverColor}; 
            }
          `}</style>
          <div className="dynamic-svg-container" dangerouslySetInnerHTML={{ __html: svgContent }} />
        </div>
      )}
    </div>
  );
};

export default DynamicSVGComponent;
