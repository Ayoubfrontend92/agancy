import HttpService from '../../../services/httpService'


const getTerms = async () => {
    const { data: response } = await HttpService.get(`/main/term_list/`);
    return response;
}


const TermsApi = {
    getTerms
}

export default TermsApi