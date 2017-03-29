function tinh_tong(){

		var soa = document.getElementById('so_a');
		var sob = document.getElementById('so_b');
		var tong = document.getElementById('result');

		// Điều kiện
		if (isNaN(soa.value)) {
			alert('Vui lòng nhập số a');
			soa.focus();
			return false;
		}
		if (isNaN(sob.value)) {
			alert('Vui lòng nhập số b');
			sob.focus();
			return false;
		}
		if (soa.value == '') {
			alert('Vui lòng nhậ số a');
			soa.focus();
			return false;
		}
		if (sob.value == '') {
			alert('Vui lòng nhậ số b');
			soa.focus();
			return false;
		}
		// tính tổng :
		
		tong.value =  parseInt(soa.value) + parseInt(sob.value); 

}

function tinh_hieu(){

		var soa = document.getElementById('so_a');
		var sob = document.getElementById('so_b');
		var hieu = document.getElementById('result');

		// Điều Kiện IF
		if (isNaN(soa.value)) {
			alert('Vui lòng nhập số a');
			soa.focus();
			return false;
		}
		if (isNaN(sob.value)) {
			alert('Vui lòng nhập số b');
			sob.focus();
			return false;
		}
		if (soa.value == '') {
			alert('Vui lòng nhậ số a');
			soa.focus();
			return false;
		}
		if (sob.value == '') {
			alert('Vui lòng nhậ số b');
			soa.focus();
			return false;
		}
		// tính tổng :
		
		hieu.value =  parseInt(soa.value) - parseInt(sob.value); 

}
function tinh_tich(){

		var soa = document.getElementById('so_a');
		var sob = document.getElementById('so_b');
		var tich = document.getElementById('result');

		//Điều Kiện 
		if (isNaN(soa.value)) {
			alert('Vui lòng nhập số a');
			soa.focus();
			return false;
		}
		if (isNaN(sob.value)) {
			alert('Vui lòng nhập số b');
			sob.focus();
			return false;
		}
		if (soa.value == '') {
			alert('Vui lòng nhậ số a');
			soa.focus();
			return false;
		}
		if (sob.value == '') {
			alert('Vui lòng nhậ số b');
			soa.focus();
			return false;
		}
		//tính tổng :
		
		tich.value =  parseInt(soa.value) * parseInt(sob.value); 

}
function tinh_thuong(){

		var soa = document.getElementById('so_a');
		var sob = document.getElementById('so_b');
		var thuong = document.getElementById('result');

		// // Điều Kiện IF
		if (isNaN(soa.value)) {
			alert('Vui lòng nhập số a');
			soa.focus();
			return false;
		}
		if (isNaN(sob.value)) {
			alert('Vui lòng nhập số b');
			sob.focus();
			return false;
		}
		if (soa.value == '') {
			alert('Vui lòng nhậ số a');
			soa.focus();
			return false;
		}
		if (sob.value == '') {
			alert('Vui lòng nhậ số b');
			soa.focus();
			return false;
		}
		//tính tổng :
		
		thuong.value =  parseInt(soa.value) / parseInt(sob.value); 

}