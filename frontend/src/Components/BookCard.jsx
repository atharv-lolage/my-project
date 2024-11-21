import React from "react";

const BookCard = ({book}) => {
   const imageUrl = book.image?.[0]?.url
     ? `http://localhost:1337${book.image[0].url}`
     : null;

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={imageUrl || "https://dummyimage.com/420x260"}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {book.category}
        </h3>
        <h2 className="text-white title-font text-lg font-medium">
          {book.title}
        </h2>
        <p className="mt-1">
          {book.price ? "₹" + book.price : "Price not avaliable"}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
