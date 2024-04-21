var nameProduct, maProduct, sanPhamHienTai; 

window.onload = function () {
    khoiTao();

    var tags = ["Iphone", "Samsung", "Oppo", "Xiaomi"];
    for (var t of tags) addTags(t, "index.html?search=" + t, true);

    phanTich_URL_chiTietSanPham();

    autocomplete(document.getElementById('search-box'), list_products);

    sanPhamHienTai && suggestion();
}

function khongTimThaySanPham() {
    document.getElementById('productNotFound').style.display = 'block';
    document.getElementsByClassName('chitietSanpham')[0].style.display = 'none';
}

function phanTich_URL_chiTietSanPham() {
    nameProduct = window.location.href.split('?')[1];
    if(!nameProduct) return khongTimThaySanPham();

    nameProduct = nameProduct.split('-').join(' ');

    for(var p of list_products) {
        if(nameProduct == p.name) {
            maProduct = p.masp;
            break;
        }
    }

    sanPhamHienTai = timKiemTheoMa(list_products, maProduct);
    if(!sanPhamHienTai) return khongTimThaySanPham();

    var divChiTiet = document.getElementsByClassName('chitietSanpham')[0];

    document.title = nameProduct + ' - TTP Shop';

    var h1 = divChiTiet.getElementsByTagName('h1')[0];
    h1.innerHTML += nameProduct;

    var rating = "";
    if (sanPhamHienTai.rateCount > 0) {
        for (var i = 1; i <= 5; i++) {
            if (i <= sanPhamHienTai.star) {
                rating += `<i class="fa fa-star"></i>`
            } else {
                rating += `<i class="fa fa-star-o"></i>`
            }
        }
        rating += `<span> ` + sanPhamHienTai.rateCount + ` đánh giá</span>`;
    }
    divChiTiet.getElementsByClassName('rating')[0].innerHTML += rating;

    var price = divChiTiet.getElementsByClassName('area_price')[0];
    if (sanPhamHienTai.promo.name != 'giare') {
        price.innerHTML = `<strong>` + sanPhamHienTai.price + `₫</strong>`;
        price.innerHTML += new Promo(sanPhamHienTai.promo.name, sanPhamHienTai.promo.value).toWeb();
    } else {
        document.getElementsByClassName('ship')[0].style.display = '';
        price.innerHTML = `<strong>` + sanPhamHienTai.promo.value + `&#8363;</strong>
					        <span>` + sanPhamHienTai.price + `&#8363;</span>`;
    }

    document.getElementById('detailPromo').innerHTML = getDetailPromo(sanPhamHienTai);

    var info = document.getElementsByClassName('info')[0];
    var s = addThongSo('Màn hình', sanPhamHienTai.detail.screen);
    s += addThongSo('Hệ điều hành', sanPhamHienTai.detail.os);
    s += addThongSo('Camara sau', sanPhamHienTai.detail.camara);
    s += addThongSo('Camara trước', sanPhamHienTai.detail.camaraFront);
    s += addThongSo('CPU', sanPhamHienTai.detail.cpu);
    s += addThongSo('RAM', sanPhamHienTai.detail.ram);
    s += addThongSo('Bộ nhớ trong', sanPhamHienTai.detail.rom);
    s += addThongSo('Thẻ nhớ', sanPhamHienTai.detail.microUSB);
    s += addThongSo('Dung lượng pin', sanPhamHienTai.detail.battery);
    info.innerHTML = s;

    var hinh = divChiTiet.getElementsByClassName('picture')[0];
    hinh = hinh.getElementsByTagName('img')[0];
    hinh.src = sanPhamHienTai.img;
    document.getElementById('bigimg').src = sanPhamHienTai.img;

	if(sanPhamHienTai.masp == "App0"){
        addSmallImg("img/productdetails/iphone-15-promax-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/iphone-15-promax-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "App1"){
        addSmallImg("img/productdetails/iphone-15-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/iphone-15-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "App2"){
        addSmallImg("img/productdetails/iphone-14-promax-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/iphone-14-promax-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "App3"){
        addSmallImg("img/productdetails/iphone-14-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/iphone-14-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "App4"){
        addSmallImg("img/productdetails/iphone-13-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/iphone-13-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Sam0"){
        addSmallImg("img/productdetails/samsung-galaxy-a05-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/samsung-galaxy-a05-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Sam1"){
        addSmallImg("img/productdetails/samsung-galaxy-a25-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/samsung-galaxy-a25-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Sam2"){
        addSmallImg("img/productdetails/samsung-galaxy-a54-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/samsung-galaxy-a54-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Sam3"){
        addSmallImg("img/productdetails/samsung-galaxy-s23-ultra-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/samsung-galaxy-s23-ultra-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Sam4"){
        addSmallImg("img/productdetails/samsung-galaxy-s22-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/samsung-galaxy-s22-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Opp0"){
        addSmallImg("img/productdetails/oppo-find-n3-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/oppo-find-n3-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Opp1"){
        addSmallImg("img/productdetails/oppo-reno10-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/oppo-reno10-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Opp2"){
        addSmallImg("img/productdetails/oppo-a78-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/oppo-a78-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Opp3"){
        addSmallImg("img/productdetailsoppo-a17k-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetailsoppo-a17k-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Opp4"){
        addSmallImg("img/productdetails/oppo-a77s-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/oppo-a77s-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Xia0"){
        addSmallImg("img/productdetails/xiaomi-redmi-13c-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/xiaomi-redmi-13c-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Xia1"){
        addSmallImg("img/productdetails/xiaomi-redmi-note-12-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/xiaomi-redmi-note-12-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Xia2"){
        addSmallImg("img/productdetails/xiaomi-13t-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/xiaomi-13t-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Xia3"){
        addSmallImg("img/productdetails/xiaomi-redmi-10a-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/xiaomi-redmi-10a-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Xia4"){
        addSmallImg("img/productdetails/xiaomi-redmi-note-11-pro-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/xiaomi-redmi-note-11-pro-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Hon0"){
        addSmallImg("img/productdetails/honor-x9b-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/honor-x9b-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Hon1"){
        addSmallImg("img/productdetails/honor-90-lite-1.jpg");
        var numSmallImg = 3;
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/honor-90-lite-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Hon2"){
        addSmallImg("img/productdetails/honor-90-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/honor-90-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Hon3"){
        addSmallImg("img/productdetails/honor-x6a-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/honor-x6a-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Hon4"){
        addSmallImg("img/productdetails/honor-x9a-1.jpg");
        var numSmallImg = 3;
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/honor-x9a-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Rea0"){
        addSmallImg("img/productdetails/realme-c55-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/realme-c55-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Rea1"){
        addSmallImg("img/productdetails/realme-c51-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/realme-c51-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Rea2"){
        addSmallImg("img/productdetails/realme-c30s-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/realme-c30s-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Rea3"){
        addSmallImg("img/productdetails/realme-11-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/realme-11-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Viv0"){
        addSmallImg("img/productdetails/vivo-v25-pro-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/vivo-v25-pro-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Viv1"){
        addSmallImg("img/productdetails/vivo-y35-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/vivo-y35-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Viv2"){
        addSmallImg("img/productdetails/vivo-y22s-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/vivo-y22s-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Viv3"){
        addSmallImg("img/productdetails/vivo-t1x-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/vivo-t1x-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Viv4"){
        addSmallImg("img/productdetails/vivo-y16-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/vivo-y16-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Asu0"){
        addSmallImg("img/productdetails/asus-rog-6-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/asus-rog-6-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Asu1"){
        addSmallImg("img/productdetails/asus-rog-7-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/asus-rog-7-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Mas0"){
        addSmallImg("img/productdetails/masstel-izi-15-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/masstel-izi-15-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Mas1"){
        addSmallImg("img/productdetails/masstel-izi-t2-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/masstel-izi-t2-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Mas2"){
        addSmallImg("img/productdetails/masstel-lux-20-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/masstel-lux-20-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Mas3"){
        addSmallImg("img/productdetails/masstel-fami-60-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/masstel-fami-60-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Mas4"){
        addSmallImg("img/productdetails/masstel-fami-12-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/masstel-fami-12-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Nok0"){
        addSmallImg("img/productdetails/nokia-105-ds-pro-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/nokia-105-ds-pro-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Nok1"){
        addSmallImg("img/productdetails/nokia-5710-xpressaudio-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/nokia-5710-xpressaudio-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Nok2"){
        addSmallImg("img/productdetails/nokia-215-ds-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/nokia-215-ds-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Nok3"){
        addSmallImg("img/productdetails/nokia-105-ds-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/nokia-105-ds-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    if(sanPhamHienTai.masp == "Nok4"){
        addSmallImg("img/productdetails/nokia-8210-1.jpg");
        var numSmallImg = 3; 
        for (var i = 2; i <= numSmallImg; i++) {
            var linkimg = "img/productdetails/nokia-8210-" + i + ".jpg";
            addSmallImg(linkimg, linkimg);
        }
    }
    addSmallImg("img/productdetails/asus-rog-6-1.jpg");
    addSmallImg("img/productdetails/asus-rog-6-2.jpg");
    addSmallImg("img/productdetails/asus-rog-6-3.jpg");

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 3,
        center: true,
        smartSpeed: 250,
    });
}


function getDetailPromo(sp) {
    switch (sp.promo.name) {
        case 'tragop':
            var span = `<span style="font-weight: bold"> lãi suất ` + sp.promo.value + `% </span>`;
            return `Khách hàng có thể mua trả góp sản phẩm với ` + span + `với thời hạn 6 tháng kể từ khi mua hàng.`;

        case 'giamgia':
            var span = `<span style="font-weight: bold">` + sp.promo.value + `</span>`;
            return `Khách hàng sẽ được giảm ` + span + `₫ khi tới mua trực tiếp tại cửa hàng`;

        case 'moiramat':
            return `Khách hàng sẽ được thử máy miễn phí tại cửa hàng. Có thể đổi trả lỗi trong vòng 2 tháng.`;

        case 'giare':
            var del = stringToNum(sp.price) - stringToNum(sp.promo.value);
            var span = `<span style="font-weight: bold">` + numToString(del) + `</span>`;
            return `Sản phẩm sẽ được giảm ` + span + `₫ khi mua hàng online bằng thẻ VietinBank`;

        default:
            var span = `<span style="font-weight: bold">61 xe Wave Alpha</span>`;
            return `Cơ hội trúng ` + span + ` khi trả góp FE Credit`;
    }
}

function addThongSo(ten, giatri) {
    return `<li>
                <p>` + ten + `</p>
                <div>` + giatri + `</div>
            </li>`;
}

function addSmallImg(img) {
    var newDiv = `<div class='item'>
                        <a>
                            <img src=` + img + ` onclick="changepic(this.src)">
                        </a>
                    </div>`;
    var banner = document.getElementsByClassName('owl-carousel')[0];
    banner.innerHTML += newDiv;
}

function opencertain() {
    document.getElementById("overlaycertainimg").style.transform = "scale(1)";
}

function closecertain() {
    document.getElementById("overlaycertainimg").style.transform = "scale(0)";
}

function changepic(src) {
    document.getElementById("bigimg").src = src;
}

function addKhungSanPham(list_sanpham, tenKhung, color, ele) {

	var gradient = `background-image: linear-gradient(120deg, ` + color[0] + ` 0%, ` + color[1] + ` 50%, ` + color[0] + ` 100%);`
	var borderColor = `border-color: ` + color[0];
	var borderA = `	border-left: 2px solid ` + color[0] + `;
					border-right: 2px solid ` + color[0] + `;`;

	var s = `<div class="khungSanPham" style="` + borderColor + `">
				<h3 class="tenKhung" style="` + gradient + `">* ` + tenKhung + ` *</h3>
				<div class="listSpTrongKhung flexContain">`;

	for (var i = 0; i < list_sanpham.length; i++) {
		s += addProduct(list_sanpham[i], null, true);
	}

	ele.innerHTML += s;
}


function suggestion(){
    const giaSanPhamHienTai = stringToNum(sanPhamHienTai.price);

    const sanPhamTuongTu = list_products
    .filter((_) => _.masp !== sanPhamHienTai.masp)
    .map(sanPham => {
        const giaSanPham = stringToNum(sanPham.price);
        let giaTienGanGiong = Math.abs(giaSanPham - giaSanPhamHienTai) < 1000000;

        let soLuongChiTietGiongNhau = 0;
        for(let key in sanPham.detail) {
            let value = sanPham.detail[key];
            let currentValue = sanPhamHienTai.detail[key];

            if(value == currentValue) soLuongChiTietGiongNhau++;
        }
        let giongThongSoKyThuat  = soLuongChiTietGiongNhau >= 3;

        let cungHangSanXuat = sanPham.company ===  sanPhamHienTai.company

        let cungLoaiKhuyenMai = sanPham.promo?.name === sanPhamHienTai.promo?.name;
        
        let soDanhGia = Number.parseInt(sanPham.rateCount, 10)
        let soSao = Number.parseInt(sanPham.star, 10);

        let diem = 0;
        if(giaTienGanGiong) diem += 20;
        if(giongThongSoKyThuat) diem += soLuongChiTietGiongNhau;
        if(cungHangSanXuat) diem += 15;
        if(cungLoaiKhuyenMai) diem += 10;
        if(soDanhGia > 0) diem += (soDanhGia + '').length;
        diem += soSao;

        return {
            ...sanPham,
            diem: diem
        };
    })
    .sort((a,b) => b.diem - a.diem)
    .slice(0, 10);

    console.log(sanPhamTuongTu)

    if(sanPhamTuongTu.length) {
        let div = document.getElementById('goiYSanPham');
        addKhungSanPham(sanPhamTuongTu, 'Bạn có thể thích', ['#434aa8', '#ec1f1f'], div);
    }
}