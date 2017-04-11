# ionic2-contacts

## 추가된 내역
1. Photo Image 정상적으로 출력되도록 로직 추가 ( content:// 프로토콜 )
2. Contacts 정렬 기능 추가


## 초기 환경설정

1. Cordova Lib를 이용하여 연락처 불러오기

```bash
ionic start --v2 exContacts blank
```

2. Cordova Contacts Plugin 추가
```bash
ionic plugin add cordova-plugin-contacts
```

3. Ionic Contacts 요소 설치 및 package 추가
```bash
npm install --save @ionic-native/contacts
```

## 작업파일
1. /src/pages/contact/contact.ts
1. /src/pages/contact/contact.html
