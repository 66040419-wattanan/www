const products = [

{
  id:1,
  name:"น้ำปลาร้าสูตรบ้านอีสาน",
  price:30,
  cat:"food",
  region:"isan",
  desc:"ปลาร้าหมักธรรมชาติ สูตรชุมชน",
  img:"images/products/food1.jpg"
},

{
  id:2,
  name:"น้ำปลาร้าพรีเมียม",
  price:250,
  cat:"food",
  region:"isan",
  desc:"กลิ่นหอม รสเข้ม",
  img:"images/products/food2.jpg"
},

{
  id:3,
  name:"กระเป๋าสานไม้ไผ่",
  price:450,
  cat:"bag",
  region:"north",
  desc:"งานแฮนด์เมดแท้",
  img:"images/products/bag1.jpg"
},

{
  id:4,
  name:"สมุนไพรอบแห้ง",
  price:120,
  cat:"herb",
  region:"central",
  desc:"สมุนไพรธรรมชาติ",
  img:"images/products/herb1.jpg"
},

{
  id:5,
  name:"เครื่องจักสานชุมชนใต้",
  price:380,
  cat:"craft",
  region:"south",
  desc:"ทำมือจากชาวบ้าน",
  img:"images/products/craft1.jpg"
},

{
  id:6,
  name:"เเจกันเเฮนเมด",
  price:130,
  cat:"craft",
  region:"north",
  desc:"งานแฮนด์เมดแท้",
  img:"images/products/craft2.jpg"
},

{
  id:7,
  name:"ตะกร้าสานพลาสติก",
  price:190,
  cat:"craft",
  region:"north",
  desc:"งานแฮนด์เมดแท้",
  img:"images/products/craft3.jpg"
},

{
  id:8,
  name:"กล่องนามบัตร",
  price:70,
  cat:"craft",
  region:"north",
  desc:"งานแฮนด์เมดแท้",
  img:"images/products/craft4.jpg"
},

{
  id:9,
  name:"กล่องไม้จิ้มฟัน",
  price:50,
  cat:"craft",
  region:"north",
  desc:"งานแฮนด์เมดแท้",
  img:"images/products/craft5.jpg"
},

{
  id:10,
  name:"เเจกันไม้ทรงสูง",
  price:130,
  cat:"craft",
  region:"north",
  desc:"งานแฮนด์เมดแท้",
  img:"images/products/craft6.jpg"
},

{
  id:11,
  name:"สมุดโน๊ต เซ็ต 3 เล่ม",
  price:150,
  cat:"craft",
  region:"north",
  desc:"งานแฮนด์เมดแท้",
  img:"images/products/craft7.jpg"
},

{
  id:12,
  name:"สมุดอัลบั้มช้างเรซิ่น",
  price:200,
  cat:"craft",
  region:"north",
  desc:"งานแฮนด์เมดแท้",
  img:"images/products/craft8.jpg"
},

{
  id:13,
  name:"พัดเพ้นท์สีลายน้ำ คละลาย",
  price:40,
  cat:"craft",
  region:"north",
  desc:"งานแฮนด์เมดแท้",
  img:"images/products/craft9.jpg"
},

{
  id:14,
  name:"ชุดกาแฟสังคโลก",
  price:400,
  cat:"craft",
  region:"north",
  desc:"งานแฮนด์เมดแท้",
  img:"images/products/craft10.jpg"
},

{
  id:15,
  name:"แหนมซี่โครงหมู ร้านวีทีแหนมเนือง ",
  price:120,
  cat:"food",
  region:"isan",
  desc:"กลิ่นหอม รสเข้ม",
  img:"images/products/food3.jpg"
},

{
  id:16,
  name:"หมูหยอง กรอบ หอม อร่อย ร้านตั้งฮั้งเชียง ",
  price:150,
  cat:"food",
  region:"isan",
  desc:"กลิ่นหอม รสเข้ม",
  img:"images/products/food4.jpg"
},

{
  id:17,
  name:"แดงแหนมเนือง ",
  price:290,
  cat:"food",
  region:"isan",
  desc:"กลิ่นหอม รสเข้ม",
  img:"images/products/food5.jpg"
},

{
  id:18,
  name:"กล้วยสุกทอดเบรกแตกแม่อารักษ์ ",
  price:100,
  cat:"food",
  region:"isan",
  desc:"กลิ่นหอม รสเข้ม",
  img:"images/products/food6.jpg"
},

{
  id:19,
  name:"ซุปแจ่วฮ้อนเข้มข้น เผ็ดต้นตำรับ  ",
  price:99,
  cat:"food",
  region:"isan",
  desc:"กลิ่นหอม รสเข้ม",
  img:"images/products/food7.jpg"
},

{
  id:20,
  name:"ไส้กรอกอีสาน หม่ำรสดี   ",
  price:200,
  cat:"food",
  region:"isan",
  desc:"กลิ่นหอม รสเข้ม",
  img:"images/products/food8.jpg"
},

{
  id:21,
  name:"อินเตอร์หมูกระจก นครพนม",
  price:60,
  cat:"food",
  region:"isan",
  desc:"กลิ่นหอม รสเข้ม",
  img:"images/products/food9.jpg"
},

{
  id:22,
  name:"หมี่ตะคุ ชุดหมี่พร้อมน้ำปรุงสำเร็จรูป ",
  price:120,
  cat:"food",
  region:"isan",
  desc:"กลิ่นหอม รสเข้ม",
  img:"images/products/food10.jpg"
},

{
  id:23,
  name:"หมูยอใบตอง เนื้อหมูล้วน บริษัท กุนเชียง 5 ดาว ",
  price:150,  
  cat:"food",
  region:"isan",
  desc:"กลิ่นหอม รสเข้ม",
  img:"images/products/food11.jpg"
},

{
  id:24,
  name:"กล้วยน้ำว้าอบกรอบ รส เบรคแตก",
  price:150,  
  cat:"food",
  region:"isan",
  desc:"กลิ่นหอม รสเข้ม",
  img:"images/products/food12.jpg"
},

{
  id:25,
  name:"น้ำตาลมะพร้าว otop จ.สมุทรสงคราม ",
  price:250,
  cat:"herb",
  region:"central",
  desc:"สมุนไพรธรรมชาติ",
  img:"images/products/herb2.jpg"
},

{
  id:26,
  name:"มะขามหวานแกะเปลือกพันธุ์สีชมพู otop จ.เพชรบูรณ์",
  price:100,
  cat:"herb",
  region:"central",
  desc:"สมุนไพรธรรมชาติ",
  img:"images/products/herb3.jpg"
},

{
  id:27,
  name:"น้ำผึ้งป่าเดือนห้า otop จ.พิษณุโลก",
  price:490,
  cat:"herb",
  region:"central",
  desc:"สมุนไพรธรรมชาติ",
  img:"images/products/herb4.jpg"
},

{
  id:28,
  name:"กล้วยลืมเบรค otop จ.ราชบุรี ",
  price:40,
  cat:"herb",
  region:"central",
  desc:"สมุนไพรธรรมชาติ",
  img:"images/products/herb5.jpg"
},

{
  id:29,
  name:"เซรั่มน้ำมันงา otop จ.สมุทรปราการ ",
  price:160,
  cat:"herb",
  region:"central",
  desc:"สมุนไพรธรรมชาติ",
  img:"images/products/herb6.jpg"
},

{
  id:30,
  name:"ยาหม่องเสลดพังพอน สมุนไพรวังพรม otop จ.นครปฐม",
  price:350,
  cat:"herb",
  region:"central",
  desc:"สมุนไพรธรรมชาติ",
  img:"images/products/herb7.jpg"
},

{
  id:31,
  name:"อาหารเสริมจมูกข้าวกล้องหอมนิล otopจ.อยุธยา",
  price:290,
  cat:"herb",
  region:"central",
  desc:"สมุนไพรธรรมชาติ",
  img:"images/products/herb8.jpg"
},

{
  id:32,
  name:"คุกกี้รสกระเจี๊ยบผสมธัญพืช otop จ.สระบุรี",
  price:180,
  cat:"herb",
  region:"central",
  desc:"สมุนไพรธรรมชาติ",
  img:"images/products/herb9.jpg"
},

{
  id:33,
  name:"ทองม้วนน้ำตาลโตนด otopจ.เพชรบุรี",
  price:80,
  cat:"herb",
  region:"central",
  desc:"สมุนไพรธรรมชาติ",
  img:"images/products/herb10.jpg"
},

{
  id:34,
  name:"น้ำส้มควันไม้ otop จ.พิจิตร",
  price:50,
  cat:"herb",
  region:"central",
  desc:"สมุนไพรธรรมชาติ",
  img:"images/products/herb11.jpg"
},

{
  id:35,
  name:"ไข่เค็มไชยา",
  price:160,
  cat:"craft",
  region:"south",
  desc:"ทำมือจากชาวบ้าน",
  img:"images/products/bag2.jpg"
},

{
  id:36,
  name:"เต้าซ้อแม่บุญธรรม ",
  price:80,
  cat:"craft",
  region:"south",
  desc:"ทำมือจากชาวบ้าน",
  img:"images/products/bag4.jpg"
},

{
  id:37,
  name:"กาแฟสำเร็จรูปผสมชนิดผง ",
  price:130,
  cat:"craft",
  region:"south",
  desc:"ทำมือจากชาวบ้าน",
  img:"images/products/bag3.jpg"
},

{
  id:38,
  name:"กะปินาทับสงขลา ",
  price:55,
  cat:"craft",
  region:"south",
  desc:"ทำมือจากชาวบ้าน",
  img:"images/products/bag5.jpg"
},

{
  id:39,
  name:"กล้วยเล็บมือนางชุมพร ",
  price:50,
  cat:"craft",
  region:"south",
  desc:"ทำมือจากชาวบ้าน",
  img:"images/products/bag6.jpg"
},

{
  id:40,
  name:"เบญจเมธา เครื่องเคลือบเนื้อดีจากหาดทรายและท้องนาเมืองปัตตานี ",
  price:390,
  cat:"craft",
  region:"south",
  desc:"ทำมือจากชาวบ้าน",
  img:"images/products/bag7.jpg"
},

{
  id:41,
  name:"เครื่องเรือนจักสานจากแบรนด์วรรณี ของดีจากกระจูดเมืองลุง ",
  price:220,
  cat:"craft",
  region:"south",
  desc:"ทำมือจากชาวบ้าน",
  img:"images/products/bag8.jpg"
},

{
  id:42,
  name:"ผ้าปาละงิงผืนงามจากสารพันเทคนิคบาติกแห่งศรียะลาบาติก ",
  price:250,
  cat:"craft",
  region:"south",
  desc:"ทำมือจากชาวบ้าน",
  img:"images/products/bag9.jpg"
},

{
  id:43,
  name:"โฮมแวร์สุดเก๋จากลูกปัดมโนราห์แบรนด์ Natipong มนตร์ขลังแดนสงขลา ",
  price:360,
  cat:"craft",
  region:"south",
  desc:"ทำมือจากชาวบ้าน",
  img:"images/products/bag10.jpg"
},

{
  id:44,
  name:"SarnSard สินค้าไลฟ์สไตล์เสน่ห์เครื่องจักสานเตยปาหนันเมืองตรัง ",
  price:460,
  cat:"craft",
  region:"south",
  desc:"ทำมือจากชาวบ้าน",
  img:"images/products/bag11.jpg"
},

{
  id:45,
  name:"ผลิตภัณฑ์จากผ้าทออิสระแห่งซาโอริ เทคนิคญี่ปุ่นฉบับคนพังงา ",
  price:70,
  cat:"craft",
  region:"south",
  desc:"ทำมือจากชาวบ้าน",
  img:"images/products/bag12.jpg"
},

{
  id:46,
  name:"อาหารทะเลแปรรูปจากความอุดมสมบูรณ์ของท้องทะเลชุมพร ",
  price:80,
  cat:"craft",
  region:"south",
  desc:"ทำมือจากชาวบ้าน",
  img:"images/products/bag13.jpg"
},

{
  id:47,
  name:"กระเป๋าสานย่านลิเภาสไตล์โมเดิร์นแห่งบุญรัตน์ ของดีเมืองคอน ",
  price:400,
  cat:"craft",
  region:"south",
  desc:"ทำมือจากชาวบ้าน",
  img:"images/products/bag14.jpg"
},

{
  id:35,
  name:"แก้วมัคคละลาย",
  price:300,
  cat:"craft",
  region:"north",
  desc:"งานแฮนด์เมดแท้",
  img:"images/products/craft11.jpg"
}

];
