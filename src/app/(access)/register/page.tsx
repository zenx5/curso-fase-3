export default function Page() {



    return (
<div className="h-screen bg-gradient-to-tl from-slate-200 to-slate-400 flex justify-center sm:items-center">
      
      <div className="flex flex-col md:flex-row w-full sm:w-2/3 max-w-2xl bg-white sm:rounded-xl shadow-lg overflow-hidden ">

        {/* contenedor izquierdo */}
        <div className="w-1/3 hidden md:flex flex-col items-center justify-center p-12 bg-gradient-to-tl from-purple-200 to-purple-400">
          <div className="text-3xl font-bold mb-3">Bienvenido</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14">
           <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>

        </div>
        
        {/* Contenedor derecho "o contenedor unico en mobile" */}
        <div className="w-full lg:w-2/3 py-16 px-2 sm:px-8 lg:px-12 flex flex-col bg-white">
          <div  className="text-3xl font-semibold mb-4">Registrarse</div>
          <div>
            <button className="mb-4 text-purple-500">
              Registrarse con GitHub
            </button>
          </div>
          {/* Formulario de registro */}
          <form action="#">
            <div className="mt-5">
              <input type="text" placeholder="Nombre" className="border rounded-xl border-gray-400 py-1 px-2 w-full border-spacing-2"/>
            </div>
            <div className="mt-5">
              <input type="text" placeholder="Correo" className="border rounded-xl border-gray-400 py-1 px-2 w-full"/>
            </div>
            <div className="mt-5">
              <input type="password" placeholder="Contraseña" className="border rounded-xl border-gray-400 py-1 px-2 w-full"/>
            </div>
            <div className="mt-5">
              <input type="password" placeholder="Confirmar coantraseña" className="border rounded-xl border-gray-400 py-1 px-2 w-full"/>
            </div>
            <div className="mt-5 flex gap-2">
              <input type="checkbox" className="border border-gray-400"/>
              <span>
                <span>Aceptar</span> <a href="#" className="text-purple-500 font-semibold">Terminos</a> <span>y</span> <a href="#" className="text-purple-500 font-semibold">Políticas de privacidad</a> 
              </span>
            </div>
            <div className="mt-5">
              <button className="w-full bg-purple-500 py-3 text-center rounded-xl text-white font-semibold">Registrar ahora</button>
            </div>

          </form>
        </div>
      </div>
    
  </div>
  );
}