export default function Page() {


    return (
    <div className ="w-full h-screen flex justify-center item-center bg-pink-300">
        <div className="h-[560px] bg-yellow-50 w-1/2 p-4 flex mt-20 rounded-lg"> 
            <div className = "mr-4 text-center">    
                <div className=" h-56 w-64 text-center mb-10 mt-24 mr-4">
                    <img src="https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png" alt="user-photo" className="rounded-lg"/>
                </div>
                <div className="bg-red-200 w-64 h-10 text-center p-2 mb-4 rounded-lg font-serif">
                    <h1>Stephany Plaza</h1>
                </div>
                <div className="font-serif">
                    <h2>Promedio: 15</h2>
                    <h2>Asistencias: 2</h2>
                </div>
            </div>
            <div>
                <div className="bg-blue-300 h-[10%] text-center p-2 font-mono font-bold">
                    <p>Estudiante de Maquetacion Web</p>
                </div>
                <div className="p-2 mt-12">
                    <div className = "flex m-2 mb-6 bg-purple-200 rounded-lg p-1 font-serif">
                    <img className="h-14 ml-2"  src="../img/html-logo.png" alt="html-course"></img>
                    <p className="mr-2">HTML es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet.</p>
                    </div>
                    <div className = "flex m-2 mb-6 bg-purple-200 rounded-lg p-1 font-serif">
                        <img src="" alt="tailwind-img" />
                        <p className="mr-2">es un framework CSS que nos proporciona clases de utilidad de un solo propósito que son opinables en su mayor parte, y que nos ayudan a diseñar nuestras páginas web desde dentro de nuestro marcado o archivos .</p>
                    </div>
                    <div className = "flex m-2 mb-6 bg-purple-200 rounded-lg p-1 font-serif">
                            <img src="" alt="react-img" />
                            <p className="mr-2">Es una de las librerías más populares de JavaScript para el desarrollo de aplicaciones móviles y web.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
