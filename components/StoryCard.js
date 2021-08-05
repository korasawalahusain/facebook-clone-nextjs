import Image from "next/image";

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 lg:h-20 lg:w-20 xl:h-56 xl:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute opacity-0 xl:opacity-100 rounded-full z-50 top-10"
        src={profile}
        height={40}
        width={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        src={src}
        layout="fill"
        className="object-cover filter brightness-75 rounded-full xl:rounded-3xl"
      />
      <p className="absolute opacity-0 xl:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>
  );
}

export default StoryCard;
