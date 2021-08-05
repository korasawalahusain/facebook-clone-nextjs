const HeaderIcon = ({ Icon, active }) => {
  return (
    <div className="flex items-center cursor-pointer 2xl:px-8 md:h-14 hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
      <Icon
        className={`h-5 text-center md:h-7 mx-auto text-gray-500 group-hover:text-blue-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
};

export default HeaderIcon;
