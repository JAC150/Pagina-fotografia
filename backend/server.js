/* const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

const GMAIL_USER = 'tankianrichann@gmail.com';
const GMAIL_PASS = 'zekttneiotgxwxgo';

// Configurar multer para manejar la carga de archivos y campos de texto
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar nodemailer
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
    }
});

app.post('/send', upload.none(), (req, res) => {
    const { username, email, asunto } = req.body;

    let mailOptions = {
        from: GMAIL_USER,
        to: email,
        subject: 'Solicitud de Entrevista a Fotográfo para la revista',
        html: `
            <p>Se ha recibido una nueva solicitud por parte de un fotográfo para una entrevista.</p>
            <h3>Detalles de la Solicitud:</h3>
            <p><strong>Nombre:</strong> ${username}</p>
            <p><strong>Correo Electrónico:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${asunto}</p>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error al enviar el correo');
        } else {
            console.log('Correo enviado: ' + info.response);
            res.status(200).send('Correo enviado');
        }
    });
});

app.post('/sendFormConcurso', upload.array('photos'), (req, res) => {
    const { username, concurso, nombrefoto } = req.body;
    const files = req.files;

    let mailOptions = {
        from: GMAIL_USER,
        to: 'karimhernandez233@gmail.com',
        subject: `Participación en ${concurso}`,
        html: `
            <h3>Detalles de la Participación</h3>
            <p><strong>Nombre:</strong> ${username}</p>
            <p><strong>Concurso:</strong> ${concurso}</p>
            <p><strong>Nombre de la foto:</strong> ${nombrefoto}</p>
        `,
        attachments: files.map(file => ({
            filename: file.originalname,
            content: file.buffer
        }))
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Error al enviar el correo' });
        } else {
            console.log('Correo enviado: ' + info.response);
            res.status(200).json({ success: true, message: 'Correo enviado' });
        }
    });
});


app.post('/sendFotosPublicaciones', upload.array('photos'), (req, res) => {
    const { username, correo, galeria, descripcion } = req.body;
    const files = req.files;

    let mailOptions = {
        from: GMAIL_USER,
        to: 'karimhernandez233@gmail.com',
        subject: `Solicitud para participar en nuevas publicaciones`,
        html: `
            <p>Se ha recibido una nueva solicitud de un fotográfo para publicar fotos en próximas
            publicaciones de la revista.</p>
            <h3>Detalles de la Solicitud</h3>
            <p><strong>Nombre:</strong> ${username}</p>
            <strong>Correo electrónico:</strong> ${correo}</p>
            <p><strong>Galería a la que desea aportar:</strong> ${galeria}</p>
            <p><strong>Descripción:</strong> ${descripcion}</p>
        `,
        attachments: files.map(file => ({
            filename: file.originalname,
            content: file.buffer
        }))
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Error al enviar el correo' });
        } else {
            console.log('Correo enviado: ' + info.response);
            res.status(200).json({ success: true, message: 'Correo enviado' });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor de correo escuchando en http://localhost:${port}`);
}); */


const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

const GMAIL_USER = 'tankianrichann@gmail.com';
const GMAIL_PASS = 'zekttneiotgxwxgo';

// Configurar multer para manejar la carga de archivos en memoria
const storageMemory = multer.memoryStorage();
const uploadMemory = multer({ storage: storageMemory });

// Configurar multer para manejar la carga de archivos en disco
const storageDisk = multer.diskStorage({
  destination: (req, file, cb) => {
    const galeria = req.body.galeria || 'default'; // Usa 'default' si no se proporciona 'folder'
    const uploadPath = path.join(__dirname, '../frontend/public/images/fotos/', galeria);
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const uploadDisk = multer({ storage: storageDisk });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar nodemailer
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS
  }
});

app.post('/send', uploadMemory.none(), (req, res) => {
  const { username, email, asunto } = req.body;

  let mailOptions = {
    from: GMAIL_USER,
    to: 'maynoraguileraosorto@gmail.com',
    subject: 'Solicitud de Entrevista a Fotográfo para la revista',
    html: `
      <p>Se ha recibido una nueva solicitud por parte de un fotográfo para una entrevista.</p>
      <h3>Detalles de la Solicitud:</h3>
      <p><strong>Nombre:</strong> ${username}</p>
      <p><strong>Correo Electrónico:</strong> ${email}</p>
      <p><strong>Asunto:</strong> ${asunto}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado');
    }
  });
});


app.post('/sendRetroalimentacion', uploadMemory.none(), (req, res) => {
  const { username, email, asunto, retro } = req.body;

  let mailOptions = {
    from: GMAIL_USER,
    to: email,
    subject: 'Respuesta a Fotografo',
    html: `
      <p>Hola estimado(a) mi nombre es ${username} y le daré retroalimentación sobre las fotos enviadas.</p>
      <p>${retro}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado');
    }
  });
});

app.post('/sendFormConcurso', uploadMemory.array('photos'), (req, res) => {
  const { username, concurso, nombrefoto } = req.body;
  const files = req.files;

  let mailOptions = {
    from: GMAIL_USER,
    to: 'maynoraguileraosorto@gmail.com',
    subject: `Participación en ${concurso}`,
    html: `
      <h3>Detalles de la Participación</h3>
      <p><strong>Nombre:</strong> ${username}</p>
      <p><strong>Concurso:</strong> ${concurso}</p>
      <p><strong>Nombre de la foto:</strong> ${nombrefoto}</p>
    `,
    attachments: files.map(file => ({
      filename: file.originalname,
      content: file.buffer
    }))
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Error al enviar el correo' });
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).json({ success: true, message: 'Correo enviado' });
    }
  });
});


app.post('/sendFotosPublicaciones', uploadMemory.array('photos'), (req, res) => {
    const { username, correo, galeria, descripcion } = req.body;
    const files = req.files;

    let mailOptions = {
        from: GMAIL_USER,
        to: 'maynoraguileraosorto@gmail.com',
        subject: `Solicitud para participar en nuevas publicaciones`,
        html: `
            <p>Se ha recibido una nueva solicitud de un fotográfo para publicar fotos en próximas
            publicaciones de la revista.</p>
            <h3>Detalles de la Solicitud</h3>
            <p><strong>Nombre:</strong> ${username}</p>
            <strong>Correo electrónico:</strong> ${correo}</p>
            <p><strong>Galería a la que desea aportar:</strong> ${galeria}</p>
            <p><strong>Descripción:</strong> ${descripcion}</p>
        `,
        attachments: files.map(file => ({
            filename: file.originalname,
            content: file.buffer
        }))
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Error al enviar el correo' });
        } else {
            console.log('Correo enviado: ' + info.response);
            res.status(200).json({ success: true, message: 'Correo enviado' });
        }
    });
});


app.post('/sendFotosRetroalimentacion', uploadMemory.array('photos'), (req, res) => {
  const { username, correo, descripcion } = req.body;
  const files = req.files;

  let mailOptions = {
      from: GMAIL_USER,
      to: 'maynoraguileraosorto@gmail.com',
      subject: `Solicitud de Revisión de Fotografias`,
      html: `
          <p>Se ha recibido una nueva solicitud de un fotográfo para revisar sus fotografías y recibir
          correcciones sobre la técnica aplicada o el estilo.</p>
          <h3>Detalles de la Solicitud</h3>
          <p><strong>Nombre:</strong> ${username}</p>
          <strong>Correo electrónico:</strong> ${correo}</p>
          <p><strong>Mensaje:</strong> ${descripcion}</p>
      `,
      attachments: files.map(file => ({
          filename: file.originalname,
          content: file.buffer
      }))
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
          res.status(500).json({ success: false, message: 'Error al enviar el correo' });
      } else {
          console.log('Correo enviado: ' + info.response);
          res.status(200).json({ success: true, message: 'Correo enviado' });
      }
  });
});

// Nueva ruta para cargar archivos en una carpeta
app.post('/uploadToFolder', uploadDisk.array('photos'), (req, res) => {
  const { username, concurso, nombrefoto } = req.body;
  const files = req.files;

  if (!files || files.length === 0) {
    return res.status(400).json({ success: false, message: 'No se han subido archivos.' });
  }

  res.status(200).json({
    success: true,
    message: 'Archivos subidos exitosamente',
    data: {
      username,
      concurso,
      nombrefoto,
      files: files.map(file => ({
        originalname: file.originalname,
        filename: file.filename,
        path: file.path
      }))
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor de correo escuchando en http://localhost:${port}`);
});
