import React from "react";

function Nav() {
  return (
    <div className="w-[100%] border-2 top-0 flex border-2 justify-between py-[10px] px-[10px] items-center bg-[#212529]">
      <div className="w-[23%]">
        <input
          className="border-2 text-white border-gray-300 rounded-lg py-2 px-3.5 bg-[#212529] placeholder-gray-400 w-[100%] "
          type="text"
          placeholder="Search..."
        />
      </div>
      <h1 className="text-xl text-white">Pavan Prakash</h1>

      <div className="flex flex-col w-[10%] items-center justify-center profile">
        <img
          className="w-[50px] h-[50px] rounded-[50%] shadow-xs shadow-white"
          src="https://media.istockphoto.com/id/638620962/photo/sifting-through-streams-of-data.webp?b=1&s=170667a&w=0&k=20&c=GwnhharY_okmqbKn3O15a30p2ZaFiXqko_c4wKcoj9s="
        />
        <h3 className="text-md text-white profile-name">Pavan Prakash</h3>
      </div>
    </div>
  );
}

export default Nav;
