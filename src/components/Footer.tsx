const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-[#f49506] rounded-t-2xl py-10 mt-10 font-semibold shadow-4xl shadow-black">
      &#169; PASTA {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
