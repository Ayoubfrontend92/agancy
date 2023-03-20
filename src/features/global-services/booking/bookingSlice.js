import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BookingServices from './bookingAPI'

const initialState = {
    vacantsEn: [],
    vacantsFa: [],
    vacantPeriods: [],
    toPayFee: '',
    bookingInfos: {
        consultation_capacity: "",
        application_full_name: "",
        application_cell_number: "",
        age_range: "",
        occupation: "",
        degree: "",
        visit_id: "",
        status: false
    },
    uiValidations: {
        show_step_2: false,
        show_step_3: false,
        show_step_4: false,
    },
    status: 'idle',
    error: ''
};

export const getCounsultationCats = createAsyncThunk(
    'wizzard/fetchConsultationCategories',
    async (_, { rejectWithValue }) => {
        try {
            const response = await BookingServices.getConsultationCategories();
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getCounsultationModes = createAsyncThunk(
    'wizzard/fetchConsultationModes',
    async (_, { rejectWithValue }) => {
        try {
            const response = await BookingServices.getConsultationModes();
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getVacants = createAsyncThunk(
    'wizzard/fetchAvailableVacants',
    async (params, { rejectWithValue }) => {
        try {
            const response = await BookingServices.getAvailableVacants(params);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getSelectedDayPeriods = createAsyncThunk(
    'wizzard/fetchAvailablePeriodsOfVacantDate',
    async (params, { rejectWithValue }) => {
        try {
            const response = await BookingServices.getSelectedDateRanges(params);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getAges = createAsyncThunk(
    'wizzard/fetchAgeList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await BookingServices.getAgeRangeList();
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getDegress = createAsyncThunk(
    'wizzard/fetchDegreesList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await BookingServices.getDegreesList();
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getWorkExperinces = createAsyncThunk(
    'wizzard/fetchWorkExperiencesList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await BookingServices.getWorkExperiencesList();
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getProfessions = createAsyncThunk(
    'wizzard/fetchProfessionsList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await BookingServices.getFieldsOfProffession();
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const bookConsultation = createAsyncThunk(
    'wizzard/requestBookingConsultations',
    async (data, { rejectWithValue }) => {
        try {
            const response = await BookingServices.bookConsultation(data);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const consultationSlice = createSlice({
    name: 'consultation',
    initialState,
    reducers: {
        showStep2: (state) => {
            state.uiValidations.show_step_2 = true
        },
        hideStep2: (state) => {
            state.uiValidations.show_step_2 = false
        },
        showStep3: (state) => {
            state.uiValidations.show_step_3 = true
        },
        hideStep3: (state) => {
            state.uiValidations.show_step_3 = false
        },
        showStep4: (state) => {
            state.uiValidations.show_step_4 = true
        },
        hideStep4: (state) => {
            state.uiValidations.show_step_4 = false
        },
        hideStepsTwoAndThree: (state) => {
            state.uiValidations.show_step_2 = false
            state.uiValidations.show_step_3 = false
        },
        hideStepsThreeAndFour: (state) => {
            state.uiValidations.show_step_3 = false
            state.uiValidations.show_step_4 = false
        },
        hideAllSteps: (state) => {
            state.uiValidations.show_step_2 = false
            state.uiValidations.show_step_3 = false
            state.uiValidations.show_step_4 = false
        },
        setPeriod: (state, action) => {
            state.bookingInfos.consultation_capacity = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCounsultationCats.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(getCounsultationCats.fulfilled, (state, action) => {
            state.status = 'succeeded';
        })
        builder.addCase(getCounsultationCats.rejected, (state, action) => {
            state.status = 'failed'
        })
        builder.addCase(getCounsultationModes.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(getCounsultationModes.fulfilled, (state, action) => {
            state.status = 'succeeded';
        })
        builder.addCase(getCounsultationModes.rejected, (state, action) => {
            state.status = 'failed'
        })
        builder.addCase(getVacants.pending, (state, action) => {
            state.vacantsEn = []
            state.vacantsFa = []
            state.toPayFee = ''
            state.status = 'loading';
        })
        builder.addCase(getVacants.fulfilled, (state, action) => {
            state.status = 'succeeded';

            action.payload.consultation_date_en.forEach(item => {
                let dateArg = {};
                let splitedDate = item.split('-');
                dateArg.year = parseInt(splitedDate[0])
                dateArg.month = parseInt(splitedDate[1])
                dateArg.day = parseInt(splitedDate[2])

                state.vacantsEn.push(dateArg);
            })

            action.payload.consultation_date_fa.forEach(item => {
                let dateArg = {};
                let splitedDate = item.split('-');
                dateArg.year = parseInt(splitedDate[0])
                dateArg.month = parseInt(splitedDate[1])
                dateArg.day = parseInt(splitedDate[2])

                state.vacantsFa.push(dateArg);
            })

            state.toPayFee = action.payload.fee;

        })
        builder.addCase(getVacants.rejected, (state, action) => {
            state.status = 'failed'
        })
        builder.addCase(getSelectedDayPeriods.pending, (state, action) => {
            state.vacantPeriods = [];
            state.status = 'loading';
        })
        builder.addCase(getSelectedDayPeriods.fulfilled, (state, action) => {
            state.vacantPeriods = action.payload
            state.status = 'succeeded';
        })
        builder.addCase(getSelectedDayPeriods.rejected, (state, action) => {
            state.status = 'failed'
        })
        builder.addCase(getAges.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(getAges.fulfilled, (state, action) => {
            state.status = 'succeeded';
        })
        builder.addCase(getAges.rejected, (state, action) => {
            state.status = 'failed'
        })
        builder.addCase(getDegress.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(getDegress.fulfilled, (state, action) => {
            state.status = 'succeeded';
        })
        builder.addCase(getDegress.rejected, (state, action) => {
            state.status = 'failed'
        })
        builder.addCase(getWorkExperinces.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(getWorkExperinces.fulfilled, (state, action) => {
            state.status = 'succeeded';
        })
        builder.addCase(getWorkExperinces.rejected, (state, action) => {
            state.status = 'failed'
        })
        builder.addCase(getProfessions.pending, (state, action) => {
            state.status = 'loading';
        })
        builder.addCase(getProfessions.fulfilled, (state, action) => {
            state.status = 'succeeded';
        })
        builder.addCase(getProfessions.rejected, (state, action) => {
            state.status = 'failed'
        })
    }
})

export const { showStep2, showStep3, showStep4, hideStep2, hideStep3, hideStep4, hideAllSteps, hideStepsTwoAndThree, hideStepsThreeAndFour, setPeriod } = consultationSlice.actions

export default consultationSlice.reducer;
