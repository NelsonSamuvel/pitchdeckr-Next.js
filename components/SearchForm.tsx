import Form from "next/form";
import SearchReset from "./SearchReset";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action={"/"} className="search-form" scroll={false}>
      <input name="query" defaultValue={query} className="search-input" />
      <div className="flex gap-2">
        {query && <SearchReset />}
        <Button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
