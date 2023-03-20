import HttpService from '../../services/httpService'


const getCategories = async () => {
    const { data: response } = await HttpService.get(`/main/contact_us_category/`);
    return response;
}

const sendContactUs = async (data) => {
    const { data: response } = await HttpService.post(`/main/contact_us/`, data);
    return response;
}


const ContactUsApi = {
    getCategories,
    sendContactUs
}

export default ContactUsApi