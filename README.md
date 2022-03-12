### Swift Dynamic Test

### 1.อธิบายการทำงานของ single thread event loop

Event Loop Layer มีแก้ไขปัญหา Blocking I/O ซึ่งมีหลักการทำงาน ดังนี้
1. Client จำนวนมาก Request มายัง Server
2. Server ทำการเตรียม Limited Thread pool เพื่อ Service Client
3. Node JS มีสิ่งที่เรียกว่า  Event Queue  มา เพื่อใช้เก็บ Queue ของ Request
4. ภายใน Event Loop มีสิ่งที่เรียกว่า  Event Loop เพื่อจะตรวจสอบงานใน Queue และ ประมวลผลมัน
5. Event Loop ทำงานแบบ  Single Thread ที่ Infinite Loop  ไปเรื่อยๆ ตรวจสอบ งานใน  Queue  ว่ามีหรือไม่
6. (ถ้ามี) หยิบงานใน  Queue  มาตรวจสอบว่า เป็น  Blocking I/O หรือ Non-Blocking I/O
7. ( ถ้า เป็น Non-Blocking I/O) จะทำการประมวลผล และส่ง Response กลับไปยัง Client
8. 1(ถ้าเป็น Blocking I/O) เช่น  Operations like interacting with Database, File System, External Services ให้ทำการทำขั้นตอนต่อไปนี้

-   เช็ค จำนวน Internal Thread Pool ว่ามีคงเหลืออยู่หรือไม่?
-   หยิบ Thread มา แล้วจ่ายงานให้มัน
-   Thread เริ่ม Execute Blocking I/O Task
-   เมื่อ Operation ทุกอย่างเสร็จสิ้น ให้ส่ง Response กลับไปยัง Event Loop
-   Event Loop หยิบผลลัพธ์ แล้วส่งต่อไปยัง Client

Ref: [# ทำความเข้าใจ Node.js กันอีกรอบ ก่อนย้ายบ้านไป Golang](https://medium.com/@goangle/%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%88-event-loop-%E0%B9%83%E0%B8%99-node-js-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AD%E0%B8%B5%E0%B8%81%E0%B8%A3%E0%B8%AD%E0%B8%9A-d80930ef081d)

### 2.ttn Module {/ttn, GET}

### 3.ทํา API ออกสําหรับดึงข้อมูลที่ทําในข้อที่ 2 ออกมํา โดยส่งมําเป็น code, รูปแสดงผลกํารทํางํานของโปรแกรม

[Path ยิง API](http://127.0.0.1:3030/ttn)
```
{
	"min": 0,
	"max": 0,
	"avg": 0,
	"data": [],
	"predict_1": "",
    "predict_7": ""
}
```

### 4. Mock-up users จำนวน 3 users เมื่อ approve  ครบ ให้ Notification มาทาง e-mail

#### Mock users
- user1@gmail.com
- user2@gmail.com
- user3@gmail.com

[Login](http://127.0.0.1:3000/login)
[หน้า Form](http://127.0.0.1:3000/)

## docker-compose
```sh
docker-compose up -d api app
```
