---
layout: page
title: intro
layout: default
permalink: /chapters/intro
---

# Пример главы
0. Вставки кода тоже хорошо работают

<!-- <iframe src="../_includes/js_on_change.html"
    sandbox="allow-same-origin allow-scripts"
    width="100%"
    height="500"
    scrolling="no"
    seamless="seamless"
    frameborder="0">
</iframe> -->

{% include js_on_change.html %}

1. Картинки


<img src="../imgs/shad.png"  width="300">

2. Код

```python
def function():
    #indenting works just fine in the fenced code block
    s = "Python code"
    print s
```

4. Формулы inline

$$a^2+b^2=c^2$$

5. Формулы не inline

```math
\frac{\sum\limits_0^\infty \frac{1}{n}}{2}
```
