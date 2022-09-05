import axios from 'axios'

const KEY = 'AIzaSyCJbH-3z81b5UADkFeYBf2XuW5X1ZPbxZM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

