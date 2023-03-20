import HttpService from '../../../services/httpService'


const getPrivacies = async () => {
    const { data: response } = await HttpService.get(`/main/privacy_list/`);
    return response;
}


const PrivacyApi = {
    getPrivacies
}

export default PrivacyApi