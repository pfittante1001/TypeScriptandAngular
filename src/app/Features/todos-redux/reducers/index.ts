import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMessage from './messages.reducer';

export interface TodosState {
  message: fromMessage.State;
}
export const reducers = {
  message: fromMessage.reducer
};

const selectTodosFeature = createFeatureSelector<TodosState>('todosFeature');
const selectMessage = createSelector(selectTodosFeature, f => f.message);
export const selectHeaderMessage = createSelector(selectMessage, m => m.heading);
export const selectGreeting = createSelector(selectMessage, b => b.greeting);

