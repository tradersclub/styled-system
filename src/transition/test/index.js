import transition from '..';

test('returns transition styles', () => {
  const style = transition({
    transition: '3s linear 1s slidein',
    transitionDelay: '3s',
  });
  expect(style).toEqual({
    transition: '3s linear 1s slidein',
    transitionDelay: '3s',
  });
});
