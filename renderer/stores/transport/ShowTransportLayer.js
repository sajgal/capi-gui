import axios from 'axios';
import { CAPI_BASE_URL, CAPI_TOKEN } from '../../helpers/config';

class ShowTransportLayer {
  fetchShows() {
    const url = `${CAPI_BASE_URL}/shows`;

    return axios.get(url);
  }

  createShow(data) {
    const url = `${CAPI_BASE_URL}/shows`;
    const config = {
      headers: { 'Authorization': `bearer ${CAPI_TOKEN}` }
    };

    return axios.post(url, { data }, config);
  }
}

export default ShowTransportLayer;