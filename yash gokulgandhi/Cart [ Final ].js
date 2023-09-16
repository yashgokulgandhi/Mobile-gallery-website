window.onload = function(){
	//cart box
	const iconShopping = document.querySelector('.iconShopping');
	const cartCloseBtn = document.querySelector('.fa-close');
	const Bill = document.querySelector('.Bill');
	iconShopping.addEventListener("click",function(){
		Bill.classList.add('active');
	});
	Bill.addEventListener("click",function(){
		Bill.classList.remove('active');
	});


	// adding data to localStorage
	const attToCartBtn = document.getElementsByClassName('attToCart');
	let items = [];
	for(let i=0; i<attToCartBtn.length; i++){
		attToCartBtn[i].addEventListener("click",function(e){
			if(typeof(Storage) !== 'undefined'){
				let item = {
						id:i+1,
						name:e.target.parentElement.children[0].textContent,
						price:e.target.parentElement.children[1].children[0].textContent,
						no:1
					};
				if(JSON.parse(localStorage.getItem('items')) === null){
					items.push(item);
					localStorage.setItem("items",JSON.stringify(items));
					window.location.reload();
				}else{
					const localItems = JSON.parse(localStorage.getItem("items"));
					localItems.map(data=>{
						if(item.id == data.id){
							item.no = data.no + 1;
						}else{
							items.push(data);
						}
					});
					items.push(item);
					localStorage.setItem('items',JSON.stringify(items));
					window.location.reload();
				}
			}else{
				alert('local storage is not working on your browser');
			}
		});
	}
	// adding data to shopping cart 
	const iconShoppingP = document.querySelector('.iconShopping p');
	let no = 0;
	JSON.parse(localStorage.getItem('items')).map(data=>{
		no = no+data.no
;	});
	iconShoppingP.innerHTML = no;


	//adding Bill data in table
{
    const cardBoxTable = Bill.querySelector('table');
	let tableData = '';
	tableData += '<tr><th>Sr.No.</th><th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Item Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;Quantity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Price</th><th></th></tr>';
	if(JSON.parse(localStorage.getItem('items'))[0] === null){
		tableData += '<tr><td colspan="5">No items found</td></tr>'
	}else{
		JSON.parse(localStorage.getItem('items')).map(data=>{
			tableData += '<tr><th>'+data.id+'</th><th>'+data.name+'</th><th>'+data.no+'&nbsp;&nbsp;&nbsp;</th><th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data.price+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
		});
		
	}
	cardBoxTable.innerHTML = tableData;

	function countTotal() {
		var count = 0
		JSON.parse(localStorage.getItem('items')).map(data=>{
			count += parseInt(data.no)
		})
		return(count)
	}
	
	function makeBill() {
		var count = 0
		JSON.parse(localStorage.getItem('items')).map(data=>{
			count += parseInt(data.no)*parseInt(data.price)
		})
		return(count)
	}
}

    {
        const cardBoxTable = Bill.querySelector('table2');
	let tableData = '';
	tableData += '<tr><th>Grand Total</th><td>&nbsp;&nbsp;=&nbsp;&nbsp;</td></tr><tr><td>'+makeBill()+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>'
	tableData += '<tr><th>Total Quantity</th><td>&nbsp;&nbsp;=&nbsp;&nbsp;</td></tr><tr><td>'+countTotal()+'</td></tr>'
	if(JSON.parse(localStorage.getItem('items'))[0] === null){
		tableData += '<tr><td colspan="5">No items found</td></tr>'
	}else{
		JSON.parse(localStorage.getItem('items')).map(data=>{
			
		});
		
	}
	cardBoxTable.innerHTML = tableData;

	function countTotal() {
		var count = 0
		JSON.parse(localStorage.getItem('items')).map(data=>{
			count += parseInt(data.no)
		})
		return(count)
	}
	
	function makeBill() {
		var count = 0
		JSON.parse(localStorage.getItem('items')).map(data=>{
			count += parseInt(data.no)*parseInt(data.price)
		})
		return(count)
	}
    }
}