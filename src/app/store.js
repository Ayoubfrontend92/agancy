import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {
  i18nReducer,
  setLocale,
  loadTranslations,
  syncTranslationWithStore,
} from "react-redux-i18n";

import translations from "../l10n/translations";
import consultationSlice from '../features/global-services/booking/bookingSlice';
import uiReducer from '../features/ui/uiSlice';

export const store = configureStore({
  reducer: {
    i18n: i18nReducer,
    counter: counterReducer,
    consultation: consultationSlice,
    ui: uiReducer,
  },
});

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale("fa"));