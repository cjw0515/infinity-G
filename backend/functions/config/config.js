const functions = require('firebase-functions');
const admin = require('firebase-admin');    //firebase 어드민 sdk. 실시간 데이터베이스 처리 및 인증 수행
const defaultApp = admin.initializeApp(functions.config().firebase);   //admin인스턴스 초기화
const firestore = defaultApp.firestore();

module.exports = {
    functions,
    defaultApp,
    firestore
};

