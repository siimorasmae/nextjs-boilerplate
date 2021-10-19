import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import exampleReducer from '@/services/example';

export const store = configureStore({
  reducer: {
    exampleData: exampleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;