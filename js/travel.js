document.addEventListener("DOMContentLoaded", function () {

    const cardList = document.querySelector(".travel-card-list");
    const cards = Array.from(document.querySelectorAll(".travel-card"));

    const searchForm = document.querySelector(".travel-search form");
    const searchInput = document.querySelector("#travel-search");

    const destinationMenu =
        document.querySelectorAll(".destinatin-menu li");

    const themeCheckboxes =
        document.querySelectorAll('.theme-list input[name="theme"]');

    const tabButtons =
        document.querySelectorAll(".travel-tab button");


    /* ==================================================
       16개 카드 데이터
    ================================================== */

    const cardData = [

        // 01 제주도
        {
            name: "제주도",
            country: "한국",
            type: "국내",
            themes: ["nature", "food", "photo"],
            popularity: 90,
            date: 16
        },

        // 02 부산
        {
            name: "부산",
            country: "한국",
            type: "국내",
            themes: ["city", "food", "photo", "friend"],
            popularity: 85,
            date: 15
        },

        // 03 경주
        {
            name: "경주",
            country: "한국",
            type: "국내",
            themes: ["history", "photo", "family"],
            popularity: 78,
            date: 14
        },

        // 04 파리
        {
            name: "파리",
            country: "프랑스",
            type: "해외",
            themes: ["city", "photo", "couple"],
            popularity: 95,
            date: 13
        },

        // 05 산토리니
        {
            name: "산토리니",
            country: "그리스",
            type: "해외",
            themes: ["resort", "photo", "couple"],
            popularity: 92,
            date: 12
        },

        // 06 도쿄
        {
            name: "도쿄",
            country: "일본",
            type: "해외",
            themes: ["city", "food", "photo", "friend"],
            popularity: 88,
            date: 11
        },

        // 07 발리
        {
            name: "발리",
            country: "인도네시아",
            type: "해외",
            themes: ["nature", "resort", "couple"],
            popularity: 94,
            date: 10
        },

        // 08 뉴욕
        {
            name: "뉴욕",
            country: "미국",
            type: "해외",
            themes: ["city", "photo", "friend"],
            popularity: 91,
            date: 9
        },

        // 09 강릉
        {
            name: "강릉",
            country: "한국",
            type: "국내",
            themes: ["nature", "photo", "friend"],
            popularity: 82,
            date: 8
        },

        // 10 전주
        {
            name: "전주",
            country: "한국",
            type: "국내",
            themes: ["history", "food", "city", "family"],
            popularity: 80,
            date: 7
        },

        // 11 여수
        {
            name: "여수",
            country: "한국",
            type: "국내",
            themes: ["nature", "photo", "couple"],
            popularity: 84,
            date: 6
        },

        // 12 후쿠오카
        {
            name: "후쿠오카",
            country: "일본",
            type: "해외",
            themes: ["food", "city", "friend"],
            popularity: 87,
            date: 5
        },

        // 13 홍콩
        {
            name: "홍콩",
            country: "홍콩",
            type: "해외",
            themes: ["city", "food", "photo"],
            popularity: 86,
            date: 4
        },

        // 14 괌
        {
            name: "괌",
            country: "괌",
            type: "해외",
            themes: ["resort", "nature", "family", "couple"],
            popularity: 89,
            date: 3
        },

        // 15 런던
        {
            name: "런던",
            country: "영국",
            type: "해외",
            themes: ["city", "culture", "photo"],
            popularity: 83,
            date: 2
        },

        // 16 로마
        {
            name: "로마",
            country: "이탈리아",
            type: "해외",
            themes: ["history", "city", "photo", "couple"],
            popularity: 81,
            date: 1
        }
    ];


    /* ==================================================
       현재 필터 상태
    ================================================== */

    let currentDestination = "전체";
    let currentSort = "전체";


    /* ==================================================
       카드 필터링
    ================================================== */

    function filterCards() {

        const keyword =
            searchInput.value.trim().toLowerCase();


        // 체크된 테마 가져오기
        const checkedThemes =
            Array.from(themeCheckboxes)
                .filter(function (checkbox) {
                    return checkbox.checked;
                })
                .map(function (checkbox) {
                    return checkbox.value;
                });


        cards.forEach(function (card, index) {

            const data = cardData[index];

            if (!data) return;


            /* 검색 */

            const searchMatch =
                keyword === "" ||
                data.name.toLowerCase().includes(keyword) ||
                data.country.toLowerCase().includes(keyword);


            /* 국내 / 해외 */

            const destinationMatch =
                currentDestination === "전체" ||
                data.type === currentDestination;


            /* 테마 */

            const themeMatch =
                checkedThemes.length === 0 ||
                checkedThemes.some(function (theme) {
                    return data.themes.includes(theme);
                });


            /* 최종 결과 */

            const showCard =
                searchMatch &&
                destinationMatch &&
                themeMatch;


            card.style.display =
                showCard ? "" : "none";
        });


        sortCards();
    }


    /* ==================================================
       인기순 / 최신순
    ================================================== */

    function sortCards() {

        let sortedCards = [...cards];


        if (currentSort === "인기순") {

            sortedCards.sort(function (a, b) {

                const indexA = cards.indexOf(a);
                const indexB = cards.indexOf(b);

                return (
                    cardData[indexB].popularity -
                    cardData[indexA].popularity
                );
            });
        }


        if (currentSort === "최신순") {

            sortedCards.sort(function (a, b) {

                const indexA = cards.indexOf(a);
                const indexB = cards.indexOf(b);

                return (
                    cardData[indexB].date -
                    cardData[indexA].date
                );
            });
        }


        sortedCards.forEach(function (card) {
            cardList.appendChild(card);
        });
    }


    /* ==================================================
       검색
    ================================================== */

    searchForm.addEventListener("submit", function (e) {

        e.preventDefault();

        filterCards();
    });


    // 입력하면서 바로 검색
    searchInput.addEventListener("input", function () {

        filterCards();
    });


    /* ==================================================
       왼쪽 전체 / 국내 / 해외
    ================================================== */

    destinationMenu.forEach(function (menu) {

        menu.addEventListener("click", function (e) {

            e.preventDefault();


            // active 변경
            destinationMenu.forEach(function (item) {
                item.classList.remove("active");
            });

            menu.classList.add("active");


            // 선택한 메뉴
            currentDestination =
                menu.querySelector("span")
                    .textContent
                    .trim();


            // 상단 버튼 active도 같이 변경
            tabButtons.forEach(function (button) {

                const buttonText =
                    button.textContent.trim();

                button.classList.toggle(
                    "active",
                    buttonText === currentDestination
                );
            });


            // 정렬 초기화
            if (
                currentDestination === "전체" ||
                currentDestination === "국내" ||
                currentDestination === "해외"
            ) {
                currentSort = "전체";
            }


            filterCards();
        });
    });


    /* ==================================================
       여행 테마
    ================================================== */

    themeCheckboxes.forEach(function (checkbox) {

        checkbox.addEventListener("change", function () {

            filterCards();
        });
    });


    /* ==================================================
       상단 탭
    ================================================== */

    tabButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const buttonText =
                button.textContent.trim();


            /* active 변경 */

            tabButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");


            /* 전체 */

            if (buttonText === "전체") {

                currentDestination = "전체";
                currentSort = "전체";

                destinationMenu.forEach(function (menu) {

                    const text =
                        menu.querySelector("span")
                            .textContent
                            .trim();

                    menu.classList.toggle(
                        "active",
                        text === "전체"
                    );
                });
            }


            /* 국내 */

            else if (buttonText === "국내") {

                currentDestination = "국내";
                currentSort = "전체";

                destinationMenu.forEach(function (menu) {

                    const text =
                        menu.querySelector("span")
                            .textContent
                            .trim();

                    menu.classList.toggle(
                        "active",
                        text === "국내"
                    );
                });
            }


            /* 해외 */

            else if (buttonText === "해외") {

                currentDestination = "해외";
                currentSort = "전체";

                destinationMenu.forEach(function (menu) {

                    const text =
                        menu.querySelector("span")
                            .textContent
                            .trim();

                    menu.classList.toggle(
                        "active",
                        text === "해외"
                    );
                });
            }


            /* 인기순 */

            else if (buttonText === "인기순") {

                currentSort = "인기순";
            }


            /* 최신순 */

            else if (buttonText === "최신순") {

                currentSort = "최신순";
            }


            filterCards();
        });
    });


    /* ==================================================
       처음 페이지 열었을 때
    ================================================== */

    filterCards();


    /* =========================
       찜하기
    ========================= */

    const likeButtons = document.querySelectorAll(".travel-like");

    likeButtons.forEach(function (button) {

        button.addEventListener("click", function (e) {

            e.preventDefault();
            e.stopPropagation();

            button.classList.toggle("active");

        });

    });
});