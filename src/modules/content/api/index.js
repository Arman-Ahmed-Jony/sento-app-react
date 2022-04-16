import axios from "axios";

export const getAllContent = async () => {
  const options = {
    method: "GET",
    url: "http://localhost:4000/api/contents/",
    headers: { },
  };
  try {
      return (await axios.request(options)).data;
  } catch (error) {
      
  }
};

export const createContent = async (content) => {
  const options = {
    method: "POST",
    url: "http://localhost:4000/api/contents/",
    headers: { },
    data: content
  };
  try {
      return (await axios.request(options)).data;
  } catch (error) {
      
  }
}