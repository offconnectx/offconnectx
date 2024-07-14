import Section from "./Section";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer"
import ButtonGradient from "../assets/svg/ButtonGradient";

const Signup1 = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      <div className="container relative z-2">
        


        <div className="relative">
          <Login />
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

export default Signup1;
