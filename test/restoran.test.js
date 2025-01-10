const request = require("supertest");
const app = require("../index");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

let no;

beforeAll(async () => {
    await prisma.menu.deleteMany(); 
});

afterAll(async () => {
    await prisma.$disconnect(); 
});

describe('GET /menu', () => {
    test('GET /menu | menampilkan daftar menu', async () => {
        const response = await request(app).get('/menu');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message');
        expect(response.body).toHaveProperty('menu');
    });
});

describe('POST /addMenu', () => {
    test('POST /addMenu | menambahkan menu baru ke daftar', async () => {
        const response = await request(app)
            .post('/addMenu')
            .send({
                no: 20,
                nama_menu:"wedang jahe",
                tipe_menu: "minuman", 
                harga_menu: 20000,
                rekomendasi: "rekomendasi",
            });
        
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('message');
        expect(response.body).toHaveProperty('menu');
        expect(response.body.status === 'success');
    });
})

describe('PUT /updateMenu/:no', () => {
    let no;
    test('PUT /updateMenu/:no | memperbarui menu dalam daftar', async () => {
        const response = await request(app)
            .put('/updateMenu/20')
            .send({
                no: 20,
                nama_menu:"wedang gedang",
                tipe_menu: "makanan", 
                harga_menu: 30000,
                rekomendasi: "rekomendasi",
            });
        
        expect(response.statusCode).toBe(202);
        expect(response.body).toHaveProperty('message');;
        
        expect(response.body.status === 'success');
    });
})

describe('/deleteMenu/:no', () => {
    test('/deleteMenu/:no | menghapus menu dari daftar', async () => {
        const response = await request(app)
            .delete('/deleteMenu/20');

        expect(response.statusCode).toBe(202);
        expect(response.body).toHaveProperty('message');
    });
        
        
});
