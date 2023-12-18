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
            className="text-[40px] font-medium text-gray-200"
            >
                Performance
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                &{" "}
                </span>
                Security
            </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
          <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">

            </div>

        </div>

    </div>
  )
}

export default Encryption