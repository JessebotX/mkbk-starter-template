const DEFAULT_FONT = 'sans-serif';
const DEFAULT_THEME = 'light';

function main() {

    setupFontFamily();
    setupTheme();

}

function setupFontFamily() {
    let savedFont = localStorage.getItem('font');
    if (!savedFont) {
        savedFont = DEFAULT_FONT;
    }

    const options = document.querySelectorAll('[data-font-option]');

    for (const option of options) {
        const radio = option.querySelector('input[type="radio"]');
        const fontFamily = radio.value;

        option.style.fontFamily = fontFamily;

        if (savedFont === fontFamily) {
            radio.checked = true;
        } else {
            radio.checked = false;
        }

        option.addEventListener('change', () => {
            document.querySelector(':root').style.setProperty('--reader-font', fontFamily);
            localStorage.setItem('font', fontFamily);
        });
    }


    document.querySelector(':root').style.setProperty('--reader-font', savedFont);
}

function setupTheme() {
    let savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
        savedTheme = DEFAULT_THEME;
    }

    const options = document.querySelectorAll('[data-theme-option]');

    for (const option of options) {
        const radio = option.querySelector('input[type="radio"]');
        const theme = radio.value;

        if (theme === savedTheme) {
            radio.checked = true;
        } else {
            radio.checked = false;
        }

        option.addEventListener('change', () => {
            for (const className of document.body.classList) {
                if (className.startsWith('theme-')) {
                    document.body.classList.remove(className);
                }
            }

            document.body.classList.add(`theme-${theme}`);

            localStorage.setItem('theme', theme);
        });
    }

    document.body.classList.add(`theme-${savedTheme}`);
}

main();
