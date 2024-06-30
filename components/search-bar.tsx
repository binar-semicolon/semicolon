import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
    const [query, setQuery] = useState('');
  
    const handleSearch = () => {
      onSearch(query);
    };
  
    return (
      <div className="flex space-x-2">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
    );
  };
  
  export default SearchBar;