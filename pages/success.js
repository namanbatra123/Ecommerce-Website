import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import Header from "../components/Header";
import { CheckCircleIcon } from "../icons";

const Success = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gray-100 h-screen"
    >
      <Head>
        <title>Ordered Successfully</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://pngimg.com/uploads/amazon/amazon_PNG5.png"
        />
      </Head>
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, Your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation order
            items has shipped, if you would like to check tha status of order(s)
            please press the link below
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to orders
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Success;
