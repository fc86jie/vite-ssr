/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-10 12:06:58
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-10 15:34:17
 * @FilePath: \src\entry-server.js
 * @Description:
 */

import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { createApp } from './main';

export async function render(url) {
  const { app, router } = createApp();

  await router.push(url);
  await router.isReady();

  const html = await renderToString(app);
  return html;
}
