import {createSelector} from 'reselect';
export const simpsons = state => state.simpsons;

/**
 * simpsons list selector
 * @type {OutputSelector<unknown, *, (res: *) => *>}
 */
export const simpsonsListSelector = createSelector(
  state => state.simpsons.simpsonsList,
  simpsonsList => {
    console.log('simpsonsListSelector has worked');
    return simpsonsList;
  },
);
