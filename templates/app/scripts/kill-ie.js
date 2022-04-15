import { detectIE } from 'balm-ui';

const IE = detectIE();

const isIE = IE && IE <= 11;

const killIE = () => {
  let body = document.getElementsByTagName('body')[0];
  let template = `<div class="kill-ie">
      <h1>您当前使用的浏览器版本过低，可能存在安全风险，请点击<a href="https://browsehappy.com/">这里</a>选择一款新版浏览器。</h1>
      <p>建议升级：<a href="https://www.google.cn/intl/zh-CN/chrome/">谷歌浏览器</a></p>
    </div>`;

  body.innerHTML = template;
};

export { isIE, killIE };
