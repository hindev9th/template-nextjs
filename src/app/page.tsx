'use client';
import { useQuery } from '@tanstack/react-query';
import { getExample } from '@/lib/https/example';
import { LoaderCircle } from 'lucide-react';
import Link from 'next/link';


export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['example'],
    queryFn: getExample,
  });
  return (
    <>
      {isLoading ? (
        <LoaderCircle
          width={200}
          height={200}
          className={'animate-spin'}
        />
      ) : (
        <>
          <Link href="/test">dasd</Link>
          {
            data?.map((example, index) => (
              <div
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                key={index}
              >
                <h2 className="text-xl font-bold mb-2">{example.description}</h2>
                <a
                  href={example.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {example.url}
                </a>
                <div className="mt-3">
                  <p className="text-gray-700 font-semibold">Types:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {example.types.map((type) => (
                      <span
                        key={type}
                        className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                      >
              {type}
            </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-gray-700 font-semibold">Topics:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {example.topics.map((topic) => (
                      <span
                        key={topic}
                        className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded"
                      >
              {topic}
            </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-gray-700 font-semibold">Levels:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {example.levels.map((level) => (
                      <span
                        key={level}
                        className="bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded"
                      >
              {level}
            </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          }
        </>
      )}
    </>
  );
}
