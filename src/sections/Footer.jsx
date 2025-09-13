import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex flex-col items-center justify-center gap-[20px] w-full">
        {/* <div className="flex flex-col justify-center">
                <a href="/">Visit My Blog</a>
            </div> */}
        <div className="socials">
          {socialImgs.map((item) => (
            <a key={item.url} className="icon" target="_blank" href={item.url}>
              <img src={item.imgPath} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          Made with ❤️ by Arman Khan
        </div>
      </div>
    </footer>
  );
};

export default Footer;
