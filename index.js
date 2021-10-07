function hello () {
    var says = []
    for (let index = 0; index < 5; index++) {
        says.push(() => {
            console.log(index)
        })
    }
    return says
}

const says = hello()
says[1]()
// for (let index = 0; index < 5; index++) {
//     console.log(index)
// }
// console.log(index)

// const says = hello()
// says[0]()

// Em có 1 vài thắc mắc trong quá trình học, xin được hỏi a thêm:
// 1. Environment khi định nghĩa Function Callback được xác định như thế nào anh 💥

// 2. Những biến trong Function CallBack thì lookup theo thứ tự nào ? Trong TH những function nested với nhau 💥

// 3. Function CallBack có thực sự ghi nhớ scope của nó, cái lần mà nó defined ? // Cụ thể là khi em sử dụng hàm setInterval(callback,milisecond) nested trong function khác có 1 biến let counter = 0 . Nếu em update 1 biến, được trong callback như sau: ( counter = counter + 1)  thì nó có ảnh hưởng đến biến local(counter) của function không?  Và khi "lần gọi thứ 2" của hàm setInterval(), thì callback sẽ lấy biến counter ở vùng nào ?
