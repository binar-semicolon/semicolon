import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@shadcn/ui/card';
import { Button } from '@shadcn/ui/button';

type Post = {
  id: string;
  content: string;
  user: {
    id: string;
    name: string;
  };
};

const SearchResults: React.FC<{ results: Post[] }> = ({ results }) => {
  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <Button>Top</Button>
        <Button>Latest</Button>
        <Button>People</Button>
      </div>
      <div className="space-y-4">
        {results.map(result => (
          <Card key={result.id}>
            <CardHeader>
              <CardTitle>{result.user.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{result.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
