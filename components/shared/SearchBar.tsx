"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { ChangeEvent, FormEvent } from "react";
import { useDebouncedCallback } from "use-debounce";
const Search = ({ placeholder }: any) => {
  const search = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(search);
      params.set("page", 1)
      if (e.target.value) {
        params.set("q", e.target.value);
      } else {
        params.delete("q");
      }

      replace(`${pathName}?${params}`);
    },
    300
  );

  return (
    <div className="py-0.5 px-4 bg-transparent rounded-2xl border-2 border-gray-300 flex gap-1 items-center">
      <SearchIcon width={20} height={20} className="text-gray-400" />
      <Input
        type="text"
        placeholder={placeholder}
        className="border-none bg-transparent"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
