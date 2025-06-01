import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-slate-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <Image
            className="drop-shadow rounded-sm"
            src="/logo.png"
            alt="EquaLab Logo"
            width={64}
            height={64}
          />
        </div>
        <h1 className="text-4xl font-bold text-cyan-900 mb-2">EquaLab</h1>
        <p className="text-cyan-600 text-xl mb-8">
          Comprehensive tools for scientists and engineers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <a
          href="https://materials.equalab.uk"
          className="bg-cyan-800 rounded-xl shadow-lg hover:shadow-xl transition-all p-8 text-center group"
        >
          <div className="mb-4 w-16 h-16 bg-cyan-600 bg-opacity-10 rounded-full flex items-center justify-center mx-auto group-hover:bg-opacity-20 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ecfeff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent"
            >
              <path d="M21 9V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
              <path d="M3 16v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" />
              <path d="M8 12h8" />
              <path d="M12 16V8" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-cyan-50 mb-2">Materials</h2>
          <p className="text-cyan-100 mb-4">
            Access our comprehensive database of material properties
          </p>
          <span className="inline-block px-4 py-2 bg-cyan-600 text-cyan-50 rounded-full font-medium">
            Explore Materials
          </span>
        </a>

        <a
          href="https://equations.equalab.uk"
          className="bg-cyan-100 rounded-xl shadow-lg hover:shadow-xl transition-all p-8 text-center group"
        >
          <div className="mb-4 w-16 h-16 bg-cyan-300 bg-opacity-10 rounded-full flex items-center justify-center mx-auto group-hover:bg-opacity-20 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#164e63"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent"
            >
              <path d="M21 9V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
              <path d="M3 16v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" />
              <path d="M8 12h8" />
              <path d="M12 16V8" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-cyan-900 mb-2">Equations</h2>
          <p className="text-cyan-800 mb-4">
            Calculate and visualise scientific and mathmatical equations
          </p>
          <span className="inline-block px-4 py-2 bg-cyan-300 text-cyan-900 rounded-full font-medium">
            Explore Equations
          </span>
        </a>
      </div>
   <hr className="mt-16 mx-auto w-11/12 lg:w-7xl border-cyan-800 "/>
      <footer className="my-12 text-cyan-950 text-center">
        <p>
          &copy; {new Date().getFullYear()} EquaLab | Created by Thomas Bell
        </p>
      </footer>
    </div>
  );
}
