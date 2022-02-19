var numArray = [];
function themSo(){
    var num = Number(document.querySelector("#giaTri").value);
    //thêm phần tử vào mảng
    numArray.push(num);
    console.log(numArray);
    document.getElementById("themMang").innerHTML = "Mảng : [ " + numArray + " ]"

        

    // số lẻ nhỏ nhất
        var viTri = 0;
        var min = numArray[0];
            for (var i = 1; i < numArray.length; i++) {
                if (numArray[i] % 2 != 0 && min > numArray[i]) {
                    min = numArray[i];
                    viTri = i;
                }
        
            console.log(min);
            document.getElementById("soLeNhoNhat").innerHTML = min;

        }
    


    // tổng các số
     //Các code xử lý click button
     var total = 0;
     // i (index): vị trí của phần tử trong mảng
     for(var i = 0; i <numArray.length;i++){
         if(numArray[i] > 0){
             //là số âm
             //total(mới) = total(cũ) + numArray[i]
             total += numArray[i];
         }
     }
 
     // console.log("Tổng số âm: " + total);
         document.getElementById("ketQuaLapLai").innerHTML = total;



     // đếm số lần xuất hiện số đầu tiên
    var count = 0;
    var viTri1 = 0;
    var lap = numArray[0];
     for(var i = 0; i < numArray.length; i++){
         if(lap == numArray[i]){
             //số dương
             count++;
             viTri1 = i;
         }
     }
     console.log(count);
     document.getElementById("soLanXuatHien").innerHTML = count;


    // đếm số lần xuất hiện của từng số
    var num1 = 7; 
    var count1 = 0;
    for(var i = 0; i < numArray.length; ++i){ 
        if(numArray[i] == num1) {
            count1++; 
            document.getElementById("ketQuaLapLai1").innerHTML = "Số 7 xuất hiện : " + count1 ;

        }
    }

    var num1 = 9;
    var count2 = 0;
    for(var i = 0; i < numArray.length; ++i){ 
        if(numArray[i] == num1) {
            count2++; 
            document.getElementById("ketQuaLapLai2").innerHTML = " ; Số 9 xuất hiện : " + count2 ;

        }
    }
    
}

document.querySelector("#btnXuLy").onclick = themSo;