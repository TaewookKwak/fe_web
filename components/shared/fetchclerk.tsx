"use client";

export const ButtonWithClerk = () => {
  const fetchData = async () => {
    const response = await fetch("/api/webhook/clerk", {
      method: "POST",
      body: JSON.stringify({
        clerkId: "ckp2q3q3q0000h0jx5q2q3q3q",
        email: "test",
        username: "test",
        firstName: "test",
        lastName: "last_name",
        photo: "image_url",
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return <button onClick={fetchData}>Clerk</button>;
};
