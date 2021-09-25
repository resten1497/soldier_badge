import express from 'express';
import { active } from 'colorful-debugger';
import { badgeRouter } from './badgeRouter';
import { sendText } from './sendText';

// console log, info, warn, error를 보기 좋게 개선해 줌 - JeongHyeon Kim 2021.09.26
active();

const app = express();

app.get('/', badgeRouter);

app.use((_req, res, _next) => {
	sendText('404 Not Found', res);
});

const listener = app.listen(process.env.PORT || 3000, () => {
	console.info('Server Started');
	console.info(JSON.stringify(listener.address()));
});