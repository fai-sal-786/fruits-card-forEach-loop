var fruits = [
    {
      name: "Mango",
      desc: "Mangoes are not only delicious but also nutritious, offering a range of health benefits for your body and mind.",
      image:
        "https://th.bing.com/th/id/R.3b93c8f4be6d43a325e68d0e4ff9b0f9?rik=5d6CjvWFfb2%2fYQ&pid=ImgRaw&r=0",
    },
    {
      name: "Watermelon",
      desc: "Watermelon full of benefits it help you stay hydrated and provide various nutrients and antioxidants",
      image:
        "data:image/webp;base64,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",
    },
    {
      name: "Peach",
      desc: "Peach offer many health benefits, such as improved digestion, heart health, and skin protection",
      image:
        "https://www.cabofinefoods.com/wp-content/uploads/2020/10/Fresh-Produce-Peaches.jpg",
    },
    {
      name: "Cherry",
      desc: "cherries contain anti-inflammatory and antioxidant which help to relieve muscle pain, damage, and inflammation ",
      image:
        "https://th.bing.com/th/id/R.453c46bb90c681a2b036d4979fdb57ff?rik=vixTvH7BIzICfQ&pid=ImgRaw&r=0",
    },
    {
      name: "Strawberry",
      desc: "The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture",
      image:
        "https://th.bing.com/th/id/R.e4f082b30e91d437faedfb70a097eeb3?rik=i4gh%2bs4882rACQ&pid=ImgRaw&r=0",
    },
    {
      name: "Apple",
      desc: "Apples are nutritious fruits that may lower your risk of cancer, diabetes, heart disease, and more. ",
      image:
        "https://th.bing.com/th/id/R.526e70d953f3f2475e36fc146027cc62?rik=xWkkLo%2fNxrIS5Q&riu=http%3a%2f%2fshine-fruit.com%2fwp-content%2fuploads%2f2021%2f09%2fa01.jpg&ehk=tbrZfDC4kbagpq9GMmHU2WMSB9DA8YqTDecYflI2%2bJE%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Grape",
      desc: "Grapes lower blood pressure, cholesterol, and blood sugar, as well as protect against cancer and oxidative stress",
      image:
        "https://barakatfresh.ae/media/catalog/product/cache/3660a992f2fa7b903faee280631091b9/g/r/green-grapes-seedless.jpg",
    },
    {
      name: "Guava",
      desc: "Guava is a tropical fruit with high vitamin C, fiber, and antioxidants it also improve digestion and boost immune system",
      image:
        "https://thumbs.dreamstime.com/b/guava-white-background-135749515.jpg",
    },
    {
      name: "Banana",
      desc: "Bananas can boost your heart health, digestion, diabetes management, weight control, and more.",
      image:
        "https://th.bing.com/th/id/OIP._IAzDqkmlHRW7rygoqXZagHaHa?w=600&h=600&rs=1&pid=ImgDetMain",
    },
    {
      name: "kiwi",
      desc: "Kiwis are nutritious fruits that are high in vitamin C, fiber, and plant compounds with antioxidant and anti-inflammatory effects",
      image:
        "https://th.bing.com/th/id/OIP.Go8YNQjh4LJaB0bek8C4DQHaHa?rs=1&pid=ImgDetMain",
    },
  
    {
      name: "Muskmelon",
      desc:"Muskmelon is a super fruit that is rich in water, vitamin C, potassium and folate. It helps in weight loss, diabetes, hypertension, vision, immunity, skin, hair",
      image:
        "https://static.toiimg.com/photo/78075710.cms",
    },
    {
      name: "Papaya",
      desc: "Papaya has many benefits, including protection against heart disease, reduced inflammation, aid in digestion, and boosting your immune system.",
      image:
        "https://thumbs.dreamstime.com/b/papaya-isolated-white-background-29901233.jpg",
    },
  ];
  
  
  var display_box = document.getElementById("display_box"); //getting display box 
  
  
  //********************( for each loop to creat and display elenebt)********************* */
  fruits.forEach(function (data, ind) {
    console.log(data);
    var card = `
  <div class="rounded overflow-hidden shadow-lg card_size ">
  <img class=" text-center img-size" src="${data.image}" alt="Mountain">
  <div class="px-6 py-4">
    //<div class="font-bold text-lg mb-2">${data.name}</div>
    //<p class=" text-base">${data.desc}</p>
    <div class="font-bold text-lg mb-2">${data.name.toUpperCase()}</div>
      <p class=" text-base" style=" font-size: 15px;">${data.desc}</p>
  </div>
  <div class="px-6 pt-4 pb-2">
  <button class="bg-gray-300 hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded" onclick="update(this)">
  <i class="fa-solid fa-pencil"></i>
  </button>
  <button class="bg-gray-300 hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded" onclick="del(${ind})">
  <i class="fa-solid fa-trash-can"></i>
  </button>
  </div>
  </div>`;
    display_box.innerHTML += card;
  });
  //*******************************( description update function )***************************
  function update(ele) {
    console.log(ele);
    //getting the decsription which is the 2nd child of grand parent of element
    var update_description =
      ele.parentElement.parentElement.children[1].children[1];
  //updating inner text
  update_description.innerText = prompt("Desc");
}
//*******************************( elment delete function )*******************************
function del(ele) {
  console.log(ele);// here we gate the direct index number of slected element(object)
  
  fruits.splice(ele, 1); //removing the user seleted element(object) through array.slice()
  
  console.log("element in array" + fruits);
  display_box.innerHTML = ""; //empty the display box to display updated array
  fruits.forEach(function (data, ind) {
    var card = ` <div class="rounded overflow-hidden shadow-lg card_size">
<img class="w-full img-size" src="${data.image}" alt="Mountain">
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2">${data.name}</div>
  <p class="text-gray-700 text-base">${data.desc}</p>
</div>
<div class="px-6 pt-4 pb-2">
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onclick="update(this)">
<i class="fa-solid fa-pencil"></i>
</button>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onclick="del(${ind})">
<i class="fa-solid fa-trash-can"></i>
</button>
</div>
</div>`;
    display_box.innerHTML += card; //updating U.I
  });
} //end of delete function
//inside the delete function we are doing the same process again for creating card
// because when ever user delete an element(object) from array so we have to update U.I  