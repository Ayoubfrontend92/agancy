import HttpService from '../../../services/httpService'

const getConsultationCategories = async () => {
    const { data: response } = await HttpService.get('/main/consultation_category/')
    return response;
}

const getConsultationModes = async () => {
    const { data: response } = await HttpService.get('/consultation/consultation_mode_list/')
    return response;
}

const getAvailableVacants = async (params) => {
    const { data: response } = await HttpService.get(`/consultation/consultation_date_list/?consultation_category=${params.consultation_category}&consultation_mode=${params.consultation_mode}`)
    return response;
}

const fakeGetAvailableVacants = async (params) => {
    return new Promise((resolve) =>
        setTimeout(() => resolve({
            data:
            {
                "consultation_date_en": ["2021-09-20", "2021-09-25"],
                "consultation_date_fa": ["1400-06-14", "1400-06-21"],
                "fee": "50000.00"
            }
        }))
    );
}

const getSelectedDateRanges = async (params) => {
    const { data: response } = await HttpService.get(`/consultation/consultation_time_list/?date=${params.date}&date_format=${params.date_format}`)
    return response;
}

const fakeGetSelectedDateRanges = async (data) => {
    return new Promise((resolve) =>
        setTimeout(() => resolve({
            data: [
                {
                    "id": 1,
                    "time_from": "18:00:00",
                    "time_to": "19:00:00"
                },
                {
                    "id": 2,
                    "time_from": "19:00:00",
                    "time_to": "20:00:00"
                }
            ]
        })
        ))
}

const getAgeRangeList = async () => {
    const { data: response } = await HttpService.get('/visa/agerange_list/')
    return response;
}

const getDegreesList = async () => {
    const { data: response } = await HttpService.get('/education/degree_list/')
    return response;
}

const getWorkExperiencesList = async () => {
    const { data: response } = await HttpService.get('/visa/min_employment_year_list/')
    return response;
}

const getFieldsOfProffession = async () => {
    const { data: response } = await HttpService.get('/visa/occupation_list/')
    return response;
}

const bookConsultation = async (data) => {
    const { data: response } = await HttpService.post('/consultation/consultation_process_create/', data)
    return response;
}

const BookingServices = {
    getConsultationCategories,
    getConsultationModes,
    getAvailableVacants,
    fakeGetAvailableVacants,
    getSelectedDateRanges,
    fakeGetSelectedDateRanges,
    getAgeRangeList,
    getDegreesList,
    getWorkExperiencesList,
    getFieldsOfProffession,
    bookConsultation
}

export default BookingServices;