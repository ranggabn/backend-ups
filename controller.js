"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi berjalan", res);
};

/*=================Hutang=================*/
//menampilkan semua data hutang
exports.tampilHutang = function (req, res) {
  connection.query(
    "SELECT * FROM hutang join status_hutang WHERE hutang.status = status_hutang.id_status ORDER BY tanggal DESC",
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//menambahkan data hutang
exports.tambahHutang = function (req, res) {
  var nama_toko = req.body.nama_toko;
  var jumlah = req.body.jumlah;
  var barang = req.body.barang;
  var tanggal = req.body.tanggal;
  var status = req.body.status;
  connection.query(
    "INSERT INTO hutang (nama_toko, jumlah, barang, tanggal, status) VALUES (?,?,?,?,?)",
    [nama_toko, jumlah, barang, tanggal, status],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data!", res);
      }
    }
  );
};

//menghapus data berdasarkan id
exports.hapusHutang = function (req, res) {
  var id_hutang = req.body.id_hutang;
  connection.query(
    "DELETE FROM hutang WHERE id_hutang=?",
    [id_hutang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil hapus data", res);
      }
    }
  );
};

//menampilkann berdasarkan id
exports.tampilHutangId = function (req, res) {
  let id_hutang = req.params.id_hutang;
  connection.query(
    "SELECT * FROM hutang JOIN status_hutang WHERE hutang.status = status_hutang.id_status AND id_hutang = ?",
    [id_hutang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//mengubah data berdasarkan id
exports.ubahHutang = function (req, res) {
  var id_hutang = req.body.id_hutang;
  var nama_toko = req.body.nama_toko;
  var jumlah = req.body.jumlah;
  var barang = req.body.barang;
  var status = req.body.status;

  connection.query(
    "UPDATE hutang set nama_toko = ?, jumlah = ?, barang = ?, status = ? WHERE id_hutang=?",
    [nama_toko, jumlah, barang, status, id_hutang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Mengubah Data!", res);
      }
    }
  );
};

/*=================Pihutang=================*/
//menampilkan semua data pihutang
exports.tampilPihutang = function (req, res) {
  connection.query(
    "SELECT * FROM pihutang join status_hutang WHERE pihutang.status = status_hutang.id_status ORDER BY tanggal DESC",
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

exports.tampilStatus = function (req, res) {
  connection.query(
    "SELECT * FROM status_hutang",
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//menambahkan data pihutang
exports.tambahPihutang = function (req, res) {
  var nama_toko = req.body.nama_toko;
  var jumlah = req.body.jumlah;
  var barang = req.body.barang;
  var tanggal = req.body.tanggal;
  var status = req.body.status;
  connection.query(
    "INSERT INTO pihutang (nama_toko, jumlah, barang, tanggal, status) VALUES (?,?,?,?,?)",
    [nama_toko, jumlah, barang, tanggal, status],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data!", res);
      }
    }
  );
};

//menghapus data berdasarkan id
exports.hapusPihutang = function (req, res) {
  var id_pihutang = req.body.id_pihutang;
  connection.query(
    "DELETE FROM pihutang WHERE id_pihutang=?",
    [id_pihutang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil hapus data", res);
      }
    }
  );
};

exports.tampilPihutangId = function (req, res) {
  let id_pihutang = req.params.id_pihutang;
  connection.query(
    "SELECT * FROM pihutang JOIN status_hutang WHERE pihutang.status = status_hutang.id_status AND id_pihutang = ?",
    [id_pihutang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//mengubah data berdasarkan id
exports.ubahPihutang = function (req, res) {
  var id_pihutang = req.body.id_pihutang;
  var nama_toko = req.body.nama_toko;
  var jumlah = req.body.jumlah;
  var barang = req.body.barang;
  var status = req.body.status;

  connection.query(
    "UPDATE pihutang set nama_toko = ?, jumlah = ?, barang = ?, status = ? WHERE id_pihutang = ?",
    [nama_toko, jumlah, barang, status, id_pihutang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Mengubah Data!", res);
      }
    }
  );
};

/*=================Barang=================*/
//menampilkan semua data pihutang
exports.tampilBarang = function (req, res) {
  connection.query("SELECT * FROM barang", function (error, rows, field) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

//menampilkann berdasarkan id
exports.tampilbarangid = function (req, res) {
  let kode = req.params.kode;
  connection.query(
    "SELECT * FROM barang WHERE kode = ?",
    [kode],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//ubah barang
exports.ubahBarang = function (req, res) {
  var kode = req.body.kode;
  var nama = req.body.nama;
  var stok = req.body.stok;
  var pricelist = req.body.pricelist;
  var diskon = req.body.diskon;
  var modal = req.body.modal;
  var jual = req.body.jual;
  var bengkel = req.body.bengkel;
  connection.query(
    "UPDATE barang SET kode = ?, nama = ?, stok = ?, pricelist = ?, diskon = ?, modal = ?, jual = ?, bengkel = ? WHERE kode = ?",
    [kode, nama, stok, pricelist, diskon, modal, jual, bengkel, kode],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Mengubah Data!", res);
      }
    }
  );
};

exports.tampilKeranjang = function (req, res) {
  connection.query(
    "SELECT * FROM keranjang JOIN barang WHERE keranjang.kode = barang.kode ORDER BY keranjang.id_keranjang",
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

exports.tampilKeranjangKode = function (req, res) {
  let kode = req.params.kode;
  connection.query(
    "SELECT * FROM keranjang join barang WHERE keranjang.kode = barang.kode AND keranjang.kode = ? ORDER BY keranjang.id_keranjang",
    [kode],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//menambahkan data pihutang
exports.tambahKeranjang = function (req, res) {
  var kode = req.body.kode;
  var jumlah = req.body.jumlah;
  var total = req.body.total;
  var tanggal = req.body.tanggal;
  connection.query(
    "INSERT INTO keranjang (kode, jumlah, total, tanggal) VALUES (?,?,?,?)",
    [kode, jumlah, total, tanggal],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data!", res);
      }
    }
  );
};

//ubah keranjang
exports.ubahKeranjang = function (req, res) {
  var kode = req.body.kode;
  var total = req.body.total;
  var jumlah = req.body.jumlah;
  connection.query(
    "UPDATE keranjang SET total = ?, jumlah = ? WHERE keranjang.kode = ?",
    [total, jumlah, kode],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Mengubah Data!", res);
      }
    }
  );
};

exports.hapusKeranjang = function (req, res) {
  connection.query("DELETE FROM keranjang", function (error, rows, field) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil hapus data", res);
    }
  });
};

exports.hapusKeranjangId = function (req, res) {
  var id_keranjang = req.body.id_keranjang;
  connection.query(
    "DELETE FROM keranjang WHERE id_keranjang=?",
    [id_keranjang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil hapus data", res);
      }
    }
  );
};

exports.totalHarga = function (req, res) {
  connection.query(
    "SELECT SUM(total) AS total_harga FROM keranjang",
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// ================Penjualan==============
exports.tambahPenjualan = function (req, res) {
  var values = [
    {
      kode: req.body.kode,
      jumlah: req.body.jumlah,
      total: req.body.total,
      tanggal: req.body.tanggal,
    },
  ];
  connection.query(
    "INSERT INTO penjualan (kode, jumlah, total, tanggal) VALUES ?",
    [
      values.map((values) => [
        values.kode,
        values.jumlah,
        values.total,
        values.tanggal,
      ]),
    ],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data!", res);
      }
    }
  );
};

exports.tampilPenjualan = function (req, res) {
  connection.query(
    "SELECT * FROM penjualan JOIN barang WHERE penjualan.kode = barang.kode ORDER BY penjualan.id_penjualan DESC",
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//menghapus data berdasarkan id
exports.hapusPenjualan = function (req, res) {
  var id_penjualan = req.body.id_penjualan;
  connection.query(
    "DELETE FROM penjualan WHERE id_penjualan=?",
    [id_penjualan],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil hapus data", res);
      }
    }
  );
};

//menghapus data barang berdasarkan id
exports.hapusBarang = function (req, res) {
  var kode = req.body.kode;
  connection.query(
    "DELETE FROM barang WHERE kode=?",
    [kode],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil hapus data", res);
      }
    }
  );
};

// ================Pembelian==============
exports.tambahBarang = function (req, res) {
  var kode = req.body.kode;
  var nama = req.body.nama;
  var stok = req.body.stok;
  var pricelist = req.body.pricelist;
  var diskon = req.body.diskon;
  var modal = req.body.modal;
  var jual = req.body.jual;
  var bengkel = req.body.bengkel;
  var tanggal_beli = req.body.tanggal_beli;
  connection.query(
    "INSERT INTO barang (kode, nama, stok, pricelist, diskon, modal, jual, bengkel, tanggal_beli) VALUES (?,?,?,?,?,?,?,?,?)",
    [kode, nama, stok, pricelist, diskon, modal, jual, bengkel, tanggal_beli],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data!", res);
      }
    }
  );
};

exports.tambahPembelian = function (req, res) {
  var kode = req.body.kode;
  var nama = req.body.nama;
  var stok = req.body.stok;
  var pricelist = req.body.pricelist;
  var diskon = req.body.diskon;
  var modal = req.body.modal;
  var jual = req.body.jual;
  var bengkel = req.body.bengkel;
  var tanggal_beli = req.body.tanggal_beli;
  connection.query(
    "INSERT INTO pembelian (kode, nama, stok, pricelist, diskon, modal, jual, bengkel, tanggal_beli) VALUES (?,?,?,?,?,?,?,?,?)",
    [kode, nama, stok, pricelist, diskon, modal, jual, bengkel, tanggal_beli],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data!", res);
      }
    }
  );
};

exports.tambahPembelian2 = function (req, res) {
  var kode = req.body.kode;
  var nama = req.body.nama;
  var stok = req.body.stok;
  var tanggal_beli = req.body.tanggal_beli;
  connection.query(
    "INSERT INTO pembelian (kode, nama, stok, tanggal_beli) VALUES (?,?,?,?)",
    [kode, nama, stok, tanggal_beli],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data!", res);
      }
    }
  );
};

exports.hapusPembelian = function (req, res) {
  var id_pembelian = req.body.id_pembelian;
  connection.query(
    "DELETE FROM pembelian WHERE id_pembelian=?",
    [id_pembelian],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil hapus data", res);
      }
    }
  );
};

exports.tampilPembelian = function (req, res) {
  connection.query(
    "SELECT * FROM pembelian ORDER BY pembelian.tanggal_beli DESC",
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//ubah barang
exports.ubahBarang2 = function (req, res) {
  var kode = req.body.kode;
  var nama = req.body.nama;
  var stok = req.body.stok;
  connection.query(
    "UPDATE barang SET kode = ?, nama = ?, stok = ? WHERE kode = ?",
    [kode, nama, stok, kode],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Mengubah Data!", res);
      }
    }
  );
};

exports.ubahbarang3 = function (req, res) {
  var kode = req.body.kode;
  var stok = req.body.stok;
  connection.query(
    "UPDATE barang set stok = ? WHERE kode = ?",
    [stok,kode],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Mengubah Data!", res);
      }
    }
  );
};

//tampil user
exports.tampiluserid = function (req, res) {
  let username = req.params.username;
  connection.query(
    "SELECT * FROM user WHERE username = ?",
    [username],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};