import Image from "next/image";

function Contact({ name, src }) {
  return (
    <div className="flex item-center space-x-3 mb-2 relative p-2 cursor-pointer rounded-xl hover:bg-gray-200">
      <Image
        className="rounded-full"
        objectFit="cover"
        layout="fixed"
        height={50}
        width={50}
        src={src}
      />
      <p className="font-bold">{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce" />
    </div>
  );
}

export default Contact;
