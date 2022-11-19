import axios, {AxiosInstance} from "axios";

const apiAlura = axios.create({
    baseURL: "https://www.alura.com.br/"
});

export default apiAlura;

// /api/dashboard/cc23c10b02f8819940a3949a2781c451567faafa1e5e456607e2d88208d261a2
// https://www.alura.com.br/api/dashboard/648b2e6ad48b5e1facc4d214b61a84dcc8f4f9cb3c2f14e9aca43bd1cc8819c3