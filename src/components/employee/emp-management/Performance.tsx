import { motion } from "framer-motion";

function Performance() {
  return (
    <div>
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Performance Overview</h2>
      </motion.div>
    </div>
  );
}

export default Performance;
