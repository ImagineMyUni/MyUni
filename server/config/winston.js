import winston, { info } from 'winston';
import winstonDaily from 'winston-daily-rotate-file';
import moment from 'moment';
import fs from 'fs';
import 'moment-timezone';
import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, json, prettyPrint } = format;

const logDir = __dirname + "/../logs";
const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: 'logs/MyUni-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles:'14d'
})

moment.tz.setDefault('Asia/Seoul');
const timeStamp = () => moment().format('YYYY-MM-DD HH:mm:ss');

const loggingFormat = printf(({ level, message}) => {
  return `${timeStamp()} ${level} : ${message}`;
})

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

const infoTransport = new winston.transports.Console({
    // filename: 'info.log',
  dirname: logDir,
  level: 'info'
})

const errorTransport = new winston.transports.Console({
  // filename: 'error.log',
  dirname: logDir,
  level: 'error'
})

const logger = winston.createLogger({
  format: combine(
    loggingFormat
    ),
  transports: [infoTransport, errorTransport, dailyRotateFileTransport]
})

const stream = {
  write: message => {
    logger.info(message)
  }
}

export { logger, stream };