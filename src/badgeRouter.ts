import express from 'express';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { createBadge } from './createBadge';
import { sendText } from './sendText';


dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * 군 복무 D-Day Badge를 만들어 주는 Router 입니다.
 * @param req express.Request
 * @param res express.Response
 * @returns
 */
export async function badgeRouter(req: express.Request, res: express.Response): Promise<void> {
	if (typeof req.query.endDate !== 'string') {
		sendText('400 Bad Request', res);
		return;
	}

	const endDate = dayjs(req.query.endDate);
	const currentDate = dayjs().tz('Asia/Seoul').format('YYYYMMDD');
	const leftDate = endDate.diff(currentDate, 'day');

	if (isNaN(leftDate) === true) {
		sendText('400 Bad Request', res);
		return;
	}
	
	res.set('Content-Type','image/svg+xml');
	res.set('Cache-Control', 'no-cache');

	res.send(await createBadge(leftDate));
}