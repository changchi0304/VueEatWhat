// const therole1 = document.querySelector('#therole1');
// const therole2 = document.querySelector('#therole2');
// const roleBtn = document.querySelector('.roleBtn');
// console.log(roleBtn);
// console.log(therole1,therole2);

//主角設定
// therole1.addEventListener('click', function (e) {
//     if (e.target.tagName === 'IMG') {
//         var images = therole1.getElementsByTagName('img');
//         for (var i = 0; i < images.length; i++) {
//             images[i].classList.remove('choosebox1');
//         }
//         e.target.classList.add('choosebox1');
//     }
// });


//配角設定
// therole2.addEventListener('click', function (e) {
//     if (e.target.tagName === 'IMG') {
//         var images = therole2.getElementsByTagName('img');
//         for (var i = 0; i < images.length; i++) {
//             images[i].classList.remove('choosebox2');
//         }
//         e.target.classList.add('choosebox2');
//     }
// });


// roleBtn.addEventListener('click', function () {
//     var selectedRole1 = therole1.querySelector('.choosebox1');
//     var selectedRole2 = therole2.querySelector('.choosebox2');
//     if (!selectedRole1 || !selectedRole2) {
//         alert('請務必選擇主角和配角!');
//     } else {
//         window.location.href = '/chat.html';
//     }
// });


//設定當你點擊到哪個角色 聊天室那邊的角色就會變成你選擇的圖片
//設定主角區塊
// const role1Image = document.querySelectorAll('.role1 img');

// role1Image.forEach(image=>{
//     image.addEventListener('click',function(){
//         const imagePath = this.getAttribute('src');
//         localStorage.setItem('selectedImage', imagePath);
//     });
// });

//設定配角區塊
//鎖定role2裡面的4張圖片
// const role2Image = document.querySelectorAll('.role2 img');

// role2Image.forEach(image=>{
//     image.addEventListener('click',function(){
//         const imagePath = this.getAttribute('src');
//                                //key          value
//         localStorage.setItem('selectedImage2',imagePath);
//     })
// })





//vue data
const App = {
    data() {
        return {
            //大標題
            title: "請選擇聊天對象",
            //role1區塊
            //role1的小標  role1圖片 設定點擊圖片默認值
            rolet1itle: "主角:",
            animalImg: ['c01.jpg', 'c02.jpg', 'c03.jpg', 'c04.jpg'],
            selectedrole1: null,
            
            //role2區塊
            //role2的小標  role2圖片 設定點擊圖片默認值
            rolet2itle: "配角:",
            animalImg2: ['b01.jpg', 'b02.jpeg', 'b03.jpeg', 'b04.jpeg'],
            selectedrole2: null,    //先將圖片的默認值設定為沒有被點到
           
            ischeck:false,


        }
    },
    methods: {
        //role1的圖片
        getImgsrc(role1img) {
            return './img/animal/' + role1img;
        },
        //role1圖片點擊事件
        selectrole1(index){
            this.selectedrole1 = index;
        },

        //role2的圖片
        getImgsrc2(role2img) {
            return './img/animal/' + role2img;
        },
        //role2圖片點擊事件
        selectrole2(index){
            this.selectedrole2 = index;
        },
        //紅色按鈕設定
        checkroles(){
            // console.log(this.selectedrole2,this.selectedrole1);
            if (this.selectedrole1 === null || this.selectedrole2 === null) {
                alert('請務必選擇主角與配角！');
              } else{
                window.location.href = "./chat.html";
              }

        }
    }
}

const app = Vue.createApp(App);
        app.mount('#app');














