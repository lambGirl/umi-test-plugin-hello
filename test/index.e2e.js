const { join } = require('path');

/**
 * 自动跑所有 fixtures 目录下 umi 项目的用例，
 */
require('test-umi-plugin')({
  fixtures: join(__dirname, 'fixtures'),
});
