import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import LocalSearchbar from "@/components/shared/search/LocalSearchbar";

export default function Home() {
  const { userId } = auth();
  return (
    <>
      <div
        className="flex w-full flex-col-reverse justify-between 
                      gap-4 sm:flex-row sm:items-center"
      >
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button
            className="primary-gradient min-h-[46px] px-4 py-3
                           !text-light-900"
          >
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imageSrc="/assets/icons/search.svg"
          placeholder="search for questions"
          otherClasses="flex-1"
        />
        Filter
      </div>
    </>
  );
}
