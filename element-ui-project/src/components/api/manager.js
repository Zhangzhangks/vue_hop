import request from "../../request";

export const getdata = (data) => {
    console.log(data);
    return request('/admin/login', 'post', { data })
}