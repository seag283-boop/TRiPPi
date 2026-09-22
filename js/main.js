document.addEventListener("DOMContentLoaded", function () {

    /* ==================================================
       인기 여행지 찜 버튼
    ================================================== */

    const likeButtons = document.querySelectorAll(".travel-card .like-btn");

    likeButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            button.classList.toggle("active");

        });

    });


    /* ==================================================
       카테고리 메뉴
    ================================================== */

    const categoryItems = document.querySelectorAll(".category-item");

    categoryItems.forEach(function (item) {

        item.addEventListener("click", function (event) {

            const link = item.getAttribute("href");

            if (!link || link === "#") {
                event.preventDefault();
            }

        });

    });


    /* ==================================================
       Hero 여행 취향 테스트 버튼
    ================================================== */

    const heroButton = document.querySelector(".hero-btn");

    if (heroButton) {

        heroButton.addEventListener("click", function (event) {

            const link = heroButton.getAttribute("href");

            if (!link || link === "#") {
                event.preventDefault();
            }

        });

    }


    /* ==================================================
       취향 테스트 배너
    ================================================== */

    const testBannerButton = document.querySelector(
        ".test-banner .banner-text a"
    );

    if (testBannerButton) {

        testBannerButton.addEventListener("click", function (event) {

            const link = testBannerButton.getAttribute("href");

            if (!link || link === "#") {
                event.preventDefault();
            }

        });

    }


    /* ==================================================
       여행 기록 배너
    ================================================== */

    const recordBannerButton = document.querySelector(
        ".record-banner .banner-text a"
    );

    if (recordBannerButton) {

        recordBannerButton.addEventListener("click", function (event) {

            const link = recordBannerButton.getAttribute("href");

            if (!link || link === "#") {
                event.preventDefault();
            }

        });

    }


    /* ==================================================
       헤더 검색 버튼
    ================================================== */

    const searchButton = document.querySelector(
        ".header-util .search:nth-child(1)"
    );

    if (searchButton) {

        searchButton.addEventListener("click", function () {

            console.log("검색 버튼 클릭");

        });

    }


    /* ==================================================
       헤더 찜 버튼
    ================================================== */

    const favoriteButton = document.querySelector(
        ".header-util .search:nth-child(2)"
    );

    if (favoriteButton) {

        favoriteButton.addEventListener("click", function () {

            console.log("찜 버튼 클릭");

        });

    }


    /* ==================================================
       헤더 마이페이지 버튼
    ================================================== */

    const mypageButton = document.querySelector(
        ".header-util .search:nth-child(3)"
    );

    if (mypageButton) {

        mypageButton.addEventListener("click", function () {

            console.log("마이페이지 버튼 클릭");

        });

    }


    /* ==================================================
       여행 카드 이미지 오류 확인
    ================================================== */

    const travelImages = document.querySelectorAll(
        ".travel-card .card-image img"
    );

    travelImages.forEach(function (image) {

        image.addEventListener("error", function () {

            console.error(
                "이미지를 불러오지 못했습니다:",
                image.src
            );

        });

    });

});