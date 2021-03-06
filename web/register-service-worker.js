/* eslint-env browser */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      //一つずつファイルを読み込ませるとうまくいかなかった
      .register('SW_PUBLIC_URL/root-sw.js', { scope: 'SW_PUBLIC_SCOPE' })
      // .register('SW_PUBLIC_URL/expo-service-worker.js', { scope: 'SW_PUBLIC_SCOPE' })
      // .register('SW_PUBLIC_URL/firebase-messaging-sw.js', { scope: 'SW_PUBLIC_SCOPE' })
      .then(function (info) {
        console.info('Registered service-worker', info);
      })
      .catch(function (error) {
        console.info('Failed to register service-worker', error);
      });
  });
}
