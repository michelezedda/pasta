const Footer = () => {
  return (
    <div className="flex justify-center items-center bottom-0 gap-6 lg:w-2/3 bg-[#f49506] rounded-t-2xl py-10 mt-6 font-semibold">
      &#169; PASTA {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
