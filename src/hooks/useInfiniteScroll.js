import { useState, useEffect } from "react";

function useInfiniteScroll() {
  const [page, setPage] = useState(1);

  console.log(page);

  useEffect(() => {
    const pageScroll = () => {
      window.addEventListener("scroll", (e) => {
        const { scrollY, innerHeight } = e.currentTarget;
        const { scrollHeight } = document.documentElement;
        const currentPosition = Math.ceil(scrollY + innerHeight);

        if (currentPosition >= scrollHeight) {
          setPage((prev) => {
            if (prev + 1 > prev) {
              return prev + 1;
            }
          });
        }
      });
    };
    pageScroll();
  }, [page]);

  return [page];
}

export default useInfiniteScroll;
