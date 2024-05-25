import React, { useEffect, useState } from "react";
import chevRight from "@/Images/svgs/chevRight.svg";
import Image from "next/image";
import { LearnState } from "@/context/LearnContextProvider";
import lockIcon from "@/Images/svgs/lock-icon.svg";

type Props = {
  contentData: Array<ResourceType | null> | undefined;
  playingIdx: number;
  updatePlayingIndex: Function;
};

const ContentBar = ({ contentData, playingIdx, updatePlayingIndex }: Props) => {
  // const [displayBar, setDisplayBar] = useState<Boolean>(false);
  const { displayBar, setDisplayBar, setCurrentContent } = LearnState();
  const [screenWidth, setScreenWidth] = useState<number>(280);

  const { currentIndex } = LearnState();

  useEffect(() => {
    setScreenWidth(screen?.width);
  }, []);

  return (
    <section
      className={`w-full md:w-1/4 relative ${displayBar ? "h-full" : ""}`}
    >
      <div
        className={`flex items-center mb-[30px] ${
          displayBar ? "justify-between" : ""
        }`}
      >
        {displayBar ? <span className="text-lg">Lesson Navigation</span> : null}
        {screenWidth < 768 ? (
          <div
            className={`flex items-center cursor-pointer w-fit h-fit transform-gpu
           ${displayBar ? "flex-row-reverse" : ""}`}
            onClick={() => setDisplayBar((prev: Boolean) => !prev)}
          >
            <span className="uicolor text-sm">
              {displayBar ? "Hide" : "Show"}
            </span>

            <Image
              className={`${
                displayBar ? "rotate-180" : "rotate-0"
              } transition-all duration-500`}
              src={chevRight}
              alt=""
            />
          </div>
        ) : null}
      </div>

      <div
        className={`flex flex-col w-full h-[calc(100vh-64px-16px-28px-30px-32px)] overflow-auto z-10 bg-white transition-all duration-1000 transform-gpu overflow-scroll absolute md:static  ${
          displayBar ? "translate-x-0" : "translate-x-[calc(-100%-32px)]"
        }`}
      >
        {contentData?.map((content: ResourceType | null, idx: number) => {
          return (
            <div
              className={`text-lg p-2 w-11/12 cursor-pointer rounded hover:bg-[#7e3af23a] flex justify-between items-center ${
                playingIdx == idx ? "bg-[#7e3af22a]" : ""
              }`}
              key={idx}
              id={`${idx}`}
              onClick={() => {
                if (idx <= currentIndex) {
                  updatePlayingIndex(idx, content);
                  setCurrentContent(content);
                }
              }}
            >
              <span className={idx > currentIndex ? "text-neutral-400" : ""}>
                {idx + 1}.&nbsp;&nbsp;{content?.title}
              </span>
              {idx > currentIndex ? (
                <Image src={lockIcon} width={20} height={20} alt="" />
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContentBar;
