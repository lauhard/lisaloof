// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// import { initCookieConsent } from './cookieconsent.min';
// export const cc = initCookieConsent();
export const config = {
    current_lang: 'de',
    autoclear_cookies: true,                   // default: false
    cookie_name: 'Cookies',             // default: 'cc_cookie'
    cookie_expiration: 90,                    // default: 182
    page_scripts: true,                         // default: false

    // auto_language: null,                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                           // default: true
    delay: 0,                                // default: 0
    force_consent: true,
    // hide_from_bots: false,                   // default: false
    remove_cookie_tables: false,              // default: false
    // cookie_domain: location.hostname,        // default: current domain
    // cookie_path: "/",                        // default: root
    // cookie_same_site: "Lax",
    // use_rfc_cookie: false,                   // default: false
    // revision: 0,                             // default: 0

    gui_options: {
        consent_modal: {
            layout: 'box',                      // box,cloud,bar
            position: 'bottom',           // bottom,middle,top + left,right,center
            transition: 'zoom'                 // zoom,slide
        },
        settings_modal: {
            layout: 'box',                      // box,bar
            position: 'left',                     // right,left (available only if bar layout selected)
            transition: 'zoom'                 // zoom,slide
        }
    },

    onFirstAction: function () {
        console.log('first call');
    },

  
    onAccept: function (cookie) {
        console.log(cookie);
    },

  
    onChange: function (cookie, changed_preferences) {
        console.log(cookie);
        console.log(changed_preferences);
    },

    languages: {
        'de': {
            consent_modal: {
                title: '🍪 Wir verwenden Cookies!',
                description: 'Hallo, diese Website verwendet essentielle Cookies, um ihren ordnungsgemäßen Betrieb zu gewährleisten, und Tracking-Cookies, um zu verstehen, wie Sie mit ihr interagieren. Letztere werden nur nach Zustimmung gesetzt. \u003cbutton type=\"button\" data-cc=\"c-settings\" class=\"cc-link\"\u003eDienste auswählen\u003c/button\u003e',
                primary_btn: {
                    text: 'Alle akzeptieren',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Alle ablehnen',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: '🍪',
                save_settings_btn: 'Einstellungen speichern',
                accept_all_btn: 'Alle akzeptieren',
                reject_all_btn: 'Alle ablehnen',
                close_btn_label: 'Schließen',
                cookie_table_headers: [
                    { col1: 'Name' },
                    { col2: 'Beschreibung' },
                    { col3: 'Domain' },
                    { col4: 'Ablaufzeit' }
                ],
                blocks: [
                    {
                        title: 'Google Analytics',
                        description: 'Wir verwenden Tracking-Cookies, um unsere Website stetig zu verbessern sowie für anonymisierte Nutzungsstatistiken.',
                        toggle: {
                            value: 'Funktional',
                            enabled: true,
                            readonly: false,
                        },
                        cookie_table: [
                            {
                                col1: 'test',
                                col2: 'test',
                                col3: 'https://www.google-analytics.com/analytics.js',
                                col4: '30',
                                is_regex: true
                            },

                        ]
                    },

                ]
            }
        }
    }
}
// var cookie = '🍪';

// run plugin with config object
