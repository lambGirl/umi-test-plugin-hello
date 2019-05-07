/**
 * 这个是写的测试用例
 * @param page
 * @param host
 * @returns {Promise<void>}
 */
export default async function ({ page, host }) {

  await page.goto(`${host}/`, {
    waitUntil: 'networkidle2',
  });

  //获取页面中的文本,读取结果是否一直
  const text = await page.evaluate(
    () => document.querySelector('h1').innerHTML,
  );

  // 验证text与hello umi plugin是否相同
  expect(text).toEqual('hello umi plugin');

};
