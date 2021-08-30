# qrcode-function

> A function returns QR Code image or base64 data URL.

## Usage

Change the `?text=` value to your text to encode.
```
https://qrcode-function.vercel.app/api?text=https://github.com/KusStar?title=KusStar&subtitle=Refer%20to%20my%20GitHub&type=html
```
### Params

**text**

Text to encode, defaults to `Where is my mind?`. If text is URL, it may need to be the value after `encodeURIComponent`

**size**

The size of image, defaults to `500`

**margin**

How much quiet zone of image should be, defaults to `1`

**type**

The type of response, there are 3 types, `html|image|base64`, defaults to `html`, means it will return a `text/html`, a webpage with extra info

When `type` is `html`, there are 2 extra req params, `title` and `subtitle`, you can add them to customize response page. `title` defaults to be the same as `text`, `subtitle` defaults to be ''

When `type` is `image`, it will return a binary `image/png`, which can directly download

When `type` is `base64`, it will return base64 data URL likes `data:image/png;base64,...`

**dark**

The color of dark module, defaults to `000`

Example: `?dark=red` or `?dark=000`, if it is in hex format, don't need a `#` prefix

**light**

The color of light module, defaults to `fff`

Example: `?light=white` or `?light=fff`, if it is in hex format, don't need a `#` prefix

## Thanks

- [Vercel Serverless Functions](https://vercel.com/docs/serverless-functions)
- [qrcode](https://www.npmjs.com/package/qrcode)
- [tinycolor2](https://www.npmjs.com/package/tinycolor2)
- [ejs](https://github.com/mde/ejs)

## License

[MIT](LICENSE)
