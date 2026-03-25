// Introduction to buffers in NodeJS
// A buffer stores raw bytes
// Here we create buffer directly from a string 
const textBuffer = Buffer.from("B");

// The value in the buffer is the encode form of the text
console.log("Buffer objects;",textBuffer);
console.log("Buffer length in bytes: ",textBuffer.length);
console.log("Byte at index 0 ",textBuffer[0]);

// Each haracter is stored internally as byte data
// For atandard ASCII letters there will be a equivalent code
// Buffer stores numeric value between 0 to 255