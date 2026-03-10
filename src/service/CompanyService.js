import API from "./api/axiosConfig";

export const getCompanyByName = (name) => {
    return API.get(`company//name/${encodeURIComponent(name)}`);
}

export const createCompany = (data) => {
    return API.post("/company",data);
}
