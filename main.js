const $ = selector => document.querySelector(selector)

const $js = $('#js')
const $css = $('#css')
const $html = $('#html')

$js.addEventListener('input', update)
$css.addEventListener('input', update)
$html.addEventListener('input', update)

function update (){
  const html = createHtml()
  $('iframe').setAttribute('srcdoc', html)
}

  // Agrega el CSS al head del documento HTML
  const htmlWithCSS = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
        <script>
          ${js}
        </script>
        ${html}
      </body>
    </html>
  `

  return htmlWithCSS
}
