import React, { useEffect, useState } from "react";
import ContentBar from "@/components/Learn/ContentBar";
import Image from "next/image";
import chevRight from "@/Images/svgs/chevRight.svg";
import dynamic from "next/dynamic";
import { LearnState } from "@/context/LearnContextProvider";
import { useAppSelector } from "@/core/redux/hooks";
import { useParams, useRouter } from "next/navigation";
import { handleGet, handlePost } from "@/core/api-calls/Axios";
import CourseCompletion from "./CourseCompletion";

type Props = {};

const DynamicVideoPlayer = dynamic(
  () => import("@/components/Learn/VideoPlayer"),
  { ssr: false }
);

interface courseDataType {
  name: string;
  pricingINR: number;
  recordId: string;
  thumbnailUrl: string;
  sequence: Array<ResourceType | null>;
  createdAt: any;
}

// const seedData: Array<ResourceType> = [
//   {
//     type: "video",
//     title: "Get Started with AI",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     videoURL: "https://vimeo.com/784547775",
//     id: "0",
//   },
//   {
//     type: "video",
//     title: "Example Title 1",
//     desc: "Example Desc 1",
//     videoURL: "https://vimeo.com/784547786",
//     id: "1",
//   },
//   {
//     type: "video",
//     title: "Example Title 2",
//     desc: "Example Desc 2",
//     videoURL: "https://vimeo.com/784547772",
//     id: "2",
//   },
//   {
//     type: "video",
//     title: "Example Title 3",
//     desc: "Example Desc 3",
//     videoURL: "https://vimeo.com/784547687",
//     id: "3",
//   },
//   {
//     type: "video",
//     title: "Example Title 4",
//     desc: "Example Desc 4",
//     videoURL: "https://vimeo.com/784546783",
//     id: "4",
//   },
//   {
//     type: "video",
//     title: "Example Title 5",
//     desc: "Example Desc 5",
//     videoURL: "https://vimeo.com/784547764",
//     id: "5",
//   },
//   {
//     type: "video",
//     title: "Example Title 6",
//     desc: "Example Desc 6",
//     videoURL: "https://vimeo.com/784547736",
//     id: "6",
//   },
//   {
//     type: "video",
//     title: "Example Title 7",
//     desc: "Example Desc 7",
//     videoURL: "https://vimeo.com/784547745",
//     id: "7",
//   },
//   {
//     type: "video",
//     title: "Example Title 8",
//     desc: "Example Desc 8",
//     videoURL: "https://vimeo.com/784547740",
//     id: "8",
//   },
//   {
//     type: "video",
//     title: "Example Title 9",
//     desc: "Example Desc 9",
//     videoURL: "https://vimeo.com/784547711",
//     id: "9",
//   },
//   {
//     type: "video",
//     title: "Example Title 10",
//     desc: "Example Desc 10",
//     videoURL: "https://vimeo.com/784547695",
//     id: "10",
//   },
//   {
//     type: "video",
//     title: "Example Title 11",
//     desc: "Example Desc 11",
//     videoURL: "https://vimeo.com/784547673",
//     id: "11",
//   },
//   {
//     type: "video",
//     title: "Example Title 12",
//     desc: "Example Desc 12",
//     videoURL: "https://vimeo.com/784547693",
//     id: "12",
//   },
//   {
//     type: "video",
//     title: "Example Title 13",
//     desc: "Example Desc 13",
//     videoURL: "https://vimeo.com/784546836",
//     id: "13",
//   },
//   {
//     type: "video",
//     title: "Example Title 14",
//     desc: "Example Desc 14",
//     videoURL: "https://vimeo.com/784547734",
//     id: "14",
//   },
// ];

const LearnContainer = (props: Props) => {
  const { currentContent, setCurrentContent, currentIndex, setCurrentIndex } =
    LearnState();
  const [courseData, setCourseData] = useState<courseDataType | null>(null);
  const [packageData, setPackageData] = useState<packageType | null>(null);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [downloadCertificate, setDownLoadCertificate] =
    useState<boolean>(false);
  const params = useParams();
  const router = useRouter();

  const purchaseState = useAppSelector((state) => state.packagesState);
  const { userLoading } = useAppSelector((state) => state.authState);

  const changeToNext = async () => {
    let length = courseData?.sequence?.length || 0;
    if (currentIdx + 1 < length) {
      if (currentIdx == currentIndex) {
        // hit API to update currentIndex;
        await handlePost("/package/update-index", {
          packageId: packageData?.recordId,
        });
        setCurrentIndex((prev: number) => ++prev);
      }
      setCurrentContent(courseData?.sequence[currentIdx + 1]);
      setCurrentIdx((prev: number) => ++prev);
    } else {
      setCurrentContent(null);
      setDownLoadCertificate(true);
      setCurrentIdx((prev: number) => ++prev);
    }
  };

  const prevVideo = () => {
    if (currentIdx > 0) {
      setCurrentContent(courseData?.sequence[currentIdx - 1]);
      setCurrentIdx((prev) => --prev);
    }
  };

  const nextVideo = () => {
    if (currentIdx < currentIndex) {
      setCurrentContent(courseData?.sequence[currentIdx + 1]);
      setCurrentIdx((prev) => ++prev);
    }
  };

  const fetchCourseData = async () => {
    try {
      const response = await handleGet("/course/get-course-by-id", {
        course_id: params.courseId,
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!userLoading) {
      if (purchaseState.length > 0) {
        for (let i = 0; i < purchaseState.length; i++) {
          const element: packageType | null = purchaseState[i];

          if (element?.courseId == params.courseId) {
            setPackageData(element);
            fetchCourseData().then((courseData) => {
              setCourseData(courseData);
              let index: number = element.currentIndex
                ? element.currentIndex
                : 0;
              setCurrentIndex(index);
              setCurrentIdx(index);
              setCurrentContent(courseData?.sequence[index]);
            });
            return;
          }
        }
      }
      router.replace(`/courses/${params.courseId}`);
    }
  }, [purchaseState, userLoading]);

  return (
    <main className="w-full h-full overflow-hidden w-full flex flex-col px-4 pt-8 md:px-8 md:flex-row md:justify-between">
      {/* <section className="w-full h-full flex flex-col px-4 pt-8"> */}
      <ContentBar
        contentData={courseData?.sequence}
        playingIdx={currentIdx}
        updatePlayingIndex={setCurrentIdx}
      />
      {/* </section> */}
      <section className="md:w-[70%] relative h-[calc(100%-50px)] md:h-full">
        <div className="text-lg mb-5">
          Courses&nbsp;&nbsp;&gt;&nbsp;&nbsp;{courseData?.name}
          &nbsp;&nbsp;&gt;&nbsp;&nbsp;
          {courseData?.sequence[currentIdx]?.title}
        </div>
        <div
          className={
            "overflow-auto hiddenScrollBar" +
            `${
              currentIdx > 0
                ? " h-[calc(100%-90px-28px-1.25rem)]"
                : " h-[calc(100%-28px-1.25rem)]"
            }`
          }
        >
          {currentContent ? (
            <DynamicVideoPlayer
              onEndedHandler={changeToNext}
              thumbnail={courseData?.thumbnailUrl}
            />
          ) : null}
          {downloadCertificate ? (
            <CourseCompletion
              enableDownloadCertificate={downloadCertificate}
              packageId={packageData?.recordId}
            />
          ) : null}
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/20l2JaGslZ4?si=dJzyPANUTX3cgER9&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> */}
          <h4 className="text-xl font-medium mt-10 mb-5">
            {currentContent?.title}
          </h4>
          <p className="text-lg font-normal mb-8 text-justify">
            {currentContent?.desc}
          </p>
        </div>

        {currentIdx > 0 ? (
          <div className="w-full flex justify-between absolute bottom-0 border-t-2 border-solid border-[#dedede] py-4">
            {currentIdx > 0 ? (
              <div
                className="flex items-center cursor-pointer"
                onClick={prevVideo}
              >
                <div className="p-4 rounded-full bg-[#FBFBFF] mr-1.5">
                  <Image
                    src={chevRight}
                    alt=""
                    className="rotate-180 w-6 h-6"
                  />
                </div>
                <span>previous</span>
              </div>
            ) : null}

            {currentIdx < currentIndex ? (
              <div
                className="flex items-center cursor-pointer"
                onClick={nextVideo}
              >
                <span>next</span>
                <div className="p-4 rounded-full bh-[#FBFBFF] ml-1.5">
                  <Image src={chevRight} alt="" className="w-6 h-6" />
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </section>
    </main>
  );
};

export default LearnContainer;
