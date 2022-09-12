import { fetchFilters, filtersAdapter, filtersReducer } from './filters.slice';

describe('filters reducer', () => {
  it('should handle initial state', () => {
    const expected = filtersAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(filtersReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchFilterss', () => {
    let state = filtersReducer(undefined, fetchFilters.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = filtersReducer(
      state,
      fetchFilters.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = filtersReducer(
      state,
      fetchFilters.rejected(new Error('Uh oh'), null, null)
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
