import axios from "axios";

class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
      paramsOrData._token = localStorage.getItem("jobly-token");
  
      console.debug("API Call:", endpoint, paramsOrData, verb);
  
      try {
        return (await axios({
          method: verb,
          url: `http://localhost:3001/${endpoint}`,
          [verb === "get" ? "params" : "data"]: paramsOrData})).data;
          // axios sends query string data via the "params" key,
          // and request body data via the "data" key,
          // so the key we need depends on the HTTP verb
      }
  
      catch(err) {
        console.error("API Error:", err.response);
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
    }
  
    static async getCompanies(search) {
      let res = await this.request("companies", { search });
      return res.companies;
    }

    static async getCompany(handle) {
      let res = await this.request(`companies/${handle}`);
      return res.company;
    }

    static async getJobs(search) {
      let res = await this.request("jobs", { search });
    return res.jobs;
    }

    static async registerUser(data) {
      let res = await this.request("users", data, "post");
      console.log("REGISTER USER RESPONSE", res);
    return res.token;
    }

    static async loginUser(data) {
      let res = await this.request("login", data, "post");
      console.log("LOGIN USER RESPONSE", res);
    return res.token;
    }

    static async getCurrentUser(username) {
      let res = await this.request(`users/${username}`);
      console.log("GOT CURRENT USER RESPONSE", res);
    return res.user;
    }

    
  }

  export default JoblyApi;