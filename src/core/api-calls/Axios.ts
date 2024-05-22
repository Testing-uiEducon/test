import axios from "axios";
import firebaseAuth from "@/firebase.config";

// *******************************
// *** CREATING AXIOS INSTANCE ***
// *******************************

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

axiosInstance.defaults.headers.post["Content-Type"] = "*";
axiosInstance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

// ************************
// *** DRIVER FUNCTIONS ***
// ************************

// For getting Authentication header (accessToken) for API calls
const authHeader = async (requestParams: any, forceRefresh?: boolean) => {
  let accessToken = "";

  // For getting access token on the client side
  if (typeof window !== "undefined" && firebaseAuth.currentUser) {
    // console.log(firebaseAuth.currentUser.uid);

    accessToken = await firebaseAuth.currentUser.getIdToken(forceRefresh);
  } else {
    // For getting access token on the server side (//TODO: may cause problems in refreshing token)
    if (requestParams && requestParams.authHeader) {
      accessToken = requestParams.authHeader;
    }
  }
  return "Bearer " + accessToken;
};

const getUid = () => {
  if (typeof window !== "undefined" && firebaseAuth.currentUser)
    return firebaseAuth.currentUser.uid;
  return null;
};

const getRequestParams = (requestParams: any) => {
  return requestParams || {};
};

// *************************
// *** API CALL HANDLERS ***
// *************************

// Get call handler
const handleGet = async (
  url: string,
  requestParams?: any,
  forceRefreshAuthToken?: boolean
) => {
  try {
    let params = getRequestParams(requestParams);
    const resp = await axiosInstance({
      method: "GET",
      url,
      params: params,
      headers: {
        Authorization: await authHeader(requestParams, forceRefreshAuthToken),
      },
    });

    return {
      status: resp.status,
      data: resp.data,
      headers: resp.headers,
    };
  } catch (err: any) {
    return Promise.reject(err.message ? err.message : "");
  }
};

// Post call handler
const handlePost = async (
  url: string,
  requestData?: any,
  requestParams?: any,
  forceRefreshAuthToken?: boolean
) => {
  try {
    let params = getRequestParams(requestParams);
    const resp = await axiosInstance({
      method: "POST",
      url,
      headers: {
        "Content-Type": "application/json",
        Authorization: await authHeader(requestParams, forceRefreshAuthToken),
      },
      data: requestData,
      params: params,
    });

    return {
      status: resp.status,
      data: resp.data,
      headers: resp.headers,
    };
  } catch (err: any) {
    return Promise.reject(err.message ? err.message : "");
  }
};

const handleBlobReq = async (
  url: string,
  params?: any,
  forceRefreshAuthToken?: any
) => {
  try {
    const resp = await axiosInstance({
      method: "get",
      url,
      headers: {
        "Content-Type": "application/json",
        Authorization: await authHeader(params, forceRefreshAuthToken),
      },
      params: params || {},
      responseType: "blob",
    });

    return resp;
  } catch (err: any) {
    return Promise.reject(err.message ? err.message : "");
  }
};

export { handleGet, handlePost, getUid, handleBlobReq };
