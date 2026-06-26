
c=0;
n=0;
user=["amitmahatacku2017@gmail.com"]
pwd=["Amit@1234"]
 Name=["AM"]
Restaurent=["Mashq","Motimahal"]
ratingg=[["4.5","3.9"],["3.5","4.8"],["4.2","3.8"],["9,0","8.8"],["6.2","8.7"]]
address=["North Indian, Kebab, Rolls, Desserts, Beverages Shop 1, Line 9, N Road, Bistupur, Jamshedpur"]
items=[["Chicken Tikka(8pcs)","Chicken Masala","Chicken Biryani","Egg Briyani"," Butter Chicken","Musroom Masala","Paneer lababdar"," Hakka Noodles","Chilli chicken"],
		["Chicken Tikka(8pcs)","Chicken Masala","Chicken Biryani","Egg Briyani"," Butter Chicken","Musroom Masala","Paneer lababdar"," Hakka Noodles","Chilli chicken"],
		["Chicken Tikka(8pcs)","Chicken Masala","Chicken Biryani","Egg Briyani"," Butter Chicken","Musroom Masala","Paneer lababdar"," Hakka Noodles","Chilli chicken"]]

prices=[["399","299","199","549","149","311","242","160","120"],
		["399","299","199","549","149","311","242","160","120"],
		["399","299","199","549","149","311","242","160","120"]]

foods=[["chicken.jpg","tandoori.avif","briyani.jpeg","motimahal.avif","novelty.avif","","","noodles.jpg",""],
		["chicken.jpg","tandoori.avif","briyani.jpeg","motimahal.avif","novelty.avif","","","noodles.jpg",""],
		["chicken.jpg","tandoori.avif","briyani.jpeg","motimahal.avif","novelty.avif","","","noodles.jpg",""]]
function setpage()
        {
            document.getElementById("restro-mashq").style.display="none"
            // document.getElementById("time").style.display="none"
            document.getElementById("restaurant").style.display="block"

			document.getElementById("d1").style.color="Red"
			document.getElementById("b1").style.borderBottom=" 3px solid red"

			document.getElementById("SLin").style.color="red"
			document.getElementById("SLin").style.borderBottom=" 3px solid red"

			document.getElementById("viewcart").style.display="none"
			document.getElementById("login").style.display="none"	
			document.getElementById("cart").style.display="none"  
			document.getElementById("emptycart").style.display="none"
			
			document.getElementById("offerss").style.display="none"

        }
function signup()
{
	document.getElementById("login").style.display="block"

}
function signinzomato()
{
	found=0;
	tuser=document.getElementById("email").value
	tpass=document.getElementById("passwd").value
	

	for(i=0;i<user.length;i++)
	{
		if(tuser==user[i] && tpass==pwd[i])
		{
			found=1;
			break;
		}
	}
	if(found==1)
	{
		alert("Login Successfull");
		document.getElementById("login").style.display="none"
	}
	else{
		alert("Login Denied");
		
	}
}
function showpass()
{	

	showcheckbox=document.getElementById("showPassword")
	
	if(showcheckbox.checked)
	{
	document.getElementById("passwd").type="text";
	}
	else
	{
		document.getElementById("passwd").type="password";
	}	
	

}
function offers()
{
	document.getElementById("offerss").style.display="block"
}

function continueorder()
{
	document.getElementById("emptycart").style.display="none"
}


function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";

    document.getElementById("SLin").style.color="red"
	document.getElementById("SLup").style.color="rgba(19, 19, 18, 0.74)"
	document.getElementById("SLin").style.borderBottom=" 3px solid red"
	document.getElementById("SLup").style.borderBottom="none"
}

function showSignup() {
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";

    document.getElementById("SLup").style.color="red"
	document.getElementById("SLin").style.color="rgba(19, 19, 18, 0.74)"	
	document.getElementById("SLup").style.borderBottom=" 3px solid red"
	document.getElementById("SLin").style.borderBottom="none"
}

function cross(){
	document.getElementById("login").style.display="none"
	document.getElementById("cart").style.display="none"
}

        // function arrow()
        // {
        //     document.getElementById("time").style.display="block"
        // }
        function faltu(n)
        {
            document.getElementById("restro-mashq").style.display="block"   
            document.getElementById("restaurant").style.display="none"
		    document.getElementById("restro-name").innerHTML=Restaurent[n-1]
            document.getElementById("add").innerHTML=address[n-1]
			
			
			for (let i = 1; i <= 9; i++) 
			{
				let el = document.getElementById("additems" + i);
				if (el) 
				{
					el.style.display = "none";
				}
			}
            for(i=0;i<2;i++)
            {
                document.getElementById("rating"+(i+1)).innerHTML=ratingg[n-1][i]
            }

            for(i=0;i<9;i++)
            {
                document.getElementById("item"+i).innerHTML=items[n-1][i]
                document.getElementById("price"+i).innerHTML=prices[n-1][i]
				document.getElementById("food-add"+i).src=foods[n-1][i]
		
            }
			
		}
		
	
	function dinning(){
		document.getElementById("d1").style.color="red"
		document.getElementById("d2").style.color="rgba(19, 19, 18, 0.74)"
		document.getElementById("d3").style.color="rgba(19, 19, 18, 0.74)"
		document.getElementById("b1").style.borderBottom=" 3px solid red"
		document.getElementById("b2").style.borderBottom="none"
		document.getElementById("b3").style.borderBottom="none"
		
	}
	function dinning1(){
		document.getElementById("d1").style.color="rgba(19, 19, 18, 0.74)"
		document.getElementById("d2").style.color="Red"
		document.getElementById("d3").style.color="rgba(19, 19, 18, 0.74)"
		document.getElementById("b2").style.borderBottom = "3px solid red";
		document.getElementById("b1").style.borderBottom="none"
		document.getElementById("b3").style.borderBottom="none"

	}
function dinning2(){
		document.getElementById("d1").style.color="rgba(19, 19, 18, 0.74)"
		document.getElementById("d2").style.color="rgba(19, 19, 18, 0.74)"
		document.getElementById("d3").style.color="Red"
		document.getElementById("b3").style.borderBottom = "3px solid red";
		document.getElementById("b1").style.borderBottom="none"
		document.getElementById("b2").style.borderBottom="none"

		
	}
	function add(n){
		document.getElementById("viewcart").style.display="block"
		document.getElementById("additem"+n).style.display="none"
		document.getElementById("additems"+n).style.display="block"
		

		 xno=parseInt(document.getElementById("lblqty"+n).innerHTML)
               xno=xno+1
               document.getElementById("lblqty"+n).innerHTML=xno
		
		 c=0;
		for(i=1;i<10;i++)
		{
			if(parseInt(document.getElementById("lblqty"+i).innerHTML)>0)
			{
				// c++;
				c=c+parseInt(document.getElementById("lblqty"+i).innerHTML);
				
			}
		}
		document.getElementById("cartqty").innerHTML=c
		
		
	}
	function inc(itemno)
      {
               xno=parseInt(document.getElementById("lblqty"+itemno).innerHTML)
               xno=xno+1
               document.getElementById("lblqty"+itemno).innerHTML=xno
			   c=c+1
			   document.getElementById("cartqty").innerHTML=c
      }
      function dec(itemno)
      {	
            xno=parseInt(document.getElementById("lblqty"+itemno).innerHTML)
			if(xno==0)
				{
					document.getElementById("additem"+itemno).style.display="block"	
					document.getElementById("additems"+itemno).style.display="none"

				}
        	if(xno>0)
        	{
            	xno=xno-1
            	document.getElementById("lblqty"+itemno).innerHTML=xno
				if(xno==0)
				{
					document.getElementById("additem"+itemno).style.display="block"	
					document.getElementById("additems"+itemno).style.display="none"
				}
        	}
			c=c-1
			   document.getElementById("cartqty").innerHTML=c
			   if(c==0)
			   {
			   	document.getElementById("viewcart").style.display="none"
			   }
      }

    // function leftarrow()
	// {
	//   if(x<=6)
	//   {
	//    document.getElementById("img1").src="filename"+x+".jpg"
	//    x=x+1
	//    }
	//    if(x==7)
	//    x=6
	// }
	// function rightarrow()
	// {
	//   if(x>0)
	//   {
	//    document.getElementById("img1").src="filename"+x+".jpg"
	//    x=x-1
	//    }
	//    if(x==0)
	//    x=0
	// }


function scrollslider(direction)
{
    const slider = document.getElementById("offers");
    const scrollAmount = 250;

    slider.scrollLeft = slider.scrollLeft + (direction * scrollAmount);
}

function viewcartt()
{
	
	document.getElementById("restroname").innerHTML=Restaurent[n-1]
    document.getElementById("cart").style.display = "none";
	document.getElementById("emptycart").style.display = "block";

    let k = 0;
	n=0;
    // 🔹 Step 1: Hide all rows first
    for (let r = 0; r < 9; r++) 
    {
        document.getElementById("row" + r).style.display = "none";
    }
sum=0
    // 🔹 Step 2: Show only selected items
    for (let i = 0; i < 9; i++)
    {
        let x = parseInt(document.getElementById("lblqty" + (i + 1)).innerHTML);
        
        if (x > 0)
        {
			document.getElementById("cart").style.display = "block";
			document.getElementById("emptycart").style.display = "none";
            document.getElementById("itemnme" + k).innerHTML = items[n][i];
			 document.getElementById("fprice" + k).innerHTML=prices[n][i];
            document.getElementById("foodprice" + k).innerHTML = (prices[n][i]*x)
			document.getElementById("qty"+k).innerHTML =x
            sum=sum+(prices[n][i]*x)
			totalpay=sum-50+30+25;
            document.getElementById("row" + k).style.display = "table-row";

            k++;
        }
    }
	document.getElementById("itemtotal").innerHTML="₹"+sum
	document.getElementById("pay").innerHTML="₹"+totalpay
}

