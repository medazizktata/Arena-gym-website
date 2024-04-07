import React from 'react';

const SubscriptionBox2 = ({ type, packName, price, duration, items, svgIcon , link  }) => {
  const boxStyle = type === 1 ? 'bg-yellowMain relative' : 'bg-blackBG text-white relative';
  const priceColor = type === 1 ? 'text-black' : 'text-yellowMain';
  const boxClass = type === 1 ? 'shadow-yellow' : 'shadow-white' ;
  const buttonStyle = type === 1 ? 'bg-black text-white' : 'bg-yellowMain text-black';
  const icon = svgIcon || (
    // Default SVG icon, replace with your actual SVG code if needed
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );
  return (
    <div className={`p-4   ${boxStyle} ${boxClass} max-w-sm w-full`} style={{overflow:'hidden'}}>
      {type === 1 && (
        <>
          <div className="font-bold text-black font-Urbanist text-xs hidden   p-1.5 w-32 text-center  bg-white absolute top-5 -right-1 transform rotate-45 translate-x-1/4 -translate-y-1/10">
            Best Offer
        </div>
          
        
      <div className="py-3 font-bold text-xl font-Gentona uppercase absolute top-0 left-4">
            {packName}
      </div>
      </>
      )}
      <div className="flex flex-col items-start justify-start mt-10">
      <div className="flex items-baseline">
          <h2 className={`text-5xl font-Urbanist ${priceColor} font-bold`}>{price}</h2>
          <span className={`text-3xl font-Urbanist  ml-2.5 ${priceColor} font-bold`} style={{ position: 'relative', bottom: '0.35em'}}>{type === 1 ? 'TND' : 'TND'}</span>
        </div>
        <p className="mb-6">{duration}</p>
        <ul className="list-disc  font-roboto font-bold">
        {items.map((item, index) => (
          <li key={index} className="flex  mb-3 ">
            {icon}
            <span className='px-4'>{item}</span>
          </li>
          ))}
        </ul>
        <button className={`py-2 px-10 mt-4  ${buttonStyle} text-lg  mx-auto font-Gentona`} onClick={() => window.location.href = link}>
          INSCRIRE MAINTENANT
        </button>
      </div>
    </div>
  );
};

export default SubscriptionBox2;
