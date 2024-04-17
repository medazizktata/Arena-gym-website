import React from "react";
import coverImg from '../assets/Img/imageBlog.jpg';


function BlogPage (){
return(
    <body className="bg-blackBG h-screen">
  <div className="relative h-1/2">
    <img src={coverImg} alt="cover photo" className="w-full h-full object-cover" />
    <div className="absolute top-0 left-0 right-0 p-4">
      <header>
        <h1 className="text-white  font-bold text-[70px]">Recette:<br/> batbout healthy</h1>
        <p className="text-4xl text-center font-bold text-yellowBtetter"> Catégorie </p>
      </header>
    </div>
    <div className="absolute bottom-0 right-0 p-4">
      <footer>
        <span className="text-white font-roboto text-lg block">March 15, 2024</span>
        <hr className="border-yellowBetter border-t-2" />
      </footer>
    </div>
  </div>
  <div className="h-1/2 flex justify-center items-center">
    <p className="text-white font-roboto text-lg">PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP</p>
    <footer>
      <span className="text-white font-roboto text-lg block">voir plus</span>
      <hr className="border-yellowBetter border-t-2" />
    </footer>
  </div>
</body>
 );
}
export default BlogPage;