const getBuffer = require('../getBuffer').getBuffer;

test('getBuffer should return a valid buffer', () => {
  const buffer = getBuffer();
  expect(buffer.byteLength).toBe(106);
});

test('buffer should convert to string correctly', () => {
  const buffer = getBuffer();
  const bufferView = new Uint16Array(buffer);
  let result = '';
  for (let i = 0; i < bufferView.length; i++) {
    result += String.fromCharCode(bufferView[i]);
  }
  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}')
});

test('converted string should be a valid JSON', () => {
  const buffer = getBuffer();
  const bufferView = new Uint16Array(buffer);
  let result = '';
  for (let i = 0; i < bufferView.length; i++) {
    result += String.fromCharCode(bufferView[i]);
  }
  const json = JSON.parse(result);
  expect(json.data.user.name).toBe('Hitman');
  expect(json.data.user.level).toBe(10);
});
