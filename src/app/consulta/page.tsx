export default function Page() {


    return <div className="bg-pink-200 h-screen">
        <div className="text-center pt-4 mb-10 bg-purple-300 mb-10">
        <input
          type="text"
          placeholder="Buscar"
          className="rounded-lg w-[35%] h-10 pl-3 bg-violet-200 mb-10"
        />
        <button className="border border-violet-800 ml-4 rounded-lg p-2" title="Buscar"><a href="./consulta/details">Buscar</a></button>
      </div>
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-fit h-1/2 bg-yellow-100 flex flex-row rounded-lg mb-10 justify-center">
        <div className="w-20 m-4">
          <img
            className="rounded-lg"
            src="https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png"
            alt="user_img"
          />
        </div>
        <div className="mt-5">
          <div className="mb-4 text-center font-mono">
            <h2 className="font-bold">Nombre: Stephany Plaza</h2>
            <h2>Edad: 27</h2>
            <h3>Cursos Realizados:</h3>
          </div>
          <div className="grid grid-cols-3 text-center m-2">
            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300" href="./details"
              >Maquetacion Web</a>
            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300" href="#"
              >JavaScript</a>
            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300" href="#"
              >React</a>
            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300" href="#"
              >NextJs</a>
            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300" href="#"
              >Tailwind</a>
            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300" href="#"
              >Python</a>
          </div>
        </div>
      </div>
      <div
        className="max-w-fit h-1/2 bg-yellow-100 flex flex-row rounded-lg mb-10"
      >
        <div className="w-20 m-2">
          <img
            className="rounded-lg"
            src="https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png"
            alt="user_img"
          />
        </div>
        <div className="mt-5">
          <div className="mb-4 text-center font-mono">
            <h2 className="font-bold">Nombre: Alexander Plaza</h2>
            <h2>Edad: 21</h2>
            <h3>Cursos Realizados:</h3>
          </div>
          <div className="grid grid-cols-3 text-center m-2">
            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300" href="#"
              >Maquetacion Web</a>
            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300" href="#"
              >JavaScript</a>
            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300" href="#"
              >React</a>
            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300" href="#"
              >NextJs</a>
            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300" href="#"
              >Tailwind</a>
            <a className="font-sans font-bold rounded-lg p-2 m-2 content-around bg-blue-300" href="#"
              >Python</a>
          </div>
        </div>
      </div>
    </div>
    </div>
}