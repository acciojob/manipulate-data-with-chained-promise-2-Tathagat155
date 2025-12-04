//your JS code here. If required.
let arr=[1,2,3,4];
const div=document.getElementById("output");
const promise= new Promise((resolve,reject)=>{
	     let filterArr=arr.filter((elem)=>elem%2==0);
	     
	   setTimeout(()=>resolve(filterArr.join(",")),1000);
}).then((arr)=>{
	 div.textContent=arr;
	 let newArr=arr.map((elem)=>{
		 return elem*2;
	 });
	const promise=new promise((resolve,reject)=>{
		setTimeout(()=>resolve(newArr.join(",")),2000);
	})
}.then((newArr)=>{
	div.textContent=newArr;
}