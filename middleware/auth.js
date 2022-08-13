var connection = require("../koneksi");
var mysql = require("mysql");
var md5 = require("md5");
var response = require("../res");
var jwt = require("jsonwebtoken");
var config = require("../config/secret");
var ip = require("ip");

// controller untuk register
exports.reqistrasi = function (req, res) {
  var post = {
    username: req.body.username,
    password: md5(req.body.password),
    role: 1,
  };

  var query = "SELECT username FROM ?? WHERE ??=?";
  var table = ["user", "username", post.username];

  query = mysql.format(query, table);

  connection.query(query, function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      if (rows.length == 0) {
        var query = "INSERT INTO ?? SET ?";
        var table = ["user"];
        query = mysql.format(query, table);
        connection.query(query, post, function (error, rows) {
          if (error) {
            console.log(error);
          } else {
            response.ok("Pendaftaran Berhasil!", res);
          }
        });
      } else {
        response.ok("Username anda sudah terdaftar!", res);
      }
    }
  });
};

//controller login
exports.login = function (req, res) {
  var post = {
    password: req.body.password,
    username: req.body.username,
  };

  var query = "SELECT * FROM ?? WHERE ??=? AND ??=?";
  var table = [
    "user",
    "password",
    md5(post.password),
    "username",
    post.username,
  ];

  query = mysql.format(query, table);
  connection.query(query, function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      if (rows.length == 1) {
        var token = jwt.sign({ rows }, config.secret, {
          expiresIn: "30000",
        });
        username = rows[0].username;
        role = rows[0].role;

        var expired = 30000;

        var data = {
          username: username,
          access_token: token,
          ip_address: ip.address(),
        };

        var query = "INSERT INTO ?? SET ?";
        var table = ["akses_token"];

        query = mysql.format(query, table);
        connection.query(query, data, function (error, rows) {
          if (error) {
            console.log(error);
          } else {
            res.json({
              success: true,
              message: "Token JWT tergenerate",
              token: token,
              expires: expired,
              currUser: data.username,
              user: username,
              role: role,
            });
          }
        });
      } else {
        res.json({ Error: true, Message: "username atau password anda salah" });
      }
    }
  });
};

exports.ubahpassword = function (req, res) {
  var data = {
    username: req.body.username,
    currpassword: md5(req.body.currpassword),
    newpassword: md5(req.body.newpassword),
  };

  var query = "SELECT username, password FROM ?? WHERE ??=?";
  var table = ["user", "username", data.username];

  query = mysql.format(query, table);

  connection.query(query, function (error, rows) {
    if (error) {
      console.log(error);
    } else {
      if (rows.length == 1) {
        username = rows[0].username;
        password = rows[0].password;

        if (data.currpassword == password) {
          if (data.newpassword == data.currpassword) {
            res
              .json({
                success: false,
                message: "Password masih sama dengan yang sebelumnya!",
              })
              .end();
          } else {
            connection.query(
              "UPDATE user SET password=? WHERE username=?",
              [data.newpassword, username],
              function (error) {
                if (error) {
                  res
                    .json({
                      success: false,
                      message: error,
                    })
                    .end();
                } else {
                  res
                    .json({
                      success: true,
                      message: "Berhasil melakukan perubahan password!",
                    })
                    .end();
                }
              }
            );
          }
        } else {
          res
            .json({
              success: false,
              message: "Password lama anda salah!",
            })
            .end();
        }
      } else {
        res
          .json({
            success: false,
            message: "User tidak tersedia",
          })
          .end();
      }
    }
  });
};
