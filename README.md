<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Beta][beta-distribution] distribution probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [beta][beta-distribution] random variable is

<!-- <equation class="equation" label="eq:beta_pdf" align="center" raw="f(x;\alpha,\beta)= \begin{cases} \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) + \Gamma(\beta)}{x^{\alpha-1}(1-x)^{\beta-1}} & \text{ for } x \in (0,1) \\ 0 & \text{ otherwise } \end{cases}" alt="Probability density function (PDF) for a beta distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\alpha,\beta)= \begin{cases} \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) + \Gamma(\beta)}{x^{\alpha-1}(1-x)^{\beta-1}} &amp; \text{ for } x \in (0,1) \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:beta_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/beta/pdf/docs/img/equation_beta_pdf.svg" alt="Probability density function (PDF) for a beta distribution.">
    <br>
</div>

<!-- </equation> -->

where `alpha > 0` is the first shape parameter and `beta > 0` is the second shape parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-beta-pdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats-base-dists-beta-pdf' );
```

#### pdf( x, alpha, beta )

Evaluates the [probability density function][pdf] (PDF) for a [beta][beta-distribution]  distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var y = pdf( 0.5, 0.5, 1.0 );
// returns ~0.707

y = pdf( 0.1, 1.0, 1.0 );
// returns 1.0

y = pdf( 0.8, 4.0, 2.0 );
// returns ~2.048
```

If provided a `x` outside the support `[0,1]`, the function returns `0`.

```javascript
var y = pdf( -0.1, 1.0, 1.0 );
// returns 0.0

y = pdf( 1.1, 1.0, 1.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 1.0, 1.0 );
// returns NaN

y = pdf( 0.0, NaN, 1.0 );
// returns NaN

y = pdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 0.5, 0.0, 1.0 );
// returns NaN

y = pdf( 0.5, -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 0.5, 1.0, 0.0 );
// returns NaN

y = pdf( 0.5, 1.0, -1.0 );
// returns NaN
```

#### pdf.factory( alpha, beta )

Returns a `function` for evaluating the [PDF][pdf] for a [beta][beta-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var mypdf = pdf.factory( 0.5, 0.5 );

var y = mypdf( 0.8 );
// returns ~0.796

y = mypdf( 0.3 );
// returns ~0.695
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var EPS = require( '@stdlib/constants-float64-eps' );
var pdf = require( '@stdlib/stats-base-dists-beta-pdf' );

var alpha;
var beta;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu();
    alpha = ( randu()*5.0 ) + EPS;
    beta = ( randu()*5.0 ) + EPS;
    y = pdf( x, alpha, beta );
    console.log( 'x: %d, α: %d, β: %d, f(x;α,β): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-beta-pdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-beta-pdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-beta-pdf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-beta-pdf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-beta-pdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-beta-pdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-beta-pdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-beta-pdf/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-beta-pdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-beta-pdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-beta-pdf/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-beta-pdf/main/LICENSE

[beta-distribution]: https://en.wikipedia.org/wiki/Beta_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
