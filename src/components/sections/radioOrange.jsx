import { motion } from "framer-motion";
import radioOrangeImg from "../../assets/images/rorng.jpeg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function RadioOrangeSection() {
  return (
    <section
      id="radio-orange"
      className="relative overflow-hidden"
      style={{
        paddingTop: "72px",
        paddingBottom: "96px",
        background: "linear-gradient(180deg, #ffffff 0%, #f8fffb 50%, #f0fdf6 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Ccircle cx='30' cy='30' r='1' fill='%23047857'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center"
        >
          {/* Left Side - Image */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-center order-2 lg:order-2">
            <div
              className="rounded-lg overflow-hidden shadow-lg"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            >
              <img
                src={radioOrangeImg}
                alt="AIR Promotion By Radio Orange"
                className="w-full h-auto object-cover"
                style={{
                  maxHeight: 500,
                  borderRadius: 12,
                }}
              />
            </div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center order-1 lg:order-2 text-right">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 900,
                color: "#0b3d22",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              AIR Promotion By Radio Orange
            </h2>
            <p
              style={{
                color: "#3d6055",
                fontSize: "1rem",
                lineHeight: 1.75,
                maxWidth: 500,
                marginLeft: "auto",
              }}
            >
              Radio Orange will Broadcast our event across wider audiences with powerful air promotion services. 
              
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
