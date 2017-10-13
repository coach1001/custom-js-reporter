
var express = require('express');
var cors = require('cors');
var app = express();
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();
var nocache = require('nocache');
var request = require('request');
var fs = require('fs');

app.use(cors());
app.use(nocache());

app.get('/', function (req, res) {
  res.send('Report Server!');
});

/*
app.post('/file', multipartyMiddleware, function(req, res) {
  storage.insert(req.body.saveAsFileName, req.files.file.path , function(err,id,stat){
    fs.unlink(req.files.file.path, function(err){
      if(err){
        res.status(500).json({fileId: null, message: 'Server Error'})
      }else{
        res.status(200).json({fileId: id, message: 'File Creation Succeeded'});
      }
    });
  });
});

app.patch('/file?:fileId', multipartyMiddleware, function(req, res) {
  storage.update(req.query.fileId, req.body.saveAsFileName, req.files.file.path , function(err,id,stat){
    fs.unlink(req.files.file.path, function(err){
      if(err){
        res.status(500).json({fileId: id, message: 'File Updating Failed'})
      }else{
        res.status(200).json({fileId: id, message: 'File Updating Succeeded'});
      }
    });
  });

});

app.delete('/file?:fileId',function(req,res){
  const fileId = req.query.fileId;
  storage.remove(fileId, function(err){
    if(err){
      res.status(500).json({fileId: fileId, message: 'File Deletion Failed'})
    } else {
      res.status(200).json({fileId: fileId, message: 'File Deletion Succeeded'})
    }
  });
});

app.get('/file/list',function(req,res){
  storage.listing(function(err,arr){
    if(err){
      res.status(500).json({files: null, message: 'File List Retrieval Failed'})
    } else {
      const fileArray=[];
      if(arr[0]){
        arr[0].split('\n').map( function(file,index){
          fileArray.push(JSON.parse(file));
        });
      }
      res.status(200).json({files: fileArray, message: 'File List Retrieval Succeeded'});
    }

  });
});

app.get('/file?:fileId',function(req,res){
  const fileId = req.query.fileId;
  storage.stat(fileId, function(err, stat) {
    if(err){
      res.status(500).json({message: 'File Retrieval Failed'});
    }else{
      res.set('Content-type',stat.type);
      res.set('Access-Control-Expose-Headers','Content-Disposition,Content-Length,Content-Type');
      res.set('Content-disposition', 'inline; filename=' + stat.name);
      storage.pipe(fileId,res);
    }
  });
});*/

app.listen(3005, function () {
  console.log('File Storage Running on port 3005!');
});
