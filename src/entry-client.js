/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-10 12:06:50
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-10 15:54:21
 * @FilePath: \src\entry-client.js
 * @Description:
 */

import { createApp } from './main';

const { app, router } = createApp();

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount('#app');

  console.log('hydrated');
});
