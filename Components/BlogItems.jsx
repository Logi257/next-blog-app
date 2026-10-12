import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItems = ({ id, image, category, title, description }) => {
  return (
    <div className="max-w-82.5 sm:max-w-75 bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt=""
          width={400}
          height={400}
          className="border border-black"
        />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-4">
        <h5 className="mb-1 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-2 text-sm tracking-tight text-gray-700">
          {description}
        </p>
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center text-center py-2 font-semibold cursor-pointer"
        >
          Read More{" "}
          <Image src={assets.arrow} alt="" className="ml-2" width={12} />
        </Link>
      </div>
    </div>
  );
};

export default BlogItems;
