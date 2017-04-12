# ionic2-contacts

## 추가된 내역
* Photo Image 정상적으로 출력되도록 로직 추가 ( content:// 프로토콜 )
* Contacts 정렬 기능 추가


## 초기 환경설정

* Ionic2 프로젝트 생성

```bash
ionic start --v2 exContacts blank
cd exContacts
```

* Cordova Contacts Plugin 추가
```bash
ionic plugin add cordova-plugin-contacts
ionic plugin add cordova-plugin-sim
```

* Ionic Contacts 요소 설치 및 package 추가
```bash
npm install --save @ionic-native/contacts
npm install --save @ionic-native/sim
```

## 작업파일
1. /src/pages/contact/contact.ts
1. /src/pages/contact/contact.html


## 실기기 테스트
* android sdk에 의존성이 있으므로 설치 필수
* ios 는 현재 테스트 못함.
```
ionic platform add android

```
```
ionic run android -lc
옵션 참고 https://ionicframework.com/docs/cli/run/
```

## Error 시
```
Error: Could not find gradle wrapper within Android SDK. Might need to update your Android SDK.
Looked here: C:\Users\Administrator\AppData\Local\Android\sdk\tools\templates\gradle\wrapper
```

```
https://developer.android.com/studio/index.html
```
* 명령줄 도구만 다운로드 (하단 다운로드)
* sdk 경로 하단 tools 폴더 (%ANDROID_HOME%\tools)에 압축해제