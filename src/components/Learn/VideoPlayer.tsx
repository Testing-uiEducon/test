import { LearnState } from "@/context/LearnContextProvider";
import { handleGet } from "@/core/api-calls/Axios";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import Image from "next/image";
import CourseCompletion from "./CourseCompletion";

type Props = {
  onEndedHandler: () => void;
  thumbnail?: string;
};

const VideoPlayer = ({ onEndedHandler, thumbnail }: Props) => {
  const { currentContent } = LearnState();
  const [playState, setPlayState] = useState<string | undefined>("loading");

  const iframeRef = useRef(null);

  const fetchPlayableLink = async () => {
    try {
      setPlayState("loading");
      const response = await handleGet("/course/get-playable-link", {
        videoId: currentContent?.videoID,
      });

      setPlayState(response.data.playableLink);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPlayableLink();
  }, [currentContent]);

  return (
    <div className="w-full h-fit lg:w-[95%] lg:h-[95%] border border-solid border-[#e1e1e1] bg-[#212121] flex items-center justify-center">
      {/* <ReactPlayer
        url={
          playState == "loading"
            ? "https://europe1.discourse-cdn.com/figma/original/3X/6/1/6173a1aae8372541cfe858bbadccf198e2935f89.gif"
            : playState
        }
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
              disablePictureInPicture: false,
            },
            forceHLS: true,
          },
        }}
        pip={false}
        playing={true}
        controls={true}
        light={thumbnail}
        width={"100%"}
        height={"100%"}
        onEnded={onEndedHandler}
      /> */}
      {playState == "loading" ? (
        <div className="w-[70px] h-[70px] border-[#f3f3f3] border-[5px] border rounded-full border-t-[#3498db] my-0 mx-auto animate-spin"></div>
      ) : (
        <div className="w-full h-full relative">
          <iframe
            className="w-full h-full"
            src={playState}
            allowFullScreen
            ref={iframeRef}
          ></iframe>
          <button
            type="button"
            className={`inline-flex items-center px-4 py-2 bg-[#7e3af2] text-white font-medium rounded-lg rounded-r-none hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 absolute top-0 end-0`}
            onClick={onEndedHandler}
          >
            <span>Mark as done</span>
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
