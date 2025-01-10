const menuService = require("../service/menuService");

const getAllMenu = async (req, res, next) => {
    try {
        const menu = await menuService.getAllMenu();
        res.status(200).json({ message: "menu berhasil ditampilkan", menu });
    }catch (error){
        next(error);
    }
    
};

const getMenuByNo = async (req, res, next) =>{
    try {
        const menu = await menuService.getMenuByNo();
        res.status(200).json({ message: "menu berhasil ditampilkan", menu });
    }catch (error){
        next(error);
    }
};

const insertMenu = async (req, res, next) =>{
    const { no, nama_menu, tipe_menu, harga_menu, rekomendasi } = req.body;

    try{
        const insertMenu = await menuService.insertMenu(
            no,
            nama_menu,
            tipe_menu,
            harga_menu,
            rekomendasi
        );
        res.status(201).json({ message: "menu sudah di tambahkan", menu });
  } catch (error){
    next(error)
  }
    
};

const updateMenu = async (req, res, next) =>{
    const no = parseInt(req.params.no);
    const { nama_menu, tipe_menu, harga_menu, rekomendasi  } = req.body;

    try{
        const updateMenu = await menuService.updateMenu(
            no,
            nama_menu,
            tipe_menu,
            harga_menu,
            rekomendasi,
        )
        res.status(202).json({ message: "menu sudah di update", updateMenu});
    }catch(error){
        next(error)
    }
};

const deleteMenu = async (req, res, next) =>{
    const no = parseInt(req.params.no);

    try{
        const deleteMenu = await menuService.deleteMenu(no);
        res.status(202).json({ message: "Menu berhasil di hapus" });
    }catch(error){
        next(error)
    }
};

module.exports = {
    getAllMenu,
    getMenuByNo,
    insertMenu,
    updateMenu,
    deleteMenu,
}