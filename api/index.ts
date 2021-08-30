import { VercelRequest, VercelResponse } from '@vercel/node'
import QRCode from 'qrcode'
import tinycolor from 'tinycolor2'
import ejs from 'ejs'
import { HTML } from './html'

const renderHTML = ejs.compile(HTML)

const getHexColor = (color: any) => {
  return tinycolor(String(color)).toHex8String()
}

export default async function (req: VercelRequest, res: VercelResponse) {
  const {
    query: {
      text = 'Where is my mind?',
      size = '500',
      margin = '1',
      type = 'image',
      dark = '#111',
      light = '#fff',
      title = text,
      subtitle = ''
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

  if (type === 'html') {
    const data = await QRCode.toDataURL(String(text), options)
    res.setHeader('content-type', 'text/html; charset=UTF-8')
    res.send(renderHTML({ title: title, subtitle, qrcode: data }))
  } else if (type === 'image') {
    const buffer = await QRCode.toBuffer(String(text), options)
    res.setHeader('content-type', 'image/png')
    res.send(buffer)
  } else if (type === 'base64') {
    const data = await QRCode.toDataURL(String(text), options)
    res.setHeader('content-type', 'text/plain')
    res.send(data)
  } else {
    res.send('Unknown type')
  }
}
