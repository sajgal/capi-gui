import axios from 'axios';
import { CAPI_BASE_URL } from '../../helpers/config';

class ShowTransportLayer {
  fetchShows() {
    const url = `${CAPI_BASE_URL}/shows`;

    return axios.get(url);
  }
}

export default ShowTransportLayer;