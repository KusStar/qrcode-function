# qrcode-function

> A function returns QR Code image or base64 data URL.

## Usage

Change the `?text=` value to your text to encode.
```
https://qrcode-function.vercel.app/api?text=https://github.com/KusStar
```
### Params

**text**

Text to encode, defaults to `Where is my mind?`

**size**

The size of image, defaults to `500`

**margin**

How much quiet zone of image should be, defaults to `1`

**type**

The type of response, defaults to `image`, means it will return a `image/png`

When `type` is not `image`, it will return base64 data URL likes `data:image/png;base64,...`

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

## License

[MIT](LICENSE)
