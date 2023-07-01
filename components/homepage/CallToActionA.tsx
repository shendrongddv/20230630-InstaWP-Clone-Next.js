import Image from "next/image";
import imgAsset from "../../public/try-today-img.svg";

const CallToActionA = () => {
  return (
    <section className="section-pb bg-[#EBF9F5] px-6">
      <div className="container">
        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="w-full md:w-5/12">
            <h2 className="h2 font-display font-bold">Try InstaWP Today!</h2>
            <p className="mt-3">
              Without even creating an account - so you can get a feel for how
              it works and whether it&apos;s the right fit for you.
            </p>
          </div>
          {/* Col */}
          <div className="w-full md:w-4/12">
            <Image src={imgAsset} alt="Image" className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionA;
