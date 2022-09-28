# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.1.2](https://github.com/medikoo/eslint-config-medikoo/compare/v4.1.1...v4.1.2) (2022-03-07)

### Bug Fixes

- Do not enforce exponentional operator in ES5 environments ([5724d26](https://github.com/medikoo/eslint-config-medikoo/commit/5724d2687f3f714b66780cd6005eff8d96fe1833))

### Maintenance Improvements

- Configure `.npmignore` ([91db47f](https://github.com/medikoo/eslint-config-medikoo/commit/91db47f5b72aa039dabda9c4fb166f33896f8f13))
- Ensure to not publish `commitlint.config.js` ([221e04b](https://github.com/medikoo/eslint-config-medikoo/commit/221e04b6c522120bfb56d0fc85defd96d22cf30a))
- Fix lint & prettier scripts ([66ea331](https://github.com/medikoo/eslint-config-medikoo/commit/66ea331ea262f72238b2fc13b7b3e951c46cd4c5))

### [4.1.1](https://github.com/medikoo/eslint-config-medikoo/compare/v4.1.0...v4.1.1) (2021-10-15)

### Bug Fixes

- Turn off `prefer-named-capture-group` for ES5 environments ([b05c872](https://github.com/medikoo/eslint-config-medikoo/commit/b05c8724792df8c5b62bf154a43dd83d427e46ec))

## [4.1.0](https://github.com/medikoo/eslint-config-medikoo/compare/v4.0.0...v4.1.0) (2021-07-19)

### Features

- Introduce Node.js v14 settings ([0bb0a4a](https://github.com/medikoo/eslint-config-medikoo/commit/0bb0a4a1760bf98715204e71137e93a67475ab60))

## [4.0.0](https://github.com/medikoo/eslint-config-medikoo/compare/v3.1.0...v4.0.0) (2020-11-19)

### ⚠ BREAKING CHANGES

- In default configuration drop support for non compliant ES2019 engines (Node.js versions below v10)

### Features

- Increase max lines to 115 ([073dea3](https://github.com/medikoo/eslint-config-medikoo/commit/073dea361180b62d7b166bb34c226ba05ec0a2f8))
- Upgrade engines support ([f1f911f](https://github.com/medikoo/eslint-config-medikoo/commit/f1f911fed9a8a6a6a40d2ae5f989fee9a66bcc63))

## [3.1.0](https://github.com/medikoo/eslint-config-medikoo/compare/v3.0.1...v3.1.0) (2020-07-22)

### Features

- Node.js v6 dedicated config ([57492d6](https://github.com/medikoo/eslint-config-medikoo/commit/57492d6624b7f3f95a59ab6c18ccb0b6d122eed7))
- Turn off "block-scoped-var" rule ([ff32250](https://github.com/medikoo/eslint-config-medikoo/commit/ff3225015a3d33db6300f16bdc0c14c6a709a641))

### [3.0.1](https://github.com/medikoo/eslint-config-medikoo/compare/v3.0.0...v3.0.1) (2020-03-05)

### Bug Fixes

- Do not require named capture groups due to no support in FF ([46eef87](https://github.com/medikoo/eslint-config-medikoo/commit/46eef87ddc0fa004a6f772a18b5f300ebdddd639))

## [3.0.0](https://github.com/medikoo/eslint-config-medikoo/compare/v2.7.0...v3.0.0) (2020-02-28)

### ⚠ BREAKING CHANGES

- Drop support for non compliant ES2018 engines

### Features

- Support ES2018 ([e1d3719](https://github.com/medikoo/eslint-config-medikoo/commit/e1d3719c97723c7894afb8f45fc62ffbbf688233))

## [2.7.0](https://github.com/medikoo/eslint-config-medikoo/compare/v2.6.0...v2.7.0) (2019-11-07)

### Features

- Turn off `require-await` rule ([6cda3b8](https://github.com/medikoo/eslint-config-medikoo/commit/6cda3b8))

## [2.6.0](https://github.com/medikoo/eslint-config-medikoo/compare/v2.5.1...v2.6.0) (2019-10-09)

### Features

- Configure NodeJS (old versions) ES5 config ([fc4fc15](https://github.com/medikoo/eslint-config-medikoo/commit/fc4fc15))
- Turn off 'complexity' rule ([ad30837](https://github.com/medikoo/eslint-config-medikoo/commit/ad30837))

### [2.5.1](https://github.com/medikoo/eslint-config-medikoo/compare/v2.5.0...v2.5.1) (2019-08-19)

### Bug Fixes

- Turn off newly introduced function-call-argument-newline ([9c55689](https://github.com/medikoo/eslint-config-medikoo/commit/9c55689))

## [2.5.0](https://github.com/medikoo/eslint-config-medikoo/compare/v2.4.0...v2.5.0) (2019-08-06)

### Features

- Introduce ES3+ config ([393b21f](https://github.com/medikoo/eslint-config-medikoo/commit/393b21f))

## [2.4.0](https://github.com/medikoo/eslint-config-medikoo/compare/v2.3.0...v2.4.0) (2019-06-18)

### Features

- Node.js dedicated configuration ([20b6ef5](https://github.com/medikoo/eslint-config-medikoo/commit/20b6ef5))

## [2.3.0](https://github.com/medikoo/eslint-config-medikoo/compare/v2.2.0...v2.3.0) (2019-06-14)

### Features

- Integrate ES5 configuration ([17fa696](https://github.com/medikoo/eslint-config-medikoo/commit/17fa696))

# [2.2.0](https://github.com/medikoo/eslint-config-medikoo/compare/v2.1.1...v2.2.0) (2019-04-30)

### Features

- Improve globals setup ([151a660](https://github.com/medikoo/eslint-config-medikoo/commit/151a660))

## [2.1.1](https://github.com/medikoo/eslint-config-medikoo/compare/v2.1.0...v2.1.1) (2019-03-05)

### Bug Fixes

- turn off ES2018 related rule ([bece3e0](https://github.com/medikoo/eslint-config-medikoo/commit/bece3e0))

<a name="2.1.0"></a>

# [2.1.0](https://github.com/medikoo/eslint-config-medikoo/compare/v2.0.0...v2.1.0) (2019-02-01)

### Features

- turn off max-statements ([6883264](https://github.com/medikoo/eslint-config-medikoo/commit/6883264))
- turn off wrap-iife rule, to avoid collision with prettier ([357139a](https://github.com/medikoo/eslint-config-medikoo/commit/357139a))

<a name="2.0.0"></a>

# [2.0.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.44.0...v2.0.0) (2018-12-28)

### Features

- do not allow more than 100 lines per module ([5dcb3b4](https://github.com/medikoo/eslint-config-medikoo/commit/5dcb3b4))

### BREAKING CHANGES

- New experimental approach to maintainance.
  Do not allow modules code extend regular screen height

<a name="1.44.0"></a>

# [1.44.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.43.0...v1.44.0) (2018-11-06)

### Features

- turn off max-statements-per-line ([583bd50](https://github.com/medikoo/eslint-config-medikoo/commit/583bd50))

<a name="1.43.0"></a>

# [1.43.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.42.0...v1.43.0) (2018-09-20)

### Features

- turn of "max-statements" rule for tests ([ddb5849](https://github.com/medikoo/eslint-config-medikoo/commit/ddb5849))

<a name="1.42.0"></a>

# [1.42.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.41.0...v1.42.0) (2018-09-14)

### Features

- turn off no-extra-parens. So it doesn't collide with prettier ([311d78b](https://github.com/medikoo/eslint-config-medikoo/commit/311d78b))

<a name="1.41.0"></a>

# [1.41.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.40.0...v1.41.0) (2018-08-16)

### Features

- turn off no-shadow for tests ([1fa4b54](https://github.com/medikoo/eslint-config-medikoo/commit/1fa4b54))

<a name="1.40.0"></a>

# [1.40.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.39.0...v1.40.0) (2018-08-08)

### Features

- turn off function-paren-newline ([bf79e1b](https://github.com/medikoo/eslint-config-medikoo/commit/bf79e1b))

<a name="1.39.0"></a>

# [1.39.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.38.0...v1.39.0) (2018-08-06)

### Bug Fixes

- move test only var name allowance to test specific conf ([1a63a0a](https://github.com/medikoo/eslint-config-medikoo/commit/1a63a0a))

### Features

- allow 'global' override ([d67b709](https://github.com/medikoo/eslint-config-medikoo/commit/d67b709))

<a name="1.38.0"></a>

# [1.38.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.37.0...v1.38.0) (2018-08-03)

### Features

- turn off wrap-regex rule ([0424839](https://github.com/medikoo/eslint-config-medikoo/commit/0424839))

<a name="1.37.0"></a>

# [1.37.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.36.0...v1.37.0) (2018-08-02)

### Bug Fixes

- ensure ES2015 globals ([1028269](https://github.com/medikoo/eslint-config-medikoo/commit/1028269))

### Features

- do not force ES2018 yet ([1468303](https://github.com/medikoo/eslint-config-medikoo/commit/1468303))

<a name="1.36.0"></a>

# [1.36.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.35.0...v1.36.0) (2018-08-02)

### Features

- bump ecmaVersion ([54f1088](https://github.com/medikoo/eslint-config-medikoo/commit/54f1088))
- special rules for tests ([6d41841](https://github.com/medikoo/eslint-config-medikoo/commit/6d41841))

<a name="1.35.0"></a>

# [1.35.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.34.0...v1.35.0) (2018-05-29)

### Features

- turn off comments capitalization ([41eaeea](https://github.com/medikoo/eslint-config-medikoo/commit/41eaeea))

<a name="1.34.0"></a>

# [1.34.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.33.0...v1.34.0) (2018-05-11)

### Features

- ignore long urls in max-len check ([f97dd75](https://github.com/medikoo/eslint-config-medikoo/commit/f97dd75))
- reduce style rules ([a435b48](https://github.com/medikoo/eslint-config-medikoo/commit/a435b48))

<a name="1.33.0"></a>

# [1.33.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.32.0...v1.33.0) (2018-03-29)

### Features

- turn off array-bracket-newline ([ea4e3ff](https://github.com/medikoo/eslint-config-medikoo/commit/ea4e3ff))

<a name="1.32.0"></a>

# [1.32.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.31.0...v1.32.0) (2018-03-19)

### Features

- turn off no-control-regex ([90fa8ea](https://github.com/medikoo/eslint-config-medikoo/commit/90fa8ea))

<a name="1.31.0"></a>

# [1.31.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.30.0...v1.31.0) (2017-12-13)

### Features

- turn off "callback-return" ([45f95ed](https://github.com/medikoo/eslint-config-medikoo/commit/45f95ed))

<a name="1.30.0"></a>

# [1.30.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.29.0...v1.30.0) (2017-11-29)

### Features

- turn off implicit-arrow-linebreak rule ([b89df24](https://github.com/medikoo/eslint-config-medikoo/commit/b89df24))

<a name="1.29.0"></a>

# [1.29.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.28.0...v1.29.0) (2017-11-02)

### Features

- add "\_" i18n method name to accepted ids ([40dbc25](https://github.com/medikoo/eslint-config-medikoo/commit/40dbc25))

<a name="1.28.0"></a>

# [1.28.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.27.0...v1.28.0) (2017-10-25)

### Features

- do not require capitalization of inline comments ([fb21b78](https://github.com/medikoo/eslint-config-medikoo/commit/fb21b78))

<a name="1.27.0"></a>

# [1.27.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.26.1...v1.27.0) (2017-10-19)

### Features

- do not force lines between class members ([c660086](https://github.com/medikoo/eslint-config-medikoo/commit/c660086))

<a name="1.26.1"></a>

## [1.26.1](https://github.com/medikoo/eslint-config-medikoo/compare/v1.26.0...v1.26.1) (2017-10-17)

### Bug Fixes

- turn off multiline-comment-style rule ([0389ee4](https://github.com/medikoo/eslint-config-medikoo/commit/0389ee4))

<a name="1.26.0"></a>

# [1.26.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.25.0...v1.26.0) (2017-10-16)

### Features

- do not require this in class methods ([882d2d0](https://github.com/medikoo/eslint-config-medikoo/commit/882d2d0))

<a name="1.25.0"></a>

# [1.25.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.24.1...v1.25.0) (2017-09-06)

### Features

- configure space-before-function-paren ([b269d12](https://github.com/medikoo/eslint-config-medikoo/commit/b269d12))

<a name="1.24.1"></a>

## [1.24.1](https://github.com/medikoo/eslint-config-medikoo/compare/v1.24.0...v1.24.1) (2017-09-04)

### Bug Fixes

- introduce configuration for function-paren-newline ([e7e1a53](https://github.com/medikoo/eslint-config-medikoo/commit/e7e1a53))

<a name="1.24.0"></a>

# [1.24.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.23.0...v1.24.0) (2017-08-28)

### Features

- turn off consistent-this rule ([5be9cde](https://github.com/medikoo/eslint-config-medikoo/commit/5be9cde))

<a name="1.23.0"></a>

# [1.23.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.22.0...v1.23.0) (2017-07-10)

### Features

- allow "Context" as this variable ([811c519](https://github.com/medikoo/eslint-config-medikoo/commit/811c519))
- do not punish parens around cond assign ([2df9f11](https://github.com/medikoo/eslint-config-medikoo/commit/2df9f11))
- fine tune no-mixed-operators ([e49a2f8](https://github.com/medikoo/eslint-config-medikoo/commit/e49a2f8))
- turn off accessor-pairs rule ([a122f01](https://github.com/medikoo/eslint-config-medikoo/commit/a122f01))
- turn off guard-for-in ([0357a87](https://github.com/medikoo/eslint-config-medikoo/commit/0357a87))
- turn off no-labels rule ([b4659c8](https://github.com/medikoo/eslint-config-medikoo/commit/b4659c8))

<a name="1.22.0"></a>

# [1.22.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.21.0...v1.22.0) (2017-07-10)

### Features

- allow index short vars ([44392dd](https://github.com/medikoo/eslint-config-medikoo/commit/44392dd))

<a name="1.21.0"></a>

# [1.21.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.20.0...v1.21.0) (2017-06-16)

### Features

- allow controlled unused args ([b7bb8a9](https://github.com/medikoo/eslint-config-medikoo/commit/b7bb8a9))
- fine tune an alias name for `this` ([8bc4b0e](https://github.com/medikoo/eslint-config-medikoo/commit/8bc4b0e))

<a name="1.20.0"></a>

# [1.20.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.19.0...v1.20.0) (2017-06-16)

### Features

- turn off array-element-newline rule ([d2f5fad](https://github.com/medikoo/eslint-config-medikoo/commit/d2f5fad))

<a name="1.19.0"></a>

# [1.19.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.18.0...v1.19.0) (2017-06-16)

### Features

- turn off 'indent' rule (handled by Prettier) ([68e791a](https://github.com/medikoo/eslint-config-medikoo/commit/68e791a))

<a name="1.18.0"></a>

# [1.18.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.17.0...v1.18.0) (2017-06-01)

### Features

- add "t" to var names that can be shadowed ([b169a23](https://github.com/medikoo/eslint-config-medikoo/commit/b169a23))

<a name="1.17.0"></a>

# [1.17.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.16.0...v1.17.0) (2017-06-01)

### Features

- turn off no-magic-numbers ([ca13ab9](https://github.com/medikoo/eslint-config-medikoo/commit/ca13ab9))

<a name="1.16.0"></a>

# [1.16.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.15.0...v1.16.0) (2017-05-25)

### Features

- turn off no-confusing-arrow rule ([652cb85](https://github.com/medikoo/eslint-config-medikoo/commit/652cb85))

<a name="1.15.0"></a>

# [1.15.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.14.0...v1.15.0) (2017-05-17)

### Features

- turn off "newline-per-chained-call" rule ([90f812f](https://github.com/medikoo/eslint-config-medikoo/commit/90f812f))

<a name="1.14.0"></a>

# [1.14.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.13.0...v1.14.0) (2017-05-16)

### Features

- turn off 'func-name-matching' rule ([f69acef](https://github.com/medikoo/eslint-config-medikoo/commit/f69acef))

<a name="1.13.0"></a>

# [1.13.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.12.0...v1.13.0) (2017-05-11)

### Features

- change setting for "arrow-parens" to "as-needed" ([ae807e4](https://github.com/medikoo/eslint-config-medikoo/commit/ae807e4))

<a name="1.12.0"></a>

# [1.12.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.11.0...v1.12.0) (2017-05-11)

### Features

- turn off 'object-curly-newline' rule ([f2997b4](https://github.com/medikoo/eslint-config-medikoo/commit/f2997b4))

<a name="1.11.0"></a>

# [1.11.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.10.0...v1.11.0) (2017-05-10)

### Features

- indent `case` clauses within `switch` ([dd1c4a2](https://github.com/medikoo/eslint-config-medikoo/commit/dd1c4a2))

<a name="1.10.0"></a>

# [1.10.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.9.0...v1.10.0) (2017-05-08)

### Features

- disable "no-continue" rule ([c339c65](https://github.com/medikoo/eslint-config-medikoo/commit/c339c65))

<a name="1.9.0"></a>

# [1.9.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.8.0...v1.9.0) (2017-05-08)

### Features

- add `i` to accepted identifiers ([2223d9f](https://github.com/medikoo/eslint-config-medikoo/commit/2223d9f))

<a name="1.8.0"></a>

# [1.8.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.7.0...v1.8.0) (2017-05-08)

### Features

- turn on `no-var` rule ([44d38ff](https://github.com/medikoo/eslint-config-medikoo/commit/44d38ff))

<a name="1.7.0"></a>

# [1.7.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.6.0...v1.7.0) (2017-05-08)

### Features

- add 'a' and 'T' to allowed var names ([82ffbfc](https://github.com/medikoo/eslint-config-medikoo/commit/82ffbfc))

<a name="1.6.0"></a>

# [1.6.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.5.0...v1.6.0) (2017-05-08)

### Features

- disable `no-undefined` rule ([9805466](https://github.com/medikoo/eslint-config-medikoo/commit/9805466))

<a name="1.5.0"></a>

# [1.5.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.4.0...v1.5.0) (2017-05-08)

### Features

- disable `no-invalid-this` rule ([eb8d29e](https://github.com/medikoo/eslint-config-medikoo/commit/eb8d29e))

<a name="1.4.0"></a>

# [1.4.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.3.0...v1.4.0) (2017-05-02)

### Features

- add "d" to acceptable var names ([505b470](https://github.com/medikoo/eslint-config-medikoo/commit/505b470))

<a name="1.3.0"></a>

# [1.3.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.2.0...v1.3.0) (2017-04-14)

### Features

- turn off no-sync rule ([4a597d7](https://github.com/medikoo/eslint-config-medikoo/commit/4a597d7))

<a name="1.2.0"></a>

# [1.2.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.1.0...v1.2.0) (2017-04-14)

### Features

- turn off no-process-exit rule ([d0c8b48](https://github.com/medikoo/eslint-config-medikoo/commit/d0c8b48))

<a name="1.1.0"></a>

# [1.1.0](https://github.com/medikoo/eslint-config-medikoo/compare/v1.0.0...v1.1.0) (2017-04-13)

### Features

- add 2 to ignored magic numbers ([e281db9](https://github.com/medikoo/eslint-config-medikoo/commit/e281db9))

<a name="1.0.0"></a>

## 1.0.0 (2017-04-12)

Initial version
