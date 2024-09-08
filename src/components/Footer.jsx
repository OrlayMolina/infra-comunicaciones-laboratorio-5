function Footer() {
    return (
      <>
        <div className="py-8 bg-gray-200">
          <div className="text-md">
            <p className="px-4 font-bold py-2 text-center text-slate-500">

              <span className="text-green-600">Universidad del Quindío</span>
            </p>
          </div>
          <p className="mt-5 text-center text-sm leading-6 text-slate-500">
            © 2024 Universidad del Quindío. All rights reserved.
          </p>
          <div className="mt-10 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-500">
            <a href="#">Privacy policy</a>
            <div className="h-4 w-px bg-slate-500/20"></div>
            <a href="#">Changelog</a>
          </div>
        </div>
      </>
    );
  }
  
  export default Footer;