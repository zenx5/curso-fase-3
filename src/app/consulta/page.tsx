export default function Page() {


    return <div>
        <div className="text-center pt-4 mb-10 bg-green-800 mb-10">
        <input
          type="text"
          placeholder="Buscar"
          className="rounded-lg w-[35%] h-10 pl-3 bg-gray-200 mb-10"
        />
      </div>
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-fit h-1/2 bg-green-600 flex flex-row rounded-lg mb-10 justify-center">
        <div className="w-20 m-4">
          <img
            className="rounded-lg"
            src="https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png"
            alt="user_img"
          />
        </div>
        <div className="mt-5">
          <div className="mb-4 text-center">
            <h2>Nombre: Stephany Plaza</h2>
            <h2>Edad: 27</h2>
            <h3>Cursos Realizados:</h3>
          </div>
          <div className="grid grid-cols-3 text-center m-2">
            <a className="rounded-lg p-1 m-2 content-around bg-blue-300" href="#"
              >Maquetacion Web</a>
            <a className="rounded-lg p-1 m-2 content-around bg-blue-300" href="#"
              >JavaScript</a>
            <a className="rounded-lg p-1 m-2 content-around bg-blue-300" href="#"
              >React</a>
            <a className="rounded-lg p-1 m-2 content-around bg-blue-300" href="#"
              >Maquetacion Web</a>
            <a className="rounded-lg p-1 m-2 content-around bg-blue-300" href="#"
              >JavaScript</a>
            <a className="rounded-lg p-1 m-2 content-around bg-blue-300" href="#"
              >React</a>
          </div>
        </div>
      </div>
      <div
        className="max-w-fit h-1/2 bg-gray-300 flex flex-row rounded-lg mb-10 bg-green-600"
      >
        <div className="w-20 m-2">
          <img
            className="rounded-lg"
            src="https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png"
            alt="user_img"
          />
        </div>
        <div className="mt-5">
          <div className="mb-4 text-center">
            <h2>Nombre: Stephany Plaza</h2>
            <h2>Edad: 27</h2>
            <h3>Cursos Realizados:</h3>
          </div>
          <div className="grid grid-cols-3 text-center m-2">
            <a className="rounded-lg p-1 m-2 content-around bg-blue-300" href="#"
              >Maquetacion Web</a>
            <a className="rounded-lg p-1 m-2 content-around bg-blue-300" href="#"
              >JavaScript</a>
            <a className="rounded-lg p-1 m-2 content-around bg-blue-300" href="#"
              >React</a>
            <a className="rounded-lg p-1 m-2 content-around bg-blue-300" href="#"
              >Maquetacion Web</a>
            <a className="rounded-lg p-1 m-2 content-around bg-blue-300" href="#"
              >JavaScript</a>
            <a className="rounded-lg p-1 m-2 content-around bg-blue-300" href="#"
              >React</a>
          </div>
        </div>
      </div>
    </div>
    </div>
}