import { removeTags } from './removeTags';

describe('Remove tags tests', () => {
  test('Api gets show list', async () => {
    const testText = '<div>Test <span>text</span></div>'
    const result = removeTags(testText);
    expect(result).toBe('Test text');
  });
});