# hexo-tag-details

[![NPM](https://nodei.co/npm/hexo-tag-details.png)](https://nodei.co/npm/hexo-tag-details/)
[![licence](https://img.shields.io/github/license/hinastory/hexo-tag-details.svg)](LICENSE)
[![hexo](https://img.shields.io/badge/Hexo-%3E%3D3.0-blue.svg?style=flat-square)](https://hexo.io)
[![Maintainability](https://api.codeclimate.com/v1/badges/498adb9be2a84bcc0803/maintainability)](https://codeclimate.com/github/hinastory/hexo-tag-details/maintainability)

HTML5 details tag on your [Hexo](https://hexo.io/) article

## Installation

`npm install hexo-tag-details --save`

## Usage

```
{% details [mode:open/close] summary text %}
detail text
{% enddetails %}
```

Example1:

```
{% details Where are you from? %}
I'm from the Earth. Water Planet!
{% enddetails %}
```

it generates HTML:
```html
<details>
  <summary>Where are you from?</summary>
  I'm from the Earth. Water Planet!
</details>
```

it is displayed:
<details>
  <summary>Where are you from?</summary>
  I'm from the Earth. Water Planet!
</details>

----
Example2(Specify open mode):

```
{% details mode:open What food do you like? %}
1. Sushi
2. Tempura
3. Sukiyaki
{% enddetails %}
```

it generates HTML:
```html
<details open="open">
  <summary>What food do you like?</summary>
  <ol>
    <li>Sushi</li>
    <li>Tempura</li>
    <li>Sukiyaki</li>
  </ol>
</details>
```

it is displayed:
<details open="open">
  <summary>What food do you like?</summary>
  <ol>
    <li>Sushi</li>
    <li>Tempura</li>
    <li>Sukiyaki</li>
  </ol>
</details>

## Configuration

### className
`className` is CSS class name for details tag. (Default: None)

### open

`open` is default open mode for details tag.(Default: `false`)

_config.yml:

```yaml
tag_details:
  className:
  open: false
```

## License

MIT
