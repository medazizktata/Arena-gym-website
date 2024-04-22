import React from 'react';

const Popup = () => {
  return (
    <body className='bg-white' >
     <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
     <div className="box" style={{ border: '2px solid black', padding: '20px', width: '400px', boxShadow: '8px 8px 0px #FBDE06', textAlign: 'center' }}>
      <img src=".\src\assets\Images\Close.png" className='float-right cursor-pointer w-10 h-25 ' />
      <h2 className='font-robotoCon text-black font-bold text-4xl mb-3' >Scannez QR Code</h2>
        <p className=' font-robotoCon text-black '>Connecté sur ordinateur ? Utilisez l'appareil photo de votre téléphone pour scanner le code QR. Cela vous dirigera vers le lien de téléchargement de l'application.</p>
        <img src=".\src\assets\Images\CodeQr.png"  className = 'mt-7'  />
      </div>
     </div>
    </body>
  );
};

export default Popup;





 


