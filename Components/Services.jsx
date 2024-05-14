import image from "../Images/index";
import Image from "next/image";

export default ({
  setOpenPofile,
  setCompleteModal,
  setGetModel,
  setStarModal,
}) => {
  const team = [
    {
      avatar: image.compShipment,
    },
    {
      avatar: image.userProfile,
    },
    {
      avatar: image.shipCount,
    },
    {
      avatar: image.send,
    },
  ];
  const openModelBox = (text) => {
    if (text === 1) {
      setCompleteModal(true);
    } else if (text === 2) {
      setGetModel(true);
    } else if (text === 3) {
      setStarModal(true);
    } else if (text === 4) {
      setOpenPofile(true);
    }
  };
  return;
  <section className="py-0 pb-14">
    <div className="max-w-screen-xl mx-auto px-4 md:px-6">
      <div className="mt-12">
        <ul className="grid gap-8 sm:grid-col-2 md:grid-cols-3">
          {team.map((item, i) => {
            <li key={i}>
              <div
                onClick={() => openModelBox(i + 1)}
                className="w-full h-60 sm:h-52 md:h-56"
              >
                <Image
                  src={item.avatar}
                  className="w-full h-full object-cover object-center shadow-md rounded-xl"
                  alt=""
                />
              </div>
            </li>;
          })}
        </ul>
      </div>
    </div>
  </section>;
};
