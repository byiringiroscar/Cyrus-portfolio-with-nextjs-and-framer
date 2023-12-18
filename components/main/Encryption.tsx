"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center w-full h-full">
        <div className="absolute w-auto h-auto top-0 z-[5]">
            <motion.div
            variants={slideInFromTop}
            >

            </motion.div>
        </div>

    </div>
  )
}

export default Encryption