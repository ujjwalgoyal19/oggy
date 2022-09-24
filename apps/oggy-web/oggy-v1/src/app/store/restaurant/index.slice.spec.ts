import {
  fetchRestaurant,
  restaurantAdapter,
  restaurantReducer,
} from './index.slice';

describe('restaurant reducer', () => {
  it('should handle initial state', () => {
    const expected = restaurantAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(restaurantReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchRestaurants', () => {
    let state = restaurantReducer(
      undefined,
      fetchRestaurant.pending(null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = restaurantReducer(
      state,
      fetchRestaurant.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = restaurantReducer(
      state,
      fetchRestaurant.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
