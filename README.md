# 군복무 D - Day 뱃지

![soldierDate](http://goonba.xyz/?endDate=20211218)
![soldierDate](http://goonba.xyz/?division=navy&endDate=20211218)
![soldierDate](http://goonba.xyz/?division=airforce&endDate=20211218)
![soldierDate](http://goonba.xyz/?division=marine&endDate=20211218)



현재 군 복무 중인 개발자 분들을 위해 만들었습니다.  
일반 Github Badge와 동일한 방식을 가지고 있습니다.


## Usage

```markdown
![soldierDate](http://goonba.xyz/?endDate=YYYYMMDD&division=DIVISION)
```

> `YYYYMMDD`를 `전역일자`로 변경해주세요. ( 예시 : 20211218 )  
> `DIVISION` 군별 지정은 `Optional` 이며, 아래와 같은 Parameter를 가집니다. 

- army : 육군 **(default)**
- navy : 해군 
- marine : 해병대 
- airforce : 공군  



## Configuration & Setup

### Project Cloning

```sh
https://github.com/Resten1497/soldier_badge
cd soldier_badge
npm i
```

### Build

```sh
tsc
```

### Run

```sh
node dist/index.js # 서버 PORT 기본 값 = 3000
```

or

```sh
npm start # 서버 PORT 기본 값 = 3000
```
## Contribute  
Update Please  

## Dependency
[Shield.io](https://shields.io/)


## Questions

* GitHub - [open issue](https://github.com/Resten1497/soldier_badge/issues)

## License
Update Please
