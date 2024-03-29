:juggling_person: [@iterable-iterator/cycle](https://iterable-iterator.github.io/cycle)
==

Iterable cycling functions for JavaScript.
See [docs](https://iterable-iterator.github.io/cycle/index.html).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {cycle, ncycle} from '@iterable-iterator/cycle';
cycle( "AB" ) ; // A B A B A B ...
ncycle( "AB" , 3 ) ; // A B A B A B

import {chain} from '@iterable-iterator/chain';
cycle( chain( [ 0 , 1 , 2 ] , [ 3 , 4 , 5 ] ) ) ; // 0 1 2 3 4 5 0 1 ...
```

[![License](https://img.shields.io/github/license/iterable-iterator/cycle.svg)](https://raw.githubusercontent.com/iterable-iterator/cycle/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@iterable-iterator/cycle.svg)](https://www.npmjs.org/package/@iterable-iterator/cycle)
[![Tests](https://img.shields.io/github/actions/workflow/status/iterable-iterator/cycle/ci.yml?branch=main&event=push&label=tests)](https://github.com/iterable-iterator/cycle/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/iterable-iterator/cycle.svg)](https://github.com/iterable-iterator/cycle/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/iterable-iterator/cycle.svg)](https://github.com/iterable-iterator/cycle/issues)
[![Downloads](https://img.shields.io/npm/dm/@iterable-iterator/cycle.svg)](https://www.npmjs.org/package/@iterable-iterator/cycle)

[![Code issues](https://img.shields.io/codeclimate/issues/iterable-iterator/cycle.svg)](https://codeclimate.com/github/iterable-iterator/cycle/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/iterable-iterator/cycle.svg)](https://codeclimate.com/github/iterable-iterator/cycle/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/iterable-iterator/cycle/main.svg)](https://codecov.io/gh/iterable-iterator/cycle)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/iterable-iterator/cycle.svg)](https://codeclimate.com/github/iterable-iterator/cycle/trends/technical_debt)
[![Documentation](https://iterable-iterator.github.io/cycle/badge.svg)](https://iterable-iterator.github.io/cycle/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@iterable-iterator/cycle)](https://bundlephobia.com/result?p=@iterable-iterator/cycle)
