import express from 'express';

/**
 * 글자로 된 Badge를 만들어서 응답하는 함수입니다.  
 * 에러를 전달할때 사용합니다.
 * @param res express.Response
 */
export function sendText(text: string, res: express.Response): void {
	res.set('Content-Type', 'image/svg+xml');
	res.set('Cache-Control', 'no-cache');
	res.send(
		`
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="160" height="24" viewBox="0 0 160 24">
			<text id="text" data-name="text" transform="translate(0, 17)" fill="#fff" font-size="13" font-family="NotoSans-BoldItalic, Noto Sans" font-weight="700" font-style="italic"><tspan x="0" y="0">${text}</tspan></text>
		</svg>
		`
	);
}