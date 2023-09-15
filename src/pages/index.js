import Head from "next/head";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import ProductFeed from "../Components/ProductFeed";


export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Online Shopping site in India: Shop Online</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const products = await response.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        products: [], // Return an empty array or handle the error as needed
      },
    };
  }
}

