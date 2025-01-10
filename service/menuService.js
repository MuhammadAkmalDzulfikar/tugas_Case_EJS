const prisma = require("../prisma/client");
const { validateInsert, validateUpdate } = require("../utils/validator");

const getAllMenu = async ()=>{
    const menuResponse = await prisma.menu.findMany();
    return { menu: menuResponse };
}

const getMenuByNo = async (no) => {
    const menu = await prisma.menu.findUnique({ where: { no } });
    if (!menu || menu.deletedAt) {
      throw new NotFoundError("menu tidak di temukan!!");
    }
  
    const {nama_menu, tipe_menu, harga_menu, rekomendasi } = menu;
    return { menu: { no,nama_menu, tipe_menu, harga_menu, rekomendasi } };
  };

const insertMenu = async (
    no,
    nama_menu,
    tipe_menu,
    harga_menu,
    rekomendasi,
  ) =>{
    validateInsert(no,nama_menu, tipe_menu, harga_menu, rekomendasi);
    const menu = await prisma.menu.create({
        data: {
          no,
          nama_menu,
          tipe_menu,
          harga_menu,
          rekomendasi,
        },
      });
      return {menu};
}

const updateMenu = async (
    no,
    nama_menu,
    tipe_menu,
    harga_menu,
    rekomendasi,
) =>{
    validateUpdate(no,nama_menu, tipe_menu, harga_menu, rekomendasi);
    const updateMenu = await prisma.menu.update ({
        where: {id: id},
        data: {
            no,
            nama_menu,
            tipe_menu,
            harga_menu,
            rekomendasi,
        }
    });
    return {updateMenu};
}

const deleteMenu = async (no) => {
    const deleteMenu = await prisma.menu.delete({
        where: {id: id},
    });
    return {deleteMenu};
}

module.exports = {
    getAllMenu,
    getMenuByNo,
    insertMenu,
    updateMenu,
    deleteMenu,

}