import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-slate-500 p-8 mx-8">
      <Image src="/Picture1.png" alt="logo1" width={50} height={50} />
      <p className="font-extrabold pt-3">Planner</p>
    </nav>
  );
};

export default Navbar;
