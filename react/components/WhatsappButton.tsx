import React from 'react'
import PropTypes from 'prop-types'
import { useCssHandles } from 'vtex.css-handles'

import './styles.css'

type Props = {
  logo: string
  phone: string
  message: string
  width: number 
  height: number 
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const CSS_HANDLES = ['whatsapp_logo']
  const handles = useCssHandles(CSS_HANDLES)
  const formattedMessage = message.replace(/ /g, '%20')

  return (
    <>
      <div className={handles.whatsapp_logo}>
        <a
          href={`https://wa.me/${phone}?text=${formattedMessage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={logo}
            width={width}
            height={height}
            alt="Logo de whatsapp"
          />
        </a>
      </div>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  with: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'assets/img/whatsapp.png',
  phone: '9865132146',
  message: 'Hola! Bienvenido a impacto, ¿En qué podemos ayudarte?',
  with: 50,
  height: 50,
}

WhatsappButton.schema = {
  title: 'Botón de whatsaap',
  type: 'object',
  properties: {
    logo: {
      title: 'Logo de whatsaap que se relacione con la marca',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'telefono',
      description: 'Agrega por favor el numero de telefono',
      type: 'string',
    },
    message: {
      title: 'Mensaje',
      description: 'Agrega por favor el mensaje que se verá para tu cliente',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'ancho',
      description: 'ancho de medida',
      type: 'number',
    },
    height: {
      title: 'altura',
      description: 'altura de medida',
      type: 'number',
    },
  },
}

export default WhatsappButton
