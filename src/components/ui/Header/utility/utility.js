export const navManager = (currentPath,value,navigationHandler,popupHandler) => {
    if (currentPath === '/' && value !== 0) {
        navigationHandler(0)
    } else if (currentPath === '/customSoftware' || currentPath === '/services' || currentPath === '/mobileApps' || currentPath === '/websites' && value !== 1) {
        navigationHandler(1)
    } else if (currentPath === '/revolution' && value !== 2) {
        navigationHandler(2)
    } else if (currentPath === '/about' && value !== 3) {
        navigationHandler(3)
    } else if (currentPath === '/contactus' && value !== 4) {
        navigationHandler(4)
    } else if (currentPath === '/estimate' && value !== 5) {
        navigationHandler(5)
    }

    if (value === 1) {
        if (currentPath === '/services') {
            popupHandler(0);
        } else if (currentPath === '/customSoftware') {
            popupHandler(1);
        } else if (currentPath === '/mobileApps') {
            popupHandler(2);
        } else if (currentPath === '/websites') {
            popupHandler(3);
        }
    }
}