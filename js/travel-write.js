document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       사진 업로드
    ========================================================= */

    const imageInput = document.querySelector("#travel-images");
    const photoPreview = document.querySelector(".photo-preview");

    let selectedFiles = [];


    if (imageInput && photoPreview) {

        imageInput.addEventListener("change", function () {

            const files = Array.from(imageInput.files);

            if (selectedFiles.length + files.length > 10) {
                alert("사진은 최대 10장까지 첨부할 수 있습니다.");
                return;
            }

            selectedFiles = selectedFiles.concat(files);

            renderPhotoPreview();

        });


        function renderPhotoPreview() {

            photoPreview.innerHTML = "";


            selectedFiles.forEach(function (file, index) {

                const item = document.createElement("div");

                item.className = "preview-item";


                const img = document.createElement("img");

                img.src = URL.createObjectURL(file);

                img.alt = "여행 사진 " + (index + 1);


                item.appendChild(img);

                photoPreview.appendChild(item);

            });


            const emptyCount =
                Math.max(0, 7 - selectedFiles.length);


            for (let i = 0; i < emptyCount; i++) {

                const emptyItem =
                    document.createElement("div");

                emptyItem.className =
                    "preview-item empty";


                const plus =
                    document.createElement("span");

                plus.textContent = "+";


                emptyItem.appendChild(plus);

                photoPreview.appendChild(emptyItem);

            }

        }

    }


    /* =========================================================
       여행 기간
       하나의 캘린더에서 시작일 → 종료일 선택
    ========================================================= */

    const dateBox =
        document.querySelector("#travel-date-box");

    const dateInput =
        document.querySelector("#travel-date");

    const calendar =
        document.querySelector("#range-calendar");

    const calendarTitle =
        document.querySelector(".calendar-title");

    const calendarDays =
        document.querySelector(".calendar-days");

    const prevButton =
        document.querySelector(".calendar-prev");

    const nextButton =
        document.querySelector(".calendar-next");

    const startInput =
        document.querySelector("#travel-start");

    const endInput =
        document.querySelector("#travel-end");


    let startDate = null;
    let endDate = null;

    let currentDate = new Date();

    currentDate.setDate(1);


    if (
        dateBox &&
        dateInput &&
        calendar &&
        calendarTitle &&
        calendarDays &&
        prevButton &&
        nextButton &&
        startInput &&
        endInput
    ) {


        /* =====================================================
           날짜를 YYYY-MM-DD 형식으로 변환
        ===================================================== */

        function formatDate(date) {

            const year =
                date.getFullYear();

            const month =
                String(
                    date.getMonth() + 1
                ).padStart(2, "0");

            const day =
                String(
                    date.getDate()
                ).padStart(2, "0");


            return `${year}-${month}-${day}`;

        }


        /* =====================================================
           화면에 표시할 날짜
           YYYY.MM.DD
        ===================================================== */

        function formatDisplayDate(date) {

            if (!date) {
                return "";
            }


            const year =
                date.getFullYear();

            const month =
                String(
                    date.getMonth() + 1
                ).padStart(2, "0");

            const day =
                String(
                    date.getDate()
                ).padStart(2, "0");


            return `${year}.${month}.${day}`;

        }


        /* =====================================================
           날짜 비교
        ===================================================== */

        function isSameDate(date1, date2) {

            if (!date1 || !date2) {
                return false;
            }


            return (
                date1.getFullYear() ===
                date2.getFullYear() &&

                date1.getMonth() ===
                date2.getMonth() &&

                date1.getDate() ===
                date2.getDate()
            );

        }


        /* =====================================================
           날짜 복사
        ===================================================== */

        function cloneDate(date) {

            return new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate()
            );

        }


        /* =====================================================
           캘린더 날짜 생성
        ===================================================== */

        function renderCalendar() {

            const year =
                currentDate.getFullYear();

            const month =
                currentDate.getMonth();


            /* 현재 년 / 월 표시 */

            calendarTitle.textContent =
                `${year}년 ${month + 1}월`;


            /* 기존 날짜 삭제 */

            calendarDays.innerHTML = "";


            /* 이번 달 1일의 요일 */

            const firstDay =
                new Date(
                    year,
                    month,
                    1
                ).getDay();


            /* 이번 달 마지막 날짜 */

            const lastDate =
                new Date(
                    year,
                    month + 1,
                    0
                ).getDate();


            /* 이전 달 마지막 날짜 */

            const previousLastDate =
                new Date(
                    year,
                    month,
                    0
                ).getDate();


            /*
                6주 × 7일
                총 42개의 날짜 칸
            */

            for (let i = 0; i < 42; i++) {

                let date;
                let day;
                let otherMonth = false;


                /* =================================================
                   이전 달
                ================================================= */

                if (i < firstDay) {

                    day =
                        previousLastDate -
                        firstDay +
                        i +
                        1;


                    date =
                        new Date(
                            year,
                            month - 1,
                            day
                        );


                    otherMonth = true;

                }


                /* =================================================
                   다음 달
                ================================================= */

                else if (
                    i >=
                    firstDay + lastDate
                ) {

                    day =
                        i -
                        firstDay -
                        lastDate +
                        1;


                    date =
                        new Date(
                            year,
                            month + 1,
                            day
                        );


                    otherMonth = true;

                }


                /* =================================================
                   현재 달
                ================================================= */

                else {

                    day =
                        i -
                        firstDay +
                        1;


                    date =
                        new Date(
                            year,
                            month,
                            day
                        );

                }


                /* 날짜 버튼 */

                const button =
                    document.createElement("button");

                button.type = "button";

                button.textContent = day;


                /* 이전 / 다음 달 */

                if (otherMonth) {

                    button.classList.add(
                        "other-month"
                    );

                }


                /* =================================================
                   오늘 날짜
                ================================================= */

                const today = new Date();

                if (isSameDate(date, today)) {

                    button.classList.add(
                        "today"
                    );

                }


                /* =================================================
                   선택한 기간 안쪽
                ================================================= */

                if (
                    startDate &&
                    endDate &&
                    date > startDate &&
                    date < endDate
                ) {

                    button.classList.add(
                        "in-range"
                    );

                }


                /* =================================================
                   시작일
                ================================================= */

                if (
                    startDate &&
                    isSameDate(
                        date,
                        startDate
                    )
                ) {

                    button.classList.add(
                        "range-start"
                    );

                }


                /* =================================================
                   종료일
                ================================================= */

                if (
                    endDate &&
                    isSameDate(
                        date,
                        endDate
                    )
                ) {

                    button.classList.add(
                        "range-end"
                    );

                }


                /* =================================================
                   날짜 클릭
                ================================================= */

                button.addEventListener(
                    "click",
                    function () {


                        /* =========================================
                           첫 번째 클릭
                           → 시작일 선택
                        ========================================= */

                        if (
                            !startDate ||
                            endDate
                        ) {

                            startDate =
                                cloneDate(date);

                            endDate = null;


                            /* 시작일 저장 */

                            startInput.value =
                                formatDate(
                                    startDate
                                );


                            /* 종료일 초기화 */

                            endInput.value = "";


                            /* 화면 표시 */

                            dateInput.value =
                                `${formatDisplayDate(startDate)} ~`;


                            /*
                                시작일을 선택한 달로
                                캘린더 이동
                            */

                            currentDate =
                                new Date(
                                    startDate.getFullYear(),
                                    startDate.getMonth(),
                                    1
                                );


                            renderCalendar();

                            return;

                        }


                        /* =========================================
                           두 번째 클릭
                           → 종료일 선택
                        ========================================= */


                        /*
                            종료일을 시작일보다
                            이전 날짜로 선택한 경우

                            자동으로 순서를 변경
                        */

                        if (date < startDate) {

                            endDate =
                                cloneDate(
                                    startDate
                                );


                            startDate =
                                cloneDate(
                                    date
                                );

                        } else {

                            endDate =
                                cloneDate(
                                    date
                                );

                        }


                        /* 시작일 저장 */

                        startInput.value =
                            formatDate(
                                startDate
                            );


                        /* 종료일 저장 */

                        endInput.value =
                            formatDate(
                                endDate
                            );


                        /* 화면 표시 */

                        dateInput.value =
                            `${formatDisplayDate(startDate)} ~ ${formatDisplayDate(endDate)}`;


                        /* 달력 갱신 */

                        renderCalendar();


                        /*
                            시작일 + 종료일
                            모두 선택했으면
                            캘린더 닫기
                        */

                        setTimeout(
                            function () {

                                calendar.classList.remove(
                                    "show"
                                );

                            },
                            150
                        );

                    }
                );


                /* 날짜 버튼 추가 */

                calendarDays.appendChild(
                    button
                );

            }

        }


        /* =====================================================
           캘린더 열기
        ===================================================== */

        dateBox.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();


                calendar.classList.toggle(
                    "show"
                );


                renderCalendar();

            }
        );


        /* =====================================================
           캘린더 내부 클릭
           → 바깥 클릭으로 닫히지 않게
        ===================================================== */

        calendar.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

            }
        );


        /* =====================================================
           이전 달
        ===================================================== */

        prevButton.addEventListener(
            "click",
            function () {

                currentDate.setMonth(
                    currentDate.getMonth() - 1
                );


                renderCalendar();

            }
        );


        /* =====================================================
           다음 달
        ===================================================== */

        nextButton.addEventListener(
            "click",
            function () {

                currentDate.setMonth(
                    currentDate.getMonth() + 1
                );


                renderCalendar();

            }
        );


        /* =====================================================
           캘린더 바깥 클릭
        ===================================================== */

        document.addEventListener(
            "click",
            function () {

                calendar.classList.remove(
                    "show"
                );

            }
        );


        /* 처음 캘린더 출력 */

        renderCalendar();

    }


    /* =========================================================
       태그
    ========================================================= */

    const tagInput =
        document.querySelector("#travel-tag");

    const tagList =
        document.querySelector(".tag-list");


    if (tagInput && tagList) {

        const tagButtons =
            tagList.querySelectorAll("button");


        /* 기본 태그 클릭 */

        tagButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        button.classList.toggle(
                            "active"
                        );

                    }
                );

            }
        );


        /* 직접 태그 입력 */

        tagInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key !== "Enter") {
                    return;
                }


                event.preventDefault();


                const value =
                    tagInput.value.trim();


                if (value === "") {
                    return;
                }


                let tagText =
                    value;


                /* # 없으면 자동으로 추가 */

                if (
                    !tagText.startsWith("#")
                ) {

                    tagText =
                        "#" + tagText;

                }


                /* 기존 태그 확인 */

                const existingTags =
                    Array.from(
                        tagList.querySelectorAll(
                            "button"
                        )
                    ).map(
                        function (button) {

                            return button.textContent.trim();

                        }
                    );


                /* 이미 있는 태그 */

                if (
                    existingTags.includes(
                        tagText
                    )
                ) {

                    tagInput.value = "";

                    return;

                }


                /* 새로운 태그 버튼 생성 */

                const tagButton =
                    document.createElement(
                        "button"
                    );


                tagButton.type = "button";

                tagButton.textContent =
                    tagText;


                tagList.appendChild(
                    tagButton
                );


                tagInput.value = "";


                /* 새 태그 클릭 */

                tagButton.addEventListener(
                    "click",
                    function () {

                        tagButton.classList.toggle(
                            "active"
                        );

                    }
                );

            }
        );

    }


    /* =========================================================
       필수 입력 확인
    ========================================================= */

    const titleInput =
        document.querySelector("#travel-title");

    const placeInput =
        document.querySelector("#travel-place");

    const storyInput =
        document.querySelector("#travel-story");


    function validateTravelForm() {


        /* -----------------------------------------------------
           제목
        ----------------------------------------------------- */

        if (
            !titleInput ||
            titleInput.value.trim() === ""
        ) {

            alert(
                "여행기 제목을 입력해 주세요."
            );


            if (titleInput) {

                titleInput.focus();

            }


            return false;

        }


        /* -----------------------------------------------------
           여행지
        ----------------------------------------------------- */

        if (
            !placeInput ||
            placeInput.value.trim() === ""
        ) {

            alert(
                "여행지를 입력해 주세요."
            );


            if (placeInput) {

                placeInput.focus();

            }


            return false;

        }


        /* -----------------------------------------------------
           시작일
        ----------------------------------------------------- */

        if (
            !startInput ||
            startInput.value === ""
        ) {

            alert(
                "여행 시작일을 선택해 주세요."
            );


            if (dateInput) {

                dateInput.focus();

            }


            return false;

        }


        /* -----------------------------------------------------
           종료일
        ----------------------------------------------------- */

        if (
            !endInput ||
            endInput.value === ""
        ) {

            alert(
                "여행 종료일을 선택해 주세요."
            );


            if (dateInput) {

                dateInput.focus();

            }


            return false;

        }


        /* -----------------------------------------------------
           여행 이야기
        ----------------------------------------------------- */

        if (
            !storyInput ||
            storyInput.value.trim() === ""
        ) {

            alert(
                "여행 이야기를 입력해 주세요."
            );


            if (storyInput) {

                storyInput.focus();

            }


            return false;

        }


        return true;

    }


    /* =========================================================
       작성하기
    ========================================================= */

    const submitButton =
        document.querySelector(".submit-btn");


    if (submitButton) {

        submitButton.addEventListener(
            "click",
            function (event) {

                if (
                    !validateTravelForm()
                ) {

                    event.preventDefault();

                    return;

                }

            }
        );

    }


    /* =========================================================
       취소
    ========================================================= */

    const cancelButton =
        document.querySelector(".cancel-btn");


    if (cancelButton) {

        cancelButton.addEventListener(
            "click",
            function () {

                const result =
                    confirm(
                        "작성 중인 내용이 사라집니다.\n정말 취소하시겠어요?"
                    );


                if (result) {

                    window.location.href =
                        "travel-record.html";

                }

            }
        );

    }


    /* =========================================================
       드래그 앤 드롭
    ========================================================= */

    const photoUpload =
        document.querySelector(".photo-upload");


    if (
        photoUpload &&
        imageInput
    ) {


        /* 드래그 시작 */

        photoUpload.addEventListener(
            "dragover",
            function (event) {

                event.preventDefault();


                photoUpload.classList.add(
                    "dragover"
                );

            }
        );


        /* 드래그 영역 밖으로 이동 */

        photoUpload.addEventListener(
            "dragleave",
            function () {

                photoUpload.classList.remove(
                    "dragover"
                );

            }
        );


        /* 파일 드롭 */

        photoUpload.addEventListener(
            "drop",
            function (event) {

                event.preventDefault();


                photoUpload.classList.remove(
                    "dragover"
                );


                const files =
                    Array.from(
                        event.dataTransfer.files
                    ).filter(
                        function (file) {

                            return file.type.startsWith(
                                "image/"
                            );

                        }
                    );


                if (files.length === 0) {

                    return;

                }


                /* 최대 10장 */

                if (
                    selectedFiles.length +
                    files.length >
                    10
                ) {

                    alert(
                        "사진은 최대 10장까지 첨부할 수 있습니다."
                    );

                    return;

                }


                selectedFiles =
                    selectedFiles.concat(
                        files
                    );


                renderPhotoPreview();

            }
        );

    }

});