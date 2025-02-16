jQuery(document).ready(function ($) {

	$('.sl').slick({
		dots: true,
		appendArrows: $('.sl__nav'),
		appendDots: $('.sl__nav'),
	});

	$('.leaders__inner').slick({
		dots: false,
		infinite: true,
		speed: 300,
		appendArrows: $('.leaders__titles .arrows'),
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 561,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.reviews__inner').slick({
		dots: false,
		infinite: true,
		speed: 300,
		appendArrows: $('.reviews__title .arrows'),
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 561,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


	// Toggle Menu
	$('.menuToggle').on('click', function () {
		$('.nav').toggleClass("active");
		$('.nav').slideToggle({
			duration: 200,
			start: function () {
				jQuery(this).css('display', 'flex');
			}
		});
		if ($('.nav').hasClass('active')) {
			$(this).find('.menuToggle_text').text('скрыть меню')
		} else {
			$(this).find('.menuToggle_text').text('Меню')
		}
	})

	//rating

	$.fn.raty.defaults.path = 'img';
	$.fn.raty.defaults.targetKeep = true;
	$.fn.raty.defaults.targetType = 'number';
	$.fn.raty.defaults.hints = ['Плохо', 'Нормально', 'Средне', 'Хорошо', 'Отлично'];
	$.fn.raty.defaults.noRatedMsg = 'Не оценили!';
	$.fn.raty.defaults.cancelHint = 'Убрать рейтинг!';


	$('.raty-icons').raty({
		'click': function (score, evt) {
			productRatio(score, $(this).attr('data-target'));
			$(this).raty('readOnly', true);
		}, 'readOnly': false, 'score': '0', 'target': '.rates'
	});
	$('.rates').hide();


})