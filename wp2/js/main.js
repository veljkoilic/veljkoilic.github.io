var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
baseUrl += "/wp2/"
// console.log( getUrl.pathname.replace(/^\/|\/$/g, ''))

$(document).ready(function(){
    ajaxCallBack(baseUrl+"api/product.json", printFeaturedProducts);
    ajaxCallBack(baseUrl+"api/product.json", printShopProducts);
    ajaxCallBack(baseUrl+"api/categories.json", printCategories);
    ajaxCallBack(baseUrl+"api/brands.json", printBrands);



    

})

var printFeaturedProducts = function (products){
    var html="";
    for(var product of products){
        if(product.featured){

            html+=` <div class="single-products-catagory clearfix">
            <a href="product.html?id=${product.id}">
                <img src="${product.images[2].src}" alt="${product.images[2].alt}">
                <!-- Hover Content -->
                <div class="hover-content">
                    <div class="line"></div>
                    <p>From ${product.price} $</p>
                    <h4>${product.title}</h4>
                </div>
            </a>
        </div> `;

        }

    }
    $('#featured').html(html);

}
var printBrands = function (products){
    var html="";
    for(var product of products){
        html+=`
         <div class="form-check">
            <input class="form-check-input" type="checkbox" value="${product.brandId}" id="${product.title}">
            <label class="form-check-label" for="${product.title}">${product.title}</label>
        </div> `;
    }
    $('#widget-desc').html(html);

}


 
var printShopProducts = function (products){
    var html="";
    $("#shop").html(html);

    if(products.length == 0){
        html=`<img class="hover-img" src="./img/no-product.png" alt="No Products">`

    }
    let i = 0;
    let baza = 0;
    let brojStavki = parseInt(document.getElementById("viewProduct").value);
    $("#viewProduct").on("change", function(){
        brojStavki =  parseInt(document.getElementById("viewProduct").value);
    ajaxCallBack(baseUrl+"api/product.json", printShopProducts);
        return;

    });
    console.log(brojStavki)

    for(let product of products){
        let rating = product.rating;
        if(i == baza){
            html+= ` <div class='item row ml-3' data-hash="${i}">`
            console.log("pravim start")
            console.log(product.id, product.title, i, parseInt(baza)+parseInt(brojStavki))
        }


        html+=`
                    <div class="col-12 col-sm-6 col-md-12 col-xl-6">
                                    <div class="single-product-wrapper">
                                        <!-- Product Image -->
                                        <div class="product-img">
                                            <img src="${product.images[1].src}" alt="${product.images[1].alt}">
                                            <!-- Hover Thumb -->
                                            <img class="hover-img" src="${product.images[2].src}" alt="${product.images[2].alt}">
                                        </div>

                                        <!-- Product Description -->
                                        <div class="product-description d-flex align-items-center justify-content-between">
                                            <!-- Product Meta Data -->
                                            <div class="product-meta-data">
                                                <div class="line"></div>
                                                <p class="product-price">${product.price} $</p>
                                                <a href="product-details.html">
                                                    <h6>${product.title}</h6>
                                                </a>
                                            </div>
                                            <!-- Ratings & Cart -->
                                            <div class="ratings-cart text-right">
                                                <div class="ratings">
                                                `+printStars(rating) +`
                                                </div>
                                                <div class="cart">
                                                    <a href="cart.html" data-toggle="tooltip" data-placement="left" title="Add to Cart"><img style="width:20px" src="img/core-img/cart.png" alt=""></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
            if(i == parseInt(baza) + parseInt(brojStavki)){
                baza=i+1;
                html+= ` </div>`
                console.log('pravim end')
                console.log(product.id, product.title, i,baza, brojStavki,"ukupno", parseInt(baza)+parseInt(brojStavki))

            }
            i++

    }
    waitForElement(".item", 3000).then(function(){
        $(".owl-carousel").owlCarousel({
            items: 1,
            nav: true,
            navText: ["Previous", 'Next'],
            autoHeight: true



        });
        $('.owl-prev , .owl-next').css({
           "color": "#fff",
           "box-shadow": "none",
           "background-color": "#fbb710",
           "padding": "5px 20px",
           "border" : "none",
           "margin-top" : "50px",
           "margin-left" : "20px"

        });
        $('.owl-dots').css({"display":"none"});
        console.log("AAAAAA")
    }).catch(()=>{
        alert("element did not load in 3 seconds");
    });
    $("#shop").html(html);


}//                                        

function printStars(rating){
    let stars =''
    for (let i = 0; i < rating; i++) {
        stars+= `<i class="fa fa-star" aria-hidden="true"></i>`;
        
    }
    return stars;
}

function printCategories(categories){
    var html = `<li class="category"><a href="#" data-cat_id="0">All</a></li>`;
    for (const category of categories) {
        html+=`
            <li class="category"><a href="#" data-cat_id="${category.id}">${category.title}</a></li>
        `
        
    }
    $("#catagories-menu").html(html);
}

$(document).on("click",".category" ,function(){
    
        let clickedCategory = this.children[0].dataset.cat_id;
        $.ajax({
			url: baseUrl+"api/product.json",
			method: "get",
			dataType: "json",
			success: function(response){
                if(clickedCategory!=0){
                    console.log(response)
                    response = response.filter(product =>product.category == clickedCategory);


                }
				printShopProducts(response);
			},
			error: function(err){
				console.log(err);
			}
		});

    // printShopProducts(data)
    // printShopProducts(data)
});

	function ajaxCallBack(url, callback){
		$.ajax({
			url: url,
			method: "get",
			dataType: "json",
			success: function(response){
				callback(response);
			},
			error: function(err){
				console.log(err);
			}
		});
	}


    function waitForElement(querySelector, timeout=0){
        const startTime = new Date().getTime();
        return new Promise((resolve, reject)=>{
            const timer = setInterval(()=>{
                const now = new Date().getTime();
                if(document.querySelector(querySelector)){
                    clearInterval(timer);
                    resolve();
                }else if(timeout && now - startTime >= timeout){
                    clearInterval(timer);
                    reject();
                }
            }, 100);
        });
    }
    
    
