let total=0
function handClick(name,price){
    console.log(name,price);

    const selectedItemContainer=document.getElementById('selected-item');
    const productName =document.createElement('p');
    productName.innerText=name;
    selectedItemContainer.appendChild(productName);
// price
    const li =document.createElement('li');
    li.innerText=price;
  
    total=parseInt(total)+ parseInt(price);
    document.getElementById('total').innerText=total;

    // discount
    document.getElementById('apply-btn').addEventListener('click',function(){

        const inputApply=document.getElementById('input-apply');
        const inputApplyValue=inputApply.value;
        inputApply.value='';
        // console.log(inputApplyValue);

        if(inputApplyValue === 'SELL200'){
               let price =(total*20)/100;
                const priceInfo=parseInt(price)
                // 
            const discount=document.getElementById('discount');
            const discountInfo=total-priceInfo;
            discount.innerText=priceInfo;


            const totalPriceInfo=document.getElementById('total-info');
            totalPriceInfo.innerText=discountInfo;


            // 

        }

     })


    }
