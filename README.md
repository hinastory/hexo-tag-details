# hexo-tag-details

[![NPM](https://nodei.co/npm/hexo-details.png)](https://nodei.co/npm/hexo-details/)
[![licence](https://img.shields.io/npm/l/hexo-details.svg?style=flat)](LICENSE)
[![hexo](https://img.shields.io/badge/Hexo-%3E%3D3.0-blue.svg?style=flat-square)](https://hexo.io)
[![Maintainability](https://api.codeclimate.com/v1/badges/ddfce94fa04983a9c7c7/maintainability)](https://codeclimate.com/github/hinastory/hexo-tag-details/maintainability)

HTML5 details tag on your [Hexo](https://hexo.io/) article.

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

<details>
<summary>Where are you from?</summary>
I'm from the Earth. Water Planet!
</details>

Example2(Specify open mode):

```
{% details mode:open Where are you from? %}
I'm from the Earth. Water Planet!
{% enddetails %}
```

it generates HTML:
```html
<details open="open">
<summary>Where are you from?</summary>
I'm from the Earth. Water Planet!
</details>
```

### Configuration

#### className
`className` is CSS class name for details tag.

#### open

`open` is default open mode for details tag.

_config.yml:

```yaml
tagDetails:
  className:
  open: false
```

## License

MIT