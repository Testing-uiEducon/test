import React from "react";
import Image from "next/image";
import PricingCard from "./pricing-card/pricing-card";
import CourseSequenceContainer from "./course-sequence-container";
import CoursePrimaryDetailsContainer from "./course-primary-details-container";

type Props = {
  courseData: any;
};

const CourseIdContainer = ({ courseData }: Props) => {
  return (
    <main className="common-frame-box py-10 flex gap-9">
      <div>
        <Image
          src={courseData.thumbnailUrl}
          alt=""
          width={563}
          height={347}
          className="w-full h-auto rounded-lg"
        />

        <CoursePrimaryDetailsContainer courseData={courseData} />

        {courseData.sequence && courseData.sequence.length > 0 && (
          <CourseSequenceContainer sequence={courseData?.sequence} />
        )}
      </div>

      <PricingCard courseData={courseData} />
    </main>
  );
};

export default CourseIdContainer;
