"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  /*================Hutang================*/

  app.route("/tambahHutang").post(jsonku.tambahHutang);
  app.route("/tampilHutang").get(jsonku.tampilHutang);
  app.route("/hapusHutang").delete(jsonku.hapusHutang);
  app.route("/tampilHutang/:id_hutang").get(jsonku.tampilHutangId);
  app.route("/ubahHutang").put(jsonku.ubahHutang);
  app.route("/tampilStatus").get(jsonku.tampilStatus);

  /*================Piutang================*/

  app.route("/tambahPihutang").post(jsonku.tambahPihutang);
  app.route("/tampilPihutang").get(jsonku.tampilPihutang);
  app.route("/hapusPihutang").delete(jsonku.hapusPihutang);
  app.route("/tampilPihutang/:id_pihutang").get(jsonku.tampilPihutangId);
  app.route("/ubahPihutang").put(jsonku.ubahPihutang);

  /*================Barang================*/

  app.route("/tampilBarang").get(jsonku.tampilBarang);
  app.route("/tampilBarang/:kode").get(jsonku.tampilbarangid);
  app.route("/ubahBarang").put(jsonku.ubahBarang);
  app.route("/tampilKeranjang/:kode").get(jsonku.tampilKeranjangKode);
  app.route("/tampilKeranjang").get(jsonku.tampilKeranjang);
  app.route("/tambahKeranjang").post(jsonku.tambahKeranjang);
  app.route("/ubahKeranjang").put(jsonku.ubahKeranjang);
  app.route("/hapusKeranjang").delete(jsonku.hapusKeranjang);
  app.route("/hapusKeranjangId").delete(jsonku.hapusKeranjangId);
  app.route("/totalHarga").get(jsonku.totalHarga);

  /*================Penjualan================*/
  app.route("/tambahPenjualan").post(jsonku.tambahPenjualan);
  app.route("/tampilPenjualan").get(jsonku.tampilPenjualan);
  app.route("/hapusPenjualan").delete(jsonku.hapusPenjualan);

  /*================Pembelian================*/
  app.route("/tambahBarang").post(jsonku.tambahBarang);
  app.route("/tambahPembelian").post(jsonku.tambahPembelian);
  app.route("/tambahPembelian2").post(jsonku.tambahPembelian2);
  app.route("/tampilPembelian").get(jsonku.tampilPembelian);
  app.route("/hapusPembelian").delete(jsonku.hapusPembelian);
  app.route("/ubahBarang2").put(jsonku.ubahBarang2);
};

