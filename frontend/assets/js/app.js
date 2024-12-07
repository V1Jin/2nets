document.querySelectorAll(".sidebar__switch-button").forEach(btn => {
    btn.onclick = () => {
        let tabID = btn.dataset.tab;

        if (tabID == 1) document.querySelector(".sidebar__switch-thumb").style.left = "0.5rem";
        if (tabID == 2) document.querySelector(".sidebar__switch-thumb").style.left = "calc(50% - 0.5rem)";

        document.querySelector(".sidebar__switch-button.--active").classList.remove("--active");
        btn.classList.add("--active");

        document.querySelector(".sidebar__tabs_wrapper-tab.--active").classList.remove("--active");
        document.querySelector(".sidebar__tabs_wrapper-tab[data-tab='" + tabID + "']").classList.add("--active");
    };
});


document.querySelectorAll(".map__switch-button").forEach(btn => {
    btn.onclick = () => {
        let tabID = btn.dataset.tab;

        if (tabID == 1) document.querySelector(".map__switch-thumb").style.left = "0.5rem";
        if (tabID == 2) document.querySelector(".map__switch-thumb").style.left = "calc(33% + 0.5rem)";
        if (tabID == 3) document.querySelector(".map__switch-thumb").style.left = "calc(66%)";

        document.querySelector(".map__switch-button.--active").classList.remove("--active");
        btn.classList.add("--active");

        document.querySelector(".tabs_wrapper__tab-inner.--active").classList.remove("--active");
        document.querySelector(".tabs_wrapper__tab-inner[data-tab='" + tabID + "']").classList.add("--active");
    };
});