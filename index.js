//这个是写了一个插件
module.exports = function(api) {
  api.modifyHTMLWithAST($ => {
    $('body').prepend(`<h1>hello umi plugin</h1>`);
  });
};
