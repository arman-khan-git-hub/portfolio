import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <div className="w-full padding-y-lg">
      <div className="mx-auto grid-3-cols px-10">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4 hover:shadow-inner shadow-[#12024B] hover:scale-105 transition-all duration-700 ease-in-out"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
