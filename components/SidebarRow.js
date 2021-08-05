import Image from "next/image";

function SidebarRow({ Icon, src, title }) {
  return (
    <div className="flex items-center space-x-2 p-4 rounded-xl cursor-pointer hover:bg-gray-200">
      {src && (
        <Image
          src={src}
          height={35}
          width={35}
          className="rounded-full"
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden lg:inline-flex font-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
