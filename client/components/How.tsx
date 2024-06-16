import { how } from "../constants";
import HowCard from "./HowCard";


const How = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
        <div className='flex flex-col justify-start gap-5'>
            <h2 className='text-4xl font-palanquin font-bold'>
                How <span className='text-blue-500'> OffConnectX </span> Works
            </h2>
        </div>
        <div className='mt-16 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
            {how.map((hows) => (
                <HowCard color={""} title={""} icon={undefined} subtitle={""} key={hows.label} {...hows} />
            ))}
        </div>
    </section>
  );
};

export default How;
