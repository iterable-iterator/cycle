:recycle: [@iterable-iterator/cycle](https://iterable-iterator.github.io/cycle)
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
```

[![License](https://img.shields.io/github/license/iterable-iterator/cycle.svg)](https://raw.githubusercontent.com/iterable-iterator/cycle/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@iterable-iterator/cycle.svg)](https://www.npmjs.org/package/@iterable-iterator/cycle)
[![Tests](https://img.shields.io/github/workflow/status/iterable-iterator/cycle/ci:test?event=push&label=tests)](https://github.com/iterable-iterator/cycle/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/iterable-iterator/cycle.svg)](https://david-dm.org/iterable-iterator/cycle)
[![Dev dependencies](https://img.shields.io/david/dev/iterable-iterator/cycle.svg)](https://david-dm.org/iterable-iterator/cycle?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/iterable-iterator/cycle.svg)](https://github.com/iterable-iterator/cycle/issues)
[![Downloads](https://img.shields.io/npm/dm/@iterable-iterator/cycle.svg)](https://www.npmjs.org/package/@iterable-iterator/cycle)

[![Code issues](https://img.shields.io/codeclimate/issues/iterable-iterator/cycle.svg)](https://codeclimate.com/github/iterable-iterator/cycle/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/iterable-iterator/cycle.svg)](https://codeclimate.com/github/iterable-iterator/cycle/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/iterable-iterator/cycle/main.svg)](https://codecov.io/gh/iterable-iterator/cycle)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/iterable-iterator/cycle.svg)](https://codeclimate.com/github/iterable-iterator/cycle/trends/technical_debt)
[![Documentation](https://iterable-iterator.github.io/cycle/badge.svg)](https://iterable-iterator.github.io/cycle/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@iterable-iterator/cycle)](https://bundlephobia.com/result?p=@iterable-iterator/cycle)
