
export default function Page() {


    return <div className=" antialiased bg-gray-200"> 
    <div className=" flex w-full min-h-screen justify-center items-center"> 

      <div className=" container

       md:flex-row md:space-x-6 md:space-y-0
       mt-[30vh] mb-[30vh] flex flex-col space-y-6 bg-cyan-700 w-[60%] h-[80vh] p-8 rounded-xl shadow-lg text-white">
        <div className="flex flex-col space-y-6">

                <div className="flex flex-col space-y-6">  

                  <h2 className="font-bold text-4xl tracking-wide">Login</h2>

                  <div className="flex space-x-4 text-5xl ml-auto mr-auto">
                   <a href="#"><ion-icon name="logo-github"></ion-icon></a>
                  </div>
                  <p className="ml-auto mr-auto mt-2">Ingresa con github</p>
                  <p className="pt-2 text-cyan-100 text-sm">Lorem ipsum dolor s
                    o qui consectetur quibusdam porro voluptas eos quisqua</p>
                </div>
                
                <div className="inline-flex space-x-2 flex-row items-center">
                  <ion-icon name="call" className="text-teal-300 text-xl"></ion-icon>
                  <span>+59 026 8112</span>
                </div>
                
                <div className="inline-flex space-x-2 flex-row items-center">
                  <ion-icon name="mail" className="text-teal-300 text-xl"></ion-icon>
                  <span>Maquetado_Web@gmail.com</span>
                </div>
              
          <div className="inline-flex space-x-2 flex-row items-center">
            <ion-icon name="location" className="text-teal-300 text-xl"></ion-icon>
            <span>Venezuela - Guayana - San felix</span>
          </div>
         
        </div> 
  
        
        <div className="bg-white rounded-lg shadow-lg p-8 text-gray-600 ">
            <form action="" className="flex flex-col space-y-4">
            
              <div>
                <input type="text" placeholder="Nombre" className="ring-1 ring-gray-300 w-full rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-stone-400"/>
              </div>
              <div>
                <input type="text"
                 placeholder="Contarsena"
                 className="ring-1 ring-gray-300 w-full rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-stone-400"/>
              </div>
           
              <div>
                <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 text-sm">Iniciar</button>
              </div>
              
            </form>
        </div>
      </div>
    </div>
  </div>
}