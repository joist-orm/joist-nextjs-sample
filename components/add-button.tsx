"use client";

type ButtonProps = {
  id: string;
  addBook: (id: string) => Promise<void>;
};

export function Button({ id, addBook }: ButtonProps) {
  return (
    <button className="text-sm text-gray-500" onClick={() => addBook(id)}>
      add book
    </button>
  );
}
