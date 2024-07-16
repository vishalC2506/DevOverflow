import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import LocalSearchbar from "@/components/shared/search/LocalSearchbar";

import { HomePageFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";
import HomeFilters from "@/components/home/HomeFilters";
import NoResultFound from "@/components/shared/NoResultFound";

export default function Home() {
  const { userId } = auth();
  const questions = [
    /*  {
      _id: 1,
      title: "is simply dummy text of the printing",
      tags: [
        { _id: 1, name: "pyhton" },
        { _id: 2, name: "java" },
      ],
      author: "vishal",
      upvotes: 10,
      views: 100,
      answer: 2,
      createdAt: "12:05:2023",
    },
    {
      _id: 2,
      title: "is simply dummy text of the printing",
      tags: [
        { _id: 1, name: "pyhton" },
        { _id: 2, name: "java" },
      ],
      author: "vishal",
      upvotes: 10,
      views: 100,
      answer: 2,
      createdAt: "12:05:2023",
    },*/
  ];
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
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="max-md:flex hidden"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => "QuestionCard")
        ) : (
          <NoResultFound
            title=" There&nbsp;s no question to show"
            description="  Be the first to break the silence! 🚀 Ask a question and kickstart the
        discussion. Our query could be the next big thing others learn from. Get
        involved!"
            link="ask-question"
            linkTitle="ask-question"
          />
        )}
      </div>
    </>
  );
}
