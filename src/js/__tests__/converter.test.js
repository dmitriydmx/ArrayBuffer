import ArrayBufferConverter from '../converter';


test('ArrayBufferConverter should load correct buffer', () => {
  const converter = new ArrayBufferConverter();
  const buffer = new ArrayBuffer(4);
  converter.load(buffer);
  expect(converter.buffer.byteLength).toBe(4);
});

test('ArrayBufferConverter should convert buffer to string correctly', () => {
  const converter = new ArrayBufferConverter();
  const buffer = new Uint16Array([72, 101, 108, 108, 111]).buffer;
  converter.load(buffer);
  expect(converter.toString()).toBe('Hello');
});


