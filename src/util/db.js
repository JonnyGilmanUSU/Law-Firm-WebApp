import axios from 'axios';

const db = axios.create({
    baseURL: "https://lawfirm-fa23-default-rtdb.firebaseio.com/"
});

export default db;