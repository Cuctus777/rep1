let toys=[{
    name:"Большой шар с рисунком Цветок",
    counts:2,
    year:1960,
    shape:"шар",
    color:"жёлтый",
    size:"большой",
    favorite:false,
    
},
{
    name:"Зелёный шар с цветочным узором",
    counts:5,
    year:2000,
    shape:"шар",
    color:"зелёный",
    size:"большой",
    favorite:false,
    image:"D:\Рывкин Дмитрий\проект\images\img2.png"
},
{
    name:"Красный шар с напылением",
    counts:3,
    year:1990,
    shape:"шар",
    color:"красный",
    size:"большой",
    favorite:false,
    image:"\Рывкин Дмитрий\проект\images\img.png",
},
{
    name:"Фиолетовый шар с узором",
    counts:10,
    year:2000,
    shape:"шар",
    color:"фиолетовый",
    size:"маленький",
    favorite:false

},
{
    name:"Голубой шар с узором",
    counts:5,
    year:2000,
    shape:"шар",
    color:"голубой",
    size:"маленький",
    favorite:false
    
},
]
let car={brand:"BMW", year:2020};
let person={
    name:"Anna",
    age:30,
    isAdmin:false,
    hobbies:["спорт","фото"],
    greet(){console.log("Привет!");}
};

let toyStore={
    list:["redBall","blueBall","star"],
    getToy(index){
        return this.list[index];
    }
}
let tree={
    type:"green",
    toys:[],
    changeTree(newType){
        this.type=newType;
    },
    addToy(toy){
        this.toys.push(toy);
    },
    clearToys(){
        this.toys=[];
    }
};
let tree2={
    type:"snowy",
    bavkgorund:"living_room",
    garland:"multi",
    toys: [
        {id: 1,x: 120,y: 240,type:"ball_red"},
        {id: 2,x:160,y: 300,type:"bell_gold"}
    ]
};
toys = toys.map((toy, index) => {
    return {
        ...toy,
        id: index + 1,
    };
});
console.log('updated toys:', toys);
const title=document.querySelector("h1");

element.innerHTML="<b>Привет!</b>";
img.src="tree.png";
element.classList.add("active");
element.classList.remove("error");
element.classList.toggle("open");
lamp.classList.toggle("on");
const toy =document.querySelector(".toy");
console.log(toy.dataset.type);
console.log(toy.dataset.size);

const div=document.createElement("div");
document.body.appendChild(div);
element.classList.add("highlight");
const toysGrid=document.querySelector(".toys-grid");
toys.forEach((toy,index)=>{
const toyBox=document.createElement("div");
const img=document.createElement("img");
img.src=toy.image;
img.classList.add("toy");
img.draggable=true;
img.dataset.index=index;
const countBox=document.createElement("div");
countBox.textContent=toy.count;
countBox.style.color="white";
countBox.style.textAlign="center";
countBox.style.fontSize="14px";
toyBox.appendChild(img);
toyBox.appendChild(countBox);
toysGrid.appendChild(toyBox);
img.addEventListener("dragstart",e=>{
    if(toy.count===0){
        e.preventDefault();
        return;
    }
    e.dataTransfer.setData("toy",index);
});
});
let currentTree = {
    type: "",
    garland: "",
    toys: [],
  
    setTree(newType) {
      this.type = newType;
    },
  
    setGarland(newGarland) {
      this.garland = newGarland;
    },
  
    addToy(toy) {
      this.toys.push(toy);
    },
  
    showInfo() {
      console.log("Ёлка:", this.type);
      console.log("Гирлянда:", this.garland);
      console.log("Игрушки:", this.toys);
    }
  };
/*const treeArea=document.querySelector(".tree-area");
treeArea.addEventListener("dragover",e=>e.preventDefault());
treeArea.addEventListener("drop",e=>{
    e.preventDefault();
    const rect=treeArea.getBoundingClientRect();
    const x=e.clientX-rect.left;
    const y=e.clientY-rect.top;
    if (e.dataTransfer.getData("toy")!==""){
        const toyIndex=e.dataTransfer.getData("toy");
        const toy=toys[toyIndex];
        if(toy.count>0){
            toy.count-=1;
            const xpos=x-40;
            const ypos=y-40;
            const img=document.createElement("img");
            img.src=toy.image;
            img.classList.add("toy-on-tree");
            img.style.left=xpos+"px";
            img.style.top=ypos+"px";
            treeArea.appendChild(img);
            currentTree.addToy(toy,xpos,ypos);
            toysGrid.children[toyIndex].children[1].textContent=toy.count;
            img.addEventListener("click",()=>{
                img.remove();
                
            })

        }
    }

});*/
const treeArea = document.querySelector(".tree-area");

treeArea.addEventListener("dragover", e => e.preventDefault());

treeArea.addEventListener("drop", e => {
  e.preventDefault();

  const rect = treeArea.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (e.dataTransfer.getData("toy") !== "") {
    const toyIndex = e.dataTransfer.getData("toy");
    const toy = toys[toyIndex];

    if (toy.count > 0) {
      toy.count--;

      const xPos = x - 40;
      const yPos = y - 40;

      placedCounter++;
      const placedId = placedCounter;

      const img = document.createElement("img");
      img.src = toy.image;
      img.classList.add("toy-on-tree");

      img.style.left = xPos + "px";
      img.style.top = yPos + "px";

      // сохраняем id в DOM
      img.dataset.placedId = placedId;

      treeArea.appendChild(img);

      // сохраняем в объект текущей ёлки
      currentTree.addToy({
        id: toy.id,
        placedId: placedId,
        x: xPos,
        y: yPos,
        image: toy.image
      });
      console.log('currentTree.toys:', currentTree.toys);
      

      toysGrid.children[toyIndex].children[1].textContent = toy.count;

      img.addEventListener("click", () => {
        console.log("Клик по игрушке", img.dataset.placedId);

        img.remove();

        toy.count++;
        toysGrid.children[toyIndex].children[1].textContent = toy.count;

        currentTree.toys = currentTree.toys.filter(
          t => t.placedId != img.dataset.placedId // удалить игрушку
        );
      });
    }
  }

  if (e.dataTransfer.getData("garland") !== "") {
    const gIndex = e.dataTransfer.getData("garland");
    const garland = garlands[gIndex];

    currentTree.setGarland(garland.type);

    const img = document.createElement("img");
    img.src = garland.image;
    img.classList.add("garland-on-tree");

    img.style.left = (x - 140) + "px";
    img.style.top = (y - 20) + "px";

    img.style.animationDelay = (Math.random() * 1.6) + "s";

    treeArea.appendChild(img);
    
    //при клике на гирлянду удаляем ее из DOM
     img.addEventListener("click", () => {
      img.remove();
      // удаляем гирлянду из объекта текущей ёлки
      currentTree.setGarland("");
    });
  }
});
let treeData={
  type:currentTree.type,
  garland:currentTree.garland,
  toys:currentTree.toys
}
function getResultCurrentTreeData(){
  const resultCurrentTreeData={
    type:currentTree.type,
    garland:currentTree.garland,
    toys:currentTree.toys.map(toy=>({
      id:toy.id,
      x:toy.x,
      y:toy.y,
      image:toy.image
    }))
  };
  return resultCurrentTreeData;
}
const saveTreeBtn=document.getElementById("save-tree-btn");
saveTreeBtn.addEventListener("click",()=>{
  const resultCurrentTreeData=getResultCurrentTreeData();
  console.log(resultCurrentTreeData);
  const resultCurrentTreeJSON=JSON.stringify(resultCurrentTreeData);
  console.log(resultCurrentTreeJSON);
});
