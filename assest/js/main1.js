 var numArray1 = [];
 function themAnh(){
    var num = document.getElementById("soLuongSanPham").value;
    //thêm phần tử vào mảng
    numArray1.push(num);
    var content = "";
    
    for (var i = 0; i < num; i++) {;
        numArray1.map(function() {
            content +=    `
                               <div class="col-4 mt-2">
                                    <div class="card text-white bg-dark">
                                        <img class="card-img-top" src="https:picsum.photos/300" alt="random-img">
                                        <div class="card-body">
                                            <h4 class="card-title">Product name</h4>
                                            <p class="card-text">Product price</p>
                                        </div>
                                    </div>
                                </div>
                        `;
        })
            document.getElementById("content").innerHTML = content;
            console.log(content);
    }

    
}


