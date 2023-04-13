const http = require('http')
const fs = require('fs')
const porta = 443
const readline = require('readline')
const formidavel = require('formidable')

const servidor = http.createServer((req, res) => {
  fs.readFile('Pagina.html', (err, arquivo) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(arquivo)
    res.end()
  })
  const form = new formidavel.IncomingForm()
   form.parse(req, (erro, campos, arquivos) => {
    const urlAntiga = arquivos.filetoupload.filepath
    const urlNova = './' + 
    arquivos.filetoupload.originalFilename
      var rawData = fs.readFileSync(urlAntiga)
      fs.writeFile(urlNova, rawData, function(err) {
        if (err) console.log(err)
        res.write("Arquivo enviado com sucesso!")
        res.end()
      })
  async function readFileByLine(file) {
    const fileStream = fs.createReadStream(file);
    const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
    })
    for await (const line of rl) {
    console.log(line)
    }
  }

  readFileByLine('teste.txt')
   })   
})

servidor.listen(porta, () => { console.log('Servidor rodando') })
