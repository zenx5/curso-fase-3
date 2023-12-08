export default function Page() {

    ///<!--  style={{backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE" }} -->

    return <div className="  min-h-screen py-40 bg-gradient-to-tl from-[#9F7AEA] to-[#FEE2FE]">
        
        <div className="container mx-auto border-spacing-2 shadow-current">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12  bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{backgroundImage: "url('images/Register-Background.png')"}}>
              <h1 className="text-white text-3xl mb-3">Bienvenido</h1>
              <div>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-purple-500 font-semibold">Learn more</a></p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2  className="text-3xl mb-4">Suscribir</h2>
              <p className="mb-4">
                Crear cuenta con github
              </p>
              <form action="#">
                <div className="mt-5">
                  <input type="text" placeholder="Nombre" className="border rounded-xl border-gray-400 py-1 px-2 w-full border-spacing-2"/>
                </div>
                <div className="mt-5">
                  <input type="text" placeholder="Correo" className="border rounded-xl border-gray-400 py-1 px-2 w-full"/>
                </div>
                <div className="mt-5">
                  <input type="password" placeholder="Contrasena" className="border rounded-xl border-gray-400 py-1 px-2 w-full"/>
                </div>
                <div className="mt-5">
                  <input type="password" placeholder="Confirmar coantrasena" className="border rounded-xl border-gray-400 py-1 px-2 w-full"/>
                </div>
                <div className="mt-5">
                  <input type="checkbox" className="border border-gray-400"/>
                  <span>
                    Aceptar <a href="#" className="text-purple-500 font-semibold">Terminos</a> &  <a href="#" className="text-purple-500 font-semibold">Politicas y provacidad</a> 
                  </span>
                </div>
                <div className="mt-5">
                  <button className="w-full bg-purple-500 py-3 text-center rounded-xl text-white">Registrar ahora</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
}