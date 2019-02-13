import { Action } from '@ngrx/store';

export interface State {
  heading: string;
  greeting: string;
}

const initialState: State = {
  heading: 'Redux Todo List',
  greeting: 'Welcome to the jungle'
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case 'CLICKY': {
      return {
        heading: state.heading.toUpperCase(),
        greeting: state.greeting
      };
    }
    default: {
      return state;
    }
  }
}
