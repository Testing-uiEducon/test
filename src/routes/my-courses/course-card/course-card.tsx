import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  courseData: any;
  isPurchased: boolean;
};

const CourseCard = ({ courseData, isPurchased }: Props) => {
  const router = useRouter();

  const courseClickHandler = (courseData: CourseType) => {
    router.push(`courses/${courseData.recordId}`);
  };

  return (
    <div className="flex flex-col border justify-between w-full md:w-72 rounded-[20px] shadow-lg">
      <div className="">
        <Image
          alt="Course Image"
          src={courseData?.thumbnailUrl || ""}
          width={288}
          height={144}
          className="md:h-36 rounded-t-[20px] object-cover w-full"
        />
        <div className="flex flex-col gap-y-2 py-4 px-5">
          <p className="text-lg tracking-wide font-semibold">
            ₹{courseData?.pricingINR}
          </p>
          <p className="text-lg tracking-wider font-medium">
            {courseData?.name}
          </p>
        </div>
      </div>
      <button
        className="mt-3 rounded-b-[20px] text-center duration-300 text-lg tracking-wider font-light py-4 border bg-[#7E3AF2] hover:bg-[#7e3af2c7] text-white w-full font-normal"
        onClick={() => {
          if (isPurchased) {
            router.push(`courses/${courseData?.recordId}/learn`);
          } else {
            courseClickHandler(courseData);
          }
        }}
      >
        {isPurchased ? "Start Learning" : "View Course"}
      </button>
    </div>
  );
};

export default CourseCard;
