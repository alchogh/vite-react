import React from "react";

interface IProps {
  onSubmit: (value: string) => void;
}

export const SearchBar = ({ onSubmit }: IProps) => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleClick = () => {
    onSubmit("cars");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input />
      </form>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};
