"use client";

export const ButtonWithHandler = () => {
  const fetchData = async () => {
    const response = await fetch("/api/test", {
      method: "POST",
      body: JSON.stringify({
        title: "333",
        content: "444",
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return <button onClick={fetchData}>Click Me!</button>;
};
