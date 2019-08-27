import axios from 'axios';

class ShowTransportLayer {
  fetchShows(endpoint, limit = 20) {
    const url = `${endpoint}/content/v1/shows?limit=${limit}`;
    const config = {
      headers: { 'Cache-Control': 'no-cache' }
    };

    return axios.get(url, config);
  }

  createShow(endpoint, token, data) {
    const url = `${endpoint}/content/v1/shows`;
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };

    return axios.post(url, { data }, config);
  }

  getShow(endpoint, uuid) {
    const url = `${endpoint}/content/v1/shows/${uuid}?clientTime=${new Date().getTime()}`;
    const config = {
      headers: { 'Cache-Control': 'no-cache' }
    };

    return axios.get(url, config);
  }

  updateShow(endpoint, uuid, token, data) {
    const url = `${endpoint}/content/v1/shows/${uuid}`;
    const config = {
      headers: { 'Authorization': `Bearer ${token}` }
    };

    return axios.patch(url, { data }, config);
  }

  deleteShow(endpoint, token, uuid) {
    const url = `${endpoint}/content/v1/shows/${uuid}`;
    const config = {
      headers: {
        'Cache-Control': 'no-cache',
        'Authorization': `Bearer ${token}`,
      }
    };

    return axios.delete(url, config);
  }
}

export default ShowTransportLayer;