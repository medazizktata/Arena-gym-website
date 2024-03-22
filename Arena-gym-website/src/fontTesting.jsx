import React, { useState, useEffect } from 'react';

function FontTesting() {
  const [fontsUsed, setFontsUsed] = useState({});

  useEffect(() => {
    const getComputedStyle = (element, property) => {
      return window.getComputedStyle(element, null).getPropertyValue(property);
    };

    const extractFontFamily = () => {
      const headings = document.querySelectorAll('h1');
      const fonts = {};
      headings.forEach((heading, index) => {
        const fontFamily = getComputedStyle(heading, 'font-family');
        fonts[`heading${index + 1}`] = fontFamily;
      });
      setFontsUsed(fonts);
    };

    extractFontFamily();
  }, []);

  return (
    <>
      <div>
        <h1 id="exampleText" className="text-3xl font-roboto underline">Dynamic Font: Roboto</h1>
        <p>Font used: {fontsUsed.heading1}</p>

        <h1 className="text-3xl font-montserrat underline">Dynamic Font: Montserrat</h1>
        <p>Font used: {fontsUsed.heading2}</p>

        <h1 className="text-3xl font-urbanist underline">Dynamic Font: Urbanist</h1>
        <p>Font used: {fontsUsed.heading3}</p>

        <h1 className="text-3xl font-robotoCon underline">Dynamic Font: Roboto Con</h1>
        <p>Font used: {fontsUsed.heading4}</p>

        <h1 className="text-3xl font-Gentona font-black underline">Dynamic Font: Gentona</h1>
        <p>Font used: {fontsUsed.heading5}</p>

        <h1 className="text-3xl font-mosk underline">Dynamic Font: Mosk</h1>
        <p>Font used: {fontsUsed.heading6}</p>

        <h1 className="text-3xl font-bebas underline">Dynamic Font: Bebas (font not loaded in the project)</h1>
        <p>Font used: {fontsUsed.heading7}</p>
      </div>
    </>
  );
}

export default FontTesting;
