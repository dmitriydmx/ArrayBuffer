class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    return String.fromCharCode(...bufferView);
  }
}

module.exports = ArrayBufferConverter;
