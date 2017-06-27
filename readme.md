# wrap-around
![table of values](table.png)

Restricts a number `n` to the interval `0 <= n < m` by "wrapping it around" within said range.
```js
const wrap = require('wrap-around')
var result = {}
for (var m = 3, n = -3; n < 9; n++) {
  result[n] = wrap(m, n)
}
```

Some possible uses of this function include:
- restricting an index to valid array indices
```js
index = wrap(array.length, index)
```
- selecting items from the end of a list (Python-style!)
```js
> var array = ['foo', 'bar', 'baz']
> array[wrap(array.length, -1)]
'baz'
```
- wrapping the player around the screen in a game of Pac-Man, Snake, etc.
```js
hero.position = [wrap(width, x), wrap(height, y)]
```

## usage
[![NPM](https://nodei.co/npm/wrap-around.png?mini)](https://www.npmjs.com/package/wrap-around)

### Why not just use `n % m`?
While the modulo operator wraps positive values with ease (it's actually used internally by the `wrap` function), it takes a bit more setup to handle negative values correctly. Consider the following example, in which `%` fails to provide the desired result:
```js
> -1 % 3
-1

> wrap(3, -1)
2
```

### What about loops?
Using loops for this kind of thing is a handy way of demonstrating what exactly this function does - `wrap(m, n)` produces the same result as two loops forcing a number between the desired range.
```js
while (n < 0) n += m
while (n >= m) n -= m
```

Unfortunately, they're also 300x slower. :grimacing:
```md
# wrap 100000 times
ok ~4.7 ms (0 s + 4696167 ns)

# loop 100000 times
ok ~1.36 s (1 s + 359910028 ns)
```

So at the end of the day, you're better off avoid loops for "wrapping" numbers in production code. Use the modulo `%` operator for positive numbers or `wrap-around` if you plan on handling negative numbers.

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
