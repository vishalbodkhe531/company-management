import { motion } from "framer-motion";

function Meetings() {
  return (
    <>
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>Meetings</div>;
      </motion.div>
    </>
  );
}

export default Meetings;
