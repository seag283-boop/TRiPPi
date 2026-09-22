document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       FILTER TAB
    ========================================================= */
    /* =========================================================
       FILTER TAB
    ========================================================= */

    const tabs = document.querySelectorAll(".record-tab button");
    const cards = document.querySelectorAll(".record-card");

    tabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            const filter = tab.textContent.trim();


            /* =========================================
               나의 여행기 → travel-write-my.html 이동
            ========================================= */

            if (filter === "나의 여행기") {

                window.location.href = "travel-write-my.html";

                return;

            }


            /* =========================================
               탭 active 변경
            ========================================= */

            tabs.forEach(function (item) {
                item.classList.remove("active");
            });

            tab.classList.add("active");


            /* =========================================
               전체
            ========================================= */

            if (filter === "전체") {

                cards.forEach(function (card) {
                    card.style.display = "";
                });

                return;

            }


            /* =========================================
               국내
            ========================================= */

            if (filter === "국내") {

                cards.forEach(function (card) {

                    const title =
                        card.querySelector("h3")?.textContent.trim() || "";

                    if (
                        title.includes("부산") ||
                        title.includes("강릉")
                    ) {

                        card.style.display = "";

                    } else {

                        card.style.display = "none";

                    }

                });

                return;

            }


            /* =========================================
               해외
            ========================================= */

            if (filter === "해외") {

                cards.forEach(function (card) {

                    const title =
                        card.querySelector("h3")?.textContent.trim() || "";

                    if (
                        title.includes("교토") ||
                        title.includes("다낭")
                    ) {

                        card.style.display = "";

                    } else {

                        card.style.display = "none";

                    }

                });

                return;

            }


            /* =========================================
               북마크한 여행기
            ========================================= */

            if (filter === "북마크한 여행기") {

                cards.forEach(function (card) {

                    const bookmark =
                        card.querySelector(".record-bookmark");

                    if (
                        bookmark &&
                        bookmark.classList.contains("active")
                    ) {

                        card.style.display = "";

                    } else {

                        card.style.display = "none";

                    }

                });

            }

        });

    });


    /* =========================================================
       여행기 작성하기
    ========================================================= */

    const writeButtons =
        document.querySelectorAll(".record-write-btn");


    writeButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            /*
             * a 태그가 안쪽에 있기 때문에
             * 링크 이동은 기본 동작으로 처리
             */
            const link = button.querySelector("a");

            if (link) {
                return;
            }

            window.location.href = "travel-write.html";

        });

    });



    /* =========================================================
       좋아요
    ========================================================= */

    const likeButtons =
        document.querySelectorAll(".record-like");


    likeButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();


            const count =
                button.querySelector("span");


            if (!count) {
                return;
            }


            let number =
                parseInt(count.textContent) || 0;


            /* 이미 좋아요한 상태 */
            if (button.classList.contains("active")) {

                number--;

                button.classList.remove("active");

            }


            /* 좋아요 */
            else {

                number++;

                button.classList.add("active");

            }


            count.textContent = number;

        });

    });



    /* =========================================================
       카드 위쪽 찜 버튼
    ========================================================= */

    const bookmarkButtons =
        document.querySelectorAll(".record-bookmark");


    bookmarkButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            button.classList.toggle("active");

        });

    });



    /* =========================================================
       아래쪽 북마크 버튼
    ========================================================= */

    const saveButtons =
        document.querySelectorAll(".record-save");


    saveButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            button.classList.toggle("active");

        });

    });



    /* =========================================================
       전체보기
    ========================================================= */

    const moreButton =
        document.querySelector(".record-more");


    if (moreButton) {

        moreButton.addEventListener("click", function (event) {

            event.preventDefault();

            window.location.href = "travel-record.html";

        });

    }

});