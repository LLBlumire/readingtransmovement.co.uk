function quick_scroll() {
    document.querySelector('[data-quick-scroll-target]').scrollIntoView(true);
}

window.quick_scroll = quick_scroll;
