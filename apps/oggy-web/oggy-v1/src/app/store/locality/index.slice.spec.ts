import { fetchLocality, localityAdapter, localityReducer } from './index.slice';

describe('locality reducer', () => {
  it('should handle initial state', () => {
    const expected = localityAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(localityReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchLocalitys', () => {
    let state = localityReducer(undefined, fetchLocality.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = localityReducer(
      state,
      fetchLocality.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = localityReducer(
      state,
      fetchLocality.rejected(new Error('Uh oh'), null, null)
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
