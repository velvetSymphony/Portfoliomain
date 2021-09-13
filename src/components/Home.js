import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
    >
      <motion.h1
        className="head1"
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 2, duration: 2 }}
      >
        Aspiring Dev full time
      </motion.h1>

      <motion.div
        className="blockanimate"
        initial={{ y: -350 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 3, duration: 2 }}
      >
        <motion.h3
          className="head3"
          initial={{ y: -350 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", delay: 3, duration: 2 }}
        >
          Welcome there!
        </motion.h3>

        <motion.p
          className="para1"
          initial={{ y: -400 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", delay: 3, duration: 2 }}
        >
          My name is Abhishek and im your guest!
        </motion.p>

        <motion.a className="Links" href="https://github.com/Abhishekcs96">
          <FaGithubSquare />
        </motion.a>

        <motion.a
          className="Links"
          href="https://www.linkedin.com/in/abhishek-chandra-sekar-4018a8137/"
        >
          <FaLinkedin />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Home;
