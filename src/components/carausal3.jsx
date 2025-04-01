import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
<>
      {/* start carausal */}
      <div className="relative w-full lg:h-[70vh] h-[100vh] flex items-center justify-center  px-4">
        {/* Background Image */}
        <img
  src="/assets/images/bg/thirdparty.png"
  alt="Background"
  className="absolute top-0 left-0 w-full h-full object-cover "
/>


        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full" />

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center p-5 max-w-3xl"
        >
          <h3 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight">
          Your Trusted Partner in Third-Party Manufacturing
          </h3>
          <p className="mt-4 text-lg md:text-xl text-white">
          We offer seamless third-party manufacturing solutions with a focus on quality, compliance, and timely delivery, helping you bring your products to market faster.
          </p>

          <div className="mt-6">
          <Link legacyBehavior href="https://wa.me/1234567890">
            <a className="main-btn golden-btn px-4 py-3 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold rounded-md">Contact Us</a>
          </Link>
        </div>
        </motion.div>
      </div>
      {/* end carausal */}

      </>

  );
};

export default HeroSection;
