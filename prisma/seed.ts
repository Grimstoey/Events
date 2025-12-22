import {createEvents} from '../src/db/createEvents';
import {prisma} from '../src/lib/prisma'


// createEvents()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });



//ลบ แล้ว สร้าง
//ลบแต่ number ของคีย์ยังต่อจากเดิม ไม่ได้เหมือน reset
// prisma.event.deleteMany().then(() => {
//    createEvents()
//        .catch((e) => {
//            console.error(e);
//            process.exit(1);
//        })
//        .finally(async () => {
//            await prisma.$disconnect();
//        });
// })


//เขียนในรุปแบบ async/await
const seedData = async ()=> {
   await prisma.event.deleteMany();
   await prisma.organizer.deleteMany();
   await createEvents();
}
await seedData();
