import Section from "./Section";
import Header from "./Header";
import ForgotPassword from "./ForgotPassword";
import Footer from "./Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";


const ForgotPassword1 = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      <div className="container relative z-2">
        


        <div className="relative">
          <ForgotPassword />
        </div>

        <div className="flex justify-center mt-10">

        </div>
      </div>
      <Footer />
      </div>
      <ButtonGradient />
    </Section>
  );
};

export default ForgotPassword1;
