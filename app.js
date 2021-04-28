
const express = require('express')
const PORT = process.env.PORT
const app = express()

// const logo = require("/Users/resten/Desktop/gutgon/test.svg") ;
const dayjs = require('dayjs')
const timezone = require('dayjs/plugin/timezone') 
const utc = require('dayjs/plugin/utc');


dayjs.extend(utc) 
dayjs.extend(timezone)

function returnLogo(date){
    var logoPosition = 100
    if(date.toString().length == 4){
        logoPosition = logoPosition - 5
    }
    if(date.toString().length == 2){
        logoPosition = logoPosition + 5
    }
    if(date.toString().length == 1){
        logoPosition = logoPosition + 5
    }
    
    var logo = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="160" height="24" viewBox="0 0 160 24">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#136200"/>
      <stop offset="0" stop-color="#167200"/>
      <stop offset="1" stop-color="#104603"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#3c3c3c"/>
      <stop offset="0" stop-color="#525252"/>
      <stop offset="1" stop-color="#070606"/>
    </linearGradient>
  </defs>
  <path id="사각형_5" data-name="사각형 5" d="M0,0H77a3,3,0,0,1,3,3V21a3,3,0,0,1-3,3H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(80)" fill="url(#linear-gradient)"/>
  <path id="사각형_6" data-name="사각형 6" d="M3,0H80a0,0,0,0,1,0,0V24a0,0,0,0,1,0,0H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0Z" fill="url(#linear-gradient-2)"/>
  <text id="R.O.K.A" transform="translate(40 17)" fill="#fff" font-size="13" font-family="NotoSans-Bold, Noto Sans" font-weight="700"><tspan x="-23.826" y="0">R.O.K.A</tspan></text>
  <text id="D_-_933" data-name="D - 933" transform="translate(`+logoPosition+`, 17)" fill="#fff" font-size="13" font-family="NotoSans-BoldItalic, Noto Sans" font-weight="700" font-style="italic"><tspan x="0" y="0">D - `+date+`</tspan></text>
</svg>
`

return logo
}

app.get('/', (req, res) => {
    var endDate = req.query.endDate

    var a = dayjs(endDate)
    var b = dayjs().tz("Asia/Seoul").format("YYYYMMDD")
    res.set('Content-Type', 'image/svg+xml')
    res.set('Cache-Control','no-cache')
    res.send(returnLogo(a.diff(b,"day")));
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})