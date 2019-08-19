import axios from 'axios';

class ShowTransportLayer {
  fetchShows(endpoint) {
    const url = `${endpoint}/content/v1/shows`;

    return axios.get(url);
  }

  createShow(endpoint, token, data) {
    const url = `${endpoint}/content/v1/shows`;
    const config = {
      headers: { 'Authorization': `Bearer ${token}` }
    };

    return axios.post(url, { data }, config);
  }

  getShow(endpoint, uuid) {
    const url = `${endpoint}/content/v1/shows/${uuid}`;
    return axios.get(url);
  }
}

export default ShowTransportLayer;