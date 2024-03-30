


// SplitRectangle.jsx
/*const SplitRectangle = ({ text_grand, text, imageUrl }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="outer-box flex overflow-hidden max-w-4xl mx-auto">
        <div className="trap-left w-1/2">
          <div className="inner-left-border"></div>
          <h1 className="text-3xl font-bold mb-4">{text_grand}</h1> 
          <p>{text}</p> 
        </div>
        <div className="trap-right w-1/2">
          <div className="inner-right-border"></div>
          <img src={imageUrl} alt="Swimming Pool" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
  };
  
  */

  const SplitRectangle = ({ text_grand, text, imageUrl }) => {
    return (
      <div className="mx-auto max-w-4xl px-4 py-9 text-white">
        <div className="flex">
          <div className="text-part flex-1 p-4" 
               style={{
                 clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)',
                 border: '4px solid #FBDE06'
               }}>
            <h2 className="text-xl font-bold">{text_grand}</h2>
            <p>{text}</p>
          </div>
          <div className="image-part flex-1" 
               style={{
                 clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
                 border: '4px solid #FBDE06'
               }}>
            <img src={imageUrl} alt="Split Rectangle Image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    );
  };
  

  export default SplitRectangle