import React from "react";
const mushroomData = [
  {
    title: "Chanterelle",
    tags: [
      { label: "edible", bgColor: "bg-green-700" },
      { label: "summer", bgColor: "bg-green-700" },
    ],
    description: "Golden-yellow, funnel-shaped mushroom with false gills",
    notes: "Has toxic look-alikes - learn proper identification",
  },
  {
    title: "Chanterelle",
    tags: [
      { label: "edible", bgColor: "bg-pink-900" },
      { label: "summer", bgColor: "bg-cyan-700" },
    ],
    description: "Golden-yellow, funnel-shaped mushroom with false gills",
    notes: "Has toxic look-alikes - learn proper identification",
  },
  {
    title: "Chanterelle",
    tags: [
      { label: "edible", bgColor: "bg-green-700" },
      { label: "summer", bgColor: "bg-green-700" },
    ],
    description: "Golden-yellow, funnel-shaped mushroom with false gills",
    notes: "Has toxic look-alikes - learn proper identification",
  },
  {
    title: "Death Cap",
    tags: [
      { label: "toxic", bgColor: "bg-pink-900" },
      { label: "summer", bgColor: "bg-green-700" },
    ],
    description: "Pale green to white cap with white gills",
    notes: "Extremely toxic - study for safety awareness",
  },
  {
    title: "Chanterelle",
    tags: [
      { label: "edible", bgColor: "bg-green-700" },
      { label: "summer", bgColor: "bg-yellow-800" },
    ],
    description: "Golden-yellow, funnel-shaped mushroom with false gills",
    notes: "Has toxic look-alikes - learn proper identification",
  },
  {
    title: "Chanterelle",
    tags: [
      { label: "edible", bgColor: "bg-green-700" },
      { label: "summer", bgColor: "bg-yellow-800" },
    ],
    description: "Golden-yellow, funnel-shaped mushroom with false gills",
    notes: "Has toxic look-alikes - learn proper identification",
  },
  {
    title: "Chanterelle",
    tags: [
      { label: "edible", bgColor: "bg-pink-900" },
      { label: "summer", bgColor: "bg-green-700" },
    ],
    description: "Golden-yellow, funnel-shaped mushroom with false gills",
    notes: "Has toxic look-alikes - learn proper identification",
  },
  {
    title: "Death Cap",
    tags: [
      { label: "toxic", bgColor: "bg-green-700" },
      { label: "summer", bgColor: "bg-green-700" },
    ],
    description: "Pale green to white cap with white gills",
    notes: "Extremely toxic - study for safety awareness",
  },
  {
    title: "Chanterelle",
    tags: [
      { label: "edible", bgColor: "bg-green-700" },
      { label: "summer", bgColor: "bg-yellow-800" },
    ],
    description: "Golden-yellow, funnel-shaped mushroom with false gills",
    notes: "Has toxic look-alikes - learn proper identification",
  },
  {
    title: "Chanterelle",
    tags: [
      { label: "edible", bgColor: "bg-green-700" },
      { label: "summer", bgColor: "bg-yellow-800" },
    ],
    description: "Golden-yellow, funnel-shaped mushroom with false gills",
    notes: "Has toxic look-alikes - learn proper identification",
  },
  {
    title: "Chanterelle",
    tags: [
      { label: "edible", bgColor: "bg-pink-900" },
      { label: "summer", bgColor: "bg-cyan-700" },
    ],
    description: "Golden-yellow, funnel-shaped mushroom with false gills",
    notes: "Has toxic look-alikes - learn proper identification",
  },
  {
    title: "Death Cap",
    tags: [
      { label: "toxic", bgColor: "bg-green-900" },
      { label: "summer", bgColor: "bg-pink-900" },
    ],
    description: "Pale green to white cap with white gills",
    notes: "Extremely toxic - study for safety awareness",
  },

  
];
const cardsData = [
  {
    id: 1,
    imgSrc: "img/mushrooms (1).png",
    title: "What do I need to start mushroom foraging?",
    description: `You'll need a local field guide, a sharp knife or scissors, a basket or mesh bag for collecting, and paper bags for separating specimens. Bring a small brush for cleaning, wear sturdy boots, and carry a GPS device or compass to track your location. A camera is also helpful to document your finds.`,
    spanClass: "md:row-span-2",
  },
  {
    id: 2,
    title: "How can I identify edible mushrooms? ",
    description: `Learn from experienced foragers and reliable guidebooks – never rely on apps alone. Study each mushroom's specific features like cap shape, gill structure, stem characteristics, and spore prints. Start with easily identifiable species that have no poisonous lookalikes, and never eat anything unless you're completely certain of its identification.`,
    imgSrc: "img/mouss.2.png",
    spanClass: "md:row-span-2",
    
  },
  {
    id: 3,
    imgSrc: "img/mo.3.png",
    title: "What are the best seasons for mushroom foraging?",
    description: `Spring is ideal for morels, late summer brings chanterelles and boletes, and fall is peak season for most mushrooms including oysters and hen of the woods. Some species can even be found in winter, especially in milder climates. Each season offers different varieties, so year-round foraging is possible.`,
    spanClass: "md:row-span-3",
  },
  {
    id: 4,
    imgSrc: "img/124.png",
    title: "Where can I find foraging spots?",
    description: `Look in deciduous forests, especially near oak and maple trees, and in damp, shaded areas. Fallen logs and dead trees are often productive spots. Only forage on public lands where it's allowed, and always check local regulations. Remember to get permission for private property and keep your best locations private to prevent over-harvesting.`,
    spanClass: "md:col-span-2 col-span-1 flex md:flex-row",
  },
];

const FungiFinders = () => {
  return (
    <div className="bg-stone-800 ">
      <div className="flex  items-center justify-between  lg:px-12 px-4">
        <img className="pt-4 pb-3" src="/img/heading.png" alt="img" />
        <div className="md:hidden">
        <svg width="31" height="14" viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect width="31" height="2" rx="1" fill="#D9D9D9"/>
         <rect y="6" width="31" height="2" rx="1" fill="#D9D9D9"/>
         <rect y="12" width="31" height="2" rx="1" fill="#D9D9D9"/>  
          </svg>

        </div>
        <div className="md:flex hidden  gap-8 text-[#CBC9C9] pt-[22px] pb-[18px]">
          <p className="font-semibold text-base leading-5 font-sans cursor-pointer">
            Discover
          </p>
          <p className="font-semibold text-base leading-5 font-sans cursor-pointer">
            Mushroom guide
          </p>
          <p className="font-semibold text-base leading-5 font-sans cursor-pointer">
            FAQ
          </p>
        </div>
      </div>
      <div
        className="w-full bg-cover bg-center"style={{ backgroundImage: "url('img/bg2.jpg')" }}>
        <div className="flex flex-col justify-center gap-8 items-center lg:py-[72px] py-[72px] px-4">
          <h1 className="font-bold  lg:text-7xl text-[60px]  text-white text-center max-w-[981px] w-full text-6xl flex flex-col gap-4">
            Quick reference{" "}
            <span className="font-bold  text-orange-400 lg:text-[120px] ">Mushroom Guide</span>
          </h1>
          <div className=" max-w-[322px] md:max-w-[720px] w-full flex flex-col gap-6 justify-center items-center text-center ">
            <p className="font-normal lg:text-xl/8 text-white font-sans text-lg">
              Mushroom foraging is the art and science of identifying and
              collecting wild mushrooms.{" "}
            </p>
            <p className="font-normal lg:text-xl/8 text-white font-sans text-lg">
              It's a practice that combines outdoor exploration, botanical
              knowledge, and culinary adventure. Foragers venture into forests,
              fields, and even urban green spaces to discover these hidden
              treasures.{" "}
            </p>
            <p className="font-normal lg:text-xl/8 text-white font-sans text-lg">
              But beware – this hobby requires careful study and respect for
              nature, as some mushrooms can be dangerous if misidentified.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col px-4 lg:flex-row md:flex-col  items-center justify-center lg:gap-12 lg:py-[128px] py-16   bg-green-900">
        <img src="/img/img.1.png" alt="img" />
        
        <div className="max-w-[393px]  md:max-w-[541px] w-full flex flex-col gap-3  text-start lg:text-center">
          <h1 className="text-white font-bold  lg:text-5xl text-[36px] leading-[52.8px] font-sans text-4xl">
            Where to look
          </h1>
          <div className="flex flex-col gap-6 ">
            <p className="font-normal lg:text-xl/8  font-sans text-lg text-[#CBC9C9]">
              Different species grow in different types of environments.{" "}
            </p>
            <p className="font-normal lg:text-xl/8  font-sans text-lg text-[#CBC9C9]">
              Forests are always a good starting place, though, with a wide
              range of species that grow in them.{" "}
            </p>
            <p className="font-normal lg:text-xl/8 font-sans text-lg text-[#CBC9C9]">
              If you’re after something specific, you can use our reference
              guide below to help you out.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto w-full max-w-[1175px] lg:py-[128px]  py-16 px-4">
        <div className="flex flex-col justify-start items-start gap-[21px] text-start">
          <p className="text-white font-bold lg:text-5xl text-[36px] leading-[52px]">
            Get to know your mushrooms
          </p>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 text-white bg-green-700 py-2 pl-4 pr-7 rounded-md">
              Season: All
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5.5 5L10 1"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="flex items-center gap-2 text-white bg-green-700 py-2 pl-4 pr-7 rounded-md">
              Type: All
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5.5 5L10 1"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full pt-[21px]">
          {mushroomData.map(({ title, tags, description, notes }, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-4  rounded-xl flex flex-col w-ful"
            >
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-[21px] leading-7 text-white text-start">
                  {title}
                </h3>
                <div className="flex gap-2">
                  {tags.map(({ label, bgColor }, tagIndex) => (
                    <button
                      key={tagIndex}
                      className={`${bgColor}  px-2 text-center leading-5 text-sm font-medium py-1 rounded cursor-pointer`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <p className="text-stone-300 font-normal text-[16px] leading-[25.6px] pb-3 text-start">
                  {description}
                </p>
              </div>
              <p className="bg-stone-700 p-3 rounded-md font-medium text-sm leading-[21px] text-stone-300 text-start">
                Important notes:{" "}
                <span className="font-norma flex items-start text-start">
                  {notes}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-stone-900  lg:py-[128px] text-start py-16 px-4">
      <div className="max-w-[1344px] mx-auto  flex flex-col gap-6 ">
        <p className="text-white font-bold lg:text-5xl text-[36px] leading-[52px]">
          Frequently Asked Questions
        </p>
        <div className="max-w-[1330-px] w-full grid grid-cols-1 md:grid-cols-3 gap-6  ">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`bg-zinc-800 p-4 w-full rounded-xl flex  gap-4   ${card.id==2?"flex-col-reverse":"flex-col"}   ${card.spanClass}`}
            >
              {card.imgSrc && (
                <img src={card.imgSrc} alt="img" className="max-w-full" />
              )}
            <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl w-full text-white ">
                {card.title}
              </h3>
              <p className="text-stone-300 text-[16px] font-normal">
                {card.description}
              </p>
            </div>
            </div>
          ))}
        </div>
      </div>
</div>
<div
    class="flex  flex-col gap-8 border-b border-stone-800 bg-stone-800 justify-center items-center px-4  md:py-8 py-8">
    <p class="text-sm leading-6 font-bold text-stone-300">Happy Foraging!</p>
    <p class="text-sm leading-6 font-bold text-stone-300">contact@fungifinders.com</p>
  </div>
  </div>
); 
};

export default FungiFinders;
