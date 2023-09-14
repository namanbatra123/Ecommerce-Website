import Head from "next/head";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import ProductFeed from "../Components/ProductFeed";


export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed />
      </main>
    </div>
  );
}
