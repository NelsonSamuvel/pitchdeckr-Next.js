"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const SearchReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <Button type="reset" onClick={reset} className="search-btn">
      <Link href={"/"} className=" text-white">
        <X className="size-5" />
      </Link>
    </Button>
  );
};

export default SearchReset;
