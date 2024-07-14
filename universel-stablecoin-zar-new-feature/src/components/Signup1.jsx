import Section from "./Section";
//import PricingList from "./PricingList";
import Signup from "./Signup";
import Header from "./Header";
import Footer from "./Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";

const Signup1 = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      <div className="container relative z-2">
        

      
        <div className="relative">
          <Signup />
          {/*<PricingList />
          <LeftLine />
          <RightLine />*/}
        </div>

        <div className="flex justify-center mt-10">
          {/*<a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
        </a>*/}
        </div>
      </div>
      <Footer />
      </div>
      <ButtonGradient />
    </Section>
  );
};

export default Signup1;
