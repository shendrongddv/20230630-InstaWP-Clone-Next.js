import { FooterBody } from "./footer-body";
import { FooterBottom } from "./footer-bottom";

const FooterWrapper = () => {
  return (
    <footer className="bg-[#00231F] px-4">
      <div className="container space-y-16 pt-16">
        {/* FooterBody */}
        <FooterBody />

        {/* FooterBottom */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default FooterWrapper;
