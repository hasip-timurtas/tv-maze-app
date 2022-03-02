import apiClient from './';

test('Api gets show list', async () => {
  const result = await apiClient.getTvShows()
  expect(result.data.length).toBeGreaterThan(0);
});

test('Api gets show details', async () => {
  const showId = 6006;
  const showName = 'Dr. Phil';
  const result = await apiClient.getShowDetail(showId);
  expect(result.data.name).toEqual(showName)
});

test('Api gets cast details', async () => {
  const showId = 6006;
  const personName = 'Phil McGraw';
  const result = await apiClient.getCasts(showId);
  expect(result.data.person.name).toEqual(personName)
});