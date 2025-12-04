//your JS code here. If required.
let arr=[1,2,3,4];
const div=document.getElementById("output");

const promise= new Promise((resolve,reject)=>{
	     let filterArr=arr.filter((elem)=>elem%2==0);     
	   setTimeout(()=>resolve(filterArr),1000);
}).then((arr)=>{
	 div.textContent=arr.join(",");
	 let newArr=arr.map(elem=> elem*2);
	return new Promise((resolve,reject)=>{
		setTimeout(()=>resolve(newArr),2000);
	})
}).then((newArr)=>{
	div.textContent=newArr.join(",");
});