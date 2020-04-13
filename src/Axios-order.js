import axios from 'axios';

const instance = axios.create(
    {
        baseURL: "https://react-burger-builder-24755.firebaseio.com/"
    }
)

export default instance;