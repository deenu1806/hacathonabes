import { Fot1, Fot2 } from "../Components/index";

export default () => {
  const footNavs = [
    {
      herf: "javascript:void()",
      name: "Terms",
    },
    {
      herf: "javascript:void()",
      name: "License",
    },
    {
      herf: "javascript:void()",
      name: "Privacy",
    },
    {
      herf: "javascript:void()",
      name: "About us",
    },
  ];
};
return (
  <footer className="pt-10">
    <div className="max-w-screen-xl mx-auto px-4 ">
      <div className="justify-between sm:flex">
        <div className="space-y-6">
          <img src="https://www.floatui.com/logo.svg" alt="" className="w-32" />
          <p className="max-w-md">
            Nulla auctor metus vitae lectus iaculis, vel euismod massa
            efficitur.
          </p>
          <ul className="text-gray-800 hover:text-gray-500 duration-150">
            {footerNav.map((item, idx) => (
              <li className="text-gray-800 hover:text-gray-500 duration-150">
                <a href={item.herf} key={idx}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <p className="text-gray-700 font-semibold">Get the app</p>
          <div className="flex items-center gap-3 mt-3 sm:block">
            <a href="javascript:void()">
              <Fot1 />
            </a>
            <a href="javascript:void()" className="mt-0 block sm:mt-3">
              <Fot2 />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 py-10 border-t md:text-center">
        <p>@2024 Error 404. All right reserved</p>
      </div>
    </div>
  </footer>
);
