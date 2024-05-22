import { handleBlobReq } from "@/core/api-calls/Axios";
import React from "react";
import ReactPlayer from "react-player";

const CourseCompletion = ({
  enableDownloadCertificate,
  packageId,
}: {
  enableDownloadCertificate: boolean;
  packageId: String | undefined;
}) => {
  const downloadCertificate = async () => {
    if (!enableDownloadCertificate) return;
    try {
      const response = await handleBlobReq(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/course/getCertificate?packageId=${packageId}`
      );
      if (response.status != 200) {
        throw new Error("Failed to download certificate");
      }
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "certificate.pdf";
      link.click();

      window.URL.revokeObjectURL(url); // Revoke the object URL
    } catch (error) {
      console.error("Error downloading certificate:", error);
      // Handle download error (e.g., display an error message)
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-fit lg:w-[95%] lg:h-[95%] rounded-lg flex items-center justify-center bg-cover bg-center bg-[url('https://firebasestorage.googleapis.com/v0/b/uieducon-df5c7.appspot.com/o/app%20assets%2FLottie%20Confettie.gif?alt=media&token=ddf365b3-4829-49d0-bcdf-46151bf8e9eb')]">
      <div className="w-full h-full bg-[#7e3af22a] rounded-lg flex items-center justify-center flex-col">
        <h2 className="text-3xl font-semibold">Congratulations!!!</h2>
        <p className="text-2xl my-5">
          You have successfully completed this course.
        </p>
        <button
          type="button"
          className="inline-flex items-center justify-center w-[50%] my-4 ml-1 px-4 py-4 bg-[#7e3af2] hover:bg-blue-700 text-white text-xl font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-75 disabled:cursor-not-allowed"
          onClick={downloadCertificate}
          disabled={!enableDownloadCertificate}
          data-tip="Complete the course to download the certificate"
        >
          Download Certificate
        </button>
      </div>
    </div>
  );
};

export default CourseCompletion;
