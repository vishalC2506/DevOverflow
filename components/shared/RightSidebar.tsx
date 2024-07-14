import Image from "next/image";
import Link from "next/link";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  const hotQuestions = [
    {
      _id: 1,
      title:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
    {
      _id: 2,
      title:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
    {
      _id: 3,
      title:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
    {
      _id: 4,
      title:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
    {
      _id: 5,
      title:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
    },
  ];
  const PopularTags = [
    { _id: 1, name: "javascript", totalQuestions: 5 },
    { _id: 2, name: "react", totalQuestions: 5 },
    { _id: 3, name: "next", totalQuestions: 5 },
    { _id: 4, name: "vue", totalQuestions: 5 },
    { _id: 5, name: "java", totalQuestions: 5 },
  ];
  return (
    <section
      className="background-light900_dark200 light-border sticky border-l top-0
    right-0  flex h-screen flex-col p-6 pt-36 
    shadow-light-300 dark:shadow-none max-xl:hidden overflow-y-auto 
     custom-scrollbar w-[350px]"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="assets/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        {" "}
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {PopularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
