import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;

  const data = blog_data.find((blog) => blog.id === Number(id));

  return (
    data && (
      <>
        <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <Image
                src={assets.logo}
                alt=""
                width={200}
                className="w-[130px] sm:w-[150px]"
              />
            </Link>
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-2 border border-solid border-black shadow-[-7px_-7px_0px_#000] cursor-pointer">
              Get Started
              <Image src={assets.arrow} alt="" />
            </button>
          </div>

          <div className="text-center my-10">
            <h1 className="text-2xl sm:text-4xl max-w-[700px] mx-auto font-semibold">
              {data.title}
            </h1>
            <Image
              className="mx-auto mt-6 border border-white rounded-full"
              src={data.author_img}
              alt=""
              width={60}
              height={60}
            />
            <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
              {data.author}
            </p>
          </div>
        </div>
        <div className="mx-5 max-w-[800px] md:mx-auto mt-[-50px] mb-10">
          <Image
            className="border-4 border-white"
            src={data.image}
            alt=""
            width={1280}
            height={720}
          />
          <h1 className="mt-6 text-[26px] font-semibold">Introduction:</h1>
          <p>{data.description}</p>
          <h3 className="mt-3 text-[18px] font-semibold">
            Step 1 : Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Est, atque accusamus.
          </h3>
          <p className="mt-1">
            Reprehenderit eius ducimus voluptates nulla nemo labore accusamus
            consequatur nostrum nam. Facere nulla corporis fuga dolore,
            similique repellat nisi?
          </p>
          <p className="mt-1">
            Reprehenderit eius ducimus voluptates nulla nemo labore accusamus
            consequatur nostrum nam. Facere nulla corporis fuga dolore,
            similique repellat nisi?
          </p>

          <h3 className="mt-3 text-[18px] font-semibold">
            Step 2 : Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Est, atque accusamus.
          </h3>
          <p className="mt-1">
            Reprehenderit eius ducimus voluptates nulla nemo labore accusamus
            consequatur nostrum nam. Facere nulla corporis fuga dolore,
            similique repellat nisi?
          </p>
          <p className="mt-1">
            Reprehenderit eius ducimus voluptates nulla nemo labore accusamus
            consequatur nostrum nam. Facere nulla corporis fuga dolore,
            similique repellat nisi?
          </p>

          <h3 className="mt-3 text-[18px] font-semibold">
            Step 3 : Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Est, atque accusamus.
          </h3>
          <p className="mt-1">
            Reprehenderit eius ducimus voluptates nulla nemo labore accusamus
            consequatur nostrum nam. Facere nulla corporis fuga dolore,
            similique repellat nisi?
          </p>
          <p className="mt-1">
            Reprehenderit eius ducimus voluptates nulla nemo labore accusamus
            consequatur nostrum nam. Facere nulla corporis fuga dolore,
            similique repellat nisi?
          </p>
          <h3 className="mt-3 text-[18px] font-semibold">Conclusion.</h3>
          <p className="mt-1">
            Reprehenderit eius ducimus voluptates nulla nemo labore accusamus
            consequatur nostrum nam. Facere nulla corporis fuga dolore,
            similique repellat nisi?
          </p>

          <div className="mt-10">
            <p className="text-black font-semibold my-4">Share this Article</p>
            <div className="flex">
              <Image src={assets.facebook_icon} alt="" width={40} />
              <Image src={assets.twitter_icon} alt="" width={40} />
              <Image src={assets.googleplus_icon} alt="" width={40} />
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  );
};

export default page;
