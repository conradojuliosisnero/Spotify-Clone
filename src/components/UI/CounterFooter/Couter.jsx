"use client";
import { Pagination } from "@nextui-org/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "@/store/slices/counterSlice";

export default function Counter() {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const handlePageChange = (page) => {
    dispatch(increment(page));
    setCurrentPage(page);
  };

  return (
    <Pagination
      showControls
      size="lg"
      color="success"
      radius="sm"
      total={currentPage + 1}
      initialPage={counter.counter}
      onChange={handlePageChange}
    />
  );
}
