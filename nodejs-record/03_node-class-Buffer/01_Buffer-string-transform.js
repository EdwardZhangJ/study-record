
// 1. 创建Buffer
// const buf = new Buffer('hello world')
// console.log(buf); // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

// 2. 创建Buffer
// const buf2 = Buffer.from('hello world')
// console.log(buf2); // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

// 3. 创建Buffer 包含中文字符
// const buf3 = Buffer.from('你好世界')
// console.log(buf3); // <Buffer e4 bd a0 e5 a5 bd e4 b8 96 e7 95 8c>
// console.log(buf3.toString('utf8'));

// 4. 手动指定Buffer创建过程的编码
const buf4 = Buffer.from('你好世界', 'utf16le')
console.log(buf4); // <Buffer 60 4f 7d 59 16 4e 4c 75>
console.log(buf4.toString('utf16le'));
