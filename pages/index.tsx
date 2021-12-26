import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alice+NextJs- Index</title>
      </Head>
      <div className="center-div">
        <Image
          src={"/alice-logo.svg"}
          width={120}
          height={80}
          alt="alice-logo"
        />
        <p>
          For instruction please go through&nbsp; &nbsp;
          <code>readme.md</code>
        </p>
      </div>
    </div>
  );
};

export default Home;
