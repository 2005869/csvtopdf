var pdf = require('html-pdf');

const options = {
    childProcessOptions: {
      env: {
        OPENSSL_CONF: '/dev/null',
      },
    }
  }

class PDFWriter{
    static WritePDF(filename, html){
        pdf.create(html, options).toFile(filename, (err, res) => {
            if (err){
                console.log(err);
            }else{
                console.log(res);
            }
        });
    }
}

module.exports = PDFWriter;