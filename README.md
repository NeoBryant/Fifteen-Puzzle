## 题目一 中级JavaScript练习

完成 http://ejohn.org/apps/learn 中的题目，结合[课程内容](http://my.ss.sysu.edu.cn/wiki/display/WEB/Lecture+07.+Intermediate+JavaScript)，认真思考，弄清楚每一个问题。不清楚、不明白之处，一个都不要忽略，一个都不要放过，互相讨论、问TA、问老师，全部弄清楚为止。

本题目<font color=red>不记分</font>。

虽然不计分，但是<font color=blue>这些题目对大家理解JavaScript的语言特点，掌握好这门语言，十分重要</font>。

如果能够全部弄清楚，后面的学习将事半功倍。否则，后面会十分吃力。

## 题目二 Fifteen Puzzle

制作网页实现下面的拼图游戏

![panda](https://github.com/NeoBryant/Fifteen-Puzzle/blob/master/img/%E6%95%88%E6%9E%9C%E5%9B%BE.jpeg)

### 需求规格
    1. UI（10分）：UI与上图完全一致；或者，自由发挥，设计出更加漂亮、合理的UI（可用其它图片）。
    2. 正常移动（20分）：点击空白旁边的图块，图块移到空白处。点击其它图块，不会移动。
    3. 图块图片正常（20分）：无论如何移动，每个图块上的图片都保持不变。
    4. 拼图结束（10分）：当拼回原图时，提示用户游戏获胜。
    5. 重新开始（10分）：点击重新开始，打乱、重新洗牌。
    6. 增加趣味性（10分）：发挥想象力，增加内容或者功能，让游戏更加好玩。

### 细节分析
    1. panda.jpg的大小为354px*354px；
    2. 每个分块的id表示其图片背景，class表示其位置
    3. 参考”15迷问题的证明“进行分块的随机排列，并验证其是否可以复原，设计相应函数

[15迷问题的证明](http://blog.csdn.net/mindhawk/article/details/1445013)

### 软件质量要求
    - SoC：（5分）正确运用适当的语言分别定义网页的内容、外观和行为，没有侵入式代码
    - HTML代码符合课程要求（5分）
    - CSS代码符合课程要求（5分）
    - JavaScript代码符合课程要求（5分）

