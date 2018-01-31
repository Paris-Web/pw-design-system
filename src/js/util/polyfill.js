if (!window.performance) {
    window.performance = {}
}
if (!window.performance.now) {
    window.performance.now = () => {
        return new Date().getTime();
    }
}