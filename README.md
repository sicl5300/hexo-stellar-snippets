# hexo-stellar-snippets README

注意，此代码片段插件为本人自用，未考虑他人使用的情况，故不包含所有在主题[Hexo-theme-stellar](https://github.com/xaoxuu/hexo-theme-stellar)中注册的Tag Plugins（Nunjucks）。

## 功能

自动补全 Tag Plugins，输入 `>` 或 `=` 来触发 IntelliSense。其中 `>` 触发的是较为常用的标签，`=` 反之。

- VSCode >= `1.85.0`
- 主题版本匹配 `1.25.0`，由于上游变动频繁，标签可能有更改。

### 便于使用的特殊补全

- `>kbde`，用于补全特殊键盘符号
- `>img`，简易图像，只有src和alt
- `=image`，完整图像标签
- `>codeblock`，带颜色的代码块，使用Box容器
- `=codecmp`和`=comparison`，结合grid和codeblock，推荐的写法/不推荐的写法双栏比较
- `>coll`，折叠容器
- `>codellapse`，折叠代码块
- `>2lines`，使用grid容器进行左右分栏

### 没有支持的标签

- 表达类标签：Quot，okr, navbar, frame, emp, wavy, sup, sub.
- 数据类标签：Sites, md, toc.
- 容器类标签：Grid, albums, posters, banner, about, swiper.

## 更新日志

### 1.0.1

Initial release.

### 1.0.2

Fix `>2lines` with legacy cell syntax.

## 许可协议

MIT

**Enjoy!**
