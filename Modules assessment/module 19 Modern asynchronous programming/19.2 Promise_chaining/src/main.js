

const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function updateIfExists(id, body) {
  const url = `${BASE_URL}/constellations/${id}`;
  return axios
    .get(url)
    .then((response) => {
      if (response==null) {
        throw 'not found';
      }
      return axios.put(url, response).then(({ data }) => {
        return(data);
      });
    })
    .catch((error) => {
      return(error.message);
    });
}

module.exports = {
  updateIfExists,
};