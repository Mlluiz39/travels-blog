import React from "react";

function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline text-indigo-600">Bem-vindo ao</span>{" "}
            <span className="block text-emerald-600 xl:inline">travel blog</span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Aqui você encontrará dicas, truques e histórias sobre tudo
            relacionado a viagens.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Dicas de Viagem
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Descubra os melhores lugares para visitar e as melhores
                  maneiras de aproveitar sua viagem.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Histórias de Viagem
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Leia sobre nossas aventuras em todo o mundo e inspire-se a
                  explorar novos lugares.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Comida Local
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Experimente novos sabores e descubra a culinária local em
                  nossas viagens.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Dicas de Fotografia
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Aprenda a tirar fotos incríveis durante suas viagens e capture
                  momentos inesquecíveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
