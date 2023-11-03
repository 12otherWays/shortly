import axios from "axios";

const url = "http://13.233.92.178:3000/api/v1/url";

const getShortlyLinkApi = async (data) => {
  try {
    let response = await axios({
      method: "post",
      url: `${url}`,
      data: data,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export { getShortlyLinkApi };
