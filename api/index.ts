import { NowRequest, NowResponse } from '@vercel/node'
import QRCode from 'qrcode'
import tinycolor from 'tinycolor2'

const getHexColor = (color: any) => {
  return tinycolor(String(color)).toHex8String()
}

export default async function (req: NowRequest, res: NowResponse) {
  const {
    query: {
      text = 'Where is my mind?',
      size = '500',
      margin = '1',
      type = 'image',
      dark = '#000',
      light = '#fff'
    },
  } = req

  const options = {
    width: Number(size),
    margin: Number(margin),
    color: {
      dark: getHexColor(dark),
      light: getHexColor(light)
    }
  }

  if (type === 'image') {
    const buffer = await QRCode.toBuffer(String(text), options)
    res.setHeader('content-type', 'image/png')
    res.send(buffer)
  } else {
    const data = await QRCode.toDataURL(String(text), options)
    res.setHeader('content-type', 'text/plain')
    res.send(data)
  }
}
