const { BadRequestError } = require("./error");

const validateInsert = (no,nama_menu, tipe_menu, harga_menu, rekomendasi) => {
  if (!(no && nama_menu && tipe_menu && harga_menu && rekomendasi)) {
    throw new BadRequestError(
      "no,nama_menu, tipe_menu, harga_menu, rekomendasi harus diisi!"
    );
  }
};
const validateUpdate = (no,nama_menu, tipe_menu, harga_menu, rekomendasi) => {
  if (!(no && nama_menu && tipe_menu && harga_menu && rekomendasi)) {
    throw new BadRequestError(
      "no,nama_menu, tipe_menu, harga_menu, rekomendasi harus diisi!"
    );
  }
};

module.exports = { validateInsert, validateUpdate };