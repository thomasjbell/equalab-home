import LittleLogo from "./components/ui/LittleLogo";
import LittleMaterials from "./components/ui/LittleMaterials";
import LittleEquations from "./components/ui/LittleEquations";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-slate-50 dark:bg-gradient-to-br dark:from-cyan-950 dark:to-slate-950 flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <LittleLogo className="w-16 h-16" />
        </div>
        <h1 className="text-4xl font-bold text-cyan-900 dark:text-cyan-50 mb-2">EquaLab</h1>
        <p className="text-cyan-950 dark:text-cyan-100 text-xl mb-8 font-medium">
          Comprehensive tools for scientists and engineers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Materials */}
        <a
          href="https://materials.equalab.uk"
          className="bg-cyan-800 dark:bg-cyan-900 rounded-xl shadow-lg hover:shadow-xl transition-all p-8 text-center group"
        >
          <div className="mb-4 w-16 h-16 bg-cyan-600 dark:bg-cyan-700 bg-opacity-10 rounded-full flex items-center justify-center mx-auto group-hover:bg-opacity-20 transition-all">
            <LittleMaterials className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold text-cyan-50 mb-2">Materials</h2>
          <p className="text-cyan-100 mb-4">
            Access our comprehensive database of material properties
          </p>
          <span className="inline-block px-4 py-2 bg-cyan-600 dark:bg-cyan-700 text-cyan-50 rounded-full font-medium">
            Explore Materials
          </span>
        </a>

        {/* Equations */}
        <a
          href="https://equations.equalab.uk"
          className="bg-cyan-300 dark:bg-cyan-600 rounded-xl shadow-lg hover:shadow-xl transition-all p-8 text-center group"
        >
          <div className="mb-4 w-16 h-16 bg-cyan-100 dark:bg-cyan-300 bg-opacity-10 rounded-full flex items-center justify-center mx-auto group-hover:bg-opacity-20 transition-all">
            <LittleEquations className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold text-cyan-900 dark:text-cyan-50 mb-2">Equations</h2>
          <p className="text-cyan-800 dark:text-cyan-50 mb-4 font-medium">
            Calculate and visualise scientific and mathmatical equations
          </p>
          <span className="inline-block px-4 py-2 bg-cyan-100 dark:bg-cyan-300 text-cyan-900  rounded-full font-medium">
            Explore Equations
          </span>
        </a>
      </div>
   <hr className="mt-16 mx-auto w-11/12 lg:w-7xl border-slate-800 dark:border-slate-600"/>
      <footer className="my-12 text-slate-800 dark:text-slate-400 text-center">
        <p>
          &copy; {new Date().getFullYear()} EquaLab | Created by Thomas Bell
        </p>
      </footer>
    </div>
  );
}
