// // .slider-product scripts goes here
//
// $(function () {
//   // Горизонтальный слайдер товара
//   if ($('.js-slider-product').length) {
//     $('.js-slider-product').slick({
//       mobileFirst: true,
//       dots: false,
//       arrows: false,
//       speed: 300,
//       slidesToShow: 2,
//       centerPadding: '0',
//       centerMode: true,
//
//       responsive: [
//         {
//           breakpoint: 991,
//           settings: {
//             slidesToShow: 4,
//             arrows: true,
//             rows: 1,
//             centerPadding: '32px' // ширина выступающей картинки (20px) + половина отступа между слайдами (12px)
//           }
//         },
//           {
//               breakpoint: 767,
//               settings: {
//                   rows: 2,
//                   slidesToShow: 4,
//                   arrows: true,
//                   centerPadding: '32px' // ширина выступающей картинки (20px) + половина отступа между слайдами (12px)
//               }
//           },
//         {
//           breakpoint: 1199,
//           settings: {
//             slidesToShow: 4,
//             arrows: true,
//             centerPadding: '59px',
//             rows: 1
//           }
//         },
//         {
//           breakpoint: 1799,
//           settings: {
//             slidesToShow: 5,
//             arrows: true,
//             centerPadding: '120px' // ширина выступающей картинки (100px) + половина отступа между слайдами (20px)
//           }
//         },
//
//       ]
//     });
//   }
// });