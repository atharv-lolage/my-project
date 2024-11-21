import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import axios from "axios";

const BookSection = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/books?populate=*"
        );
        setBooks(response.data.data);
        console.log(response.data.data);
        console.log(books);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to fetch books.");
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <p>Loading books...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 mx-auto">
        <div class="flex flex-wrap sm:flex-row flex-col py-6 justify-between">
          <h1 class="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
      Explore Books
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {books.length > 0 ? (
            books.map((book) => <BookCard key={book.id} book={book} />)
          ) : (
            <p>No books available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookSection;
