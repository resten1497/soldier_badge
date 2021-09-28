import express from 'express';

/**
 * 글자로 된 Badge를 만들어서 응답하는 함수입니다.  
 * 에러를 전달할때 사용합니다.
 * @param res express.Response
 */
export function sendText(text: string, res: express.Response): void {
	res.set('Cache-Control', 'no-cache');
	res.send(`<p>${text}</p>`);
}