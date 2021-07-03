$(function() {
    // Setup leaflet map
    var map = new L.Map('map',{
        center: [-6.17455182987, 106.844726759],
        zoom: 18,
		zoomControl: false
        });
		
		var elem = document.documentElement;
		var toggle = L.easyButton({
		  states: [{
			stateName: 'add-markers',
			icon: 'fa fa-arrows-alt',
			title: 'View Fullscreen, press esc to exit full screen',
			onClick: function openFullscreen() {
					  if (elem.requestFullscreen) {
						elem.requestFullscreen();
					  } else if (elem.mozRequestFullScreen) { /* Firefox */
						elem.mozRequestFullScreen();
					  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
						elem.webkitRequestFullscreen();
					  } else if (elem.msRequestFullscreen) { /* IE/Edge */
						elem.msRequestFullscreen();
					  }
					}
		  }]
		  });
			toggle.addTo(map);
			
		
			var mapboxUrl = 'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';
			var accessToken = 'pk.eyJ1Ijoid2FoeXVkbSIsImEiOiJjazliYzh2YmcwMnduM2hueWV3a3ozbW5sIn0.VXnWR-rP0rVVR5Z8tqCBqA';

			var grayscale = L.tileLayer(mapboxUrl, {id: 'dark-v9', attribution: '', maxZoom: 20, accessToken: accessToken});
			var streets = L.tileLayer(mapboxUrl, {id: 'streets-v9', attribution: '', maxZoom: 20, accessToken: accessToken}).addTo(map);
			
			var esri = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
			});
			
			var google = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
		   maxZoom: 20,
		   subdomains:['mt0','mt1','mt2','mt3'],
		   attribution: 'Google Satellite'
		   });
		   
		   var gmaps = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
		   maxZoom: 20,
		   subdomains:['mt0','mt1','mt2','mt3'],
		   attribution: 'Google Streets'
			});

			map.attributionControl.setPrefix('');

			var data = [
			{"loc":[-6.1766309,106.8304899], "title":"Stasiun Gambir", "info":"<a href='https://www.google.com/maps/place/-6.1766309,106.8304899'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Gambir</a> <br><img src='gambar/Gambir.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.1747185,106.844333], "title":"Stasiun Pasar Senen", "info":"<a href='https://www.google.com/maps/place/-6.1747185,106.844333'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Pasar Senen</a> <br><img src='gambar/Senen.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.209878,106.8502174], "title":"Stasiun Manggarai", "info":"<a href='https://www.google.com/maps/place/-6.209878,106.8502174'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Manggarai</a> <br><img src='gambar/Manggarai.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2152273,106.8703446], "title":"Stasiun Jatinegara", "info":"<a href='https://www.google.com/maps/place/-6.2152273,106.8703446'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Jatinegara</a> <br><img src='gambar/Jatinegara.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2193255,106.9523325], "title":"Stasiun Cakung", "info":"<a href='https://www.google.com/maps/place/-6.2193255,106.9523325'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cakung</a> <br><img src='gambar/Cakung.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2361393,106.9994797], "title":"Stasiun Bekasi", "info":"<a href='https://www.google.com/maps/place/-6.2361393,106.9994797'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Bekasi</a> <br><img src='gambar/Bekasi.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2587068,107.0558152], "title":"Stasiun Tambun", "info":"<a href='https://www.google.com/maps/place/-6.2587068,107.0558152'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Tambun</a> <br><img src='gambar/Tambun.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.255403,107.1451267], "title":"Stasiun Cikarang", "info":"<a href='https://www.google.com/maps/place/-6.255403,107.1451267'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cikarang</a> <br><img src='gambar/Cikarang.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2705733,107.1798401], "title":"Stasiun Lemahabang", "info":"<a href='https://www.google.com/maps/place/-6.2705733,107.1798401'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Lemahabang</a> <br><img src='gambar/Lemahabang.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2700584,107.2612263], "title":"Stasiun Kedunggedeh", "info":"<a href='https://www.google.com/maps/place/-6.2700584,107.2612263'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kedunggedeh</a> <br><img src='gambar/Kedunggedeh.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.3052285,107.3001498], "title":"Stasiun Karawang", "info":"<a href='https://www.google.com/maps/place/-6.3052285,107.3001498'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Karawang</a> <br><img src='gambar/Karawang.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.349927,107.3453097], "title":"Stasiun Klari", "info":"<a href='https://www.google.com/maps/place/-6.349927,107.3453097'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Klari</a> <br><img src='gambar/Klari.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.369167,107.3746655], "title":"Stasiun Kosambi", "info":"<a href='https://www.google.com/maps/place/-6.369167,107.3746655'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kosambi</a> <br><img src='gambar/Kosambi.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.393221,107.4332273], "title":"Stasiun Dawuan", "info":"<a href='https://www.google.com/maps/place/-6.393221,107.4332273'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Dawuan</a> <br><img src='gambar/Dawuan.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4061293,107.4589963], "title":"Stasiun Cikampek", "info":"<a href='https://www.google.com/maps/place/-6.4061293,107.4589963'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cikampek</a> <br><img src='gambar/Cikampek.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4083877,107.5406358], "title":"Stasiun Tanjungrasa", "info":"<a href='https://www.google.com/maps/place/-6.4083877,107.5406358'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Tanjungrasa</a> <br><img src='gambar/Tanjungrasa.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4092452,107.584019], "title":"Stasiun Pabuaran", "info":"<a href='https://www.google.com/maps/place/-6.4092452,107.584019'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Pabuaran</a> <br><img src='gambar/Pabuaran.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4181861,107.6344593], "title":"Stasiun Pringkasap", "info":"<a href='https://www.google.com/maps/place/-6.4181861,107.6344593'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Pringkasap</a> <br><img src='gambar/Pringkasap.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4264075,107.6885019], "title":"Stasiun Pasirbungur", "info":"<a href='https://www.google.com/maps/place/-6.4264075,107.6885019'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Pasirbungur</a> <br><img src='gambar/Pasirbungur.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4355589,107.7396058], "title":"Stasiun Cikaum", "info":"<a href='https://www.google.com/maps/place/-6.4355589,107.7396058'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cikaum</a> <br><img src='gambar/Cikaum.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4537701,107.8171019], "title":"Stasiun Pegadenbaru", "info":"<a href='https://www.google.com/maps/place/-6.4537701,107.8171019'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Pegadenbaru</a> <br><img src='gambar/Pegadenbaru.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4554184,107.8830859], "title":"Stasiun Cipunegara", "info":"<a href='https://www.google.com/maps/place/-6.4554184,107.8830859'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cipunegara</a> <br><img src='gambar/Cipunegara.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4586318,107.9409389], "title":"Stasiun Haurgeulis", "info":"<a href='https://www.google.com/maps/place/-6.4586318,107.9409389'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Haurgeulis</a> <br><img src='gambar/Haurgeulis.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4639811,108.0352762], "title":"Stasiun Cilegeh", "info":"<a href='https://www.google.com/maps/place/-6.4639811,108.0352762'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cilegeh</a> <br><img src='gambar/Cilegeh.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4677987,108.1067379], "title":"Stasiun Kadokangabus", "info":"<a href='https://www.google.com/maps/place/-6.4677987,108.1067379'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kadokangabus</a> <br><img src='gambar/Kadokangabus.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.46987,108.1609946], "title":"Stasiun Terisi", "info":"<a href='https://www.google.com/maps/place/-6.46987,108.1609946'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Terisi</a> <br><img src='gambar/Terisi.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4647363,108.2346823], "title":"Stasiun Telagasari", "info":"<a href='https://www.google.com/maps/place/-6.4647363,108.2346823'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Telagasari</a> <br><img src='gambar/Telagasari.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4728392,108.3063283], "title":"Stasiun Jatibarang", "info":"<a href='https://www.google.com/maps/place/-6.4728392,108.3063283'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Jatibarang</a> <br><img src='gambar/Jatibarang.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.5283802,108.3532988], "title":"Stasiun Kertasemaya", "info":"<a href='https://www.google.com/maps/place/-6.5283802,108.3532988'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kertasemaya</a> <br><img src='gambar/Kertasemaya.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.6446634,108.4145435], "title":"Stasiun Arjawinangun", "info":"<a href='https://www.google.com/maps/place/-6.6446634,108.4145435'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Arjawinangun</a> <br><img src='gambar/Arjawinangun.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.6630732,108.4599957], "title":"Stasiun Bangoduwa", "info":"<a href='https://www.google.com/maps/place/-6.6630732,108.4599957'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Bangoduwa</a> <br><img src='gambar/Bangoduwa.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.679535,108.5006765], "title":"Stasiun Cangkring", "info":"<a href='https://www.google.com/maps/place/-6.679535,108.5006765'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cangkring</a> <br><img src='gambar/Cangkring.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.7052739,108.55555], "title":"Stasiun Cirebon", "info":"<a href='https://www.google.com/maps/place/-6.7052739,108.55555'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cirebon</a> <br><img src='gambar/Cirebon.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.7193421,108.5588038], "title":"Stasiun Cirebon Prujakan", "info":"<a href='https://www.google.com/maps/place/-6.7193421,108.5588038'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cirebon Prujakan</a> <br><img src='gambar/Prujakan.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.7777247,108.5930935], "title":"Stasiun Luwung", "info":"<a href='https://www.google.com/maps/place/-6.7777247,108.5930935'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Luwung</a> <br><img src='gambar/Luwung.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.832756,108.6259513], "title":"Stasiun Sindanglaut", "info":"<a href='https://www.google.com/maps/place/-6.832756,108.6259513'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Sindanglaut</a> <br><img src='gambar/Sindanglaut.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.9029226,108.7439859], "title":"Stasiun Ciledug", "info":"<a href='https://www.google.com/maps/place/-6.9029226,108.7439859'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Ciledug</a> <br><img src='gambar/Ciledug.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.9382946,108.8843762], "title":"Stasiun Ketanggungan", "info":"<a href='https://www.google.com/maps/place/-6.9382946,108.8843762'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Ketanggungan</a> <br><img src='gambar/Ketanggungan.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.9905456,108.9486991], "title":"Stasiun Larangan", "info":"<a href='https://www.google.com/maps/place/-6.9905456,108.9486991'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Larangan</a> <br><img src='gambar/Larangan.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.0245279,108.9888423], "title":"Stasiun Songgom", "info":"<a href='https://www.google.com/maps/place/-7.0245279,108.9888423'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Songgom</a> <br><img src='gambar/Songgom.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.1228194,108.9826878], "title":"Stasiun Prupuk", "info":"<a href='https://www.google.com/maps/place/-7.1228194,108.9826878'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Prupuk</a> <br><img src='gambar/Prupuk.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.1849349,109.0124701], "title":"Stasiun Linggapura", "info":"<a href='https://www.google.com/maps/place/-7.1849349,109.0124701'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Linggapura</a> <br><img src='gambar/Linggapura.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.2374021,109.0098136], "title":"Stasiun Bumiayu", "info":"<a href='https://www.google.com/maps/place/-7.2374021,109.0098136'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Bumiayu</a> <br><img src='gambar/Bumiayu.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.2855943,109.0297816], "title":"Stasiun Kretek", "info":"<a href='https://www.google.com/maps/place/-7.2855943,109.0297816'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kretek</a> <br><img src='gambar/Kretek.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.3281891,109.0576696], "title":"Stasiun Patuguran", "info":"<a href='https://www.google.com/maps/place/-7.3281891,109.0576696'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Patuguran</a> <br><img src='gambar/Patuguran.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.3824967,109.1211045], "title":"Stasiun Karangsari", "info":"<a href='https://www.google.com/maps/place/-7.3824967,109.1211045'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Karangsari</a> <br><img src='gambar/Karangsari.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.3884039,109.1859918], "title":"Stasiun Karanggandul", "info":"<a href='https://www.google.com/maps/place/-7.3884039,109.1859918'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Karanggandul</a> <br><img src='gambar/Karanggandul.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.4192276,109.2219922], "title":"Stasiun Purwokerto", "info":"<a href='https://www.google.com/maps/place/-7.4192276,109.2219922'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Purwokerto</a> <br><img src='gambar/Purwokerto.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.485911,109.2134084], "title":"Stasiun Notog", "info":"<a href='https://www.google.com/maps/place/-7.485911,109.2134084'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Notog</a> <br><img src='gambar/Notog.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.5324943,109.2040465], "title":"Stasiun Kebasen", "info":"<a href='https://www.google.com/maps/place/-7.5324943,109.2040465'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kebasen</a> <br><img src='gambar/Kebasen.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.5699609,109.2199129], "title":"Stasiun Randegan", "info":"<a href='https://www.google.com/maps/place/-7.5699609,109.2199129'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Randegan</a> <br><img src='gambar/Randegan.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6302529,109.2535622], "title":"Stasiun Kroya", "info":"<a href='https://www.google.com/maps/place/-7.6302529,109.2535622'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kroya</a> <br><img src='gambar/Kroya.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6214037,109.3150298], "title":"Stasiun Kemranjen", "info":"<a href='https://www.google.com/maps/place/-7.6214037,109.3150298'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kemranjen</a> <br><img src='gambar/Kemranjen.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6150948,109.3611648], "title":"Stasiun Sumpiuh", "info":"<a href='https://www.google.com/maps/place/-7.6150948,109.3611648'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Sumpiuh</a> <br><img src='gambar/Sumpiuh.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6130186,109.4086212], "title":"Stasiun Tambak", "info":"<a href='https://www.google.com/maps/place/-7.6130186,109.4086212'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Tambak</a> <br><img src='gambar/Tambak.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.615265,109.4469526], "title":"Stasiun Ijo", "info":"<a href='https://www.google.com/maps/place/-7.615265,109.4469526'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Ijo</a> <br><img src='gambar/Ijo.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6105735,109.5078155], "title":"Stasiun Gombong", "info":"<a href='https://www.google.com/maps/place/-7.6105735,109.5078155'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Gombong</a> <br><img src='gambar/Gombong.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6331663,109.5734925], "title":"Stasiun Karanganyar", "info":"<a href='https://www.google.com/maps/place/-7.6331663,109.5734925'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Karanganyar</a> <br><img src='gambar/Karanganyar.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6552086,109.6030665], "title":"Stasiun Sruweng", "info":"<a href='https://www.google.com/maps/place/-7.6552086,109.6030665'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Sruweng</a> <br><img src='gambar/Sruweng.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6791334,109.6395574], "title":"Stasiun Soka", "info":"<a href='https://www.google.com/maps/place/-7.6791334,109.6395574'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Soka</a> <br><img src='gambar/Soka.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6817128,109.6621947], "title":"Stasiun Kebumen", "info":"<a href='https://www.google.com/maps/place/-7.6817128,109.6621947'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kebumen</a> <br><img src='gambar/Kebumen.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6973976,109.7013199], "title":"Stasiun Wonosari", "info":"<a href='https://www.google.com/maps/place/-7.6973976,109.7013199'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Wonosari</a> <br><img src='gambar/Wonosari.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7168199,109.7342951], "title":"Stasiun Kutowinangun", "info":"<a href='https://www.google.com/maps/place/-7.7168199,109.7342951'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kutowinangun</a> <br><img src='gambar/Kutowinangun.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7243091,109.7981071], "title":"Stasiun Prembun", "info":"<a href='https://www.google.com/maps/place/-7.7243091,109.7981071'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Prembun</a> <br><img src='gambar/Prembun.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7243242,109.8585004], "title":"Stasiun Butuh", "info":"<a href='https://www.google.com/maps/place/-7.7243242,109.8585004'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Butuh</a> <br><img src='gambar/Butuh.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7258869,109.9071841], "title":"Stasiun Kutoarjo", "info":"<a href='https://www.google.com/maps/place/-7.7258869,109.9071841'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kutoarjo</a> <br><img src='gambar/Kutoarjo.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.8027515,110.0012486], "title":"Stasiun Jenar", "info":"<a href='https://www.google.com/maps/place/-7.8027515,110.0012486'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Jenar</a> <br><img src='gambar/Jenar.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.8619388,110.0404738], "title":"Stasiun Wojo", "info":"<a href='https://www.google.com/maps/place/-7.8619388,110.0404738'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Wojo</a> <br><img src='gambar/Wojo.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.8595563,110.1579272], "title":"Stasiun Wates", "info":"<a href='https://www.google.com/maps/place/-7.8595563,110.1579272'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Wates</a> <br><img src='gambar/Wates.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.8332315,110.2201313], "title":"Stasiun Sentolo", "info":"<a href='https://www.google.com/maps/place/-7.8332315,110.2201313'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Sentolo</a> <br><img src='gambar/Sentolo.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7960004,110.2842375], "title":"Stasiun Rewulu", "info":"<a href='https://www.google.com/maps/place/-7.7960004,110.2842375'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Rewulu</a> <br><img src='gambar/Rewulu.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.790877,110.3253908], "title":"Stasiun Patukan", "info":"<a href='https://www.google.com/maps/place/-7.790877,110.3253908'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Patukan</a> <br><img src='gambar/Patukan.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7892755,110.3638738], "title":"Stasiun Yogyakarta", "info":"<a href='https://www.google.com/maps/place/-7.7892755,110.3638738'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Yogyakarta</a> <br><img src='gambar/Yogyakarta.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7902301,110.3754493], "title":"Stasiun Lempuyangan", "info":"<a href='https://www.google.com/maps/place/-7.7902301,110.3754493'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Lempuyangan</a> <br><img src='gambar/Lempuyangan.jpg' width='305' height='55' /></a>"}
			];
			
			var markersLayer = new L.LayerGroup();	//layer contain searched elements
	
			map.addLayer(markersLayer);

			var controlSearch = new L.Control.Search({
				position:'topright',		
				layer: markersLayer,
				textPlaceholder: 'Cari Stasiun...',
				textErr: 'Hanya Menampilkan Stasiun yang DIlewati <br> Kereta Api Rute Jakarta - Yogyakarta',
				initial: false,
				zoom: 18,
				marker: false
			});
			controlSearch.on('search:locationfound', function(e) {
				e.layer.openPopup();
				});
			map.addControl( controlSearch );
			
			var smallIcon = L.icon({
				iconUrl: 'images/st3.png',
				iconSize:     [15, 15],
				iconAnchor:   [4, 13],
				popupAnchor:  [3, -12]
			});
			
			var bigIcon = L.icon({
				iconUrl: 'images/st2.png',
				iconSize:     [35, 35],
				iconAnchor:   [9, 30],
				popupAnchor:  [7, -28]
			});
			
			
			////////////populate map with markers from sample data
			for(i in data) {
				var title = data[i].title,	//value searched
					loc = data[i].loc,		//position found
					info = data[i].info,
					marker = new L.Marker(new L.latLng(loc), {title: title, icon: smallIcon});//se property searched
				marker.bindPopup(info);
				markersLayer.addLayer(marker);
			}

			var data1 = [
				{"loc":[-6.91468315,107.6018077], "title":"Stasiun Bandung"},
				{"loc":[-7.59858885,112.77808913], "title":"Stasiun Bangil"},
				{"loc":[-7.37629635,108.54265293], "title":"Stasiun Banjar"},
				{"loc":[-8.22288472,114.34080012], "title":"Stasiun Banyuwangi"},
				{"loc":[-6.23648781,106.99902718], "title":"Stasiun Bekasi"},
				{"loc":[-8.10113104,112.16238322], "title":"Stasiun Blitar"},
				{"loc":[-7.16427559,111.88668106], "title":"Stasiun Bojonegoro"},
				{"loc":[-6.59562804,106.79037142], "title":"Stasiun Bogor"},
				{"loc":[-7.2373831,109.00978235], "title":"Stasiun Bumiayu"},
				{"loc":[-7.5511063,111.65478802], "title":"Stasiun Caruban"},
				{"loc":[-6.24266131,106.85880273], "title":"Stasiun Cawang"},
				{"loc":[-7.32917896,108.3559307], "title":"Stasiun Ciamis"},
				{"loc":[-6.98138228,107.83272863], "title":"Stasiun Cicalengka"},
				{"loc":[-6.742197,106.803104], "title":"Stasiun Cigombong"},
				{"loc":[-6.40616372,107.45823201], "title":"Stasiun Cikampek"},
				{"loc":[-6.2554302,107.14529725], "title":"Stasiun Cikarang"},
				{"loc":[-6.43556999,107.73959455], "title":"Stasiun Cikaum"},
				{"loc":[-6.918804,107.62589], "title":"Stasiun Cikudapateu"},
				{"loc":[-6.88559384,107.53585923], "title":"Stasiun Cimahi"},
				{"loc":[-7.093561,108.100454], "title":"Stasiun Cipeundeuy"},
				{"loc":[-6.214316,106.886106], "title":"Stasiun Cipinang"},
				{"loc":[-6.70626629,108.55578356], "title":"Stasiun Cirebon"},
				{"loc":[-6.719282,108.5588], "title":"Stasiun Cirebon Prujakan"},
				{"loc":[-6.913973,106.887504], "title":"Stasiun Cisaat"},
				{"loc":[-6.39306778,107.43328473], "title":"Stasiun Dawuan"},
				{"loc":[-6.17781818,106.83000043], "title":"Stasiun Gambir"},
				{"loc":[-7.388968,112.728455], "title":"Stasiun Gedangan"},
				{"loc":[-6.940719,107.689463], "title":"Stasiun Gedebage"},
				{"loc":[-7.498011,111.4186], "title":"Stasiun Geneng"},
				{"loc":[-6.185644,106.83258], "title":"Stasiun Gondangdia"},
				{"loc":[-6.458588,107.940879], "title":"Stasiun Haurgeulis"},
				{"loc":[-6.21484477,106.87169415], "title":"Stasiun Jatinegara"},
				{"loc":[-8.16525569,113.70317507], "title":"Stasiun Jember"},
				{"loc":[-7.802712,110.001232], "title":"Stasiun Jenar"},
				{"loc":[-7.55833366,112.23313746], "title":"Stasiun Jombang"},
				{"loc":[-7.633225,109.573441], "title":"Stasiun Karanganyar"},
				{"loc":[-6.3048124,107.29976799], "title":"Stasiun Karawang"},
				{"loc":[-7.6820321,109.66264305], "title":"Stasiun Kebumen"},
				{"loc":[-7.81741395,112.01548657], "title":"Stasiun Kediri"},
				{"loc":[-6.269994,107.26092], "title":"Stasiun Kedunggedeh"},
				{"loc":[-7.621356,109.315025], "title":"Stasiun Kemranjen"},
				{"loc":[-7.59197582,112.10009371], "title":"Stasiun Kertosono"},
				{"loc":[-6.938282,108.884343], "title":"Stasiun Ketanggungan"},
				{"loc":[-6.92465373,107.64665079], "title":"Stasiun Kiaracondong"},
				{"loc":[-7.71253927,110.60270383], "title":"Stasiun Klaten"},
				{"loc":[-6.213139,106.899326], "title":"Stasiun Klender"},
				{"loc":[-6.369392,107.37495071], "title":"Stasiun Kosambi"},
				{"loc":[-7.948708,111.960322], "title":"Stasiun Kras"},
				{"loc":[-7.63018742,109.25360949], "title":"Stasiun Kroya"},
				{"loc":[-7.72616372,109.90629185], "title":"Stasiun Kutoarjo"},
				{"loc":[-7.71683,109.734297], "title":"Stasiun Kutowinangun"},
				{"loc":[-7.112529,112.420181], "title":"Stasiun Lamongan"},
				{"loc":[-7.8367,112.697624], "title":"Stasiun Lawang"},
				{"loc":[-7.084536,107.89965], "title":"Stasiun Leles"},
				{"loc":[-6.270507,107.179534], "title":"Stasiun Lemah Abang"},
				{"loc":[-7.79009524,110.37415035], "title":"Stasiun Lempuyangan"},
				{"loc":[-7.61890853,111.52383068], "title":"Stasiun Madiun"},
				{"loc":[-7.785017,110.436865], "title":"Stasiun Maguwo"},
				{"loc":[-7.97744988,112.63764538], "title":"Stasiun Malang"},
				{"loc":[-6.21025714,106.849606], "title":"Stasiun Manggarai"},
				{"loc":[-7.47239991,112.43359738], "title":"Stasiun Mojokerto"},
				{"loc":[-7.018753,107.887423], "title":"Stasiun Nagreg"},
				{"loc":[-8.102927,112.011953], "title":"Stasiun Ngunut"},
				{"loc":[-7.48588,109.213436], "title":"Stasiun Notog"},
				{"loc":[-6.409213,107.584015], "title":"Stasiun Pabuaran"},
				{"loc":[-6.84262117,107.49714893], "title":"Stasiun Padalarang"},
				{"loc":[-7.697604,112.079506], "title":"Stasiun Papar"},
				{"loc":[-7.442147,111.386492], "title":"Stasiun Paron"},
				{"loc":[-6.1751549,106.84459052], "title":"Stasiun Pasar Senen"},
				{"loc":[-7.63786,112.910008], "title":"Stasiun Pasuruan"},
				{"loc":[-6.453729,107.816754], "title":"Stasiun Pegadenbaru"},
				{"loc":[-6.88977483,109.66399064], "title":"Stasiun Pekalongan"},
				{"loc":[-6.887358,109.388207], "title":"Stasiun Pemalang"},
				{"loc":[-6.552759,107.44647], "title":"Stasiun Purwakarta"},
				{"loc":[-7.41908307,109.22154517], "title":"Stasiun Purwokerto"},
				{"loc":[-7.56171817,110.79622625], "title":"Stasiun Purwosari"},
				{"loc":[-7.192286,111.398026], "title":"Stasiun Randublatung"},
				{"loc":[-6.97270578,110.41452072], "title":"Stasiun Semarang Poncol"},
				{"loc":[-6.96502519,110.42758466], "title":"Stasiun Semarang Tawang"},
				{"loc":[-7.582631,112.167064], "title":"Stasiun Sembung"},
				{"loc":[-7.347183,112.69748], "title":"Stasiun Sepanjang"},
				{"loc":[-7.486315,108.807524], "title":"Stasiun Sidareja"},
				{"loc":[-7.45675591,112.71273101], "title":"Stasiun Sidoarjo"},
				{"loc":[-7.55720303,110.82102849], "title":"Stasiun Solo Balapan"},
				{"loc":[-7.56221176,110.83949093], "title":"Stasiun Solo Jebres"},
				{"loc":[-7.42928693,111.01785779], "title":"Stasiun Sragen"},
				{"loc":[-6.92507118,106.92959345], "title":"Stasiun Sukabumi"},
				{"loc":[-7.61515432,109.36116497], "title":"Stasiun Sumpiuh"},
				{"loc":[-7.2657093,112.7530779], "title":"Stasiun Surabaya Gubeng"},
				{"loc":[-7.24896672,112.73114745], "title":"Stasiun Surabaya Pasarturi"},
				{"loc":[-6.25851998,107.05517649], "title":"Stasiun Tambun"},
				{"loc":[-6.18613938,106.81089537], "title":"Stasiun Tanah Abang"},
				{"loc":[-6.110915,106.881112], "title":"Stasiun Tanjung Priuk "},
				{"loc":[-7.32237634,108.22381984], "title":"Stasiun Tasikmalaya"},
				{"loc":[-6.86843366,109.14270185], "title":"Stasiun Tegal"},
				{"loc":[-8.06354478,111.90454911], "title":"Stasiun Tulungagung"},
				{"loc":[-7.35308232,112.72927528], "title":"Stasiun Waru"},
				{"loc":[-7.85963138,110.15720899], "title":"Stasiun Wates"},
				{"loc":[-6.97091878,110.06970009], "title":"Stasiun Weleri"},
				{"loc":[-7.81591048,110.9219065], "title":"Stasiun Wonogiri"},
				{"loc":[-7.30228261,112.73876629], "title":"Stasiun Wonokromo"},
				{"loc":[-7.69730471,109.70123658], "title":"Stasiun Wonosari"},
				{"loc":[-7.78968799,110.36529828], "title":"Stasiun Yogyakarta"}
			]

			var markersLayer1 = new L.LayerGroup();	//layer contain searched elements
	
			map.addLayer(markersLayer1);

			var controlSearch1 = new L.Control.Search({
				container: 'findbox',		
				layer: markersLayer1,
				textPlaceholder: 'Lokasi Komplain, ketik stasiun..',
				textErr: 'Tidak ada komplain di lokasi tersebut.',
				initial: false,
				zoom: 18,
				marker: false,
				collapsed: false
			});
			map.addControl( controlSearch1 );

			for(i in data1) {
				var title = data1[i].title,	//value searched
					loc = data1[i].loc,		//position found
					info = data1[i].info,
					marker = new L.Marker(new L.latLng(loc), {title: title,  opacity: 0});//se property searched
				
					markersLayer1.addLayer(marker);
			}
			
			
		var hg = L.control.heightgraph({
             width: 600,
             height: 195,
             margins: {
                 top: 10,
                 right: 30,
                 bottom: 55,
                 left: 50
             },
             translation: {
                 distance: "Jarak (dari LPN)",
				 elevation: "Elevasi",
				 segment_length: "Panjang Segmen (Petak)",
				 type: "Petak",
				 legend: "Perbandingan Elevasi (m) dengan Jarak (m) = 1 : 1500"
             },
             expandCallback: function(expand){console.log("Expand: "+expand)},
             position: "topright",
			 expand: false,
             mappings: colorMappings
         });
		 
         hg.addTo(map);

         hg.addData(geojson);	
		
		var exteriorStyle = {
		"color": "#ffffff",
		"weight": 0,
		"fillOpacity": .75
		};
		
		var cb = L.geoJson(geojson, {style: exteriorStyle}).addTo(map);
		
		var cb1 = L.geoJson(jalur,{
		onEachFeature: function (feature, layer) {
			layer.bindPopup(
			feature.properties.Jarak
			);
		}
	}).addTo(map);
		
		var markers = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < addressPoints.length; i++) {
			var a = addressPoints[i];
			var title = a[2];
			var marker = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker.bindPopup(title);
			markers.addLayer(marker);
		}
		
		var zoomHome = L.Control.zoomHome({homeCoordinates: [-6.746844, 108.175107],
            homeZoom: 9});
		zoomHome.addTo(map);
		
		var cb2 = {
		"Rel KA" : cb1,
		"Stasiun" : markersLayer
		};
		
		var baseMaps = {
		"Mapbox Dark" : grayscale,
		"Mapbox Street" : streets,
		"Citra Esri": esri,
		"Citra Google" : google,
		"Google Maps" : gmaps
		};
		
		//Init Sidebar Control
		var sidebar = L.control.sidebar({
		  autopan: true,
		  container: "sidebar",
		  position: "left"
		}).addTo(map);
		
		var layerControl = L.control.layers(
		  baseMaps, 
		  cb2, 
		  {
			position: "topleft",
			collapsed: false
		  }
		).addTo(map);
		
		//Move Layers control to sidebar
		var layerControlContainer = layerControl.getContainer();
		$("#layercontrol").append(layerControlContainer);
		$(".leaflet-control-layers-list").prepend("<strong class='title'>Base Maps</strong><br>");
		$(".leaflet-control-layers-separator").after("<br><strong class='title'>Layers</strong><br>");

		var markersjan = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < jan.length; i++) {
			var a = jan[i];
			var title = a[2];
			var marker1 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker1.bindPopup(title);
			markersjan.addLayer(marker1);
		}

		var markersfeb = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < feb.length; i++) {
			var a = feb[i];
			var title = a[2];
			var marker2 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker2.bindPopup(title);
			markersfeb.addLayer(marker2);
		}

		var markersmar = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < mar.length; i++) {
			var a = mar[i];
			var title = a[2];
			var marker3 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker3.bindPopup(title);
			markersmar.addLayer(marker3);
		}

		var markersapr = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < apr.length; i++) {
			var a = apr[i];
			var title = a[2];
			var marker4 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker4.bindPopup(title);
			markersapr.addLayer(marker4);
		}
		var markersmei = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < mei.length; i++) {
			var a = mei[i];
			var title = a[2];
			var marker5 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker5.bindPopup(title);
			markersmei.addLayer(marker5);
		}

		var markersjun = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < jun.length; i++) {
			var a = jun[i];
			var title = a[2];
			var marker6 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker6.bindPopup(title);
			markersjun.addLayer(marker6);
		}

		var markersjul = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < jul.length; i++) {
			var a = jul[i];
			var title = a[2];
			var marker7 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker7.bindPopup(title);
			markersjul.addLayer(marker7);
		}

		var markersagst = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < agst.length; i++) {
			var a = agst[i];
			var title = a[2];
			var marker8 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker8.bindPopup(title);
			markersagst.addLayer(marker8);
		}

		var markerssept = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < sept.length; i++) {
			var a = sept[i];
			var title = a[2];
			var marker9 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker9.bindPopup(title);
			markerssept.addLayer(marker9);
		}

		var markersokt = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < okt.length; i++) {
			var a = okt[i];
			var title = a[2];
			var marker10 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker10.bindPopup(title);
			markersokt.addLayer(marker10);
		}

		var markersnov = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < nov.length; i++) {
			var a = nov[i];
			var title = a[2];
			var marker11 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker11.bindPopup(title);
			markersnov.addLayer(marker11);
		}

		var markersdes = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < des.length; i++) {
			var a = des[i];
			var title = a[2];
			var marker12 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker12.bindPopup(title);
			markersdes.addLayer(marker12);
		}

		var cb3 ={
			"Total Komplain Tahun 2019" : markers,
		}

		var layerControl2 = L.control.layers(
			null,
			cb3, 
			{
			  position: "topleft",
			  collapsed: false
			}
		  ).addTo(map);

		  var layerControlContainer222 = layerControl2.getContainer();
		$("#layercontrol1").append(layerControlContainer222);
		
		var cb4 = {
			
			"Januari 2019" : markersjan,
			"Februari 2019" : markersfeb,
			"Maret 2019" : markersmar,
			"April 2019" : markersapr,
			"Mei 2019" : markersmei,
			"Juni 2019" : markersjun,
			"Juli 2019" : markersjul,
			"Agustus 2019" : markersagst,
			"September 2019" : markerssept,
			"Oktober 2019" : markersokt,
			"November 2019" : markersnov,
			"Desember 2019" : markersdes
			};

		var layerControl1 = L.control.layers(
			null,
			cb4, 
			{
			  position: "topleft",
			  collapsed: false
			}
		  ).addTo(map);

		  var layerControlContainer333 = layerControl1.getContainer();
		$("#layercontrol2").append(layerControlContainer333);

		var zoomTo1 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 09.00 AM');
			map.setView([-7.7892755,110.3638738], 18);
		  }).addTo(map);
		  var layerControlContainer1 = zoomTo1.getContainer();
		$("#zoomke1").append(layerControlContainer1); 
		
		var zoomTo2 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 09.52 AM');
			map.setView([-7.7258869,109.9071841], 18);
		  	}).addTo(map);
		var layerControlContainer2 = zoomTo2.getContainer();
		$("#zoomke2").append(layerControlContainer2); 
		
		var zoomTo3 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 10.21 AM');
			map.setView([-7.6817128,109.6621947], 18);
		  	}).addTo(map);
		var layerControlContainer3 = zoomTo3.getContainer();
		$("#zoomke3").append(layerControlContainer3); 
		
		var zoomTo4 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 11.07 AM');
			map.setView([-7.6302529,109.2535622], 18);
		  	}).addTo(map);
		var layerControlContainer4 = zoomTo4.getContainer();
		$("#zoomke4").append(layerControlContainer4); 
		
		var zoomTo5 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 11.37 AM');
			map.setView([-7.4192276,109.2219922], 18);
		  	}).addTo(map);
		var layerControlContainer5 = zoomTo5.getContainer();
		$("#zoomke5").append(layerControlContainer5); 
		
		var zoomTo6 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 01.37 PM');
			map.setView([-6.7052739,108.55555], 18);
		  	}).addTo(map);
		var layerControlContainer6 = zoomTo6.getContainer();
		$("#zoomke6").append(layerControlContainer6); 
		
		var zoomTo7 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 04.24 PM');
			map.setView([-6.2152273,106.8703446], 18);
		  	}).addTo(map);
		var layerControlContainer7 = zoomTo7.getContainer();
		$("#zoomke7").append(layerControlContainer7); 
		
		var zoomTo8 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 04.42 PM');
			map.setView([-6.1766309,106.8304899], 18);
		  	}).addTo(map);
		var layerControlContainer8 = zoomTo8.getContainer();
		$("#zoomke8").append(layerControlContainer8); 
		
		var zoomTo9 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 09.00 PM');
			map.setView([-7.7892755,110.3638738], 18);
		  	}).addTo(map);
		var layerControlContainer9 = zoomTo9.getContainer();
		$("#zoomke9").append(layerControlContainer9); 
		
		var zoomTo10 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 09.52 PM');
			map.setView([-7.7258869,109.9071841], 18);
		  	}).addTo(map);
		var layerControlContainer10 = zoomTo10.getContainer();
		$("#zoomke10").append(layerControlContainer10); 
		
		var zoomTo11 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 10.20 PM');
			map.setView([-7.6817128,109.6621947], 18);
		  	}).addTo(map);
		var layerControlContainer11 = zoomTo11.getContainer();
		$("#zoomke11").append(layerControlContainer11); 
		
		var zoomTo12 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 11.07 PM');
			map.setView([-7.6302529,109.2535622], 18);
		  	}).addTo(map);
		var layerControlContainer12 = zoomTo12.getContainer();
		$("#zoomke12").append(layerControlContainer12); 
		
		var zoomTo13 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 11.36 PM');
			map.setView([-7.4192276,109.2219922], 18);
		  	}).addTo(map);
		var layerControlContainer13 = zoomTo13.getContainer();
		$("#zoomke13").append(layerControlContainer13); 
		
		var zoomTo14 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 01.37 AM');
			map.setView([-6.7052739,108.55555], 18);
		  	}).addTo(map);
		var layerControlContainer14 = zoomTo14.getContainer();
		$("#zoomke14").append(layerControlContainer14); 
		
		var zoomTo15 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 04.08 AM');
			map.setView([-6.2361393,106.9994797], 18);
		  	}).addTo(map);
		var layerControlContainer15 = zoomTo15.getContainer();
		$("#zoomke15").append(layerControlContainer15); 
		
		var zoomTo16 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 04.27 AM');
			map.setView([-6.2152273,106.8703446], 18);
		  	}).addTo(map);
		var layerControlContainer16 = zoomTo16.getContainer();
		$("#zoomke16").append(layerControlContainer16); 
		
		var zoomTo17 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 04.45 AM');
			map.setView([-6.1766309,106.8304899], 18);
		  	}).addTo(map);
		var layerControlContainer17 = zoomTo17.getContainer();
		$("#zoomke17").append(layerControlContainer17); 
		
		var zoomTo18 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 09.45 AM');
			map.setView([-7.7902301,110.3754493], 18);
		  	}).addTo(map);
		var layerControlContainer18 = zoomTo18.getContainer();
		$("#zoomke18").append(layerControlContainer18); 
		
		var zoomTo19 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 09.49 AM');
			map.setView([-7.7892755,110.3638738], 18);
		  	}).addTo(map);
		var layerControlContainer19 = zoomTo19.getContainer();
		$("#zoomke19").append(layerControlContainer19); 
		
		var zoomTo20 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 10.21 AM');
			map.setView([-7.8595563,110.1579272], 18);
		  	}).addTo(map);
		var layerControlContainer20 = zoomTo20.getContainer();
		$("#zoomke20").append(layerControlContainer20); 
		
		var zoomTo21 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 10.42 AM');
			map.setView([-7.8027515,110.0012486], 18);
		  	}).addTo(map);
		var layerControlContainer21 = zoomTo21.getContainer();
		$("#zoomke21").append(layerControlContainer21); 
		
		var zoomTo22 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 10.57 AM');
			map.setView([-7.7258869,109.9071841], 18);
		  	}).addTo(map);
		var layerControlContainer22 = zoomTo22.getContainer();
		$("#zoomke22").append(layerControlContainer22); 
		
		var zoomTo23 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 11.36 AM');
			map.setView([-7.6331663,109.5734925], 18);
		  	}).addTo(map);
		var layerControlContainer23 = zoomTo23.getContainer();
		$("#zoomke23").append(layerControlContainer23); 
		
		var zoomTo24 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 11.50 AM');
			map.setView([-7.6105735,109.5078155], 18);
		  	}).addTo(map);
		var layerControlContainer24 = zoomTo24.getContainer();
		$("#zoomke24").append(layerControlContainer24); 
		
		var zoomTo25 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 12.21 PM');
			map.setView([-7.6302529,109.2535622], 18);
		  	}).addTo(map);
		var layerControlContainer25 = zoomTo25.getContainer();
		$("#zoomke25").append(layerControlContainer25); 
		
		var zoomTo26 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 12.57 PM');
			map.setView([-7.4192276,109.2219922], 18);
		  	}).addTo(map);
		var layerControlContainer26 = zoomTo26.getContainer();
		$("#zoomke26").append(layerControlContainer26); 
		
		var zoomTo27 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 02.46 PM');
			map.setView([-6.9029226,108.7439859], 18);
		  	}).addTo(map);
		var layerControlContainer27 = zoomTo27.getContainer();
		$("#zoomke27").append(layerControlContainer27); 
		
		var zoomTo28 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 03.14 PM');
			map.setView([-6.7193421,108.5588038], 18);
		  	}).addTo(map);
		var layerControlContainer28 = zoomTo28.getContainer();
		$("#zoomke28").append(layerControlContainer28); 
		
		var zoomTo29 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 04.25 PM');
			map.setView([-6.4586318,107.9409389], 18);
		  	}).addTo(map);
		var layerControlContainer29 = zoomTo29.getContainer();
		$("#zoomke29").append(layerControlContainer29); 
		
		var zoomTo30 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 06.12 PM');
			map.setView([-6.2152273,106.8703446], 18);
		  	}).addTo(map);
		var layerControlContainer30 = zoomTo30.getContainer();
		$("#zoomke30").append(layerControlContainer30); 
		
		var zoomTo31 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 06.24 AM');
			map.setView([-6.1747185,106.844333], 18);
		  	}).addTo(map);
		var layerControlContainer31 = zoomTo31.getContainer();
		$("#zoomke31").append(layerControlContainer31); 
		
		var zoomTo32 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 06.10 PM');
			map.setView([-7.7902301,110.3754493], 18);
		  	}).addTo(map);
		var layerControlContainer32 = zoomTo32.getContainer();
		$("#zoomke32").append(layerControlContainer32); 
		
		var zoomTo33 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 06.14 PM');
			map.setView([-7.7892755,110.3638738], 18);
		  	}).addTo(map);
		var layerControlContainer33 = zoomTo33.getContainer();
		$("#zoomke33").append(layerControlContainer33); 
		
		var zoomTo34 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 06.43 PM');
			map.setView([-7.8595563,110.1579272], 18);
		  	}).addTo(map);
		var layerControlContainer34 = zoomTo34.getContainer();
		$("#zoomke34").append(layerControlContainer34); 
		
		var zoomTo35 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 07.13 PM');
			map.setView([-7.7258869,109.9071841], 18);
		  	}).addTo(map);
		var layerControlContainer35 = zoomTo35.getContainer();
		$("#zoomke35").append(layerControlContainer35); 
		
		var zoomTo36 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 07.28 PM');
			map.setView([-7.7243091,109.7981071], 18);
		  	}).addTo(map);
		var layerControlContainer36 = zoomTo36.getContainer();
		$("#zoomke36").append(layerControlContainer36); 
		
		var zoomTo37 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 07.48 PM');
			map.setView([-7.6817128,109.6621947], 18);
		  	}).addTo(map);
		var layerControlContainer37 = zoomTo37.getContainer();
		$("#zoomke37").append(layerControlContainer37); 
		
		var zoomTo38 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 08.10 PM');
			map.setView([-7.6105735,109.5078155], 18);
		  	}).addTo(map);
		var layerControlContainer38 = zoomTo38.getContainer();
		$("#zoomke38").append(layerControlContainer38); 
		
		var zoomTo39 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 09.03 PM');
			map.setView([-7.4192276,109.2219922], 18);
		  	}).addTo(map);
		var layerControlContainer39 = zoomTo39.getContainer();
		$("#zoomke39").append(layerControlContainer39); 
		
		var zoomTo40 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 09.54 PM');
			map.setView([-7.2374021,109.0098136], 18);
		  	}).addTo(map);
		var layerControlContainer40 = zoomTo40.getContainer();
		$("#zoomke40").append(layerControlContainer40); 
		
		var zoomTo41 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 10.46 PM');
			map.setView([-6.9029226,108.7439859], 18);
		  	}).addTo(map);
		var layerControlContainer41 = zoomTo41.getContainer();
		$("#zoomke41").append(layerControlContainer41); 
		
		var zoomTo42 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 11.16 PM');
			map.setView([-6.7052739,108.55555], 18);
		  	}).addTo(map);
		var layerControlContainer42 = zoomTo42.getContainer();
		$("#zoomke42").append(layerControlContainer42); 
		
		var zoomTo43 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 01.55 AM');
			map.setView([-6.2361393,106.9994797], 18);
		  	}).addTo(map);
		var layerControlContainer43 = zoomTo43.getContainer();
		$("#zoomke43").append(layerControlContainer43); 
		
		var zoomTo44 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 02.17 AM');
			map.setView([-6.2152273,106.8703446], 18);
		  	}).addTo(map);
		var layerControlContainer44 = zoomTo44.getContainer();
		$("#zoomke44").append(layerControlContainer44); 
		
		var zoomTo45 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 02.29 AM');
			map.setView([-6.1747185,106.844333], 18);
		  	}).addTo(map);
		var layerControlContainer45 = zoomTo45.getContainer();
		$("#zoomke45").append(layerControlContainer45); 
		
		var zoomTo46 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 07.00 AM');
			map.setView([-7.7892755,110.3638738], 18);
		  	}).addTo(map);
		var layerControlContainer46 = zoomTo46.getContainer();
		$("#zoomke46").append(layerControlContainer46); 
		
		var zoomTo47 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 07.26 AM');
			map.setView([-7.8595563,110.1579272], 18);
		  	}).addTo(map);
		var layerControlContainer47 = zoomTo47.getContainer();
		$("#zoomke47").append(layerControlContainer47); 
		
		var zoomTo48 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 07.57 AM');
			map.setView([-7.7258869,109.9071841], 18);
		  	}).addTo(map);
		var layerControlContainer48 = zoomTo48.getContainer();
		$("#zoomke48").append(layerControlContainer48); 
		
		var zoomTo49 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 09.44 AM');
			map.setView([-7.4192276,109.2219922], 18);
		  	}).addTo(map);
		var layerControlContainer49 = zoomTo49.getContainer();
		$("#zoomke49").append(layerControlContainer49); 
		
		var zoomTo50 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 10.33 AM');
			map.setView([-7.2374021,109.0098136], 18);
		  	}).addTo(map);
		var layerControlContainer50 = zoomTo50.getContainer();
		$("#zoomke50").append(layerControlContainer50); 
		
		var zoomTo51 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 11.16 AM');
			map.setView([-6.9382946,108.8843762], 18);
		  	}).addTo(map);
		var layerControlContainer51 = zoomTo51.getContainer();
		$("#zoomke51").append(layerControlContainer51); 
		
		var zoomTo52 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 11.57 AM');
			map.setView([-6.7052739,108.55555], 18);
		  	}).addTo(map);
		var layerControlContainer52 = zoomTo52.getContainer();
		$("#zoomke52").append(layerControlContainer52); 
		
		var zoomTo53 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 12.39 PM');
			map.setView([-6.4728392,108.3063283], 18);
		  	}).addTo(map);
		var layerControlContainer53 = zoomTo53.getContainer();
		$("#zoomke53").append(layerControlContainer53); 
		
		var zoomTo54 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 01.12 PM');
			map.setView([-6.4586318,107.9409389], 18);
		  	}).addTo(map);
		var layerControlContainer54 = zoomTo54.getContainer();
		$("#zoomke54").append(layerControlContainer54); 
		
		var zoomTo55 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 02.59 PM');
			map.setView([-6.2152273,106.8703446], 18);
		  	}).addTo(map);
		var layerControlContainer55 = zoomTo55.getContainer();
		$("#zoomke55").append(layerControlContainer55); 
		
		var zoomTo56 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 03.11 PM');
			map.setView([-6.1747185,106.844333], 18);
		  	}).addTo(map);
		var layerControlContainer56 = zoomTo56.getContainer();
		$("#zoomke56").append(layerControlContainer56); 
		
		var zoomTo57 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 07.05 PM');
			map.setView([-7.7892755,110.3638738], 18);
		  	}).addTo(map);
		var layerControlContainer57 = zoomTo57.getContainer();
		$("#zoomke57").append(layerControlContainer57); 
		
		var zoomTo58 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 07.30 PM');
			map.setView([-7.8595563,110.1579272], 18);
		  	}).addTo(map);
		var layerControlContainer58 = zoomTo58.getContainer();
		$("#zoomke58").append(layerControlContainer58); 
		
		var zoomTo59 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 08.02 PM');
			map.setView([-7.7258869,109.9071841], 18);
		  	}).addTo(map);
		var layerControlContainer59 = zoomTo59.getContainer();
		$("#zoomke59").append(layerControlContainer59); 
		
		var zoomTo60 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 08.35 AM');
			map.setView([-7.6817128,109.6621947], 18);
		  	}).addTo(map);
		var layerControlContainer60 = zoomTo60.getContainer();
		$("#zoomke60").append(layerControlContainer60); 
		
		var zoomTo61 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 08.56 PM');
			map.setView([-7.6105735,109.5078155], 18);
		  	}).addTo(map);
		var layerControlContainer61 = zoomTo61.getContainer();
		$("#zoomke61").append(layerControlContainer61); 
		
		var zoomTo62 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 09.49 PM');
			map.setView([-7.4192276,109.2219922], 18);
		  	}).addTo(map);
		var layerControlContainer62 = zoomTo62.getContainer();
		$("#zoomke62").append(layerControlContainer62); 
		
		var zoomTo63 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 22.50 PM');
			map.setView([-6.7052739,108.55555], 18);
		  	}).addTo(map);
		var layerControlContainer63 = zoomTo63.getContainer();
		$("#zoomke63").append(layerControlContainer63); 
		
		var zoomTo64 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 02.28 AM');
			map.setView([-6.2361393,106.9994797], 18);
		  	}).addTo(map);
		var layerControlContainer64 = zoomTo64.getContainer();
		$("#zoomke64").append(layerControlContainer64); 
		
		var zoomTo65 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 02.49 AM');
			map.setView([-6.2152273,106.8703446], 18);
		  	}).addTo(map);
		var layerControlContainer65 = zoomTo65.getContainer();
		$("#zoomke65").append(layerControlContainer65); 
		
		var zoomTo66 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 03.01 AM');
			map.setView([-6.1747185,106.844333], 18);
		  	}).addTo(map);
		var layerControlContainer66 = zoomTo66.getContainer();
		$("#zoomke66").append(layerControlContainer66); 
		
		var zoomTo67 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 03.20 PM');
			map.setView([7.7902301,110.3754493], 18);
		  	}).addTo(map);
		var layerControlContainer67 = zoomTo67.getContainer();
		$("#zoomke67").append(layerControlContainer67); 
		
		var zoomTo68 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 03.50 PM');
			map.setView([-7.8595563,110.1579272], 18);
		  	}).addTo(map);
		var layerControlContainer68 = zoomTo68.getContainer();
		$("#zoomke68").append(layerControlContainer68); 
		
		var zoomTo69 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 04.23 PM');
			map.setView([-7.7258869,109.9071841], 18);
		  	}).addTo(map);
		var layerControlContainer69 = zoomTo69.getContainer();
		$("#zoomke69").append(layerControlContainer69); 
		
		var zoomTo70 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 04.50 PM');
			map.setView([-7.6817128,109.6621947], 18);
		  	}).addTo(map);
		var layerControlContainer70 = zoomTo70.getContainer();
		$("#zoomke70").append(layerControlContainer70); 
		
		var zoomTo71 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 05.12 PM');
			map.setView([-7.6331663,109.5734925], 18);
		  	}).addTo(map);
		var layerControlContainer71 = zoomTo71.getContainer();
		$("#zoomke71").append(layerControlContainer71); 
		
		var zoomTo72 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 05.26 PM');
			map.setView([-7.6105735,109.5078155], 18);
		  	}).addTo(map);
		var layerControlContainer72 = zoomTo72.getContainer();
		$("#zoomke72").append(layerControlContainer72); 
		
		var zoomTo73 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 05.56 PM');
			map.setView([-7.6302529,109.2535622], 18);
		  	}).addTo(map);
		var layerControlContainer73 = zoomTo73.getContainer();
		$("#zoomke73").append(layerControlContainer73); 
		
		var zoomTo74 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 06.26 PM');
			map.setView([-7.4192276,109.2219922], 18);
		  	}).addTo(map);
		var layerControlContainer74 = zoomTo74.getContainer();
		$("#zoomke74").append(layerControlContainer74); 
		
		var zoomTo75 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 07.57 PM');
			map.setView([-6.9382946,108.8843762], 18);
		  	}).addTo(map);
		var layerControlContainer75 = zoomTo75.getContainer();
		$("#zoomke75").append(layerControlContainer75); 
		
		var zoomTo76 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 08.36 PM');
			map.setView([-6.7193421,108.5588038], 18);
		  	}).addTo(map);
		var layerControlContainer76 = zoomTo76.getContainer();
		$("#zoomke76").append(layerControlContainer76); 
		
		var zoomTo77 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 11.21 PM');
			map.setView([-6.2361393,106.9994797], 18);
		  	}).addTo(map);
		var layerControlContainer77 = zoomTo77.getContainer();
		$("#zoomke77").append(layerControlContainer77); 
		
		var zoomTo78 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 11.42 PM');
			map.setView([-6.2152273,106.8703446], 18);
		  	}).addTo(map);
		var layerControlContainer78 = zoomTo78.getContainer();
		$("#zoomke78").append(layerControlContainer78); 
		
		var zoomTo79 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 11.54 AM');
			map.setView([-6.1747185,106.844333], 18);
		  	}).addTo(map);
		var layerControlContainer79 = zoomTo79.getContainer();
		$("#zoomke79").append(layerControlContainer79); 
		
		var zoomTo80 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 09.30 AM');
			map.setView([-6.1766309,106.8304899], 18);
		  	}).addTo(map);
		var layerControlContainer80 = zoomTo80.getContainer();
		$("#zoomke80").append(layerControlContainer80); 
		
		var zoomTo81 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 12.24 PM');
			map.setView([-6.7052739,108.55555], 18);
		  	}).addTo(map);
		var layerControlContainer81 = zoomTo81.getContainer();
		$("#zoomke81").append(layerControlContainer81); 
		
		var zoomTo82 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 02.28 PM');
			map.setView([-7.4192276,109.2219922], 18);
		  	}).addTo(map);
		var layerControlContainer82 = zoomTo82.getContainer();
		$("#zoomke82").append(layerControlContainer82); 
		
		var zoomTo83 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 03.44 PM');
			map.setView([-7.6817128,109.6621947], 18);
		  	}).addTo(map);
		var layerControlContainer83 = zoomTo83.getContainer();
		$("#zoomke83").append(layerControlContainer83); 
		
		var zoomTo84 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 04.14 PM');
			map.setView([-7.7258869,109.9071841], 18);
		  	}).addTo(map);
		var layerControlContainer84 = zoomTo84.getContainer();
		$("#zoomke84").append(layerControlContainer84); 
		
		var zoomTo85 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 05.10 PM');
			map.setView([-7.7892755,110.3638738], 18);
		  	}).addTo(map);
		var layerControlContainer85 = zoomTo85.getContainer();
		$("#zoomke85").append(layerControlContainer85); 
		
		var zoomTo86 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 09.30 PM');
			map.setView([-6.1766309,106.8304899], 18);
		  	}).addTo(map);
		var layerControlContainer86 = zoomTo86.getContainer();
		$("#zoomke86").append(layerControlContainer86); 
		
		var zoomTo87 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 00.26 AM');
			map.setView([-6.7052739,108.55555], 18);
		  	}).addTo(map);
		var layerControlContainer87 = zoomTo87.getContainer();
		$("#zoomke87").append(layerControlContainer87); 
		
		var zoomTo88 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 02.28 AM');
			map.setView([-7.4192276,109.2219922], 18);
		  	}).addTo(map);
		var layerControlContainer88 = zoomTo88.getContainer();
		$("#zoomke88").append(layerControlContainer88); 
		
		var zoomTo89 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 04.08 AM');
			map.setView([-7.7258869,109.9071841], 18);
		  	}).addTo(map);
		var layerControlContainer89 = zoomTo89.getContainer();
		$("#zoomke89").append(layerControlContainer89); 
		
		var zoomTo90 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 05.02 AM');
			map.setView([-7.7892755,110.3638738], 18);
		  	}).addTo(map);
		var layerControlContainer90 = zoomTo90.getContainer();
		$("#zoomke90").append(layerControlContainer90); 
		
		var zoomTo91 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 09.45 PM');
			map.setView([-6.1747185,106.844333], 18);
		  	}).addTo(map);
		var layerControlContainer91 = zoomTo91.getContainer();
		$("#zoomke91").append(layerControlContainer91); 
		
		var zoomTo92 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 00.44 AM');
			map.setView([-6.7193421,108.5588038], 18);
		  	}).addTo(map);
		var layerControlContainer92 = zoomTo92.getContainer();
		$("#zoomke92").append(layerControlContainer92); 
		
		var zoomTo93 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 01.14 AM');
			map.setView([-6.9029226,108.7439859], 18);
		  	}).addTo(map);
		var layerControlContainer93 = zoomTo93.getContainer();
		$("#zoomke93").append(layerControlContainer93); 
		
		var zoomTo94 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 02.47 AM');
			map.setView([-7.4192276,109.2219922], 18);
		  	}).addTo(map);
		var layerControlContainer94 = zoomTo94.getContainer();
		$("#zoomke94").append(layerControlContainer94); 
		
		var zoomTo95 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 03.31 AM');
			map.setView([-7.6302529,109.2535622], 18);
		  	}).addTo(map);
		var layerControlContainer95 = zoomTo95.getContainer();
		$("#zoomke95").append(layerControlContainer95); 
		
		var zoomTo96 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 03.59 AM');
			map.setView([-7.6105735,109.5078155], 18);
		  	}).addTo(map);
		var layerControlContainer96 = zoomTo96.getContainer();
		$("#zoomke96").append(layerControlContainer96); 
		
		var zoomTo97 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 04.28 AM');
			map.setView([-7.6817128,109.6621947], 18);
		  	}).addTo(map);
		var layerControlContainer97 = zoomTo97.getContainer();
		$("#zoomke97").append(layerControlContainer97); 
		
		var zoomTo98 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 04.56 AM');
			map.setView([-7.7258869,109.9071841], 18);
		  	}).addTo(map);
		var layerControlContainer98 = zoomTo98.getContainer();
		$("#zoomke98").append(layerControlContainer98); 
		
		var zoomTo99 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 05.12 AM');
			map.setView([-7.8027515,110.0012486], 18);
		  	}).addTo(map);
		var layerControlContainer99 = zoomTo99.getContainer();
		$("#zoomke99").append(layerControlContainer99); 
		
		var zoomTo100 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 05.31 AM');
			map.setView([-7.8595563,110.1579272], 18);
		  	}).addTo(map);
		var layerControlContainer100 = zoomTo100.getContainer();
		$("#zoomke100").append(layerControlContainer100); 
		
		var zoomTo101 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 06.00 AM');
			map.setView([-7.7892755,110.3638738], 18);
		  	}).addTo(map);
		var layerControlContainer101 = zoomTo101.getContainer();
		$("#zoomke101").append(layerControlContainer101); 
		
		var zoomTo102 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 06.07 AM');
			map.setView([-7.7902301,110.3754493], 18);
		  	}).addTo(map);
		var layerControlContainer102 = zoomTo102.getContainer();
		$("#zoomke102").append(layerControlContainer102); 
		
		var zoomTo103 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 06.45 AM');
			map.setView([-6.1747185,106.844333], 18);
		  	}).addTo(map);
		var layerControlContainer103 = zoomTo103.getContainer();
		$("#zoomke103").append(layerControlContainer103); 
		
		var zoomTo104 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 08.34 AM');
			map.setView([-6.4586318,107.9409389], 18);
		  	}).addTo(map);
		var layerControlContainer104 = zoomTo104.getContainer();
		$("#zoomke104").append(layerControlContainer104); 
		
		var zoomTo105 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 09.38 AM');
			map.setView([-6.7052739,108.55555], 18);
		  	}).addTo(map);
		var layerControlContainer105 = zoomTo105.getContainer();
		$("#zoomke105").append(layerControlContainer105); 
		
		var zoomTo106 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 10.13 AM');
			map.setView([-6.9029226,108.7439859], 18);
		  	}).addTo(map);
		var layerControlContainer106 = zoomTo106.getContainer();
		$("#zoomke106").append(layerControlContainer106); 
		
		var zoomTo107 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 10.28 AM');
			map.setView([-6.9382946,108.8843762], 18);
		  	}).addTo(map);
		var layerControlContainer107 = zoomTo107.getContainer();
		$("#zoomke107").append(layerControlContainer107); 
		
		var zoomTo108 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 11.09 AM');
			map.setView([-7.2374021,109.0098136], 18);
		  	}).addTo(map);
		var layerControlContainer108 = zoomTo108.getContainer();
		$("#zoomke108").append(layerControlContainer108); 
		
		var zoomTo109 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 11.54 AM');
			map.setView([-7.4192276,109.2219922], 18);
		  	}).addTo(map);
		var layerControlContainer109 = zoomTo109.getContainer();
		$("#zoomke109").append(layerControlContainer109); 
		
		var zoomTo110 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 12.28 PM');
			map.setView([-7.6302529,109.2535622], 18);
		  	}).addTo(map);
		var layerControlContainer110 = zoomTo110.getContainer();
		$("#zoomke110").append(layerControlContainer110); 
		
		var zoomTo111 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 01.14 PM');
			map.setView([-7.6331663,109.5734925], 18);
		  	}).addTo(map);
		var layerControlContainer111 = zoomTo111.getContainer();
		$("#zoomke111").append(layerControlContainer111); 
		
		var zoomTo112 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 01.33 PM');
			map.setView([-7.6817128,109.6621947], 18);
		  	}).addTo(map);
		var layerControlContainer112 = zoomTo112.getContainer();
		$("#zoomke112").append(layerControlContainer112); 
		
		var zoomTo113 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 02.00 PM');
			map.setView([-7.7258869,109.9071841], 18);
		  	}).addTo(map);
		var layerControlContainer113 = zoomTo113.getContainer();
		$("#zoomke113").append(layerControlContainer113); 
		
		var zoomTo114 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 02.32 PM');
			map.setView([-7.8595563,110.1579272], 18);
		  	}).addTo(map);
		var layerControlContainer114 = zoomTo114.getContainer();
		$("#zoomke114").append(layerControlContainer114); 
		
		var zoomTo115 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 03.01 PM');
			map.setView([-7.7892755,110.3638738], 18);
		  	}).addTo(map);
		var layerControlContainer115 = zoomTo115.getContainer();
		$("#zoomke115").append(layerControlContainer115); 
		
		var zoomTo116 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 03.08 AM');
			map.setView([-7.7902301,110.3754493], 18);
		  	}).addTo(map);
		var layerControlContainer116 = zoomTo116.getContainer();
		$("#zoomke116").append(layerControlContainer116); 
		
		var zoomTo117 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 07.20 AM');
			map.setView([-6.1747185,106.844333], 18);
		  	}).addTo(map);
		var layerControlContainer117 = zoomTo117.getContainer();
		$("#zoomke117").append(layerControlContainer117); 
		
		var zoomTo118 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 09.42 AM');
			map.setView([-6.4728392,108.3063283], 18);
		  	}).addTo(map);
		var layerControlContainer118 = zoomTo118.getContainer();
		$("#zoomke118").append(layerControlContainer118); 
		
		var zoomTo119 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 10.17 AM');
			map.setView([-6.7052739,108.55555], 18);
		  	}).addTo(map);
		var layerControlContainer119 = zoomTo119.getContainer();
		$("#zoomke119").append(layerControlContainer119); 
		
		var zoomTo120 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 11.45 AM');
			map.setView([-7.2374021,109.0098136], 18);
		  	}).addTo(map);
		var layerControlContainer120 = zoomTo120.getContainer();
		$("#zoomke120").append(layerControlContainer120); 
		
		var zoomTo121 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 12.29 PM');
			map.setView([-7.4192276,109.2219922], 18);
		  	}).addTo(map);
		var layerControlContainer121 = zoomTo121.getContainer();
		$("#zoomke121").append(layerControlContainer121); 
		
		var zoomTo122 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 01.40 PM');
			map.setView([-7.6105735,109.5078155], 18);
		  	}).addTo(map);
		var layerControlContainer122 = zoomTo122.getContainer();
		$("#zoomke122").append(layerControlContainer122); 
		
		var zoomTo123 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 02.01 PM');
			map.setView([-7.6817128,109.6621947], 18);
		  	}).addTo(map);
		var layerControlContainer123 = zoomTo123.getContainer();
		$("#zoomke123").append(layerControlContainer123); 
		
		var zoomTo124 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 02.28 AM');
			map.setView([-7.7258869,109.9071841], 18);
		  	}).addTo(map);
		var layerControlContainer124 = zoomTo124.getContainer();
		$("#zoomke124").append(layerControlContainer124); 
		
		var zoomTo125 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 03.00 PM');
			map.setView([-7.8595563,110.1579272], 18);
		  	}).addTo(map);
		var layerControlContainer125 = zoomTo125.getContainer();
		$("#zoomke125").append(layerControlContainer125); 
		
		var zoomTo126 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 03.29 AM');
			map.setView([-7.7892755,110.3638738], 18);
		  	}).addTo(map);
		var layerControlContainer126 = zoomTo126.getContainer();
		$("#zoomke126").append(layerControlContainer126); 
		
		var zoomTo127 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 06.55 PM');
			map.setView([-6.1747185,106.844333], 18);
		  	}).addTo(map);
		var layerControlContainer127 = zoomTo127.getContainer();
		$("#zoomke127").append(layerControlContainer127); 
		
		var zoomTo128 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 09.47 PM');
			map.setView([-6.7052739,108.55555], 18);
		  	}).addTo(map);
		var layerControlContainer128 = zoomTo128.getContainer();
		$("#zoomke128").append(layerControlContainer128); 
		
		var zoomTo129 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 11.56 PM');
			map.setView([-7.4192276,109.2219922], 18);
		  	}).addTo(map);
		var layerControlContainer129 = zoomTo129.getContainer();
		$("#zoomke129").append(layerControlContainer129); 
		
		var zoomTo130 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 00.56 AM');
			map.setView([-7.6105735,109.5078155], 18);
		  	}).addTo(map);
		var layerControlContainer130 = zoomTo130.getContainer();
		$("#zoomke130").append(layerControlContainer130); 
				
		var zoomTo132 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 01.30 AM');
			map.setView([-7.6817128,109.6621947], 18);
		  	}).addTo(map);
		var layerControlContainer132 = zoomTo132.getContainer();
		$("#zoomke132").append(layerControlContainer132); 
		
		var zoomTo133 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 01.46 AM');
			map.setView([-7.7243091,109.7981071], 18);
		  	}).addTo(map);
		var layerControlContainer133 = zoomTo133.getContainer();
		$("#zoomke133").append(layerControlContainer133); 
		
		var zoomTo134 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 02.04 AM');
			map.setView([-7.7258869,109.9071841], 18);
		  	}).addTo(map);
		var layerControlContainer134 = zoomTo134.getContainer();
		$("#zoomke134").append(layerControlContainer134); 
		
		var zoomTo135 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 02.38 AM');
			map.setView([-7.8595563,110.1579272], 18);
		  	}).addTo(map);
		var layerControlContainer135 = zoomTo135.getContainer();
		$("#zoomke135").append(layerControlContainer135); 
		
		var zoomTo136 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 03.07 AM');
			map.setView([-7.7892755,110.3638738], 18);
		  	}).addTo(map);
		var layerControlContainer136 = zoomTo136.getContainer();
		$("#zoomke136").append(layerControlContainer136); 
		
		var zoomTo137 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 10.30 PM');
			map.setView([-6.1766309,106.8304899], 18);
		  	}).addTo(map);
		var layerControlContainer137 = zoomTo137.getContainer();
		$("#zoomke137").append(layerControlContainer137); 
		
		var zoomTo138 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 01.32 AM');
			map.setView([-6.7193421,108.5588038], 18);
		  	}).addTo(map);
		var layerControlContainer138 = zoomTo138.getContainer();
		$("#zoomke138").append(layerControlContainer138); 
		
		var zoomTo139 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 03.44 AM');
			map.setView([-7.4192276,109.2219922], 18);
		  	}).addTo(map);
		var layerControlContainer139 = zoomTo139.getContainer();
		$("#zoomke139").append(layerControlContainer139); 
		
		var zoomTo140 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 04.50 AM');
			map.setView([-7.6105735,109.5078155], 18);
		  	}).addTo(map);
		var layerControlContainer140 = zoomTo140.getContainer();
		$("#zoomke140").append(layerControlContainer140); 
		
		var zoomTo141 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 05.17 AM');
			map.setView([-7.6817128,109.6621947], 18);
		  	}).addTo(map);
		var layerControlContainer141 = zoomTo141.getContainer();
		$("#zoomke141").append(layerControlContainer141); 
		
		var zoomTo142 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 05.44 AM');
			map.setView([-7.7258869,109.9071841], 18);
		  	}).addTo(map);
		var layerControlContainer142 = zoomTo142.getContainer();
		$("#zoomke142").append(layerControlContainer142); 
		
		var zoomTo143 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 06.17 AM');
			map.setView([-7.8595563,110.1579272], 18);
		  	}).addTo(map);
		var layerControlContainer143 = zoomTo143.getContainer();
		$("#zoomke143").append(layerControlContainer143); 
		
		var zoomTo144 = L.easyButton( 'fa-search-plus', function(){
			alert('Ubah waktu secara manual menggunakan time slider menjadi pukul 06.52 AM');
			map.setView([-7.7902301,110.3754493], 18);
		  	}).addTo(map);
		var layerControlContainer144 = zoomTo144.getContainer();
		$("#zoomke144").append(layerControlContainer144); 
		  

    // Colors for AwesomeMarkers
   var lokoIcon = L.icon({
                            iconUrl: 'images/loko1.png',
                            iconSize: [40, 40], // size of the icon
                            shadowSize: [0, 0], // size of the shadow
                            iconAnchor: [17, 20], // point of the icon which will correspond to marker's location
                            shadowAnchor: [0, 0], // the same for the shadow
                            popupAnchor: [0, -20] // point from which the popup should open relative to the iconAnchor
                        });
    
	
	 var _colorIdx = 0,
        _colors = [
          'orange',
          'green',
          'blue',
          'purple',
          'darkred',
          'cadetblue',
          'red',
          'darkgreen',
          'darkblue',
          'darkpurple'
        ];
        
    function _assignColor() {
        return _colors[_colorIdx++%10];
    }
	
    // =====================================================
    // =============== Playback ============================
    // =====================================================

    // Playback options
    var playbackOptions = {        
        // layer and marker options
        layer: {
            pointToLayer : function(featureData, latlng){
                var result = {};
                if (featureData && featureData.properties && featureData.properties.path_options){
                    result = featureData.properties.path_options;
                }
                if (!result.radius){
                    result.radius = 5;
                }
                return new L.CircleMarker(latlng, result);
            }
        },
         marker: function(featureData){
            return {
                icon: L.AwesomeMarkers.icon({
                    prefix: 'fa',
                    icon: 'train', 
                    markerColor: _assignColor()
		
                }),
				getPopup: function (feature) {
				return feature.properties.title;}
            };
        },
		popups: true,
		fadeMarkersWhenStale: true,
		tracksLayer : false
    };
    
    // Initialize playback
    var playback = new L.Playback(map, demoTracks, null, playbackOptions);
    
    // Initialize custom control
    var control = new L.Playback.Control(playback);
    control.addTo(map);
    
    // Add data
    playback.addData(ka85);
	   
	var options = {
		series: [{
		name: 'Jumlah',
		data: [21, 20, 24, 28, 24, 30, 49, 33, 29, 28, 50, 166]
	  }],
	  chart: {
		height: 300,
		type: 'bar',
	  },
	  plotOptions: {
		bar: {
		  columnWidth: '50%',
		  endingShape: 'rounded'  
		}
	  },
	  dataLabels: {
		enabled: false
	  },
	  stroke: {
		width: 2
	  },
	  
	  grid: {
		row: {
		  colors: ['#fff', '#f2f2f2']
		}
	  },
	  xaxis: {
		labels: {
		  rotate: -45
		},
		categories: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
		  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
		],
		tickPlacement: 'on'
	  },
	  yaxis: {
		title: {
		  text: 'Jumlah Komplain',
		},
	  },
	  fill: {
		type: 'gradient',
		gradient: {
		  shade: 'light',
		  type: "horizontal",
		  shadeIntensity: 0.25,
		  gradientToColors: undefined,
		  inverseColors: true,
		  opacityFrom: 0.85,
		  opacityTo: 0.85,
		  stops: [50, 0, 100]
		},
	  }
	  };

	  var chart = new ApexCharts(document.querySelector("#chart"), options);
	  chart.render();
	  
});
