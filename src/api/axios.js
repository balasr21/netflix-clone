import axios from "axios";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTcwYWU4ZTRiMmNkOTVmNjAxM2M0ZDNjYmVkN2MxOSIsInN1YiI6IjVmOGMwMTU2MWZiOTRmMDAzNTM0NWEzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mi-58d9aDK5MtDXk-kTNdbI8kDJUrQkFQEM8xols7M4";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  //  headers: {'Authorization': `Bearer ${ACCESS_TOKEN}`}
});

export default instance;
