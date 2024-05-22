import React, { useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  sequence: any;
};

const CourseSequenceContainer = ({ sequence }: Props) => {
  const [selectedSequenceIndex, setSelectedSequenceIndex] = useState(0);

  return (
    <div className="md:mt-12 mt-5 space-y-3">
      <h2 className="font-medium text-xl">Course Contents</h2>
      <div className="divide-y border rounded-lg p-2 md:p-5">
        {sequence.map((sequenceData: any, index: number) => (
          <button
            onClick={() => setSelectedSequenceIndex(index)}
            key={index}
            className="flex gap-2 px-2 py-3 md:py-4 w-full text-left"
          >
            <PlayCircleOutlineIcon className="text-[#7E3AF2]" />
            <div className="space-y-2 w-full">
              <p className="">{sequenceData?.title}</p>
              {selectedSequenceIndex === index && (
                <p className="text-sm text-gray-400">{sequenceData?.desc}</p>
              )}
            </div>
            <ExpandMoreIcon
              className={`${
                selectedSequenceIndex === index ? "rotate-180" : "rotate-0"
              } duration-300`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseSequenceContainer;
