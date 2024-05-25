import React from "react";

type Props = {
  restartCourse: Function;
};

const ModuleCompletion = ({ restartCourse }: Props) => {
  return (
    <div className="w-full h-fit lg:w-[95%] lg:h-[95%] rounded-lg flex items-center justify-center bg-cover bg-center bg-[url('https://firebasestorage.googleapis.com/v0/b/uieducon-df5c7.appspot.com/o/app%20assets%2FLottie%20Confettie.gif?alt=media&token=ddf365b3-4829-49d0-bcdf-46151bf8e9eb')]">
      <div className="w-full h-full bg-[#7e3af22a] rounded-lg flex items-center justify-center flex-col">
        <h2 className="text-3xl font-semibold">Module completed!!!</h2>
        <p className="text-2xl my-5">
          This is not the end of this course, stay tuned for upcoming modules.
        </p>
        <button
          type="button"
          className="inline-flex items-center justify-center w-[50%] my-4 ml-1 px-4 py-4 bg-[#7e3af2] hover:bg-blue-700 text-white text-xl font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-75 disabled:cursor-not-allowed"
          onClick={() => restartCourse()}
          data-tip="Complete the course to download the certificate"
        >
          Watch lection 1
        </button>
      </div>
    </div>
  );
};

export default ModuleCompletion;
