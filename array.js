const breakfastMenu=['Pancakes','Eggs','Toast','Coffee'];
const dessertMenu =['Ice','Cream','Pan','Cake']
const mainCourseMenu =['Dosa','Idli','Sambhar','Chutni'];
const breakfastMenuItemHtml= breakfastMenu.map((item,index) => `<p> Item: ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML=breakfastMenuItemHtml;
let mainCourseItem='';
mainCourseMenu.forEach((item,index) =>{
    mainCourseItem += `<p>Item ${index + 1} :${item}</p>`;}
);
document.getElementById('maincourseMenuItems').innerHTML=mainCourseItem;
let dessertItem='';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem+=`<p> Item ${i + 1 } :${dessertMenu[i]}</p>`;
    
}
document.getElementById('dessertMenuItems').innerHTML=dessertItem;