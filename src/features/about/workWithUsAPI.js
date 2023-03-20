import HttpService from '../../services/httpService'


const getCategories = async () => {
    const { data: response } = await HttpService.get(`/main/work_with_us_category/`);
    return response;
}

const sendWorkWithUs = async (data) => {

    let formData = new FormData();

    if (data.attachment && data.attachment[0]) {
        formData.append("attachment", data.attachment[0])
    }

    formData.append("category", data.category)
    formData.append("city", data.city)
    formData.append("email", data.email)
    formData.append("name", data.name)
    formData.append("note", data.note)
    formData.append("province", data.province)
    formData.append("tel", data.tel)

    const { data: response } = await HttpService.post(`/main/work_with_us/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
}


const WorkWithUsApi = {
    getCategories,
    sendWorkWithUs
}

export default WorkWithUsApi