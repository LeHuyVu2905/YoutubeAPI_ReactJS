import axios from 'axios';

const KEY = 'AIzaSyDMM2S32VT4tjYVUKK17QW1xfmADAkbat0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
});