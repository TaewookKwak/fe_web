import EventForm from "@/components/shared/event-from";
import { auth } from "@clerk/nextjs";
import React from "react";

const UpdateEventPage = () => {
  const { sessionClaims } = auth(); // 세션 정보를 가져옵니다.

  const userId = sessionClaims?.userId as string; // 세션 정보에서 userId를 가져옵니다.

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Update" />
      </div>
    </>
  );
};

export default UpdateEventPage;
