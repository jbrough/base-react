const bunyan = require('bunyan');
const ringBuffer = new bunyan.RingBuffer({ limit: 1 });

const isDev = process.env.NODE_ENV === 'development';

let logger;

if (isDev) {
  logger = bunyan.createLogger({
    name: 'picturebox',
    streams: [
      {
        level: 'trace',
        stream: process.stdout,
      },
      {
        level: 'error',
        stream: process.stderr,
      },
    ],
  });
} else {
  logger = bunyan.createLogger({
    name: 'picturebox',
    streams: [
      {
        level: 'trace',
        stream: ringBuffer,
      },
      {
        level: 'warn',
        stream: process.stdout,
      },
      {
        level: 'error',
        stream: process.stderr,
      },
    ],
  });
}

module.exports = logger;
