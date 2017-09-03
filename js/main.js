$(function () {
	
	// Всплывающее меню в шапке
	$("#topNavLink").click(function() {
		$("#topNav").slideToggle(220);
	});
	
	// Модальное окно
	$("#topPopupModalLink").click(function(e) {
		e.preventDefault();
		$("#popupOverlay").fadeIn(400, function() {
			$("#popupModal").css("display", "block").animate({opacity: 1, top: "30%"}, 200);
		});
	});
	
	// Закрытие модального окна
	$("#closeModal, #popupOverlay").click(function() {
		$("#popupModal").animate({opacity: 0, top: "35%"}, 200, function() {
			$(this).css("display", "none");
			$("#popupOverlay").fadeOut(400);
		});
	});
	
	// Выбор языка
	$("#topLangLink").click(function(){
		customOptionsBlock = $("#custom_options");
		if (customOptionsBlock.is(":hidden")) {
			$("#custom_options").show();
		}
		else {
			$("#custom_options").hide();
		}
	});
	$("#custom_options li").click(function(){
		choosenValue = $(this).attr("data-value");
		$("select").val(choosenValue).prop("selected", true);
		$("#topLangLink span").text($(this).text());
		$("#topLangLink").attr("data-value", choosenValue);
		$("#custom_options").hide();
	});
	
	// Стилизация select на странице "Новости"
	$(".filter-news-select").each(function(){
		var $this = $(this), numberOfOptions = $(this).children("option").length;
		
		$this.addClass("select-hidden");
		$this.wrap("<div class='select'></div>");
		$this.after("<div class='select-styled'></div>");
		
		var $styledSelect = $this.next("div.select-styled");
		$styledSelect.text($this.children("option").eq(0).text());
		
		var $list = $("<ul />", {
			"class": "select-options"
		}).insertAfter($styledSelect);
		
		for (var i = 0; i < numberOfOptions; i++) {
			$("<li />", {
				text: $this.children("option").eq(i).text(),
				rel: $this.children("option").eq(i).val()
			}).appendTo($list);
		}
		
		var $listItems = $list.children("li");
		
		$styledSelect.click(function(e) {
			e.stopPropagation();
			$("div.select-styled.active").not(this).each(function(){
				$(this).removeClass("active").next("ul.select-options").hide();
			});
			$(this).toggleClass("active").next("ul.select-options").toggle();
		});
		
		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass("active");
			$this.val($(this).attr("rel"));
			$list.hide();
		});
		
		$(document).click(function() {
			$styledSelect.removeClass("active");
			$list.hide();
		});
	});
	
	// Всплывающее меню в шапке
	// $("header .rozdil label").click(function () {
	// 	$("header .rozdil .main-ul").slideToggle(220);
	// });
	//
	// // Модальное окно
	// $(".popup").click( function(event){ // лoвим клик пo ссылки с id="go"
	// 	event.preventDefault(); // выключaем стaндaртную рoль элементa
	// 	$("#overlay").fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
	// 		function(){ // пoсле выпoлнения предыдущей aнимaции
	// 			$("#modal_form")
	// 				.css("display", "block") // убирaем у мoдaльнoгo oкнa display: none;
	// 				.animate({opacity: 1, top: "30%"}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
	// 		});
	// });
	// /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	// $("#modal_close, #overlay").click( function(){ // лoвим клик пo крестику или пoдлoжке
	// 	$("#modal_form")
	// 		.animate({opacity: 0, top: "35%"}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
	// 			function(){ // пoсле aнимaции
	// 				$(this).css("display", "none"); // делaем ему display: none;
	// 				$("#overlay").fadeOut(400); // скрывaем пoдлoжку
	// 			}
	// 		);
	// });

	// Выбор языка
	// $("#current_option").click(function(){
	// 	customOptionsBlock = $("#custom_options");
	// 	if (customOptionsBlock.is(":hidden")) {
	// 		$("#custom_options").show();
	// 	}
	// 	else {
	// 		$("#custom_options").hide();
	// 	}
	// });
	// $("#custom_options li").click(function(){
	// 	choosenValue = $(this).attr("data-value");
	// 	$("select").val(choosenValue).prop("selected", true);
	// 	$("#current_option span").text($(this).text());
	// 	$("#current_option").attr("data-value", choosenValue);
	// 	$("#custom_options").hide();
	// });
});